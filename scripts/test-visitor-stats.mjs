/**
 * Local validation for the privacy-safe visitor statistics feature.
 *
 * Usage (against a running dev or preview server):
 *   node scripts/test-visitor-stats.mjs
 *   SITE_URL=http://localhost:8788/ node scripts/test-visitor-stats.mjs
 *
 * The admin token is read from `.dev.vars` (git-ignored) or the
 * VISITOR_STATS_TOKEN environment variable. No secret is stored in this file.
 */

import { readFileSync } from 'node:fs';

import { formatTaipeiParts, taipeiDayStartUtcIso } from '../app/lib/taipei-time.ts';
import { shouldCountVisit, visitSessionWindowMs } from '../app/lib/visit-session.ts';

const siteUrl = new URL(process.env.SITE_URL ?? 'http://localhost:3000/');
const results = [];

function record(name, passed, detail = '') {
  results.push({ name, passed, detail });
  console.log(`${passed ? 'PASS' : 'FAIL'}  ${name}${detail ? ` — ${detail}` : ''}`);
}

function check(name, condition, detail = '') {
  record(name, Boolean(condition), detail);
}

function readAdminToken() {
  if (process.env.VISITOR_STATS_TOKEN) return process.env.VISITOR_STATS_TOKEN;
  try {
    const match = /^VISITOR_STATS_TOKEN=(.*)$/m.exec(readFileSync('.dev.vars', 'utf8'));
    return match ? match[1].trim() : null;
  } catch {
    return null;
  }
}

function api(path, init) {
  return fetch(new URL(path, siteUrl), { ...init, redirect: 'manual' });
}

async function jsonOf(response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------- unit tests

const now = Date.UTC(2026, 7, 23, 3, 0, 0);

check('30-MINUTE DEDUP: first visit counts', shouldCountVisit(null, now) === true);
check('30-MINUTE DEDUP: immediate refresh does not count', shouldCountVisit(String(now - 1_000), now) === false);
check('30-MINUTE DEDUP: 29 minutes does not count', shouldCountVisit(String(now - 29 * 60_000), now) === false);
check('30-MINUTE DEDUP: exactly 30 minutes counts', shouldCountVisit(String(now - visitSessionWindowMs), now) === true);
check('30-MINUTE DEDUP: 31 minutes counts', shouldCountVisit(String(now - 31 * 60_000), now) === true);
check('30-MINUTE DEDUP: corrupted value counts once', shouldCountVisit('not-a-number', now) === true);
check('30-MINUTE DEDUP: future timestamp counts once', shouldCountVisit(String(now + 60_000), now) === true);

const taipei = formatTaipeiParts('2026-08-22T19:18:42.123Z');
check(
  'TAIPEI DISPLAY: UTC 2026-08-22T19:18:42Z renders as 2026/08/23 03:18:42',
  taipei.date === '2026/08/23' && taipei.time === '03:18:42',
  `${taipei.date} ${taipei.time}`,
);
check('TAIPEI DISPLAY: invalid timestamp degrades safely', formatTaipeiParts('nope').date === '—');

const dayStart = taipeiDayStartUtcIso(0, Date.UTC(2026, 7, 23, 3, 0, 0));
check(
  'TAIPEI DAY BOUNDARY: today starts at 16:00Z the previous day',
  dayStart === '2026-08-22T16:00:00.000Z',
  dayStart,
);

// --------------------------------------------------------- integration tests

const homepage = await api('/');
check('SITE: homepage loads', homepage.ok, `status ${homepage.status}`);

const homepageHtml = homepage.ok ? await homepage.text() : '';
check('SITE: admin page is not linked from the public site', !homepageHtml.includes('/admin/visits'));

const before = await jsonOf(await api('/api/visit/count'));
check('PUBLIC COUNT API: returns a numeric total', typeof before?.total === 'number', JSON.stringify(before));
check(
  'PUBLIC LOG EXPOSURE: count response carries only a total',
  before !== null && Object.keys(before).join(',') === 'total',
  JSON.stringify(before),
);

const insert = await api('/api/visit', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  // `visitedAtUtc` and `ip` must be ignored: the server timestamps every row itself.
  body: JSON.stringify({ path: '/?utm_source=test#frag', visitedAtUtc: '1999-01-01T00:00:00.000Z', ip: '203.0.113.9' }),
});
const inserted = await jsonOf(insert);
check('VISITOR INSERT: POST /api/visit succeeds', insert.ok && inserted?.ok === true, `status ${insert.status}`);
check(
  'TOTAL COUNT: total increments by exactly one',
  typeof inserted?.total === 'number' && inserted.total === (before?.total ?? 0) + 1,
  `${before?.total} → ${inserted?.total}`,
);

