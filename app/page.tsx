const skills = [
  'Python',
  'C / C++',
  'C#',
  'Test Automation',
  'REST API Testing',
  'Selenium / Playwright',
  'PyTest',
  'Jenkins / GitLab CI',
  'Docker',
  'Wireshark',
  'iPerf',
  '5G / Wi-Fi Validation',
  'CAN / Automotive Testing',
  'OpenCV / Computer Vision',
];

const projects = [
  {
    index: '01',
    title: '5G / Wi-Fi Router Automation',
    tags: ['Network validation', 'Automation'],
    description:
      'Space for a verified router validation workflow, test coverage, tooling, and evidence.',
  },
  {
    index: '02',
    title: 'REST API Automation Testing',
    tags: ['API testing', 'Python'],
    description:
      'Space for verified API test design, request validation, reporting, and CI integration.',
  },
  {
    index: '03',
    title: 'Selenium WebUI Automation',
    tags: ['Web UI', 'Selenium'],
    description:
      'Space for a verified browser automation framework, test structure, and execution flow.',
  },
  {
    index: '04',
    title: 'Automotive CAN / HIL Automation',
    tags: ['CAN', 'HIL'],
    description:
      'Space for verified automotive test scenarios, signal validation, and automation tooling.',
  },
  {
    index: '05',
    title: 'OpenCV / Computer Vision Demo',
    tags: ['OpenCV', 'Vision'],
    description:
      'Space for a verified vision pipeline, inspection approach, and reproducible demo details.',
  },
  {
    index: '06',
    title: 'CI/CD Automation',
    tags: ['CI/CD', 'Quality gates'],
    description:
      'Space for verified pipeline orchestration, automated checks, and release-quality gates.',
  },
];

const principles = [
  {
    number: '01',
    title: 'Evidence first',
    copy: 'Make test outcomes traceable, repeatable, and easy to review.',
  },
  {
    number: '02',
    title: 'Engineer for failure',
    copy: 'Design automation around clear diagnostics, boundaries, and recovery paths.',
  },
  {
    number: '03',
    title: 'Ship with confidence',
    copy: 'Connect validation to delivery workflows without hiding uncertainty.',
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="container nav-shell">
          <a className="brand" href="#home" aria-label="Alex Tsou portfolio home">
            <span className="brand-mark" aria-hidden="true">
              AT
            </span>
            <span className="brand-copy">
              <strong>Alex Tsou</strong>
              <small>Engineering Portfolio</small>
            </span>
          </a>

          <nav className="primary-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a className="nav-cta" href="#contact">
              Contact <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>

        <nav className="mobile-nav container" aria-label="Mobile navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero section-pad" id="home" aria-labelledby="hero-title">
          <div className="hero-grid container">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" aria-hidden="true" />
                Software quality · automation · systems
              </p>
              <h1 id="hero-title">
                Building reliable systems through <span>rigorous automation.</span>
              </h1>
              <p className="hero-lede">
                A focused engineering portfolio covering software testing, network validation,
                automotive systems, API automation, and computer vision.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore project areas <span aria-hidden="true">↓</span>
                </a>
                <a className="button button-secondary" href="#contact">
                  Contact
                </a>
              </div>
            </div>

            <div className="system-panel" aria-label="Engineering focus areas">
              <div className="panel-bar">
                <span>validation_profile.yaml</span>
                <span className="panel-state">READY</span>
              </div>
              <div className="code-lines" aria-hidden="true">
                <p><span>01</span><code>focus:</code></p>
                <p><span>02</span><code className="indent">- test_automation</code></p>
                <p><span>03</span><code className="indent">- network_validation</code></p>
                <p><span>04</span><code className="indent">- automotive_systems</code></p>
                <p><span>05</span><code className="indent">- computer_vision</code></p>
                <p><span>06</span><code>method: evidence_driven</code></p>
              </div>
              <div className="signal-row">
                <span>REPEATABLE</span>
                <span>TRACEABLE</span>
                <span>MAINTAINABLE</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-line" id="about" aria-labelledby="about-title">
          <div className="container split-layout">
            <div>
              <p className="section-kicker">01 / About</p>
              <h2 id="about-title">Quality engineering with a systems mindset.</h2>
            </div>
            <div className="about-body">
              <p>
                This portfolio is structured around reliable validation: clear test intent,
                automation that can be diagnosed, and evidence that supports engineering
                decisions.
              </p>
              <p>
                The project areas connect software, network, automotive, and vision workflows.
                Verified case studies and employment details can be added without changing the
                site structure.
              </p>
              <div className="principles-grid">
                {principles.map((principle) => (
                  <article className="principle" key={principle.number}>
                    <span>{principle.number}</span>
                    <h3>{principle.title}</h3>
                    <p>{principle.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="skills" aria-labelledby="skills-title">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-kicker">02 / Skills</p>
                <h2 id="skills-title">Technical toolkit</h2>
              </div>
              <p>Languages, frameworks, infrastructure, and validation domains.</p>
            </div>

            <ul className="skills-grid" aria-label="Technical skills">
              {skills.map((skill, index) => (
                <li key={skill}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section-line" id="experience" aria-labelledby="experience-title">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-kicker">03 / Experience</p>
                <h2 id="experience-title">Verified experience</h2>
              </div>
              <p>Only confirmed roles, organizations, and dates belong here.</p>
            </div>

            <div className="experience-placeholder">
              <div className="placeholder-index">EXP_01</div>
              <div>
                <p className="placeholder-label">Content intentionally reserved</p>
                <h3>TODO: Add verified experience</h3>
                <p>
                  Add confirmed role, organization, dates, responsibilities, and non-sensitive
                  evidence when available.
                </p>
              </div>
              <span className="placeholder-status">PENDING INPUT</span>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="projects" aria-labelledby="projects-title">
          <div className="container">
            <div className="section-heading section-heading-dark">
              <div>
                <p className="section-kicker">04 / Projects</p>
                <h2 id="projects-title">Selected project areas</h2>
              </div>
              <p>Expandable cards prepared for verified case studies, links, and artifacts.</p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-topline">
                    <span>{project.index}</span>
                    <span className="project-arrow" aria-hidden="true">↗</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags" aria-label={`${project.title} categories`}>
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <p className="verification-note">TODO: Add verified project details</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div>
              <p className="section-kicker">05 / Contact</p>
              <h2 id="contact-title">Let&apos;s connect the right way.</h2>
            </div>
            <div className="contact-panel">
              <p>
                Verified contact channels have not been provided yet. Add an email address,
                LinkedIn profile, or GitHub profile here before publishing them publicly.
              </p>
              <div className="contact-placeholder">
                <span>CONTACT_CHANNEL</span>
                <strong>TODO: Add verified contact details</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <a className="brand footer-brand" href="#home" aria-label="Back to top">
            <span className="brand-mark" aria-hidden="true">AT</span>
            <span className="brand-copy">
              <strong>Alex Tsou</strong>
              <small>Software quality · automation · systems</small>
            </span>
          </a>
          <p>Built for alextsou.com · Content pending verification is clearly marked.</p>
          <a className="back-to-top" href="#home">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </>
  );
}
