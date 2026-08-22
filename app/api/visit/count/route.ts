/**
 * GET /api/visit/count -- public cumulative total, plus the single latest
 * visit timestamp. No visit ids, no path history, no other rows, no admin data.
 */

import { getPublicVisitStats, getVisitorDb } from '@/app/lib/visitor-stats';

export const dynamic = 'force-dynamic';

function json(body: unknown, status: number) {
  return Response.json(body, {
    status,
    headers: { 'cache-control': 'no-store' },
  });
}

export async function GET() {
  const db = getVisitorDb();
  if (!db) return json({ error: 'unavailable' }, 503);

  try {
    return json(await getPublicVisitStats(db), 200);
  } catch (error) {
    console.error('visitor-stats: getPublicVisitStats failed', error);
    return json({ error: 'unavailable' }, 503);
  }
}
