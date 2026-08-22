/**
 * GET /api/visit/count -- public cumulative total only.
 *
 * Returns a single number. No log rows, no timestamps, no database metadata.
 */

import { getTotalVisits, getVisitorDb } from '@/app/lib/visitor-stats';

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
    return json({ total: await getTotalVisits(db) }, 200);
  } catch (error) {
    console.error('visitor-stats: getTotalVisits failed', error);
    return json({ error: 'unavailable' }, 503);
  }
}
