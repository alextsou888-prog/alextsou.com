'use client';

/**
 * Private admin dashboard for visitor statistics.
 *
 * The access token is typed by the operator, held in memory plus sessionStorage
 * for the current tab, and sent only as an `Authorization: Bearer` header. It is
 * never compiled into this bundle, never placed in the URL, and "Sign out"
 * clears it.
 */

import { useCallback, useEffect, useState, type FormEvent } from 'react';
import { formatTaipeiParts } from '@/app/lib/taipei-time';

type VisitEvent = { id: number; visitedAtUtc: string; path: string };
type VisitSummary = { total: number; today: number; last7Days: number; last30Days: number };
type AdminPayload = { summary: VisitSummary; events: VisitEvent[]; limit: number; offset: number };

const tokenSessionKey = 'alextsou-visitor-stats-token';
const pageSizes = [25, 50, 100];

const errorMessages: Record<string, string> = {
  unauthorized: 'Invalid token. / 權杖無效。',
  not_configured:
    'VISITOR_STATS_TOKEN is not set on this Worker. / 此 Worker 尚未設定 VISITOR_STATS_TOKEN。',
  unavailable: 'Visitor database unavailable. / 訪客資料庫無法使用。',
  network: 'Could not reach the statistics API. / 無法連線到統計 API。',
};

function formatNumber(value: number) {
  return value.toLocaleString('en-US');
}

export function AdminVisitsClient() {
  const [token, setToken] = useState('');
  const [tokenInput, setTokenInput] = useState('');
  const [limit, setLimit] = useState(100);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState<AdminPayload | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const [errorKey, setErrorKey] = useState<string | null>(null);

  // Restoring the token after paint keeps the server-rendered sign-in form and the
  // first client render identical, the same approach the portfolio uses for the theme.
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const saved = window.sessionStorage.getItem(tokenSessionKey);
        if (saved) setToken(saved);
      } catch {
        // Sign-in simply has to be repeated when session storage is unavailable.
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const load = useCallback(async (activeToken: string, nextLimit: number, nextOffset: number) => {
    setStatus('loading');
    setErrorKey(null);

    try {
      const response = await fetch(`/api/admin/visits?limit=${nextLimit}&offset=${nextOffset}`, {
        headers: { authorization: `Bearer ${activeToken}` },
        cache: 'no-store',
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        setData(null);
        setStatus('error');
        setErrorKey(body?.error ?? 'unavailable');
        return;
      }

      setData((await response.json()) as AdminPayload);
      setStatus('ready');
    } catch {
      setData(null);
      setStatus('error');
      setErrorKey('network');
    }
  }, []);

  useEffect(() => {
    if (!token) return;
    // Deferred the same way the theme sync above is: the fetch itself sets state, so
    // the trigger is pushed past the effect body rather than firing setState inline.
    let cancelled = false;
    const frame = window.requestAnimationFrame(() => {
      if (!cancelled) void load(token, limit, offset);
    });
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, [token, limit, offset, load]);

  const signIn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = tokenInput.trim();
    if (!value) return;

    try {
      window.sessionStorage.setItem(tokenSessionKey, value);
    } catch {
      // Keeping the token in memory alone is fine for this session.
    }
    setTokenInput('');
    setOffset(0);
    setToken(value);
  };

  const signOut = () => {
    try {
      window.sessionStorage.removeItem(tokenSessionKey);
    } catch {
      // Nothing persisted, nothing to clear.
    }
    setToken('');
    setData(null);
    setStatus('idle');
    setErrorKey(null);
    setOffset(0);
  };

  if (!token) {
    return (
      <main className="admin-shell">
        <section className="admin-card admin-signin">
          <h1>訪客統計 / Visitor Statistics</h1>
          <p className="admin-note">這是私人頁面，需要存取權杖。 / Private page. An access token is required.</p>
          <form onSubmit={signIn}>
            <label htmlFor="admin-token">存取權杖 / Access token</label>
            <input
              id="admin-token"
              name="admin-token"
              type="password"
              autoComplete="current-password"
              value={tokenInput}
              onChange={(event) => setTokenInput(event.target.value)}
              required
            />
            <button type="submit">登入 / Sign in</button>
          </form>
          {errorKey && (
            <p className="admin-error" role="alert">{errorMessages[errorKey] ?? errorMessages.unavailable}</p>
          )}
        </section>
      </main>
    );
  }

  const summary = data?.summary;
  const events = data?.events ?? [];

  return (
    <main className="admin-shell">
      <header className="admin-header">
        <div>
          <h1>訪客統計 / Visitor Statistics</h1>
          <p className="admin-note">儲存為 UTC，顯示為 Asia/Taipei。 / Stored in UTC, displayed in Asia/Taipei.</p>
        </div>
        <div className="admin-header-actions">
          <button type="button" onClick={() => void load(token, limit, offset)} disabled={status === 'loading'}>
            重新整理 / Refresh
          </button>
          <button type="button" onClick={signOut}>登出 / Sign out</button>
        </div>
      </header>

      {errorKey && (
        <p className="admin-error" role="alert">{errorMessages[errorKey] ?? errorMessages.unavailable}</p>
      )}

      <section className="admin-summary" aria-label="Summary">
        <article className="admin-card">
          <span>總訪問次數 / Total Visits</span>
          <strong>{summary ? formatNumber(summary.total) : '—'}</strong>
        </article>
        <article className="admin-card">
          <span>今日 / Today</span>
          <strong>{summary ? formatNumber(summary.today) : '—'}</strong>
        </article>
        <article className="admin-card">
          <span>近 7 天 / Last 7 Days</span>
          <strong>{summary ? formatNumber(summary.last7Days) : '—'}</strong>
        </article>
        <article className="admin-card">
          <span>近 30 天 / Last 30 Days</span>
          <strong>{summary ? formatNumber(summary.last30Days) : '—'}</strong>
        </article>
      </section>

      <section className="admin-card admin-log" aria-label="Recent visits">
        <div className="admin-log-toolbar">
          <h2>最近訪問紀錄 / Recent Visits</h2>
          <label htmlFor="admin-page-size">
            每頁 / Per page
            <select
              id="admin-page-size"
              value={limit}
              onChange={(event) => {
                setOffset(0);
                setLimit(Number(event.target.value));
              }}
            >
              {pageSizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="admin-table-scroll">
          <table>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">日期 / Date</th>
                <th scope="col">時間 / Time</th>
                <th scope="col">路徑 / Path</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => {
                const { date, time } = formatTaipeiParts(event.visitedAtUtc);
                return (
                  <tr key={event.id}>
                    <td>{offset + index + 1}</td>
                    <td>{date}</td>
                    <td>{time}</td>
                    <td>{event.path}</td>
                  </tr>
                );
              })}
              {events.length === 0 && (
                <tr>
                  <td colSpan={4}>{status === 'loading' ? '載入中… / Loading…' : '沒有紀錄 / No records'}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="admin-pagination">
          <button
            type="button"
            onClick={() => setOffset(Math.max(0, offset - limit))}
            disabled={offset === 0 || status === 'loading'}
          >
            ← 上一頁 / Previous
          </button>
          <span>{offset + 1}–{offset + events.length}</span>
          <button
            type="button"
            onClick={() => setOffset(offset + limit)}
            disabled={events.length < limit || status === 'loading'}
          >
            下一頁 / Next →
          </button>
        </div>
      </section>
    </main>
  );
}
