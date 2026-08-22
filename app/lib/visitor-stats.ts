/**
 * Server-side data access for privacy-safe visitor statistics.
 *
 * Storage contract: one row per counted visit holding a server-generated UTC
 * ISO-8601 timestamp and a sanitised pathname. Nothing else is persisted --
 * no IP address, no User-Agent, no fingerprint, no location, no identifier.
 */

import { env } from 'cloudflare:workers';
import { taipeiDayStartUtcIso } from './taipei-time';

type VisitorBindings = {
  VISITOR_DB?: D1Database;
  VISITOR_STATS_TOKEN?: string;
};

export type VisitEvent = {
  id: number;
  visitedAtUtc: string;
  path: string;
};

export type VisitSummary = {
  total: number;
  today: number;
  last7Days: number;
  last30Days: number;
};

export type PublicVisitStats = {
  total: number;
  lastVisitUtc: string | null;
};

export const adminPageSizes = [25, 50, 100] as const;
export const defaultAdminPageSize = 100;

// Per-isolate burst cap on inserts. Deliberately identity-free: it counts writes,
// not visitors, so no IP or token has to be retained to make it work.
const insertWindowMs = 60_000;
const maxInsertsPerWindow = 240;
let insertWindow = { count: 0, resetAt: 0 };

function bindings(): VisitorBindings {
  // `Cloudflare.Env` is intentionally empty until `wrangler types` is run, so the
  // bindings this feature relies on are described locally instead.
  return env as unknown as VisitorBindings;
}

/** The D1 binding, or null when the database is not configured (never throws). */
export function getVisitorDb(): D1Database | null {
  try {
    return bindings().VISITOR_DB ?? null;
  } catch {
    return null;
  }
}

function getAdminToken(): string | null {
  let fromBinding: string | undefined;
  try {
    fromBinding = bindings().VISITOR_STATS_TOKEN;
  } catch {
    fromBinding = undefined;
  }
  const token = fromBinding ?? process.env.VISITOR_STATS_TOKEN;
  return typeof token === 'string' && token.length > 0 ? token : null;
}

export function isAdminTokenConfigured(): boolean {
  return getAdminToken() !== null;
}

/**
 * Length-independent, constant-time comparison. Both sides are hashed first so a
 * mismatching token length cannot be inferred from the comparison itself.
 */
async function secretsMatch(candidate: string, expected: string): Promise<boolean> {
  const encoder = new TextEncoder();
  const [candidateDigest, expectedDigest] = await Promise.all([
    crypto.subtle.digest('SHA-256', encoder.encode(candidate)),
    crypto.subtle.digest('SHA-256', encoder.encode(expected)),
  ]);

  const a = new Uint8Array(candidateDigest);
  const b = new Uint8Array(expectedDigest);
  let difference = 0;
  for (let index = 0; index < a.length; index += 1) difference |= a[index] ^ b[index];
  return difference === 0;
}

/** Reads the bearer token from the Authorization header only -- never a query string. */
export async function isAuthorizedAdmin(request: Request): Promise<boolean> {
  const expected = getAdminToken();
  if (!expected) return false;

  const header = request.headers.get('authorization') ?? '';
  const match = /^Bearer (.+)$/.exec(header.trim());
  if (!match) return false;

  return secretsMatch(match[1], expected);
}

/**
 * Accepts only a simple site-relative pathname. Query strings and fragments are
 * dropped so nothing a visitor typed can end up in the database.
 */
export function normalizeVisitPath(value: unknown): string {
  if (typeof value !== 'string') return '/';

  const withoutQuery = value.trim().split(/[?#]/)[0];
  if (!withoutQuery.startsWith('/')) return '/';

  const candidate = withoutQuery.slice(0, 128);
  return /^\/[A-Za-z0-9\-._~/]*$/.test(candidate) ? candidate : '/';
}

export function insertRateLimited(now: number = Date.now()): boolean {
  if (insertWindow.resetAt <= now) {
    insertWindow = { count: 1, resetAt: now + insertWindowMs };
    return false;
  }
  insertWindow.count += 1;
  return insertWindow.count > maxInsertsPerWindow;
}

export function normalizeAdminLimit(value: string | null): number {
  const parsed = Number.parseInt(value ?? '', 10);
  return (adminPageSizes as readonly number[]).includes(parsed) ? parsed : defaultAdminPageSize;
}

export function normalizeAdminOffset(value: string | null): number {
  const parsed = Number.parseInt(value ?? '', 10);
  return Number.isFinite(parsed) && parsed > 0 ? Math.min(parsed, 1_000_000) : 0;
}

/** Inserts one visit using the server clock. Client-supplied times are ignored. */
export async function recordVisit(db: D1Database, path: string): Promise<void> {
  await db
    .prepare('INSERT INTO visit_events (visited_at_utc, path) VALUES (?1, ?2)')
    .bind(new Date().toISOString(), path)
    .run();
}

/** Public aggregate and the single latest timestamp, read from one D1 snapshot. */
export async function getPublicVisitStats(db: D1Database): Promise<PublicVisitStats> {
  const row = await db
    .prepare(
      `SELECT
         COUNT(*) AS total,
         (SELECT visited_at_utc
            FROM visit_events
           ORDER BY visited_at_utc DESC, id DESC
           LIMIT 1) AS last_visit_utc
       FROM visit_events`,
    )
    .first<{ total: number; last_visit_utc: string | null }>();

  return {
    total: row?.total ?? 0,
    lastVisitUtc: row?.last_visit_utc ?? null,
  };
}

/**
 * Totals plus today / last 7 / last 30 day counts. The windows are Taipei
 * calendar days (inclusive of today) converted to UTC boundaries, matching the
 * timezone the admin dashboard displays.
 */
export async function getVisitSummary(db: D1Database): Promise<VisitSummary> {
  const row = await db
    .prepare(
      `SELECT
         COUNT(*) AS total,
         SUM(CASE WHEN visited_at_utc >= ?1 THEN 1 ELSE 0 END) AS today,
         SUM(CASE WHEN visited_at_utc >= ?2 THEN 1 ELSE 0 END) AS last7Days,
         SUM(CASE WHEN visited_at_utc >= ?3 THEN 1 ELSE 0 END) AS last30Days
       FROM visit_events`,
    )
    .bind(taipeiDayStartUtcIso(0), taipeiDayStartUtcIso(6), taipeiDayStartUtcIso(29))
    .first<{ total: number; today: number | null; last7Days: number | null; last30Days: number | null }>();

  return {
    total: row?.total ?? 0,
    today: row?.today ?? 0,
    last7Days: row?.last7Days ?? 0,
    last30Days: row?.last30Days ?? 0,
  };
}

export async function listVisitEvents(
  db: D1Database,
  limit: number,
  offset: number,
): Promise<VisitEvent[]> {
  const result = await db
    .prepare(
      `SELECT id, visited_at_utc, path
         FROM visit_events
        ORDER BY visited_at_utc DESC, id DESC
        LIMIT ?1 OFFSET ?2`,
    )
    .bind(limit, offset)
    .all<{ id: number; visited_at_utc: string; path: string }>();

  return (result.results ?? []).map((row) => ({
    id: row.id,
    visitedAtUtc: row.visited_at_utc,
    path: row.path,
  }));
}
