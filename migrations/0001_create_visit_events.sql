-- Privacy-safe visitor statistics.
--
-- Intentionally stores no IP address, no User-Agent, no device fingerprint,
-- no location, no cookie identifier, and no personal data. A row records only
-- when a visit happened (UTC, ISO-8601) and which pathname was entered.
--
-- The cumulative total is derived with SELECT COUNT(*) FROM visit_events, so no
-- separate counter table has to be kept in sync.

CREATE TABLE IF NOT EXISTS visit_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    visited_at_utc TEXT NOT NULL,
    path TEXT NOT NULL DEFAULT '/'
);

-- ISO-8601 UTC timestamps sort lexicographically, so this index serves both the
-- "newest first" log listing and the today / 7-day / 30-day range counts.
CREATE INDEX IF NOT EXISTS idx_visit_events_visited_at
ON visit_events(visited_at_utc);