const after = await jsonOf(await api('/api/visit/count'));
check('PUBLIC COUNT API: reflects the new visit', after?.total === inserted?.total, JSON.stringify(after));

const getVisit = await api('/api/visit');
check(
  'PUBLIC LOG EXPOSURE: GET /api/visit is rejected',
  getVisit.status === 404 || getVisit.status === 405,
  `status ${getVisit.status}`,
);

const noAuth = await api('/api/admin/visits');
const noAuthBody = await jsonOf(noAuth);
check('ADMIN AUTH: missing token is rejected', noAuth.status === 401 || noAuth.status === 403, `status ${noAuth.status}`);
check(
  'UNAUTHORIZED ACCESS: no visit data in the rejection body',
  noAuthBody !== null && !('events' in noAuthBody) && !('summary' in noAuthBody),
  JSON.stringify(noAuthBody),
);

const badAuth = await api('/api/admin/visits', { headers: { authorization: 'Bearer definitely-not-the-token' } });
check('ADMIN AUTH: wrong token is rejected', badAuth.status === 401 || badAuth.status === 403, `status ${badAuth.status}`);

const queryStringAuth = await api(`/api/admin/visits?token=${encodeURIComponent(readAdminToken() ?? '')}`);
check(
  'ADMIN AUTH: query-string token is not accepted',
  queryStringAuth.status === 401 || queryStringAuth.status === 403,
  `status ${queryStringAuth.status}`,
);

const token = readAdminToken();
if (!token) {
  record('ADMIN AUTH: authorized request', false, 'no VISITOR_STATS_TOKEN found in .dev.vars or the environment');
} else {
  const authed = await api('/api/admin/visits?limit=25', { headers: { authorization: `Bearer ${token}` } });
  const payload = await jsonOf(authed);
  check('ADMIN AUTH: valid token is accepted', authed.ok, `status ${authed.status}`);
  check('ADMIN LOG: summary is present', typeof payload?.summary?.total === 'number', JSON.stringify(payload?.summary));
  check('TODAY COUNT: present and at least the visit just inserted', (payload?.summary?.today ?? 0) >= 1);
  check('7-DAY COUNT: at least today', (payload?.summary?.last7Days ?? 0) >= (payload?.summary?.today ?? 0));
  check('30-DAY COUNT: at least the 7-day count', (payload?.summary?.last30Days ?? 0) >= (payload?.summary?.last7Days ?? 0));
  check('ADMIN LOG: page size honoured', payload?.limit === 25, `limit ${payload?.limit}`);

  const events = payload?.events ?? [];
  check('ADMIN LOG: recent events returned', events.length > 0, `${events.length} rows`);

  const newest = events[0];
  check(
    'UTC STORAGE: timestamps are stored as UTC ISO-8601',
    typeof newest?.visitedAtUtc === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(newest.visitedAtUtc),
    newest?.visitedAtUtc,
  );
  check(
    'VISITOR INSERT: server clock is used, client-supplied time ignored',
    Math.abs(Date.parse(newest?.visitedAtUtc ?? 0) - Date.now()) < 120_000,
    newest?.visitedAtUtc,
  );
  check(
    'VISITOR INSERT: query string and fragment stripped from the stored path',
    newest?.path === '/',
    newest?.path,
  );
  check(
    'ADMIN LOG: newest first',
    events.every((event, index) => index === 0 || events[index - 1].visitedAtUtc >= event.visitedAtUtc),
  );

  const fieldNames = new Set(events.flatMap((event) => Object.keys(event)));
  check(
    'PERSONAL DATA STORED: none returned by the admin API',
    [...fieldNames].every((field) => ['id', 'visitedAtUtc', 'path'].includes(field)),
    [...fieldNames].join(','),
  );
  check(
    'ADMIN LOG: pagination offset works',
    (await jsonOf(await api('/api/admin/visits?limit=25&offset=25', { headers: { authorization: `Bearer ${token}` } })))
      ?.offset === 25,
  );
}

// ------------------------------------------------------------------- summary

const failed = results.filter((result) => !result.passed);
console.log(`\n${results.length - failed.length}/${results.length} checks passed.`);

if (failed.length > 0) {
  console.error('\nFailed checks:');
  for (const failure of failed) console.error(`- ${failure.name}${failure.detail ? ` (${failure.detail})` : ''}`);
  process.exit(1);
}
