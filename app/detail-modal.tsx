'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from 'react';
import type { Language, McuInterfaceGuide as McuInterfaceGuideData, PortfolioItem } from './portfolio-content';

type Props = {
  item: PortfolioItem;
  language: Language;
  onLanguageChange: (language: Language) => void;
  closeLabel: string;
  contactLabel: string;
  dialogLabel: string;
  onClose: () => void;
};

function McuInterfaceGuide({ guide, language }: { guide: McuInterfaceGuideData; language: Language }) {
  const labels = language === 'en'
    ? { signals: 'Signals', configuration: 'Configuration', applications: 'Typical use', validation: 'Validation / Debug', comparison: 'Interface comparison', interface: 'Interface', clock: 'Clock', wires: 'Typical wires', multiDevice: 'Multi-device', typicalUse: 'Typical use', profile: 'Profile' }
    : { signals: '訊號', configuration: '設定', applications: '常見應用', validation: '驗證 / Debug', comparison: '介面比較', interface: '介面', clock: 'Clock', wires: '常見接線', multiDevice: '多裝置', typicalUse: '常見應用', profile: '特性' };
  const headers = [labels.interface, labels.clock, labels.wires, labels.multiDevice, labels.typicalUse, labels.profile];

  return (
    <div className="mcu-interface-guide" data-mcu-interface-guide={language}>
      <p className="mcu-interface-subtitle">{guide.subtitle[language]}</p>
      <p className="mcu-interface-positioning">{guide.positioning[language]}</p>

      <div className="mcu-protocol-grid">
        {guide.protocols.map((protocol) => (
          <article className="mcu-protocol-card" data-mcu-interface={protocol.name} key={protocol.name}>
            <div className="mcu-protocol-heading">
              <h4>{protocol.name}</h4>
              <span>{protocol.note[language]}</span>
            </div>
            <p>{protocol.description[language]}</p>
            <dl>
              <div><dt>{labels.signals}</dt><dd>{protocol.signals[language]}</dd></div>
              {protocol.configuration && <div><dt>{labels.configuration}</dt><dd>{protocol.configuration[language]}</dd></div>}
              <div><dt>{labels.applications}</dt><dd>{protocol.applications[language]}</dd></div>
              <div><dt>{labels.validation}</dt><dd>{protocol.validation[language]}</dd></div>
            </dl>
            {protocol.diagram && <pre aria-label={`${protocol.name} ${language === 'en' ? 'example' : '範例'}`}>{protocol.diagram[language]}</pre>}
          </article>
        ))}
      </div>

      <div className="mcu-comparison" aria-label={labels.comparison}>
        <table>
          <caption>{labels.comparison}</caption>
          <thead><tr>{headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead>
          <tbody>
            {guide.comparison.map((row) => {
              const cells = [row.interface, row.clock[language], row.wires, row.multiDevice[language], row.typicalUse[language], row.note[language]];
              return <tr key={row.interface}>{cells.map((cell, index) => <td data-label={headers[index]} key={`${row.interface}-${headers[index]}`}>{cell}</td>)}</tr>;
            })}
          </tbody>
        </table>
      </div>

      <aside className="mcu-selection-note">
        <h4>{guide.selectionLabel[language]}</h4>
        <ul>{guide.selection[language].map((item) => <li key={item}>{item}</li>)}</ul>
      </aside>
    </div>
  );
}

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
            <section className={`detail-section${entry.label.en === 'Technical Scope' ? ' detail-section-boundary' : ''}`} key={`${entry.label.en}-${index}`}>
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
              {entry.interfaceGuide && <McuInterfaceGuide guide={entry.interfaceGuide} language={language} />}
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
