import type { Metadata } from 'next';
import { AdminVisitsClient } from './admin-visits-client';

/**
 * Private visitor dashboard. Not linked from public navigation, disallowed in
 * robots.txt, and marked noindex. The page shell contains no visit data at all:
 * every number and log row is fetched from /api/admin/visits with the bearer
 * token the operator types in, so nothing is exposed without authentication.
 */
export const metadata: Metadata = {
  title: 'Visitor Statistics',
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: null },
};

export default function AdminVisitsPage() {
  return <AdminVisitsClient />;
}
