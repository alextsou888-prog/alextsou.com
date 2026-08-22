/**
 * GET /api/admin/visits -- private visit log.
 *
 * Requires `Authorization: Bearer <VISITOR_STATS_TOKEN>`. The token lives only in
 * Cloudflare Worker secrets (or `.dev.vars` locally); it is never bundled into
 * client code and is never accepted from the query string.
 *
 * Unauthorized requests get a bare 401 with no visit data and no hint about
 * whether any records exist.
 */

import {
  adminPageSizes,
  getVisitSummary,
  getVisitorDb,
  isAdminTokenConfigured,
  isAuthorizedAdmin,
  listVisitEvents,
  normalizeAdminLimit,
  normalizeAdminOffset,
} from '@/app/lib/visitor-stats';

export const dynamic = 'force-dynamic';

function json(body: unknown, status: number) {
  return Response.json(body, {
    status,
    headers: {
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex, nofollow',
    },
  });
}

export async function GET(request: Request) {
  if (!isAdminTokenConfigured()) return json({ error: 'not_configured' }, 503);
  if (!(await isAuthorizedAdmin(request))) return json({ error: 'unauthorized' }, 401);

  const db = getVisitorDb();
  if (!db) return json({ error: 'unavailable' }, 503);

  const params = new URL(request.url).searchParams;
  const limit = normalizeAdminLimit(params.get('limit'));
  const offset = normalizeAdminOffset(params.get('offset'));

  try {
    const [summary, events] = await Promise.all([
      getVisitSummary(db),
      listVisitEvents(db, limit, offset),
    ]);

    return json({ summary, events, limit, offset, pageSizes: adminPageSizes }, 200);
  } catch (error) {
    console.error('visitor-stats: admin query failed', error);
    return json({ error: 'unavailable' }, 503);
  }
}
