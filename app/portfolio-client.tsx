'use client';

/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { DetailModal } from './detail-modal';
import { VisitorCounter } from './visitor-counter';
import {
  capabilityOverview,
  careerSnapshot,
  domainExperiences,
  engineeringDebugMethodology,
  experienceItems,
  flagshipCaseStudies,
  focusItems,
  problemSolvingHighlights,
  projectItems,
  resumeCoreGroups,
  resumeEducation,
  resumeProjectGroups,
  skillCategories,
  ui,
  visualItems,
  type CapabilityOverviewCard,
  type DomainExperience,
  type Language,
  type PortfolioItem,
  type ProblemSolvingHighlight,
} from './portfolio-content';

const allItems = [...focusItems, ...experienceItems, ...flagshipCaseStudies, ...visualItems, ...projectItems];
const contactEmail = 'alextsou888@gmail.com';
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}&su=Portfolio%20Inquiry%20-%20Alex%20Tsou`;
type Theme = 'light' | 'dark';
const initialContactForm = {
  name: '',
  company: '',
  jobTitle: '',
  email: '',
  lineId: '',
  subject: '',
  message: '',
  contactPreference: 'either',
  website: '',
};

function PortfolioCard({ item, language, openLabel, tone = 'light', onOpen }: {
  item: PortfolioItem; language: Language; openLabel: string; tone?: 'light' | 'dark' | 'experience' | 'case-study'; onOpen: (id: string) => void;
}) {
  return (
    <button
      id={item.id}
      className={`interactive-card interactive-card-${tone} interactive-card-${item.id}`}
      type="button"
      onClick={() => onOpen(item.id)}
      aria-haspopup="dialog"
      aria-label={`${openLabel}: ${item.title[language]}`}
      data-capability-card={item.id.startsWith('capability-') ? item.id : undefined}
      data-case-study-card={tone === 'case-study' ? item.id : undefined}
    >
      <span className="card-topline"><span>{item.index}</span><span className="card-open-icon" aria-hidden="true">↗</span></span>
      {item.career ? (
        <>
          <span className="career-company">{item.career.cardCompany?.[language] ?? item.career.company[language]}</span>
          <span className="card-title career-title">{item.career.jobTitle[language]}</span>
          <span className="career-period">{item.career.displayPeriod?.[language] ?? item.career.period}</span>
          <span className="career-tenure">{language === 'en' ? 'Tenure: ' : '年資：'}{item.career.tenure[language]}</span>
          {item.career.management && <span className="career-management">{item.career.management[language]}</span>}
        </>
      ) : <span className="card-title" role="heading" aria-level={3}>{item.title[language]}</span>}
      <span className="card-summary">{item.summary[language]}</span>
      <span className="card-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</span>
      <span className="card-action">{openLabel}<span aria-hidden="true"> →</span></span>
    </button>
  );
}

function VisualCard({ item, language, openLabel, onOpen }: {
  item: PortfolioItem; language: Language; openLabel: string; onOpen: (id: string) => void;
}) {
  return (
    <button
      className="visual-card"
      type="button"
      onClick={() => onOpen(item.id)}
      aria-haspopup="dialog"
      aria-label={`${openLabel}: ${item.title[language]}`}
    >
      {item.image && <img src={item.image.src} alt={item.image.alt[language]} loading="lazy" />}
      <span className="visual-card-copy">
        <span className="card-topline"><span>{item.index}</span><span className="card-open-icon" aria-hidden="true">↗</span></span>
        <span className="card-title">{item.title[language]}</span>
        <span className="card-summary">{item.summary[language]}</span>
        <span className="card-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</span>
      </span>
    </button>
  );
}

function DomainCard({ domain, language, onOpen }: {
  domain: DomainExperience;
  language: Language;
  onOpen: (id: string) => void;
}) {
  return (
    <article className={`domain-card domain-card-${domain.id}`} data-domain-card={domain.id}>
      <div className="domain-card-topline">
        <span aria-hidden="true">{domain.index}</span>
        <h4>{domain.title[language]}</h4>
      </div>
      {domain.positioning && <p className="domain-positioning">{domain.positioning[language]}</p>}
      <p className="domain-summary">{domain.summary[language]}</p>
      <div className="domain-tags" aria-label={`${domain.title[language]} ${language === 'en' ? 'technologies' : '技術標籤'}`}>
        {domain.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      {domain.related && (
        <button className="domain-related" type="button" onClick={() => onOpen(domain.related!.itemId)} aria-haspopup="dialog">
          {domain.related.label[language]} <span aria-hidden="true">↗</span>
        </button>
      )}
    </article>
  );
}

function CapabilityOverviewCardView({ card, language, onOpen }: {
  card: CapabilityOverviewCard;
  language: Language;
  onOpen: (id: string) => void;
}) {
  return (
    <article
      className={`overview-card overview-card-${card.id}`}
      id={card.id}
      data-overview-card={card.id}
      data-overview-tag-count={card.tags.length}
      data-overview-point-count={card.points[language].length}
    >
      <div className="overview-card-topline">
        <span>{card.index}</span>
        <h3>{card.title[language]}</h3>
      </div>
      <p className="overview-positioning">{card.positioning[language]}</p>
      {card.flow && (
        <div className="overview-flow" aria-label={`${card.title[language]} ${language === 'en' ? 'flow' : '流程'}`}>
          {card.flow.map((step, index) => (
            <span className="overview-flow-step" key={step.en}>
              <span>{step[language]}</span>
              {index < card.flow!.length - 1 && <b aria-hidden="true">→</b>}
            </span>
          ))}
        </div>
      )}
      <div className="overview-tags" aria-label={`${card.title[language]} ${language === 'en' ? 'technologies' : '技術標籤'}`}>
        {card.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <ul className="overview-points">
        {card.points[language].map((point) => <li key={point}>{point}</li>)}
      </ul>
      {card.related && (
        <button
          className="overview-related"
          type="button"
          onClick={() => onOpen(card.related!.itemId)}
          aria-haspopup="dialog"
          data-related-case={card.related.itemId}
        >
          {card.related.label[language]} <span aria-hidden="true">↗</span>
        </button>
      )}
    </article>
  );
}

function ProblemSolvingCard({ card, language, onOpen }: {
  card: ProblemSolvingHighlight;
  language: Language;
  onOpen: (id: string) => void;
}) {
  const labels = problemSolvingHighlights.labels;

  return (
    <article className={`problem-solving-card problem-solving-card-${card.id}`} data-problem-solving-card={card.id}>
      <div className="problem-solving-card-topline">
        <span aria-hidden="true">{card.index}</span>
        <h4>{card.title[language]}</h4>
      </div>
      <dl className="problem-solving-summary">
        <div>
          <dt>{labels.problem[language]}</dt>
          <dd>{card.problem[language]}</dd>
        </div>
        <div>
          <dt>{labels.approach[language]}</dt>
          <dd>{card.approach[language]}</dd>
        </div>
        <div>
          <dt>{labels.outcome[language]}</dt>
          <dd>{card.outcome[language]}</dd>
        </div>
      </dl>
      <details className="problem-solving-logic">
        <summary>{labels.logic[language]}</summary>
        <div className="detail-flow" aria-label={`${card.title[language]} ${labels.logic[language]}`}>
          {card.flow.map((step, index) => (
            <span className="flow-step" key={step.en}>
              <span>{step[language]}</span>
              {index < card.flow.length - 1 && <b aria-hidden="true">→</b>}
            </span>
          ))}
        </div>
      </details>
      <button
        className="problem-solving-related"
        type="button"
        onClick={() => onOpen(card.related.itemId)}
        aria-haspopup="dialog"
        data-highlight-related-case={card.related.itemId}
      >
        {card.related.label[language]} <span aria-hidden="true">↗</span>
      </button>
    </article>
  );
}

export function PortfolioClient({ initialLanguage = 'zh' }: { initialLanguage?: Language }) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [theme, setTheme] = useState<Theme>('light');
  const [activeId, setActiveId] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState(initialContactForm);
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [contactErrors, setContactErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const pendingScroll = useRef<{ anchorId: string | null; anchorTop: number; scrollY: number } | null>(null);
  const t = ui[language];
  const activeItem = useMemo(() => allItems.find((item) => item.id === activeId) ?? null, [activeId]);
  const closeModal = useCallback(() => setActiveId(null), []);

  useEffect(() => { document.documentElement.lang = language === 'zh' ? 'zh-Hant-TW' : 'en'; }, [language]);

  // Language is intentionally not persisted: switching EN/ZH only affects the
  // current page session. A full reload (or a new tab) always starts in
  // Traditional Chinese, so no cookie or localStorage write happens here.

  useLayoutEffect(() => {
    let initialTheme: Theme;
    try {
      const saved = window.localStorage.getItem('alextsou-theme');
      initialTheme = saved === 'light' || saved === 'dark'
        ? saved
        : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } catch {
      initialTheme = 'light';
    }
    document.documentElement.dataset.theme = initialTheme;
    document.documentElement.style.colorScheme = initialTheme;
    const frame = window.requestAnimationFrame(() => setTheme(initialTheme));
    return () => window.cancelAnimationFrame(frame);
  }, []);

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
    const anchor = window.location.hash ? document.getElementById(window.location.hash.slice(1)) : null;
    pendingScroll.current = {
      anchorId: anchor?.id ?? null,
      anchorTop: anchor?.getBoundingClientRect().top ?? 0,
      scrollY: window.scrollY,
    };
    setLanguage(next);
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    try {
      window.localStorage.setItem('alextsou-theme', nextTheme);
    } catch {
      // The visual theme still changes when storage is unavailable.
    }
  };

  const updateContactField = (field: keyof typeof initialContactForm, value: string) => {
    setContactForm((current) => ({ ...current, [field]: value }));
    setContactStatus('idle');
    setContactErrors((current) => {
      const next = { ...current };
      delete next[field];
      delete next.contact;
      return next;
    });
  };

  const validateContactForm = () => {
    const errors: Record<string, string> = {};
    const email = contactForm.email.trim();
    const lineId = contactForm.lineId.trim();
    const message = contactForm.message.trim();
    if (!email && !lineId) errors.contact = t.contactMethodError;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = t.invalidEmailError;
    if (!message) errors.message = t.messageRequiredError;
    return errors;
  };

  const submitContactForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validateContactForm();
    setContactErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setContactStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(contactForm),
      });
      if (!response.ok) throw new Error('contact delivery failed');
      setContactStatus('success');
      setContactForm(initialContactForm);
    } catch {
      setContactStatus('error');
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard?.writeText(contactEmail);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 1800);
    } catch {
      setCopiedEmail(false);
    }
  };

  const panelLines = language === 'en'
    ? ['ai_npu', 'camera_imaging', 'connectivity', 'customer_engineering', 'ate_robot_esd']
    : ['AI_NPU', 'Camera_影像', '連線驗證', '客戶工程', 'ATE_Robot_ESD'];

  return (
    <>
      <a className="skip-link" href="#main-content">{t.skip}</a>
      <header className="site-header">
        <div className="container nav-shell">
          <a className="brand" href="#home" aria-label={t.homeLabel}>
            <span className="brand-mark" aria-hidden="true">AT</span>
            <span className="brand-copy"><strong>{t.name}</strong><small>{t.portfolio}</small></span>
          </a>
          <div className="nav-actions">
            <nav className="primary-nav" aria-label={t.navLabel}>
              <a href="#about">{t.about}</a><a href="#case-studies">{t.cases}</a><a href="#domains">{t.domains}</a><a href="#skills">{t.skills}</a><a href="#experience">{t.experience}</a><a href="#resume">{t.resume}</a>
              <a className="nav-cta" href="#contact">{t.contact} <span aria-hidden="true">↗</span></a>
            </nav>
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  toggleTheme();
                }
              }}
              aria-label={theme === 'light'
                ? (language === 'en' ? 'Switch to dark theme' : '切換為深色主題')
                : (language === 'en' ? 'Switch to light theme' : '切換為淺色主題')}
              title={theme === 'light'
                ? (language === 'en' ? 'Switch to dark theme' : '切換為深色主題')
                : (language === 'en' ? 'Switch to light theme' : '切換為淺色主題')}
            >
              <span aria-hidden="true">{theme === 'light' ? '◐' : '☀'}</span>
              <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
            </button>
            <div className="language-switch" role="group" aria-label={t.language}>
              <button type="button" aria-pressed={language === 'en'} onClick={() => switchLanguage('en')}>EN</button>
              <button type="button" aria-pressed={language === 'zh'} onClick={() => switchLanguage('zh')}>中文</button>
            </div>
          </div>
        </div>
        <nav className="mobile-nav container" aria-label={t.navLabel}>
          <a href="#case-studies">{t.cases}</a><a href="#domains">{t.domains}</a><a href="#skills">{t.skills}</a><a href="#experience">{t.experience}</a><a href="#resume">{t.resume}</a><a href="#about">{t.about}</a><a href="#contact">{t.contact}</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero section-pad" id="home" aria-labelledby="hero-title">
          <div className="hero-grid container">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" aria-hidden="true" />{t.eyebrow}</p>
              <h1 id="hero-title">{t.heroA}</h1>
              <p className="hero-role">{t.heroRole}</p>
              <p className="hero-semiconductor">{t.heroSemiconductor}</p>
              <p className="hero-lede">{t.heroLead}</p>
              <p className="hero-context">{t.heroContext}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#case-studies">{t.viewEngineeringCases} <span aria-hidden="true">↓</span></a>
                <a className="button button-secondary" href="#domains">{t.exploreTechnicalDomains} <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <div className="system-panel" aria-label={t.panelLabel}>
              <div className="panel-bar"><span>engineering_profile.yaml</span><span className="panel-state">{t.ready}</span></div>
              <div className="code-lines" aria-hidden="true">{panelLines.map((line, index) => <p key={line}><span>{String(index + 1).padStart(2, '0')}</span><code className={index ? 'indent' : ''}>{index ? `- ${line}` : `focus: ${line}`}</code></p>)}</div>
              <div className="signal-row"><span>{language === 'en' ? 'REPEATABLE' : '可重現'}</span><span>{language === 'en' ? 'TRACEABLE' : '可追溯'}</span><span>{language === 'en' ? 'MAINTAINABLE' : '可維護'}</span></div>
            </div>
          </div>
        </section>

        <section className="section capability-overview" id="capability-overview" aria-labelledby="capability-overview-title">
          <div className="container">
            <div className="overview-heading">
              <div>
                <p className="section-kicker">{capabilityOverview.kicker[language]}</p>
                <h2 id="capability-overview-title">{capabilityOverview.title[language]}</h2>
              </div>
              <p>{capabilityOverview.subtitle[language]}</p>
            </div>
            <div className="professional-snapshot" aria-label={language === 'en' ? 'Professional snapshot' : '專業摘要'}>
              {capabilityOverview.snapshot.map((item) => <p key={item.en}>{item[language]}</p>)}
            </div>
            <div className="overview-grid">
              {capabilityOverview.cards.map((card) => (
                <CapabilityOverviewCardView key={card.id} card={card} language={language} onOpen={setActiveId} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-line flagship-section" id="case-studies" aria-labelledby="flagship-title">
          <div className="container">
            <div className="section-heading">
              <div><p className="section-kicker">{t.flagshipKicker}</p><h2 id="flagship-title">{t.flagshipTitle}</h2></div>
              <p>{t.flagshipLead}</p>
            </div>
            <div className="flagship-grid">
              {flagshipCaseStudies.map((item) => (
                <PortfolioCard key={item.id} item={item} language={language} openLabel={t.viewCaseStudy} tone="case-study" onOpen={setActiveId} />
              ))}
            </div>
            <section className="problem-solving-highlights" id="problem-solving" aria-labelledby="problem-solving-title">
              <div className="problem-solving-heading">
                <div>
                  <p className="section-kicker">{problemSolvingHighlights.kicker[language]}</p>
                  <h3 id="problem-solving-title">{problemSolvingHighlights.title[language]}</h3>
                </div>
                <p>{problemSolvingHighlights.lead[language]}</p>
              </div>
              <div className="problem-solving-grid">
                {problemSolvingHighlights.cards.map((card) => (
                  <ProblemSolvingCard key={card.id} card={card} language={language} onOpen={setActiveId} />
                ))}
              </div>
            </section>
            <section className="debug-methodology debug-methodology-standalone" aria-labelledby="debug-methodology-title" data-engineering-method="compact">
              <h3 id="debug-methodology-title">{engineeringDebugMethodology.title[language]}</h3>
              <div className="detail-flow" aria-label={engineeringDebugMethodology.title[language]}>
                {engineeringDebugMethodology.flow.map((step, index) => (
                  <span className="flow-step" key={step.en}>
                    <span>{step[language]}</span>
                    {index < engineeringDebugMethodology.flow.length - 1 && <b aria-hidden="true">→</b>}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="section section-muted technical-domains-section" id="domains" aria-labelledby="domains-title">
          <div className="container">
            <div className="section-heading"><div><p className="section-kicker">{t.domainsKicker}</p><h2 id="domains-title">{t.domainsTitle}</h2></div><p>{t.domainsLead}</p></div>
            <div className="domain-grid">
              {domainExperiences.map((domain) => <DomainCard key={domain.id} domain={domain} language={language} onOpen={setActiveId} />)}
            </div>
          </div>
        </section>

        <section className="section section-muted engineering-capabilities" id="skills" aria-labelledby="skills-title">
          <div className="container">
            <div className="section-heading"><div><p className="section-kicker">{t.skillsKicker}</p><h2 id="skills-title">{t.skillsTitle}</h2></div><p>{t.skillsLead}</p></div>
            <div className="capability-grid">{focusItems.map((item) => <PortfolioCard key={item.id} item={item} language={language} openLabel={t.capabilityDetails} onOpen={setActiveId} />)}</div>
          </div>
        </section>

        <section className="section section-line" id="experience" aria-labelledby="experience-title">
          <div className="container">
            <div className="section-heading"><div><p className="section-kicker">{t.expKicker}</p><h2 id="experience-title">{t.expTitle}</h2></div><p>{t.expLead}</p></div>
            <div className="experience-grid">{experienceItems.map((item) => <PortfolioCard key={item.id} item={item} language={language} openLabel={t.open} tone="experience" onOpen={setActiveId} />)}</div>
          </div>
        </section>

        <section className="section section-muted" id="resume" aria-labelledby="resume-title">
          <div className="container">
            <div className="section-heading">
              <div><p className="section-kicker">{t.resumeKicker}</p><h2 id="resume-title">{t.resumeTitle}</h2></div>
              <p>{t.resumeLead}</p>
            </div>

            <div className="resume-layout">
              <section className="career-snapshot" aria-labelledby="career-snapshot-title">
                <div className="snapshot-profile">
                  <div className="snapshot-intro">
                    <p className="resume-block-kicker">01 / {t.snapshotTitle}</p>
                    <h3 id="career-snapshot-title">{careerSnapshot.name[language]}</h3>
                    <p className="snapshot-role">{careerSnapshot.role[language]}</p>
                    <div className="snapshot-profile-meta">
                      <span>{careerSnapshot.experience[language]}</span>
                      <span>{careerSnapshot.education[language]}</span>
                    </div>
                    <p className="snapshot-summary">{careerSnapshot.summary[language]}</p>
                  </div>
                </div>
                <div className="snapshot-facts">
                  {careerSnapshot.facts.map((fact) => (
                    <article className="snapshot-fact" key={fact.label.en}>
                      <h4>{fact.label[language]}</h4>
                      <div>{fact.values.map((value) => <p key={value.en}>{value[language]}</p>)}</div>
                    </article>
                  ))}
                </div>
                <section className="resume-downloads" aria-labelledby="resume-downloads-title">
                  <div>
                    <p className="resume-block-kicker">PDF</p>
                    <h4 id="resume-downloads-title">{t.resumeDownloadsTitle}</h4>
                  </div>
                  <div className="resume-download-actions">
                    <a
                      className="resume-download-link"
                      href="/resume/alex-tsou-resume-zh.pdf"
                      download="alex-tsou-resume-zh.pdf"
                      aria-label={t.downloadChineseResumeLabel}
                    >
                      <span aria-hidden="true">↓</span>
                      {t.downloadChineseResume}
                    </a>
                    <a
                      className="resume-download-link"
                      href="/resume/alex-tsou-resume-en.pdf"
                      download="alex-tsou-resume-en.pdf"
                      aria-label={t.downloadEnglishResumeLabel}
                    >
                      <span aria-hidden="true">↓</span>
                      {t.downloadEnglishResume}
                    </a>
                    <a
                      className="resume-download-link resume-download-link-secondary"
                      href={language === 'zh' ? '/resume/alex-tsou-engineering-portfolio-zh.pdf' : '/resume/alex-tsou-engineering-portfolio-en.pdf'}
                      download={language === 'zh' ? 'alex-tsou-engineering-portfolio-zh.pdf' : 'alex-tsou-engineering-portfolio-en.pdf'}
                      aria-label={t.downloadPortfolioLabel}
                    >
                      <span aria-hidden="true">↓</span>
                      {t.downloadPortfolio}
                    </a>
                  </div>
                </section>
              </section>

              <article className="education-card">
                <div>
                  <p className="resume-block-kicker">02 / {t.educationTitle}</p>
                  <h3>{resumeEducation.university[language]}</h3>
                  <p className="education-department">{resumeEducation.department[language]}</p>
                </div>
                <div className="education-meta">
                  <strong>{resumeEducation.degree[language]}</strong>
                  <span>{resumeEducation.period}</span>
                </div>
              </article>

              <section className="resume-panel" aria-labelledby="career-timeline-title">
                <p className="resume-block-kicker">03 / {t.timelineTitle}</p>
                <h3 id="career-timeline-title">{t.timelineTitle}</h3>
                <p>{t.timelineLead}</p>
                <div className="timeline-list">
                  {experienceItems.map((item) => (
                    <button key={`timeline-${item.id}`} type="button" onClick={() => setActiveId(item.id)} aria-haspopup="dialog">
                      <span>{item.index}</span>
                      <strong>{item.career?.cardCompany?.[language] ?? item.career?.company[language]}</strong>
                      <em>{item.career?.jobTitle[language]}</em>
                      <small>{item.career?.displayPeriod?.[language] ?? item.career?.period} · {language === 'en' ? 'Tenure: ' : '年資：'}{item.career?.tenure[language]}</small>
                      {item.career?.management && <small className="timeline-management">{item.career.management[language]}</small>}
                    </button>
                  ))}
                </div>
              </section>

              <div className="resume-groups resume-core-groups">
                {resumeCoreGroups.map((group) => (
                  <article className="resume-group" key={group.title.en}>
                    <h3>{group.title[language]}</h3>
                    {group.items.map((item) => <p key={item.en}>{item[language]}</p>)}
                  </article>
                ))}
              </div>

              <section className="resume-technical" aria-labelledby="technical-skills-title">
                <p className="resume-block-kicker">04 / {t.technicalSkillsTitle}</p>
                <h3 id="technical-skills-title">{t.technicalSkillsTitle}</h3>
                <div className="skill-category-grid" aria-label={t.technicalSkillsTitle}>
                  {skillCategories.map((group) => (
                    <article className="skill-category" key={group.title.en}>
                      <h3>{group.title[language]}</h3>
                      <div>{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                    </article>
                  ))}
                </div>
              </section>

              <div className="resume-groups resume-project-groups">
                {resumeProjectGroups.map((group) => (
                  <article className="resume-group" key={group.title.en}>
                    <h3>{group.title[language]}</h3>
                    {group.items.map((item) => <p key={item.en}>{item[language]}</p>)}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-line" id="about" aria-labelledby="about-title">
          <div className="container split-layout"><div><p className="section-kicker">{t.aboutKicker}</p><h2 id="about-title">{t.aboutTitle}</h2></div><div className="about-body"><p>{t.aboutP1}</p><p>{t.aboutP2}</p><div className="principles-grid">{t.principles.map((principle, index) => <article className="principle" key={principle[0]}><span>{String(index + 1).padStart(2, '0')}</span><h3>{principle[0]}</h3><p>{principle[1]}</p></article>)}</div></div></div>
        </section>

        <section className="section section-line" id="visual-portfolio" aria-labelledby="visual-title">
          <div className="container">
            <div className="section-heading">
              <div><p className="section-kicker">{t.visualKicker}</p><h2 id="visual-title">{t.visualTitle}</h2></div>
              <p>{t.visualLead}</p>
            </div>
            <div className="visual-grid">
              {visualItems.map((item) => <VisualCard key={item.id} item={item} language={language} openLabel={t.openImage} onOpen={setActiveId} />)}
            </div>
          </div>
        </section>

        <section className="section section-dark" id="projects" aria-labelledby="projects-title">
          <div className="container"><div className="section-heading section-heading-dark"><div><p className="section-kicker">{t.projectsKicker}</p><h2 id="projects-title">{t.projectsTitle}</h2></div><p>{t.projectsLead}</p></div><div className="projects-grid">{projectItems.map((item) => <PortfolioCard key={item.id} item={item} language={language} openLabel={t.open} tone="dark" onOpen={setActiveId} />)}</div></div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container">
            <div className="section-heading contact-heading">
              <div><p className="section-kicker">{t.contactKicker}</p><h2 id="contact-title">{t.contactSectionTitle}</h2></div>
              <p>{t.contactSectionLead}</p>
            </div>

            <div className="contact-card-grid">
              <article className="contact-card contact-card-primary">
                <span className="contact-card-label">A</span>
                <h3>{t.sendEmailTitle}</h3>
                <p>{t.sendEmailBody}</p>
                <a className="button button-primary" href={gmailComposeUrl} target="_blank" rel="noopener noreferrer">{t.sendEmailButton}</a>
                <button className="button button-secondary" type="button" onClick={copyEmail}>{copiedEmail ? t.emailCopied : t.copyEmail}</button>
                <p className="contact-availability-note">{t.messagingAvailability}</p>
                <p className="contact-email">{contactEmail}</p>
              </article>

              <article className="contact-card">
                <span className="contact-card-label">B</span>
                <h3>{t.leaveMessageTitle}</h3>
                <p>{t.leaveMessageBody}</p>
                <form className="contact-form" onSubmit={submitContactForm} noValidate>
                  <input className="contact-honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" value={contactForm.website} onChange={(event) => updateContactField('website', event.target.value)} aria-hidden="true" />
                  <label><span>{t.formName}</span><input value={contactForm.name} maxLength={80} onChange={(event) => updateContactField('name', event.target.value)} /></label>
                  <label><span>{t.formCompany}</span><input value={contactForm.company} maxLength={120} onChange={(event) => updateContactField('company', event.target.value)} /></label>
                  <label><span>{t.formJobTitle}</span><input value={contactForm.jobTitle} maxLength={120} onChange={(event) => updateContactField('jobTitle', event.target.value)} /></label>
                  <label><span>{t.formEmail}</span><input type="email" value={contactForm.email} maxLength={160} onChange={(event) => updateContactField('email', event.target.value)} aria-invalid={Boolean(contactErrors.email)} /></label>
                  <label><span>{t.formLineId}</span><input value={contactForm.lineId} maxLength={80} onChange={(event) => updateContactField('lineId', event.target.value)} /></label>
                  <label><span>{t.formSubject}</span><input value={contactForm.subject} maxLength={160} onChange={(event) => updateContactField('subject', event.target.value)} /></label>
                  <label className="form-full"><span>{t.formMessage}</span><textarea value={contactForm.message} maxLength={2000} onChange={(event) => updateContactField('message', event.target.value)} aria-invalid={Boolean(contactErrors.message)} /></label>
                  <fieldset className="form-full preference-field">
                    <legend>{t.formPreference}</legend>
                    {(['email', 'line', 'either'] as const).map((preference) => (
                      <label key={preference}>
                        <input type="radio" name="contactPreference" value={preference} checked={contactForm.contactPreference === preference} onChange={(event) => updateContactField('contactPreference', event.target.value)} />
                        <span>{preference === 'email' ? t.preferenceEmail : preference === 'line' ? t.preferenceLine : t.preferenceEither}</span>
                      </label>
                    ))}
                  </fieldset>
                  {(contactErrors.contact || contactErrors.email || contactErrors.message) && (
                    <div className="form-message form-message-error" role="alert">
                      {[contactErrors.contact, contactErrors.email, contactErrors.message].filter(Boolean).map((message) => <p key={message}>{message}</p>)}
                    </div>
                  )}
                  {contactStatus === 'success' && <p className="form-message form-message-success" role="status">{t.contactSuccess}</p>}
                  {contactStatus === 'error' && <p className="form-message form-message-error" role="alert">{t.contactFailure}</p>}
                  <button className="button button-primary form-submit" type="submit" disabled={contactStatus === 'sending'}>{contactStatus === 'sending' ? t.sendingMessage : t.sendMessage}</button>
                  <p className="privacy-notice">{t.privacyNotice}</p>
                </form>
              </article>

              <article className="contact-card">
                <span className="contact-card-label">C</span>
                <h3>{t.contactInfoTitle}</h3>
                <p>{t.contactInfoBody}</p>
                <div className="contact-info-box"><span>Email</span><a href={`mailto:${contactEmail}`}>{contactEmail}</a></div>
                <div className="contact-resume-links" aria-label={t.resumeDownloadsTitle}>
                  <a href="/resume/alex-tsou-resume-zh.pdf" download="alex-tsou-resume-zh.pdf" aria-label={t.downloadChineseResumeLabel}>{t.contactChineseResume}</a>
                  <a href="/resume/alex-tsou-resume-en.pdf" download="alex-tsou-resume-en.pdf" aria-label={t.downloadEnglishResumeLabel}>{t.contactEnglishResume}</a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-grid"><a className="brand footer-brand" href="#home" aria-label={t.backTop}><span className="brand-mark" aria-hidden="true">AT</span><span className="brand-copy"><strong>{t.name}</strong><small>{t.eyebrow}</small></span></a><p>{t.footer}</p><a className="back-to-top" href="#home">{t.backTop} <span aria-hidden="true">↑</span></a></div><div className="container footer-meta"><VisitorCounter totalLabel={t.visitCounterLabel} lastVisitLabel={t.visitLastVisitLabel} /></div></footer>

      {activeItem && <DetailModal item={activeItem} language={language} onLanguageChange={switchLanguage} closeLabel={t.close} contactLabel={t.contact} dialogLabel={t.dialogLabel} onClose={closeModal} />}
    </>
  );
}
