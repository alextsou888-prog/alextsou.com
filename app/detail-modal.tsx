'use client';

import { useEffect, useRef } from 'react';
import type { Language, PortfolioItem } from './portfolio-content';

type Props = {
  item: PortfolioItem;
  language: Language;
  closeLabel: string;
  dialogLabel: string;
  verificationLabel: string;
  onClose: () => void;
};

export function DetailModal({ item, language, closeLabel, dialogLabel, verificationLabel, onClose }: Props) {
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
          <button ref={closeRef} className="modal-close" type="button" onClick={onClose} aria-label={closeLabel}>
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <p className="modal-summary" id="detail-summary">{item.summary[language]}</p>
        <div className="modal-tags" aria-label={item.title[language]}>
          {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        <div className="detail-sections">
          {item.sections.map((entry, index) => (
            <section className="detail-section" key={`${entry.label.en}-${index}`}>
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

        {item.verification && (
          <div className="verification-boundary">
            <strong>{verificationLabel}</strong>
            <p>{item.verification[language]}</p>
          </div>
        )}
        <div className="modal-footer">
          <button className="button button-primary" type="button" onClick={onClose}>{closeLabel}</button>
        </div>
      </div>
    </div>
  );
}
