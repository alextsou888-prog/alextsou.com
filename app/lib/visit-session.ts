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
export const ownerBrowserStorageKey = 'alextsou-owner';
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

/**
 * Select the public statistics request without exposing an owner assertion to
 * the server. The owner marker is a browser-local convenience preference only:
 * an owner browser reads the aggregate but never posts a new visit event.
 */
export function publicVisitRequestMethod(
  ownerBrowser: boolean,
  rawLastSeen: string | null,
  now: number,
): 'get' | 'post' {
  if (ownerBrowser) return 'get';
  return shouldCountVisit(rawLastSeen, now) ? 'post' : 'get';
}

export function isOwnerBrowser(): boolean {
  try {
    return window.localStorage.getItem(ownerBrowserStorageKey) === 'true';
  } catch {
    return false;
  }
}

export function markOwnerBrowser(): void {
  try {
    window.localStorage.setItem(ownerBrowserStorageKey, 'true');
  } catch {
    // The preference is optional; private/blocked storage must not break admin UI.
  }
}

export function removeOwnerBrowser(): void {
  try {
    window.localStorage.removeItem(ownerBrowserStorageKey);
  } catch {
    // The preference is optional; there is nothing else to clean up.
  }
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
