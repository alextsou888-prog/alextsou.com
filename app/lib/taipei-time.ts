/**
 * Presentation helpers for the Asia/Taipei display timezone.
 *
 * The database always stores UTC ISO-8601 strings. Only presentation converts.
 * Taiwan has not observed daylight saving time since 1979, so Asia/Taipei is a
 * fixed UTC+8 offset and plain arithmetic is both correct and deterministic
 * across Node, workerd, and browsers without depending on ICU timezone data.
 */

export const TAIPEI_OFFSET_MINUTES = 8 * 60;
const TAIPEI_OFFSET_MS = TAIPEI_OFFSET_MINUTES * 60_000;
const DAY_MS = 86_400_000;

function pad(value: number, length = 2) {
  return String(value).padStart(length, '0');
}

/**
 * UTC instant (ISO-8601) at which the Taipei calendar day `daysBack` days ago began.
 * `daysBack = 0` is the start of today in Taipei.
 */
export function taipeiDayStartUtcIso(daysBack: number, now: number = Date.now()): string {
  const shifted = new Date(now + TAIPEI_OFFSET_MS);
  const shiftedDayStart = Date.UTC(
    shifted.getUTCFullYear(),
    shifted.getUTCMonth(),
    shifted.getUTCDate(),
  );
  return new Date(shiftedDayStart - TAIPEI_OFFSET_MS - daysBack * DAY_MS).toISOString();
}

/** Split a stored UTC ISO-8601 timestamp into Taipei-local date and time strings. */
export function formatTaipeiParts(utcIso: string): { date: string; time: string } {
  const parsed = Date.parse(utcIso);
  if (Number.isNaN(parsed)) return { date: '—', time: '—' };

  const local = new Date(parsed + TAIPEI_OFFSET_MS);
  return {
    date: `${local.getUTCFullYear()}/${pad(local.getUTCMonth() + 1)}/${pad(local.getUTCDate())}`,
    time: `${pad(local.getUTCHours())}:${pad(local.getUTCMinutes())}:${pad(local.getUTCSeconds())}`,
  };
}

/** "YYYY/MM/DD HH:mm" in Taipei local time, minute precision (no seconds) for public display. */
export function formatTaipeiMinute(utcIso: string): string | null {
  const parsed = Date.parse(utcIso);
  if (Number.isNaN(parsed)) return null;

  const { date, time } = formatTaipeiParts(utcIso);
  return `${date} ${time.slice(0, 5)}`;
}
