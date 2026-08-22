/**
 * Client-side session de-duplication for visitor statistics.
 *
 * A "visit" is the first arrival, or a return after at least 30 minutes of
 * inactivity. The only thing stored in the browser is a millisecond timestamp
 * under `alextsou-visit-last-seen` -- no identifier is generated, and the
 * timestamp is never sent to the server (the server timestamps every insert
 * itself).
 */

export const visitLastSeenStorageKey = 'alextsou-visit-last-seen';
export const visitSessionWindowMs = 30 * 60 * 1000;

/**
 * Pure decision function so the 30-minute rule is testable without a browser.
 * `raw` is the value read from localStorage (null when absent or unreadable).
 */
export function shouldCountVisit(raw: string | null, now: number): boolean {
  if (raw === null) return true;

  const lastSeen = Number.parseInt(raw, 10);
  // Missing, corrupted, or future-dated values fall back to counting a visit.
  if (!Number.isFinite(lastSeen) || lastSeen <= 0 || lastSeen > now) return true;

  return now - lastSeen >= visitSessionWindowMs;
}

export function readVisitLastSeen(): string | null {
  try {
    return window.localStorage.getItem(visitLastSeenStorageKey);
  } catch {
    // Private mode or blocked storage: treat as a fresh visit rather than failing.
    return null;
  }
}

export function writeVisitLastSeen(now: number): void {
  try {
    window.localStorage.setItem(visitLastSeenStorageKey, String(now));
  } catch {
    // Statistics are non-critical; the page must keep working without storage.
  }
}
