/**
 * POST /api/visit -- record one visit.
 *
 * The client decides *whether* a visit is due (30-minute session rule) but never
 * supplies the time: the timestamp is always taken from the server clock. Only a
 * sanitised pathname is accepted from the request body.
 *
 * Any other HTTP method falls through to the framework's 405 handling, so this
 * route can never be used to read the visit log.
 */

import {
  getTotalVisits,
  getVisitorDb,
  insertRateLimited,
  normalizeVisitPath,
  recordVisit,
} from '@/app/lib/visitor-stats';

export const dynamic = 'force-dynamic';

function json(body: unknown, status: number) {
  return Response.json(body, {
    status,
    headers: { 'cache-control': 'no-store' },
  });
}

export async function POST(request: Request) {
  const db = getVisitorDb();
  if (!db) return json({ ok: false, error: 'unavailable' }, 503);

  if (insertRateLimited()) return json({ ok: false, error: 'rate_limited' }, 429);

  let path = '/';
  try {
    const raw = await request.text();
    if (raw.length > 0 && raw.length <= 1024) {
      const payload: unknown = JSON.parse(raw);
      if (payload && typeof payload === 'object') {
        path = normalizeVisitPath((payload as { path?: unknown }).path);
      }
    }
  } catch {
    // A malformed or absent body still counts as a visit to "/".
    path = '/';
  }

  try {
    await recordVisit(db, path);
    return json({ ok: true, total: await getTotalVisits(db) }, 200);
  } catch (error) {
    console.error('visitor-stats: recordVisit failed', error);
    return json({ ok: false, error: 'unavailable' }, 503);
  }
}
