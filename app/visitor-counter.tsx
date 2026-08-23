'use client';

/**
 * Subtle footer visit counter.
 *
 * Fires at most one analytics request per page load and never retries. Every
 * failure path resolves to "hidden", so the portfolio is unaffected when the
 * database or the API is unavailable.
 */

import { useEffect, useState } from 'react';
import { formatTaipeiMinute } from './lib/taipei-time';
import {
  isOwnerBrowser,
  publicVisitRequestMethod,
  readVisitLastSeen,
  writeVisitLastSeen,
} from './lib/visit-session';

type CounterState = { total: number; lastVisitUtc: string | null };

// Shared across mounts so React's development double-invoke cannot double-count.
let pendingState: Promise<CounterState | null> | null = null;

function readCounterState(payload: unknown): CounterState | null {
  const total = (payload as { total?: unknown } | null)?.total;
  if (typeof total !== 'number' || !Number.isFinite(total)) return null;

  const lastVisitUtc = (payload as { lastVisitUtc?: unknown }).lastVisitUtc;
  return { total, lastVisitUtc: typeof lastVisitUtc === 'string' ? lastVisitUtc : null };
}

async function loadCounterState(): Promise<CounterState | null> {
  const now = Date.now();
  const ownerBrowser = isOwnerBrowser();
  const requestMethod = publicVisitRequestMethod(ownerBrowser, readVisitLastSeen(), now);

  // An owner browser is excluded locally before any event request is made.
  // Its normal session timestamp is left untouched, so removing the flag
  // resumes the established 30-minute flow without changing its semantics.
  if (!ownerBrowser) writeVisitLastSeen(now);

  try {
    // A due visit returns the same privacy-safe counter state as the read-only
    // endpoint, so every page load needs exactly one public statistics request.
    const response = requestMethod === 'post'
      ? await fetch('/api/visit', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ path: window.location.pathname }),
        })
      : await fetch('/api/visit/count', { method: 'GET' });

    if (!response.ok) return null;
    return readCounterState(await response.json());
  } catch {
    // Analytics is non-critical: no error UI, no retry, no console noise.
    return null;
  }
}

export function VisitorCounter({ totalLabel, lastVisitLabel }: { totalLabel: string; lastVisitLabel: string }) {
  const [state, setState] = useState<CounterState | null>(null);

  useEffect(() => {
    let active = true;
    pendingState ??= loadCounterState();
    pendingState.then((value) => {
      if (active && value !== null) setState(value);
    });
    return () => {
      active = false;
    };
  }, []);

  if (state === null) return null;

  const lastVisit = state.lastVisitUtc ? formatTaipeiMinute(state.lastVisitUtc) : null;

  return (
    <p className="visitor-counter">
      <span className="visitor-counter-item">
        <span className="visitor-counter-label">{totalLabel}</span>
        <span className="visitor-counter-value">{state.total.toLocaleString('en-US')}</span>
      </span>
      {lastVisit && (
        <>
          <span className="visitor-counter-sep" aria-hidden="true">|</span>
          <span className="visitor-counter-item">
            <span className="visitor-counter-label">{lastVisitLabel}</span>
            <span className="visitor-counter-value">{lastVisit}</span>
          </span>
        </>
      )}
    </p>
  );
}
