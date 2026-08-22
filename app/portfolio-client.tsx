'use client';

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { DetailModal } from './detail-modal';
import { experienceItems, focusItems, projectItems, ui, type Language, type PortfolioItem } from './portfolio-content';

const allItems = [...focusItems, ...experienceItems, ...projectItems];

function PortfolioCard({ item, language, openLabel, tone = 'light', onOpen }: {
  item: PortfolioItem; language: Language; openLabel: string; tone?: 'light' | 'dark' | 'experience'; onOpen: (id: string) => void;
}) {
  return (
    <button
      className={`interactive-card interactive-card-${tone}`}
      type="button"
      onClick={() => onOpen(item.id)}
      aria-haspopup="dialog"
      aria-label={`${openLabel}: ${item.title[language]}`}
    >
      <span className="card-topline"><span>{item.index}</span><span className="card-open-icon" aria-hidden="true">↗</span></span>
      <span className="card-title">{item.title[language]}</span>
      <span className="card-summary">{item.summary[language]}</span>
      <span className="card-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</span>
      <span className="card-action">{openLabel}<span aria-hidden="true"> →</span></span>
    </button>
  );
}

export function PortfolioClient() {
  const [language, setLanguage] = useState<Language>('en');
  const [activeId, setActiveId] = useState<string | null>(null);
  const pendingScroll = useRef<{ anchorId: string | null; anchorTop: number; scrollY: number } | null>(null);
  const t = ui[language];
  const activeItem = useMemo(() => allItems.find((item) => item.id === activeId) ?? null, [activeId]);
  const closeModal = useCallback(() => setActiveId(null), []);

  useEffect(() => { document.documentElement.lang = language === 'zh' ? 'zh-Hant-TW' : 'en'; }, [language]);

  useLayoutEffect(() => {
    const pending = pendingScroll.current;
    if (!pending) return;

    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';

    const restorePosition = () => {
      const anchor = pending.anchorId ? document.getElementById(pending.anchorId) : null;
      if (anchor) window.scrollBy(0, anchor.getBoundingClientRect().top - pending.anchorTop);
      else window.scrollTo(0, pending.scrollY);
    };

    restorePosition();
    const frame = window.requestAnimationFrame(restorePosition);
    const timeout = window.setTimeout(() => {
      restorePosition();
      root.style.scrollBehavior = previousBehavior;
      pendingScroll.current = null;
    }, 350);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      root.style.scrollBehavior = previousBehavior;
    };
  }, [language]);

  const switchLanguage = (next: Language) => {
    if (next === language) return;
    const anchor = window.location.hash ? document.getElementById(window.location.hash.slice(1)) : null;
    pendingScroll.current = {
      anchorId: anchor?.id ?? null,
      anchorTop: anchor?.getBoundingClientRect().top ?? 0,
      scrollY: window.scrollY,
    };
    setLanguage(next);
  };

  const panelLines = language === 'en'
    ? ['software_automation', 'customer_engineering', 'camera_validation', 'production_test', 'robot_esd', 'computer_vision']
    : ['軟體自動化', '客戶技術支援', 'Camera_驗證', '產測自動化', 'Robot_ESD', '電腦視覺'];

  return (
    <>
      <a className="skip-link" href="#main-content">{t.skip}</a>
      <header className="site-header">
        <div className="container nav-shell">
          <a className="brand" href="#home" aria-label="Alex Tsou portfolio home">
            <span className="brand-mark" aria-hidden="true">AT</span>
            <span className="brand-copy"><strong>Alex Tsou</strong><small>{t.portfolio}</small></span>
          </a>
          <div className="nav-actions">
            <nav className="primary-nav" aria-label={t.navLabel}>
              <a href="#about">{t.about}</a><a href="#skills">{t.skills}</a><a href="#experience">{t.experience}</a><a href="#projects">{t.projects}</a>
              <a className="nav-cta" href="#contact">{t.contact} <span aria-hidden="true">↗</span></a>
            </nav>
            <div className="language-switch" role="group" aria-label={t.language}>
              <button type="button" aria-pressed={language === 'en'} onClick={() => switchLanguage('en')}>EN</button>
              <button type="button" aria-pressed={language === 'zh'} onClick={() => switchLanguage('zh')}>中文</button>
            </div>
          </div>
        </div>
        <nav className="mobile-nav container" aria-label={t.navLabel}>
          <a href="#about">{t.about}</a><a href="#skills">{t.skills}</a><a href="#experience">{t.experience}</a><a href="#projects">{t.projects}</a><a href="#contact">{t.contact}</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero section-pad" id="home" aria-labelledby="hero-title">
          <div className="hero-grid container">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" aria-hidden="true" />{t.eyebrow}</p>
              <h1 id="hero-title">{t.heroA} <span>{t.heroB}</span></h1>
              <p className="hero-lede">{t.heroLead}</p>
              <div className="hero-actions"><a className="button button-primary" href="#skills">{t.explore} <span aria-hidden="true">↓</span></a><a className="button button-secondary" href="#contact">{t.contact}</a></div>
            </div>
            <div className="system-panel" aria-label={t.panelLabel}>
              <div className="panel-bar"><span>engineering_profile.yaml</span><span className="panel-state">{t.ready}</span></div>
              <div className="code-lines" aria-hidden="true">{panelLines.map((line, index) => <p key={line}><span>{String(index + 1).padStart(2, '0')}</span><code className={index ? 'indent' : ''}>{index ? `- ${line}` : `focus: ${line}`}</code></p>)}</div>
              <div className="signal-row"><span>{language === 'en' ? 'REPEATABLE' : '可重現'}</span><span>{language === 'en' ? 'TRACEABLE' : '可追溯'}</span><span>{language === 'en' ? 'MAINTAINABLE' : '可維護'}</span></div>
            </div>
          </div>
        </section>

        <section className="section section-line" id="about" aria-labelledby="about-title">
          <div className="container split-layout"><div><p className="section-kicker">{t.aboutKicker}</p><h2 id="about-title">{t.aboutTitle}</h2></div><div className="about-body"><p>{t.aboutP1}</p><p>{t.aboutP2}</p><div className="principles-grid">{t.principles.map((principle, index) => <article className="principle" key={principle[0]}><span>{String(index + 1).padStart(2, '0')}</span><h3>{principle[0]}</h3><p>{principle[1]}</p></article>)}</div></div></div>
        </section>

        <section className="section section-muted" id="skills" aria-labelledby="skills-title">
          <div className="container"><div className="section-heading"><div><p className="section-kicker">{t.skillsKicker}</p><h2 id="skills-title">{t.skillsTitle}</h2></div><p>{t.skillsLead}</p></div><div className="capability-grid">{focusItems.map((item) => <PortfolioCard key={item.id} item={item} language={language} openLabel={t.open} onOpen={setActiveId} />)}</div></div>
        </section>

        <section className="section section-line" id="experience" aria-labelledby="experience-title">
          <div className="container"><div className="section-heading"><div><p className="section-kicker">{t.expKicker}</p><h2 id="experience-title">{t.expTitle}</h2></div><p>{t.expLead}</p></div><div className="experience-grid">{experienceItems.map((item) => <PortfolioCard key={item.id} item={item} language={language} openLabel={t.open} tone="experience" onOpen={setActiveId} />)}</div></div>
        </section>

        <section className="section section-dark" id="projects" aria-labelledby="projects-title">
          <div className="container"><div className="section-heading section-heading-dark"><div><p className="section-kicker">{t.projectsKicker}</p><h2 id="projects-title">{t.projectsTitle}</h2></div><p>{t.projectsLead}</p></div><div className="projects-grid">{projectItems.map((item) => <PortfolioCard key={item.id} item={item} language={language} openLabel={t.open} tone="dark" onOpen={setActiveId} />)}</div></div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title"><div className="container contact-grid"><div><p className="section-kicker">{t.contactKicker}</p><h2 id="contact-title">{t.contactTitle}</h2></div><div className="contact-panel"><p>{t.contactBody}</p><div className="contact-placeholder"><span>{t.contactCode}</span><strong>{t.contactTodo}</strong></div></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-grid"><a className="brand footer-brand" href="#home" aria-label={t.backTop}><span className="brand-mark" aria-hidden="true">AT</span><span className="brand-copy"><strong>Alex Tsou</strong><small>{t.eyebrow}</small></span></a><p>{t.footer}</p><a className="back-to-top" href="#home">{t.backTop} <span aria-hidden="true">↑</span></a></div></footer>

      {activeItem && <DetailModal item={activeItem} language={language} closeLabel={t.close} dialogLabel={t.dialogLabel} verificationLabel={t.verification} onClose={closeModal} />}
    </>
  );
}
