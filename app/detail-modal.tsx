'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from 'react';
import type { Language, PortfolioItem } from './portfolio-content';

type Props = {
  item: PortfolioItem;
  language: Language;
  onLanguageChange: (language: Language) => void;
  closeLabel: string;
  contactLabel: string;
  dialogLabel: string;
  onClose: () => void;
};

export function DetailModal({ item, language, onLanguageChange, closeLabel, contactLabel, dialogLabel, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;
      const focusable = [...panelRef.current.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])')]
        .filter((element) => !element.hasAttribute('disabled'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = oldOverflow;
      previous?.focus();
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div
        ref={panelRef}
        className="detail-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-title"
        aria-describedby="detail-summary"
      >
        <div className="modal-header">
          <div>
            <p className="modal-kicker">{dialogLabel} / {item.index}</p>
            <h2 id="detail-title">{item.title[language]}</h2>
          </div>
          <div className="modal-actions">
            <div className="modal-language-switch" role="group" aria-label={language === 'en' ? 'Case study language' : '案例語言'}>
              <button
                type="button"
                aria-pressed={language === 'en'}
                aria-label="Switch case study and portfolio language to English"
                onClick={() => onLanguageChange('en')}
              >
                EN
              </button>
              <button
                type="button"
                aria-pressed={language === 'zh'}
                aria-label="切換案例與作品集語言為中文"
                onClick={() => onLanguageChange('zh')}
              >
                中文
              </button>
            </div>
            <button ref={closeRef} className="modal-close" type="button" onClick={onClose} aria-label={closeLabel}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </div>

        <p className="modal-summary" id="detail-summary">{item.summary[language]}</p>
        {item.career && (
          <div className="modal-career-meta">
            <strong>{item.career.company[language]}</strong>
            <span>{item.career.jobTitle[language]}</span>
            <span>{item.career.period}</span>
            <span>{language === 'en' ? 'Tenure: ' : '年資：'}{item.career.tenure[language]}</span>
            {item.career.management && <span>{item.career.management[language]}</span>}
          </div>
        )}
        <div className="modal-tags" aria-label={item.title[language]}>
          {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        {item.image && (
          <figure className="modal-visual">
            <img src={item.image.src} alt={item.image.alt[language]} />
            <figcaption>{item.image.alt[language]}</figcaption>
          </figure>
        )}

        <div className="detail-sections">
          {item.sections.map((entry, index) => (
            <section className={`detail-section${entry.label.en === 'Ownership Boundary' ? ' detail-section-boundary' : ''}`} key={`${entry.label.en}-${index}`}>
              <h3>{entry.label[language]}</h3>
              {entry.body && <p>{entry.body[language]}</p>}
              {entry.bullets && (
                <ul>{entry.bullets[language].map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              )}
              {entry.flow && (
                <div className="detail-flow" aria-label={entry.label[language]}>
                  {entry.flow.map((step, stepIndex) => (
                    <span className="flow-step" key={step.en}>
                      <span>{step[language]}</span>
                      {stepIndex < entry.flow!.length - 1 && <b aria-hidden="true">→</b>}
                    </span>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="modal-footer">
          <a className="button button-secondary" href="#contact" onClick={onClose}>{contactLabel}</a>
          <button className="button button-primary" type="button" onClick={onClose}>{closeLabel}</button>
        </div>
      </div>
    </div>
  );
}
