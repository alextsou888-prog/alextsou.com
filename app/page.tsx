import { PortfolioClient } from './portfolio-client';

// Language is intentionally not persisted across full page loads: every fresh
// load (including a refresh, a new tab, or a reopened browser) starts in
// Traditional Chinese, regardless of any language chosen earlier in the session.
export default function Home() {
  return <PortfolioClient initialLanguage="zh" />;
}
