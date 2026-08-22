'use client';

/**
 * Subtle footer visit counter.
 *
 * Fires at most one analytics request per page load and never retries. Every
 * failure path resolves to "hidden", so the portfolio is unaffected when the
 * database or the API is unavailable.
 */

import { useEffect, useState } from 'react';
import { readVisitLastSeen, shouldCountVisit, writeVisitLastSeen } from './lib/visit-session';

// Shared across mounts so React's development double-invoke cannot double-count.
let pendingTotal: Promise<number | null> | null = null;

function readTotal(payload: unknown): number | null {
  const value = (payload as { total?: unknown } | null)?.total;
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

async function loadVisitTotal(): Promise<number | null> {
  const now = Date.now();
  const countsAsNewVisit = shouldCountVisit(readVisitLastSeen(), now);
  writeVisitLastSeen(now);

  try {
    const response = countsAsNewVisit
      ? await fetch('/api/visit', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ path: window.location.pathname }),
        })
      : await fetch('/api/visit/count', { method: 'GET' });

    if (!response.ok) return null;
    return readTotal(await response.json());
  } catch {
    // Analytics is non-critical: no error UI, no retry, no console noise.
    return null;
  }
}

export function VisitorCounter({ label }: { label: string }) {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    pendingTotal ??= loadVisitTotal();
    pendingTotal.then((value) => {
      if (active && value !== null) setTotal(value);
    });
    return () => {
      active = false;
    };
  }, []);

  if (total === null) return null;

  return (
    <p className="visitor-counter">
      <span className="visitor-counter-label">{label}</span>
      <span className="visitor-counter-value">{total.toLocaleString('en-US')}</span>
    </p>
  );
}
