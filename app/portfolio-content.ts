export type Language = 'en' | 'zh';
export type Copy = Record<Language, string>;

export type DetailSection = {
  label: Copy;
  body?: Copy;
  bullets?: Record<Language, string[]>;
  flow?: Copy[];
};

export type PortfolioItem = {
  id: string;
  index: string;
  title: Copy;
  summary: Copy;
  tags: string[];
  sections: DetailSection[];
  career?: {
    company: Copy;
    cardCompany?: Copy;
    jobTitle: Copy;
    period: string;
    displayPeriod?: Copy;
    tenure: Copy;
    management?: Copy;
  };
  image?: {
    src: string;
    alt: Copy;
  };
};

export type DomainExperience = {
  id: 'ai-npu' | 'wifi-connectivity' | 'android-tv-fae' | 'ate-robot-esd' | 'industrial-vision-aoi' | 'camera-imaging';
  index: string;
  title: Copy;
  summary: Copy;
  tags: string[];
  positioning?: Copy;
  related?: {
    itemId: string;
    label: Copy;
  };
};

const c = (en: string, zh: string): Copy => ({ en, zh });
const section = (labelEn: string, labelZh: string, bodyEn: string, bodyZh: string): DetailSection => ({
  label: c(labelEn, labelZh),
  body: c(bodyEn, bodyZh),
});

export const ui = {
  en: {
    skip: 'Skip to main content', name: 'Alex Tsou', portfolio: 'Engineering Portfolio', homeLabel: 'Alex Tsou portfolio home', navLabel: 'Primary navigation',
    about: 'About', skills: 'Capabilities', experience: 'Experience', projects: 'Projects', resume: 'Resume', visualPortfolio: 'Technical Portfolio', contact: 'Contact',
    eyebrow: 'Automation · Validation · FAE · Camera-AI · ATE',
    heroA: 'Building reliable systems through', heroB: 'rigorous automation.',
    heroLead: 'Five focused strengths across automation, validation, customer engineering, Camera-AI systems, and ATE production test.',
    explore: 'Explore engineering areas', viewResume: 'View Resume', viewTechnicalPortfolio: 'View Technical Portfolio', ready: 'READY', panelLabel: 'Engineering focus areas',
    aboutKicker: '01 / About', aboutTitle: 'Quality engineering with a systems mindset.',
    aboutP1: 'This portfolio is structured around reliable validation: clear test intent, automation that can be diagnosed, and evidence that supports engineering decisions.',
    aboutP2: 'The work spans software, firmware, devices, instruments, networks, camera systems, production test, and customer issue closure as connected engineering workflows.',
    principles: [
      ['Evidence first', 'Make test outcomes traceable, repeatable, and easy to review.'],
      ['Engineer for failure', 'Design automation around diagnostics, boundaries, recovery, and uncertainty.'],
      ['Close the loop', 'Connect reproduction, root-cause analysis, regression, and delivery.'],
    ],
    skillsKicker: '02 / Cross-product Methods', skillsTitle: 'Engineering Capabilities',
    skillsLead: 'Reusable capabilities across automation, validation, debugging, system integration, customer engineering, and test architecture.',
    expKicker: '03 / Experience', expTitle: 'Experience areas',
    expLead: 'Experience spanning production automation, device validation, customer engineering, and system integration.',
    resumeKicker: '04 / Resume', resumeTitle: 'Resume / career portfolio',
    resumeLead: 'A public, privacy-conscious resume structure: concise on page, detailed on demand.',
    snapshotTitle: 'Career Snapshot',
    domainsKicker: 'Technical Domain Map',
    domainsTitle: 'Product & Technical Domains',
    domainsLead: 'Engineering experience and technical domains across validation, automation, customer support, imaging, connectivity, and industrial systems.',
    resumeDownloadsTitle: 'Resume Downloads',
    downloadChineseResume: 'Download Chinese Resume',
    downloadEnglishResume: 'Download English Resume',
    downloadChineseResumeLabel: 'Download Alex Tsou Chinese Resume PDF',
    downloadEnglishResumeLabel: 'Download Alex Tsou English Resume PDF',
    contactChineseResume: 'Chinese Resume PDF',
    contactEnglishResume: 'English Resume PDF',
    educationTitle: 'Education',
    timelineTitle: 'Career Timeline',
    timelineLead: 'Select a career card to review responsibilities, technical scope, and engineering workflows.',
    technicalSkillsTitle: 'Technical Skills',
    flagshipKicker: '05 / Case Studies', flagshipTitle: 'Flagship Engineering Case Studies',
    flagshipLead: 'Three concise engineering briefs with detailed architecture, validation, RCA, outputs, and ownership boundaries available on demand.',
    viewCaseStudy: 'View Case Study',
    visualKicker: '06 / Visual Technical Portfolio', visualTitle: 'Visual technical portfolio',
    visualLead: 'Five supplied technical visuals are presented as clickable briefs with clear ownership boundaries.',
    projectsKicker: '07 / Projects', projectsTitle: 'Selected project areas',
    projectsLead: 'Expandable technical briefs prepared for verified case studies, artifacts, and results.',
    contactKicker: '08 / Contact',
    contactSectionTitle: 'Contact Daniel',
    contactSectionLead: 'Send an email directly or leave a private message with enough contact information for a reply.',
    sendEmailTitle: 'Send Email',
    sendEmailBody: 'Open Gmail Web Compose in a new tab with the portfolio contact subject prepared.',
    sendEmailButton: 'Email Me',
    copyEmail: 'Copy Email',
    emailCopied: 'Email copied',
    messagingAvailability: 'LINE / WeChat available upon request',
    leaveMessageTitle: 'Leave a Message',
    leaveMessageBody: 'Messages are private and are not published on this website.',
    contactInfoTitle: 'Contact Information',
    contactInfoBody: 'Primary public contact channel for professional opportunities and technical discussion.',
    formName: 'Name',
    formCompany: 'Company',
    formJobTitle: 'Job Title',
    formEmail: 'Email',
    formLineId: 'LINE ID',
    formSubject: 'Subject',
    formMessage: 'Message',
    formPreference: 'Contact preference',
    preferenceEmail: 'Email',
    preferenceLine: 'LINE',
    preferenceEither: 'Either',
    sendMessage: 'Send Message',
    sendingMessage: 'Sending...',
    contactMethodError: 'Please provide an email address or LINE ID so I can reply to you.',
    invalidEmailError: 'Please enter a valid email address.',
    messageRequiredError: 'Please enter a message.',
    contactSuccess: 'Thank you. Your message has been sent successfully. I will reply using the contact information you provided.',
    contactFailure: 'Your message could not be sent. Please try again or email me directly at alextsou888@gmail.com.',
    privacyNotice: 'Your contact information will only be used to respond to your message. Please do not submit passwords, confidential company information, API keys, or other sensitive data.',
    footer: 'Built for alextsou.com · Engineering through automation, validation, and evidence.', backTop: 'Back to top',
    visitCounterLabel: 'Total Visits:', visitLastVisitLabel: 'Last Visit:',
    open: 'Open details', capabilityDetails: 'View Details', close: 'Close details', dialogLabel: 'Engineering detail',
    openImage: 'Open visual brief',
    language: 'Language', selected: 'Selected',
  },
  zh: {
    skip: '跳至主要內容', name: '鄒志清', portfolio: '工程作品集', homeLabel: '鄒志清工程作品集首頁', navLabel: '主要導覽',
    about: '關於我', skills: '工程能力', experience: '經歷', projects: '專案', resume: '履歷', visualPortfolio: '技術作品', contact: '聯絡方式',
    eyebrow: '自動化 · 驗證 · FAE · Camera-AI · ATE',
    heroA: '以嚴謹的自動化方法，打造', heroB: '可靠且可驗證的系統。',
    heroLead: '聚焦自動化、驗證、客戶工程支援、Camera-AI 系統與 ATE 產測五項核心能力。',
    explore: '瀏覽工程領域', viewResume: '查看完整履歷', viewTechnicalPortfolio: '查看技術作品', ready: '就緒', panelLabel: '工程專長領域',
    aboutKicker: '01 / 關於我', aboutTitle: '以系統思維實踐品質工程。',
    aboutP1: '本作品集以可靠驗證為核心：明確定義測試目的、建立可診斷的自動化流程，並以可追溯證據支援工程決策。',
    aboutP2: '技術範圍涵蓋軟體、韌體、裝置、儀器、網路、Camera 系統、產測與客戶問題結案，並將各項工作串接為完整工程流程。',
    principles: [
      ['證據優先', '讓測試結果可追溯、可重現，並便於技術審查。'],
      ['為失敗而設計', '預先納入診斷邊界、復原機制與不確定性處理。'],
      ['形成閉環', '串接問題重現、根因分析、回歸測試與交付流程。'],
    ],
    skillsKicker: '02 / 跨產品工程方法', skillsTitle: '核心工程能力',
    skillsLead: '橫跨自動化、驗證、除錯、系統整合、客戶技術支援與測試架構的核心工程能力。',
    expKicker: '03 / 經歷', expTitle: '經歷領域',
    expLead: '經歷涵蓋產測自動化、裝置驗證、客戶工程支援與系統整合。',
    resumeKicker: '04 / 履歷', resumeTitle: '履歷 / 職涯作品集',
    resumeLead: '以適合公開網站的方式呈現履歷：首頁精簡、細節可點開查看。',
    snapshotTitle: '職涯摘要',
    domainsKicker: '產品技術版圖',
    domainsTitle: '產品與技術領域',
    domainsLead: '橫跨驗證、自動化、客戶技術支援、影像、連線與工業系統的工程經驗與技術領域。',
    resumeDownloadsTitle: '下載履歷',
    downloadChineseResume: '下載中文履歷 PDF',
    downloadEnglishResume: '下載英文履歷 PDF',
    downloadChineseResumeLabel: '下載鄒志清中文履歷 PDF',
    downloadEnglishResumeLabel: '下載鄒志清英文履歷 PDF',
    contactChineseResume: '中文履歷 PDF',
    contactEnglishResume: 'English Resume PDF',
    educationTitle: '學歷',
    timelineTitle: '工作經歷',
    timelineLead: '點選職涯卡片查看職責、技術範圍與工程流程。',
    technicalSkillsTitle: '技術技能',
    flagshipKicker: '05 / 工程案例', flagshipTitle: '代表性工程案例',
    flagshipLead: '三個精簡工程摘要；點選後查看技術架構、驗證、RCA、工程輸出與責任邊界。',
    viewCaseStudy: '查看案例',
    visualKicker: '06 / 技術圖解作品', visualTitle: '技術圖解作品',
    visualLead: '使用 5 張提供的技術圖解素材，整理為可點擊的作品說明與責任邊界。',
    projectsKicker: '07 / 專案', projectsTitle: '精選專案領域',
    projectsLead: '可展開的技術摘要，後續可加入已驗證案例、產出物與成果。',
    contactKicker: '08 / 聯絡方式',
    contactSectionTitle: '聯絡我',
    contactSectionLead: '可直接寄 Email，或留下私人訊息與可回覆的聯絡方式。',
    sendEmailTitle: '寄 Email 給我',
    sendEmailBody: '在新分頁開啟 Gmail 撰寫視窗，並自動帶入作品集聯絡主旨。',
    sendEmailButton: '寄 Email 給我',
    copyEmail: '複製 Email',
    emailCopied: '已複製 Email',
    messagingAvailability: 'LINE / WeChat 可於聯絡後提供',
    leaveMessageTitle: '留下訊息',
    leaveMessageBody: '留言為私人用途，不會公開顯示在網站上。',
    contactInfoTitle: '聯絡資訊',
    contactInfoBody: '公開的主要專業聯絡管道，適合職缺、合作與技術討論。',
    formName: '姓名',
    formCompany: '公司',
    formJobTitle: '職稱',
    formEmail: 'Email',
    formLineId: 'LINE ID',
    formSubject: '主旨',
    formMessage: '留言內容',
    formPreference: '聯絡偏好',
    preferenceEmail: 'Email',
    preferenceLine: 'LINE',
    preferenceEither: '皆可',
    sendMessage: '送出留言',
    sendingMessage: '送出中...',
    contactMethodError: '請至少留下 Email 或 LINE ID，方便我回覆您。',
    invalidEmailError: '請輸入有效的 Email 地址。',
    messageRequiredError: '請輸入留言內容。',
    contactSuccess: '謝謝您，留言已成功送出。我會透過您留下的聯絡方式回覆。',
    contactFailure: '留言目前無法送出，請稍後再試，或直接寄信至 alextsou888@gmail.com。',
    privacyNotice: '您留下的聯絡資訊僅用於回覆此留言。請勿提交密碼、公司機密、API Key 或其他敏感資訊。',
    footer: '為 alextsou.com 建置 · 以自動化、驗證與證據實踐工程品質。', backTop: '返回頂端',
    visitCounterLabel: '累計訪問次數：', visitLastVisitLabel: '最近訪問：',
    open: '開啟詳細內容', capabilityDetails: '開啟詳細內容', close: '關閉詳細內容', dialogLabel: '工程技術詳情',
    openImage: '開啟圖解作品',
    language: '語言', selected: '已選取',
  },
} as const;

export const focusItems: PortfolioItem[] = [
  {
    id: 'capability-automation', index: '01', title: c('Automation', '測試自動化'),
    summary: c(
      'Build maintainable automation frameworks that connect test setup, execution, evidence collection, PASS / FAIL criteria, and regression reporting.',
      '建立可維護的測試自動化框架，串接測試設定、執行、證據蒐集、PASS / FAIL 判定與 Regression 報告。',
    ),
    tags: ['Python', 'C#', 'pytest', 'REST API', 'Selenium', 'Appium', 'CI/CD'],
    sections: [
      { label: c('Engineering Workflow', '工程流程'), flow: [c('Configure', '設定'), c('Set Up', '建置環境'), c('Execute', '執行'), c('Collect Evidence', '蒐集證據'), c('Judge', '判定'), c('Report', '報告')] },
      { label: c('Methods', '方法'), bullets: { en: ['Configuration-driven cases and reusable adapters', 'Explicit timeouts, exception handling, and deterministic cleanup', 'Layered unit, integration, and regression coverage'], zh: ['以設定驅動案例與可重用 Adapter', '明確 Timeout、Exception Handling 與確定性 Cleanup', '分層執行 Unit、Integration 與 Regression Coverage'] } },
      section('Tools & Outputs', '工具與輸出', 'Use Python, C#, pytest, REST APIs, browser or mobile automation, structured logs, and CI/CD gates to produce reviewable results and regression reports.', '運用 Python、C#、pytest、REST API、Web / Mobile 自動化、結構化 Log 與 CI/CD Gate，產出可審查結果與 Regression 報告。'),
      section('Design Intent', '設計思維', 'Keep orchestration, interfaces, criteria, evidence, and reporting independently maintainable so failures stay diagnosable.', '讓流程控制、介面、判定、證據與報告可獨立維護，使失敗保持可診斷。'),
    ],
  },
  {
    id: 'capability-validation', index: '02', title: c('Validation', '系統與功能驗證'),
    summary: c(
      'Translate requirements into validation plans, measurable criteria, repeatable test cases, and traceable verification evidence.',
      '將需求轉換成 Validation Plan、可量測 Criteria、可重複 Test Case 與可追蹤的驗證證據。',
    ),
    tags: ['Test Plan', 'Test Case', 'Criteria', 'Functional Test', 'Stress Test', 'Regression', 'Golden Comparison'],
    sections: [
      { label: c('Validation Flow', '驗證流程'), flow: [c('Requirement', '需求'), c('Validation Plan', '驗證計畫'), c('Test Case', '測試案例'), c('Criteria', '判定條件'), c('Execution', '執行'), c('Evidence', '證據'), c('PASS / FAIL', 'PASS / FAIL'), c('Regression', '回歸')] },
      { label: c('Methods', '方法'), bullets: { en: ['Define environment, preconditions, boundaries, and exit criteria', 'Cover normal, negative, stress, and regression scenarios', 'Link requirement, build, configuration, evidence, defect, and result'], zh: ['定義環境、前置條件、邊界與退出條件', '涵蓋正常、負向、壓力與回歸情境', '串接需求、Build、設定、證據、Defect 與結果'] } },
      section('Evidence & Outputs', '證據與輸出', 'Produce measurable criteria, versioned cases, raw evidence, traceable verdicts, coverage gaps, and residual-risk notes.', '產出可量測 Criteria、版本化案例、原始證據、可追蹤判定、Coverage Gap 與殘餘風險說明。'),
      section('Design Intent', '設計思維', 'Keep validation product-neutral and evidence-based so the same reasoning can be reused across devices, services, and integrated systems.', '保持驗證方法的產品中立與證據導向，使同一套推理可跨裝置、服務與整合系統重用。'),
    ],
  },
  {
    id: 'capability-debug-rca', index: '03', title: c('Debug & RCA', '除錯與根因分析'),
    summary: c(
      'Reproduce issues systematically, collect evidence, isolate failing layers, identify root causes, and verify fixes through regression.',
      '透過系統化問題重現、Evidence 蒐集、Layer Isolation 與 Good / Bad 比對定位 Root Cause，並透過 Fix Verification 與 Regression 完成結案。',
    ),
    tags: ['Issue Reproduction', 'Log Analysis', 'Good / Bad', 'Layer Isolation', 'RCA', 'Fix Verification', 'Regression'],
    sections: [
      { label: c('Debug Flow', '除錯流程'), flow: [c('Symptom', '現象'), c('Reproduce', '重現'), c('Evidence', '證據'), c('Isolation', '隔離'), c('RCA', '根因分析'), c('Fix Verification', '修正驗證'), c('Regression', '回歸'), c('Closure', '結案')] },
      { label: c('Methods', '方法'), bullets: { en: ['Freeze versions, configuration, topology, and timestamps', 'Compare known-good and failing states while changing one factor at a time', 'Separate confirmed cause, inference, excluded layers, and remaining uncertainty'], zh: ['固定版本、設定、拓撲與時間戳', '比對 Good / Bad 狀態並一次只改變一個因素', '分別標示已確認原因、推論、已排除層級與剩餘不確定性'] } },
      section('Evidence & Outputs', '證據與輸出', 'Preserve logs, traces, measurements, media, raw responses, timelines, reproduction steps, and regression-ready defect records.', '保存 Log、Trace、量測值、媒體、原始回應、Timeline、重現步驟與可回歸的 Defect 紀錄。'),
      section('Design Intent', '設計思維', 'Treat debugging as controlled narrowing aligned with the site’s Engineering Debug Methodology, without duplicating its full presentation.', '將除錯視為受控縮小問題範圍的流程，並與既有工程除錯方法論一致，但不重複整段內容。'),
    ],
  },
  {
    id: 'capability-system-integration', index: '04', title: c('System Integration', '系統整合'),
    summary: c(
      'Integrate software, instruments, fixtures, and external equipment through defined interfaces, state control, handshakes, and failure handling.',
      '透過明確介面、State Control、Handshake 與 Exception Handling，整合軟體、儀器、治具及外部設備。',
    ),
    tags: ['State Machine', 'Handshake', 'Instrument Control', 'UART', 'TCP/IP', 'Fixture', 'Exception Handling'],
    sections: [
      { label: c('Integration Flow', '整合流程'), flow: [c('Interface Contract', '介面契約'), c('Initialize', '初始化'), c('State Control', '狀態控制'), c('Handshake', '握手'), c('Execute', '執行'), c('Acknowledge', '確認'), c('Recover / Report', '復原 / 報告')] },
      { label: c('Methods', '方法'), bullets: { en: ['Define ownership, direction, timing, and error semantics for every interface', 'Model states, transitions, timeouts, interlocks, and recovery paths explicitly', 'Correlate software, transport, instrument, fixture, and operator-visible evidence'], zh: ['明確定義每個介面的責任、方向、時序與錯誤語意', '明確建模狀態、轉換、Timeout、Interlock 與復原路徑', '關聯軟體、Transport、儀器、治具與操作介面證據'] } },
      section('Tools & Outputs', '工具與輸出', 'Apply state machines, protocol adapters, instrument control, UART or TCP/IP traces, structured logs, and interface-level test evidence.', '運用 State Machine、Protocol Adapter、Instrument Control、UART / TCP/IP Trace、結構化 Log 與介面層驗證證據。'),
      section('Capability Boundary', '能力邊界', 'This is a general integration capability across systems; it does not replace or redefine the employer-neutral ATE / Robot / ESD product domain.', '這是跨系統的一般整合能力，不取代或重新定義保持雇主中立的 ATE / Robot / ESD 產品技術領域。'),
    ],
  },
  {
    id: 'capability-customer-engineering', index: '05', title: c('Customer Engineering', '客戶技術支援'),
    summary: c(
      'Bridge customer environments and internal engineering teams through issue reproduction, evidence, technical communication, fix verification, and closure.',
      '連結客戶環境與內部工程團隊，透過問題重現、Evidence、技術溝通、修正驗證與 Issue Closure 推動問題解決。',
    ),
    tags: ['FAE', 'Issue Reproduction', 'Log Collection', 'Environment Comparison', 'Technical Communication', 'Cross-team', 'Fix Verification'],
    sections: [
      { label: c('Customer Engineering Flow', '客戶工程流程'), flow: [c('Customer Issue', '客戶問題'), c('Environment Reproduction', '環境重現'), c('Evidence', '證據'), c('Internal Isolation', '內部隔離'), c('RD Coordination', 'RD 協作'), c('Fix Verification', '修正驗證'), c('Customer Closure', '客戶結案')] },
      { label: c('Methods', '方法'), bullets: { en: ['Clarify versions, topology, frequency, expected behavior, and acceptance criteria', 'Translate field symptoms into controlled, shareable reproduction cases', 'Communicate evidence, ownership, next actions, and residual risk across teams'], zh: ['釐清版本、拓撲、發生率、預期行為與驗收條件', '將現場現象轉換成受控、可分享的重現案例', '跨團隊溝通證據、責任、下一步與殘餘風險'] } },
      section('Evidence & Outputs', '證據與輸出', 'Deliver environment comparisons, reproduction steps, logs, traces, issue records, fix-verification results, and closure summaries.', '交付環境比對、重現步驟、Log、Trace、Issue 紀錄、修正驗證結果與結案摘要。'),
      section('Capability Boundary', '能力邊界', 'Customer Engineering describes a cross-product problem-solving capability; Android TV / FAE remains a separate Product & Technical Domain.', '客戶技術支援描述跨產品的問題解決能力；Android TV / FAE 仍是獨立的產品與技術領域。'),
    ],
  },
  {
    id: 'capability-test-architecture', index: '06', title: c('Test Architecture', '測試架構設計'),
    summary: c(
      'Design reusable test architecture that separates configuration, device control, execution logic, criteria, evidence, and reporting.',
      '設計可重複使用的測試架構，將 Configuration、Device Control、Execution Logic、Criteria、Evidence 與 Reporting 分層管理。',
    ),
    tags: ['Framework Design', 'Layered Architecture', 'Reusable Modules', 'Configuration', 'Interface Abstraction', 'Traceability', 'Reporting'],
    sections: [
      { label: c('Architecture Flow', '架構流程'), flow: [c('Configuration Layer', '設定層'), c('Interface / Device Layer', '介面 / 裝置層'), c('Execution Layer', '執行層'), c('Criteria / Validation Layer', '判定 / 驗證層'), c('Evidence / Result Layer', '證據 / 結果層'), c('Reporting', '報告')] },
      { label: c('Methods', '方法'), bullets: { en: ['Define stable interfaces between orchestration and device-specific adapters', 'Separate test intent from transport, criteria, persistence, and presentation', 'Make failure states, traceability, and extension points explicit'], zh: ['在流程控制與裝置專屬 Adapter 之間定義穩定介面', '分離測試意圖、Transport、Criteria、Persistence 與 Presentation', '明確定義失敗狀態、Traceability 與擴充點'] } },
      section('Evidence & Outputs', '證據與輸出', 'Produce reusable modules, configuration schemas, interface contracts, test-result models, traceable evidence, and consistent reports.', '產出可重用模組、Configuration Schema、Interface Contract、測試結果模型、可追蹤證據與一致報告。'),
      section('Design Intent', '設計思維', 'Optimize for maintainability, diagnosability, controlled change, and reuse across products without hiding product-specific constraints.', '以可維護性、可診斷性、受控變更與跨產品重用為目標，同時不掩蓋產品專屬限制。'),
    ],
  },
];

const experienceCatalog: PortfolioItem[] = [
  {
    id: 'career-fih', index: '01', title: c('FIH Experience', 'FIH 經歷'),
    summary: c('Automation-platform integration, system and firmware validation, CAN/touch-panel testing, storage reliability, 5G/Wi-Fi performance, and cross-functional engineering support.', '涵蓋自動化平台整合、系統與韌體驗證、CAN / Touch Panel 測試、儲存可靠度、5G / Wi-Fi 效能與跨部門工程支援。'),
    tags: ['FIH', 'Automation', 'System Validation', '5G / Wi-Fi / CAN'],
    career: {
      company: c('FIH / 鴻海富智康', '鴻海富智康 / FIH'),
      jobTitle: c('Technical Manager / Hands-on Test Automation Lead', '技術經理 / Hands-on 測試自動化 Lead'),
      period: '2022/09 – 2026/04',
      tenure: c('3 years 8 months', '3年8個月'),
      management: c('Managed 4 team members', '管理人數4人'),
    },
    sections: [
      section('Overview', '概述', 'FIH engineering work spans automation-platform integration, system and firmware validation, hardware/software debugging, communication performance testing, and cross-functional project support.', 'FIH 工程工作涵蓋自動化平台整合、系統與韌體驗證、硬體 / 軟體 Debug、通訊效能測試與跨部門專案支援。'),
      {
        label: c('Automation Platform & CI', '自動化平台與 CI'),
        bullets: {
          en: ['Python, Shell, Batch, and PowerShell automation', 'Jenkins, GitLab CI, and Docker workflow integration', 'Automated execution, packaging, test, and report generation', 'Linux and Windows validation environments'],
          zh: ['Python、Shell、Batch 與 PowerShell 自動化', 'Jenkins、GitLab CI 與 Docker 流程整合', '自動執行、封裝、測試與報告產生', 'Linux 與 Windows 驗證環境'],
        },
      },
      {
        label: c('System & Firmware Validation', '系統與韌體驗證'),
        bullets: {
          en: ['EVT / DVT / PVT-stage software and system validation', 'Driver, kernel, and functional stability testing', 'Failure reproduction, log analysis, and root-cause isolation', 'Regression execution and traceable evidence'],
          zh: ['EVT / DVT / PVT 階段軟體與系統驗證', 'Driver、Kernel 與功能穩定度測試', '失敗重現、Log 分析與根因隔離', '回歸執行與可追溯證據'],
        },
      },
      {
        label: c('Vehicle, CAN & Touch Panel', '車載、CAN 與 Touch Panel'),
        bullets: {
          en: ['C / C++ CAN test-module development', 'ECU simulator, DUT, and CAN Bus validation', 'Touch-panel automation with NXP S32 tooling and Python-CAN', 'Functional, coverage, and randomized testing'],
          zh: ['C / C++ CAN 測試模組開發', 'ECU Simulator、DUT 與 CAN Bus 驗證', '使用 NXP S32 工具與 Python-CAN 進行 Touch Panel 自動化', '功能、覆蓋與隨機化測試'],
        },
      },
      {
        label: c('Storage & Reliability', '儲存與可靠度'),
        bullets: {
          en: ['eMMC reliability testing with FIO workloads', 'Trim / Discard and lifetime-cycle validation', 'Long-duration stress and high-temperature pressure testing', 'SMART log analysis, ECC error review, and system-stability checks'],
          zh: ['使用 FIO Workload 進行 eMMC 可靠度測試', 'Trim / Discard 與生命週期驗證', '長時間壓力與高溫測試', 'SMART Log 分析、ECC 錯誤檢視與系統穩定度確認'],
        },
      },
      {
        label: c('5G / Wi-Fi Performance', '5G / Wi-Fi 效能'),
        bullets: {
          en: ['5G router and Wi-Fi validation automation', 'iPerf, Wireshark, and Keysight UXM analysis', 'DL / UL throughput, latency, and packet-loss validation', 'Distance, angle, interference, GNSS, USB, and coexistence scenarios'],
          zh: ['5G Router 與 Wi-Fi 驗證自動化', '使用 iPerf、Wireshark 與 Keysight UXM 分析', 'DL / UL Throughput、Latency 與 Packet Loss 驗證', '距離、角度、干擾、GNSS、USB 與共存情境'],
        },
      },
      {
        label: c('Debug & Cross-functional Support', 'Debug 與跨部門支援'),
        bullets: {
          en: ['Factory and field issue reproduction', 'HW / SW debugging and root-cause analysis', 'RD, validation, and project-team coordination', 'Onsite technical support and issue tracking'],
          zh: ['工廠與現場問題重現', 'HW / SW Debug 與根因分析', 'RD、驗證與專案團隊協作', '現場技術支援與 Issue 追蹤'],
        },
      },
      {
        label: c('Engineering Value', '工程價值'),
        bullets: {
          en: ['Connect automation, validation, equipment data, and reports into repeatable engineering workflows', 'Improve diagnosability through logs, traceability, and structured result review', 'Support technical teams from development-stage validation through issue closure'],
          zh: ['將自動化、驗證、設備資料與報告串接為可重複的工程流程', '透過 Log、追溯性與結構化結果審查提升可診斷性', '從開發階段驗證到問題結案支援技術團隊'],
        },
      },
    ],
  },
  {
    id: 'career-novatek', index: '02', title: c('Novatek Experience', '聯詠科技經歷'),
    summary: c('Nearly nine years of progressive test automation and SoC validation across Wi-Fi FPGA/chip, Camera SoC, AI/NPU, and Audio AI engineering.', '近九年的測試自動化與 SoC 驗證經歷，依序涵蓋 Wi-Fi FPGA / 晶片、Camera SoC、AI/NPU 與 Audio AI 工程。'),
    tags: ['Wi-Fi FPGA', 'Camera SoC', 'AI/NPU', 'Audio AI', 'Python Automation'],
    career: {
      company: c('Novatek Microelectronics Corp.', '聯詠科技股份有限公司'),
      cardCompany: c('Novatek Microelectronics', '聯詠科技'),
      jobTitle: c('Principal Software Engineer / Test Automation & SoC Validation', '軟體開發主任工程師 / 測試自動化與 SoC 驗證'),
      period: '2013/10 – 2022/07',
      displayPeriod: c('2013/10 – 2022/07', '2013/10 – 2022/07'),
      tenure: c('8 years 10 months', '8年10個月'),
    },
    sections: [
      {
        label: c('Overview', '概述'),
        body: c('The Novatek experience progressed through four connected technical phases within one continuous employment period: Wi-Fi FPGA / Chip Validation → Camera SoC Automation → AI/NPU Validation → Audio AI Validation.', '聯詠任職經歷在同一段連續聘僱期間內，依序發展為四個相互銜接的技術階段：Wi-Fi FPGA / 晶片驗證 → Camera SoC 自動化 → AI/NPU 驗證 → Audio AI 驗證。'),
        flow: [c('Wi-Fi FPGA / Chip Validation', 'Wi-Fi FPGA / 晶片驗證'), c('Camera SoC / SDK Automation', 'Camera SoC / SDK 自動化'), c('AI / NPU Validation', 'AI / NPU 驗證'), c('Audio AI Validation', 'Audio AI 驗證')],
      },
      {
        label: c('Wi-Fi FPGA / Chip Validation · 2013/10 – 2019/04', 'Wi-Fi FPGA / 晶片驗證 · 2013/10 – 2019/04'),
        bullets: {
          en: ['Wi-Fi FPGA / Chip and MAC Layer validation', 'Python automation with SCPI / USB / LAN equipment control', 'Power Supply, Oscilloscope, and VeriWave integration', 'Throughput, PER, Latency, Tx Power, Rx Sensitivity, and RvR validation', 'Windows / Linux Driver and Router / API validation', 'Negative, Boundary, and Regression testing', 'Wi-Fi Alliance 11n / 11ac and SGS certification validation', 'Jenkins / GitLab CI integration'],
          zh: ['Wi-Fi FPGA / 晶片與 MAC Layer 驗證', '使用 Python 自動化整合 SCPI / USB / LAN 設備控制', 'Power Supply、Oscilloscope 與 VeriWave 整合', 'Throughput、PER、Latency、Tx Power、Rx Sensitivity 與 RvR 驗證', 'Windows / Linux Driver 與 Router / API 驗證', 'Negative、Boundary 與 Regression 測試', 'Wi-Fi Alliance 11n / 11ac 與 SGS 認證驗證', 'Jenkins / GitLab CI 整合'],
        },
        flow: [c('Test Config', '測試設定'), c('Python Automation', 'Python 自動化'), c('DUT / FPGA', 'DUT / FPGA'), c('VeriWave / Instrument', 'VeriWave / 儀器'), c('Measurement', '量測'), c('Criteria', '判定條件'), c('PASS / FAIL', 'PASS / FAIL'), c('Report', '報告')],
      },
      {
        label: c('Camera SoC / SDK Automation · 2019/04 – 2022/07', 'Camera SoC / SDK 自動化 · 2019/04 – 2022/07'),
        bullets: {
          en: ['IP Camera / Video SoC SDK automation with Python test framework and Pytest', 'PySerial, SDK / CGI, UART, and Linux interfaces', 'H.264 / H.265 at 4K / 2K / 1080P', 'FPS, GOP, Bitrate, and CBR / VBR validation', 'Cold Boot, Warm Boot, Stress, Stability, and Memory Leak monitoring', 'Firmware programming and Power-cycle automation', 'Jenkins CI/CD integration'],
          zh: ['使用 Python test framework 與 Pytest 建立 IP Camera / Video SoC SDK 自動化', '整合 PySerial、SDK / CGI、UART 與 Linux 介面', '驗證 H.264 / H.265 與 4K / 2K / 1080P', '驗證 FPS、GOP、Bitrate 與 CBR / VBR', 'Cold Boot、Warm Boot、Stress、Stability 與 Memory Leak 監控', 'Firmware programming 與 Power-cycle 自動化', 'Jenkins CI/CD 整合'],
        },
      },
      {
        label: c('AI / NPU Validation', 'AI / NPU 驗證'),
        body: c('AI/NPU model testing and validation focused on pattern generation, controlled execution, numerical comparison, and regression—not ownership of AI model architecture, AI compiler architecture, or the full model-training pipeline.', 'AI/NPU 模型測試與驗證聚焦 Pattern 產生、受控執行、數值比對與回歸；不代表負責 AI 模型架構、AI Compiler 架構或完整模型訓練流程。'),
        bullets: {
          en: ['Python Pattern Generator and Binary Pattern generation', 'Pattern.bin execution through Simulator, FPGA, and Target', 'output.bin and golden.bin automated comparison', 'Bit-accurate validation and layer-by-layer comparison where applicable', 'PASS / FAIL automation and Regression Test', 'Validated examples: MobileNetV2, ResNet-18, ResNet-50, VGG16, and VGG19'],
          zh: ['Python Pattern Generator 與 Binary Pattern 產生', '使用 Simulator、FPGA 與 Target 執行 Pattern.bin', '自動比對 output.bin 與 golden.bin', 'Bit-accurate 驗證，以及適用情境下的 Layer-by-Layer 比對', 'PASS / FAIL 自動化與 Regression Test', '驗證範例：MobileNetV2、ResNet-18、ResNet-50、VGG16 與 VGG19'],
        },
        flow: [c('Model / Test Data', '模型 / 測試資料'), c('Pattern Generator', 'Pattern Generator'), c('Pattern.bin', 'Pattern.bin'), c('Simulator / FPGA / Target', 'Simulator / FPGA / Target'), c('Output.bin', 'Output.bin'), c('Golden Comparison', 'Golden 比對'), c('Bit-accurate Validation', 'Bit-accurate 驗證'), c('PASS / FAIL', 'PASS / FAIL')],
      },
      {
        label: c('Audio AI Validation', 'Audio AI 驗證'),
        body: c('Smart-speaker and Audio AI model testing / validation using repeatable datasets and scripts, with conservative ownership boundaries around model training.', '以可重複資料集與腳本進行智慧音箱及 Audio AI 模型測試 / 驗證，並對模型訓練維持保守的責任邊界。'),
        bullets: {
          en: ['Alexa / wake-word validation', 'Localization and noise-reduction validation', 'Event recognition and baby-cry recognition', 'Python, Gradio, Docker, datasets, and testing scripts', 'Academic collaboration where applicable'],
          zh: ['Alexa / Wake-word 驗證', '定位與降噪驗證', '事件辨識與嬰兒哭聲辨識', 'Python、Gradio、Docker、資料集與測試腳本', '適用情境下的學術合作'],
        },
      },
      {
        label: c('Automation Architecture', '自動化架構'),
        flow: [c('Requirement', '需求'), c('Python Test Case', 'Python 測試案例'), c('Device / SDK / Instrument Control', '裝置 / SDK / 儀器控制'), c('Data Collection', '資料收集'), c('Automated Analysis', '自動分析'), c('Criteria', '判定條件'), c('PASS / FAIL', 'PASS / FAIL'), c('Regression Report', '回歸報告'), c('Jenkins CI/CD', 'Jenkins CI/CD')],
      },
      {
        label: c('Debug / Engineering Method', 'Debug / 工程方法'),
        flow: [c('Reproduce', '重現'), c('Capture Log / Data', '擷取 Log / Data'), c('Expected vs Actual', '預期與實際比對'), c('Isolate HW / FW / SDK / Automation', '隔離 HW / FW / SDK / 自動化層'), c('Root Cause Tracking', '根因追蹤'), c('Fix Verification', '修正驗證'), c('Regression Test', '回歸測試')],
      },
    ],
  },
  {
    id: 'career-novatek-wifi', index: 'NTK_A', title: c('Novatek · Wi-Fi / FPGA / MAC Validation', '聯詠 · Wi-Fi / FPGA / MAC 驗證'),
    summary: c('Wi-Fi FPGA / chip validation with MAC layer coverage, certification-oriented checks, Python automation, SCPI, and RF equipment.', 'Wi-Fi FPGA / 晶片驗證，涵蓋 MAC Layer、認證導向檢查、Python 自動化、SCPI 與 RF 設備。'),
    tags: ['Wi-Fi', 'FPGA', 'MAC', 'SCPI'],
    sections: [
      { label: c('Validation Scope', '驗證範圍'), bullets: { en: ['Wi-Fi FPGA / chip validation', 'MAC Layer', 'Wi-Fi Alliance / certification', 'Wi-Fi 11n / 11ac certification', 'Windows / Linux test environment'], zh: ['Wi-Fi FPGA / 晶片驗證', 'MAC Layer', 'Wi-Fi Alliance / 認證', 'Wi-Fi 11n / 11ac 認證', 'Windows / Linux 測試環境'] } },
      { label: c('Automation and Instruments', '自動化與儀器'), bullets: { en: ['Python automation', 'VeriWave', 'SCPI', 'PSU / scope / RF equipment', 'Throughput, PER, latency, TX/RX waveform'], zh: ['Python 自動化', 'VeriWave', 'SCPI', 'PSU / 示波器 / RF 設備', 'Throughput、PER、Latency、TX/RX Waveform'] } },
    ],
  },
  {
    id: 'career-novatek-camera', index: 'NTK_B', title: c('Novatek · Camera / IPCam Validation', '聯詠 · Camera / IPCam 驗證'),
    summary: c('Camera SoC SDK validation, codec mode checks, pytest cases, boot/stress automation, memory monitoring, and Jenkins integration.', 'Camera SoC SDK 驗證、Codec 模式檢查、pytest 案例、開機 / 壓力測試自動化、記憶體監控與 Jenkins 整合。'),
    tags: ['Camera SoC', 'pytest', 'H.264/H.265', 'Jenkins'],
    sections: [
      { label: c('Coverage', '覆蓋內容'), bullets: { en: ['Camera SoC SDK validation', 'Python test cases and pytest', 'H.264 / H.265, 4K / 2K / 1080P', 'Bitrate, CBR / VBR', 'Cold Boot / Warm Boot, Stress Test'], zh: ['Camera SoC SDK 驗證', 'Python test cases 與 pytest', 'H.264 / H.265、4K / 2K / 1080P', 'Bitrate、CBR / VBR', 'Cold Boot / Warm Boot、Stress Test'] } },
      { label: c('Debug and Automation', 'Debug 與自動化'), bullets: { en: ['PySerial', 'Relay / Power Supply', 'Memory Leak monitoring', 'adb / telnet', '/proc/meminfo and /proc/slabinfo', 'Jenkins integration'], zh: ['PySerial', 'Relay / Power Supply', 'Memory Leak 監控', 'adb / telnet', '/proc/meminfo 與 /proc/slabinfo', 'Jenkins 整合'] } },
    ],
  },
  {
    id: 'career-novatek-ai', index: 'NTK_C', title: c('Novatek · AI / NPU Validation', '聯詠 · AI / NPU 驗證'),
    summary: c('Model/test-pattern execution and result comparison for CNN validation flows such as ResNet, MobileNetV2, and VGG16.', '針對 ResNet、MobileNetV2、VGG16 等 CNN 驗證流程，執行模型 / 測試 Pattern 並比對結果。'),
    tags: ['AI/NPU', 'Pattern.bin', 'golden.bin', 'PASS/FAIL'],
    sections: [
      { label: c('Technical Scope', '技術範圍'), bullets: { en: ['ResNet18, ResNet50, MobileNetV2, VGG16 / CNN models', 'Pattern Generation and Pattern.bin', 'Simulator and FPGA execution modes', 'output.bin and golden.bin numerical comparison', 'Bit-accurate and layer-by-layer comparison', 'Regression testing and PASS / FAIL decision', 'Python automation'], zh: ['ResNet18、ResNet50、MobileNetV2、VGG16 / CNN models', 'Pattern Generation 與 Pattern.bin', 'Simulator 與 FPGA 執行模式', 'output.bin 與 golden.bin 數值比對', 'Bit-accurate 與 layer-by-layer comparison', 'Regression testing 與 PASS / FAIL 判定', 'Python 自動化'] } },
      section('Responsibility Statement', '責任說明', 'The responsibility centers on model/test-pattern execution, numerical result comparison, regression testing, and validation reporting.', '責任範圍聚焦驗證用模型 / 測試 Pattern 執行、數值結果比對、回歸測試與驗證報告。'),
    ],
  },
  {
    id: 'career-audio-ai', index: 'NTK_D', title: c('Novatek · Audio AI Validation', '聯詠 · Audio AI 驗證'),
    summary: c('Cooperation on audio recognition validation for smart speaker / Audio AI chip scenarios with Python, Gradio, Docker, datasets, and scripts.', '協作智慧音箱 / Audio AI 晶片的語音辨識驗證，使用 Python、Gradio、Docker、資料集與測試腳本。'),
    tags: ['Audio AI', 'Python', 'Gradio', 'Docker'],
    sections: [
      { label: c('Validation Topics', '驗證主題'), bullets: { en: ['Smart speaker / Audio AI chip', 'Alexa / wake word', 'Localization', 'Noise reduction', 'Baby-cry / event recognition'], zh: ['智慧音箱 / Audio AI 晶片', 'Alexa / Wake word', '定位', '降噪', '嬰兒哭聲 / 事件辨識'] } },
      section('Tools and Data', '工具與資料', 'Python, Gradio, Docker, test datasets, and test scripts support repeatable audio-recognition validation.', '以 Python、Gradio、Docker、測試資料集與測試腳本支援可重複的語音辨識驗證。'),
    ],
  },
  {
    id: 'career-tpv-fae', index: '03', title: c('TPV Experience', '冠捷科技經歷'),
    summary: c('FAE debugging, Android TV automation testing, certification support, cross-team coordination, and field engineering.', 'FAE 除錯、Android TV 自動化測試、認證支援、跨團隊協作與現場工程支援。'),
    tags: ['Customer Support', 'Android TV', 'Automation', 'System Debug', 'Certification'],
    career: {
      company: c('TPV / 冠捷科技', '冠捷科技 / TPV'),
      cardCompany: c('TPV Technology', '冠捷科技（TPV）'),
      jobTitle: c('FAE Engineer', 'FAE 工程師'),
      period: '2008/09 – 2013/10',
      tenure: c('5 years 2 months', '5年2個月'),
    },
    sections: [
      section('FAE Role Overview', 'FAE 職務概述', 'Customer-facing engineering support for TV / Android TV products: clarify customer symptoms, reproduce issues in controlled environments, collect evidence, coordinate RD / QA / vendor analysis, verify fixes, and close issues with traceable validation results.', '面向客戶的 TV / Android TV 產品工程支援：釐清客戶現象、在受控環境重現問題、收集證據、協調 RD / QA / Vendor 分析、驗證修正，並以可追溯驗證結果完成結案。'),
      {
        label: c('Customer Technical Support', '客戶技術支援'),
        body: c('Support product introduction and system integration by translating customer questions into technical checks, environment assumptions, reproducible steps, and RD-ready feedback.', '支援產品導入與系統整合，將客戶問題轉換為技術檢查、環境假設、可重現步驟與可交付 RD 分析的回饋。'),
        bullets: {
          en: ['Explain product behavior and technical specifications in customer context', 'Support system integration by confirming configuration, version, and expected behavior', 'Analyze customer reports and identify what evidence is still missing', 'Use remote or on-site debugging to reproduce symptoms and collect logs', 'Convert findings into technical feedback that RD / QA can act on'],
          zh: ['依客戶情境說明產品行為與技術規格', '透過確認設定、版本與預期行為支援系統整合', '分析客戶回報並判斷仍缺少哪些工程證據', '以遠端或現場 Debug 重現現象並收集 Log', '將發現整理為 RD / QA 可採取行動的技術回饋'],
        },
      },
      {
        label: c('Issue Reproduction & RCA', '問題重現與根因分析'),
        body: c('Turn incomplete customer reports into controlled evidence by reproducing the issue, comparing good and bad baselines, isolating the failing layer, and validating the fix before closure.', '將不完整的客戶回報轉換為受控證據：重現問題、比對 Good / Bad 基準、隔離失敗 Layer，並在結案前完成修正驗證。'),
        flow: [c('Customer Report', '客戶回報'), c('Clarify Environment', '釐清環境'), c('Reproduce', '重現'), c('Capture Log / Evidence', '擷取 Log / 證據'), c('Compare Good vs Bad', 'Good vs Bad 比對'), c('Isolate Layer', '隔離 Layer'), c('RD / Vendor Analysis', 'RD / Vendor 分析'), c('Fix Verification', '修正驗證'), c('Regression', '回歸'), c('Customer Closure', '客戶結案')],
      },
      {
        label: c('Automation Development', '自動化工具開發'),
        body: c('I used automation to make customer scenarios repeatable: execute UI/action sequences, collect logs and screenshots where appropriate, rerun validation, and convert reproduced issues into regression support.', '我使用自動化讓客戶情境可重複：執行 UI / 動作序列、依需要收集 Log 與截圖、重跑驗證，並將已重現問題轉為回歸支援。'),
        bullets: {
          en: ['Python', 'ADB', 'UIAutomator', 'Appium', 'Android / Linux'],
          zh: ['Python', 'ADB', 'UIAutomator', 'Appium', 'Android / Linux'],
        },
      },
      {
        label: c('Validation & Certification', '驗證與認證'),
        body: c('Use validation and certification support to confirm whether a fix works in the original scenario and whether adjacent functions remain stable.', '透過驗證與認證支援確認修正是否能解決原始情境，並確認相鄰功能維持穩定。'),
        bullets: {
          en: ['Functional Test', 'Compatibility Test', 'OTA', 'Streaming', 'Stress Test', 'Google CTS / GTVS support', 'Regression validation'],
          zh: ['功能測試', '相容性測試', 'OTA', '串流測試', '壓力測試', 'Google CTS / GTVS 支援', '回歸驗證'],
        },
      },
      {
        label: c('Cross-Team Collaboration', '跨部門合作'),
        body: c('Coordinate Customer, RD, QA, and Chip Vendor communication with evidence packages, version notes, bug-tracking records, fix-verification results, and closure summaries.', '以證據 Package、版本資訊、Bug 追蹤紀錄、修正驗證結果與結案摘要協調 Customer、RD、QA 與 Chip Vendor。'),
        bullets: {
          en: ['Customer', 'RD', 'QA', 'Chip Vendor'],
          zh: ['Customer', 'RD', 'QA', 'Chip Vendor'],
        },
      },
      {
        label: c('Documentation & Training', '文件與教育訓練'),
        body: c('Document the reproduction path, debug evidence, validation scope, and customer-facing explanation so similar issues can be handled consistently.', '記錄問題重現路徑、Debug 證據、驗證範圍與面向客戶的說明，使相似問題能被一致處理。'),
        bullets: {
          en: ['Test Plan', 'Debug Guide', 'SOP', 'Training Material', 'Troubleshooting documentation'],
          zh: ['測試計畫', 'Debug Guide', 'SOP', '教育訓練教材', 'Troubleshooting 文件'],
        },
      },
      {
        label: c('Field Engineering', '現場工程支援'),
        body: c('Support remote or on-site investigation by setting up the test environment, initializing the system, reproducing the issue, and keeping customer communication tied to evidence.', '透過測試環境架設、系統初始化、問題重現與以證據為基礎的客戶溝通，支援遠端或現場調查。'),
        bullets: {
          en: ['Remote technical support', 'On-site technical support', 'Test environment setup', 'System initialization', 'Issue reproduction', 'Customer communication'],
          zh: ['遠端技術支援', '現場技術支援', '測試環境架設', '系統初始化', '問題重現', '客戶溝通'],
        },
      },
      {
        label: c('Typical FAE Debug Scenarios', '典型 FAE 除錯情境'),
        body: c('Recruiter-safe examples of the engineering flow used for customer issue reproduction and closure. These are scenario patterns, not confidential customer incidents.', '以下為客戶問題重現與結案常用的工程流程範例；這些是情境類型，不是機密客戶事件。'),
        bullets: {
          en: [
            'Customer environment differs from internal lab: reproduce environment → collect logs → compare baseline → isolate application / framework / driver / SDK / system layer → fix verification → regression',
            'Issue appears only on a specific software / SDK version: version comparison → good-vs-bad build → reproduce → logs / trace → isolate change → fix verification',
            'Intermittent UI / application failure: repeatable action sequence → ADB / application logs → screenshot / trace where appropriate → frequency / condition isolation → fix verify → regression',
            'OTA / streaming / connectivity regression: baseline version → upgrade / scenario execution → failure evidence → connectivity / application / system isolation → fix verification',
            'Compatibility issue after system integration: customer configuration → compare supported baseline → reproduce → isolate app / framework / driver / SDK → RD / vendor coordination → closure',
          ],
          zh: [
            '客戶環境與內部 Lab 不同：重建環境 → 收集 Log → 比對基準 → 隔離 Application / Framework / Driver / SDK / System Layer → 修正驗證 → 回歸',
            '問題只出現在特定軟體 / SDK 版本：版本比對 → Good-vs-Bad Build → 重現 → Log / Trace → 隔離變更 → 修正驗證',
            '間歇性 UI / App 失效：可重複操作序列 → ADB / App Log → 依需要擷取截圖 / Trace → 發生頻率與條件隔離 → 修正驗證 → 回歸',
            'OTA / Streaming / 連線回歸：Baseline 版本 → 升級 / 情境執行 → 失敗證據 → 連線 / App / System 隔離 → 修正驗證',
            '系統整合後相容性問題：客戶設定 → 比對支援基準 → 重現 → 隔離 App / Framework / Driver / SDK → RD / Vendor 協調 → 結案',
          ],
        },
      },
      {
        label: c('Engineering Value', '工程價值'),
        bullets: {
          en: ['Improves reproducibility', 'Provides clearer debug evidence', 'Shortens communication loops between Customer / FAE / RD / QA', 'Supports repeatable fix verification', 'Improves technical issue closure'],
          zh: ['提升問題可重現性', '提供更清楚的除錯證據', '縮短 Customer / FAE / RD / QA 之間的溝通迴路', '支援可重複的修正驗證', '改善技術問題結案品質'],
        },
      },
    ],
  },
  {
    id: 'career-management-validation', index: '04', title: c('Compal Experience', '仁寶電腦經歷'),
    summary: c('Software/system integration, test management, team leadership, field trial, wireless validation, WHQL/GCF, BIOS/driver validation, and vendor coordination.', '軟體 / 系統整合、測試管理、團隊帶領、Field trial、無線驗證、WHQL/GCF、BIOS / Driver 驗證與供應商協調。'),
    tags: ['Management', 'System Validation', 'Wireless', 'WHQL/GCF'],
    career: {
      company: c('Compal / 仁寶電腦', '仁寶電腦 / Compal'),
      cardCompany: c('Compal Electronics', '仁寶電腦'),
      jobTitle: c('Software Design Validation Section Manager', '軟體設計驗證課長'),
      period: '2002/07 – 2008/09',
      tenure: c('6 years 3 months', '6年3個月'),
      management: c('Managed approximately 13 team members', '管理約13人'),
    },
    sections: [
      { label: c('Engineering Scope', '工程範圍'), bullets: { en: ['Software/system integration', 'Project/test management', 'Team leadership and resource allocation', 'Test planning and SOP', 'Field trial and wireless validation', 'WHQL, GCF, BIOS / driver validation', 'Vendor coordination and customer / cross-functional communication'], zh: ['軟體 / 系統整合', '專案 / 測試管理', '團隊帶領與資源分配', '測試規劃與 SOP', 'Field trial 與無線驗證', 'WHQL、GCF、BIOS / Driver 驗證', '供應商協調與客戶 / 跨部門溝通'] } },
    ],
  },
];

export const experienceItems = experienceCatalog.filter((item) => Boolean(item.career));

export const careerSnapshot = {
  name: c('Alex Tsou', '鄒志清'),
  role: c(
    'Senior Test Automation / System Validation / ATE / Technical FAE',
    '資深測試自動化 / 系統驗證 / ATE / Technical FAE',
  ),
  experience: c('21+ Years Experience', '21–22 年工作經驗'),
  education: c(
    'National Cheng Kung University · Electrical Engineering',
    '國立成功大學 · 電機工程學系',
  ),
  summary: c(
    '21+ years across test automation, system validation, FAE, camera / AI validation, and ATE engineering.',
    '21+ 年跨越軟體自動化、系統驗證、FAE、Camera / AI 與 ATE 的工程經驗。',
  ),
  facts: [
    {
      label: c('Target Roles', '目標職務'),
      values: [
        c('Senior Test Automation Engineer', '資深測試自動化工程師'),
        c('System Validation Engineer', '系統驗證工程師'),
        c('ATE Automation Engineer', 'ATE 自動化工程師'),
        c('Technical FAE', 'Technical FAE'),
      ],
    },
    { label: c('Professional Experience', '工作經驗'), values: [c('21+ years', '21–22 年')] },
    {
      label: c('Education', '學歷'),
      values: [
        c('National Cheng Kung University', '國立成功大學'),
        c('Department of Electrical Engineering', '電機工程學系'),
      ],
    },
    { label: c('Location', '所在地'), values: [c('Taiwan', '台灣')] },
    {
      label: c('Core Focus', '核心領域'),
      values: [c('Automation · System Validation · FAE · Camera / AI · ATE', 'Automation · System Validation · FAE · Camera / AI · ATE')],
    },
    {
      label: c('Key Technologies', '主要技術'),
      values: [c('Python / C# · HW/SW Integration · Test Automation · Debug / RCA · CI/CD', 'Python / C# · HW/SW Integration · Test Automation · Debug / RCA · CI/CD')],
    },
  ],
};

export const domainExperiences: DomainExperience[] = [
  {
    id: 'ai-npu',
    index: '01',
    title: c('AI / NPU', 'AI / NPU'),
    summary: c(
      'Automated AI/NPU validation using deterministic test patterns, target execution, golden-output comparison, mismatch analysis, and regression evidence.',
      '透過 Python 建立測試 Pattern、執行 FPGA / NPU 驗證、Golden Output 比對、Mismatch 分析與 Regression，自動化產生可追蹤的 PASS / FAIL 證據。',
    ),
    tags: ['Python', 'Pattern Generation', 'FPGA / NPU', 'Golden Comparison', 'Bit-accurate', 'Regression'],
    related: { itemId: 'case-ai-npu', label: c('Related Case Study', '相關工程案例') },
  },
  {
    id: 'wifi-connectivity',
    index: '02',
    title: c('Wi-Fi / Connectivity', 'Wi-Fi / 連線驗證'),
    summary: c(
      'Wi-Fi and connectivity validation covering FPGA/chip verification, MAC-level software testing, regression, and certification pre-validation.',
      'Wi-Fi FPGA / Chip 驗證、MAC 層軟體測試、Connectivity Regression 與認證前測相關驗證經驗。',
    ),
    tags: ['Wi-Fi', 'FPGA Validation', 'MAC Validation', 'Connectivity', 'Regression', 'Certification Pre-test', 'Automation'],
    related: { itemId: 'visual-novatek-wifi', label: c('Related Technical Brief', '相關技術圖解') },
  },
  {
    id: 'android-tv-fae',
    index: '03',
    title: c('Android TV / FAE', 'Android TV / FAE 客戶技術支援'),
    summary: c(
      'Customer-facing engineering support covering issue reproduction, log/evidence collection, layer isolation, fix verification, regression, certification support, and technical closure.',
      '面向客戶的技術支援，涵蓋問題重現、Log / Evidence 蒐集、問題隔離、修正驗證、Regression、認證支援與技術結案。',
    ),
    tags: ['Customer Support', 'Android / Linux', 'ADB', 'UIAutomator / Appium', 'RCA', 'CTS / GTVS', 'Jira / Jenkins'],
    related: { itemId: 'case-fae-rca', label: c('Related Case Study', '相關工程案例') },
  },
  {
    id: 'ate-robot-esd',
    index: '04',
    title: c('ATE / Robot / ESD', 'ATE / Robot / ESD 系統整合'),
    summary: c(
      'ATE-side automation and equipment integration using state-machine control, Robot handshake, ESD sequencing, measurement validation, and traceable PASS / FAIL evidence.',
      '以 ATE 端自動化進行設備整合，涵蓋 State Machine、Robot Handshake、ESD 流程、量測驗證與可追蹤 PASS / FAIL 證據。',
    ),
    tags: ['C#', 'Python', 'ATE', 'Robot', 'ESD', 'State Machine', 'Traceability'],
    related: { itemId: 'case-ate-robot-esd', label: c('Related Case Study', '相關工程案例') },
  },
  {
    id: 'industrial-vision-aoi',
    index: '05',
    title: c('Industrial Vision / AOI', '工業視覺 / AOI'),
    positioning: c('Engineering Practice / Technical Domain', '工程實作 / 技術領域'),
    summary: c(
      'Industrial-vision engineering practice covering ROI, thresholding, morphology, blob/shape analysis, dimensional measurement, and false-NG / false-OK debugging.',
      '工業視覺工程實作，涵蓋 ROI、Threshold、Morphology、Blob / Shape Analysis、尺寸量測，以及 False NG / False OK 除錯。',
    ),
    tags: ['OpenCV', 'ROI / Threshold', 'Blob / Morphology', 'Shape / Measurement', 'False NG / False OK', 'Vision Debug'],
  },
  {
    id: 'camera-imaging',
    index: '06',
    title: c('Camera / Imaging', 'Camera / 影像驗證'),
    summary: c(
      'Camera SoC and SDK validation using Python automation for ISP/codec settings, snapshot/video capture, image/video criteria, FPS/bitrate checks, and regression debugging.',
      'Camera SoC / SDK 驗證，使用 Python 自動化控制 ISP / Codec、Snapshot / Video Capture、影像與影音規格判定、FPS / Bitrate 檢查與 Regression Debug。',
    ),
    tags: ['Camera SoC', 'Python Automation', 'ISP / Codec', 'RAW / YUV', 'FPS / Bitrate', 'SSIM', 'Regression'],
    related: { itemId: 'camera', label: c('Related Technical Brief', '相關技術說明') },
  },
];

export const resumeEducation = {
  university: c('National Cheng Kung University', '國立成功大學'),
  department: c('Department of Electrical Engineering', '電機工程學系'),
  degree: c('Bachelor’s Degree', '大學畢業'),
  period: '1996/09 – 2000/06',
};

export const resumeCoreGroups = [
  { title: c('Core Competencies', '核心能力'), items: [c('Automation architecture, validation planning, debug/RCA, cross-functional coordination, traceability, and production-safe verdict design.', '自動化架構、驗證規劃、Debug / RCA、跨部門協調、追溯性與產線安全判定設計。')] },
  { title: c('Experience Overview', '經歷總覽'), items: [c('FIH engineering experience, Novatek validation work, TPV FAE support, and earlier system-validation management experience are represented in the interactive timeline.', 'FIH 工程經歷、聯詠驗證工作、冠捷 FAE 支援，以及早期系統驗證管理經驗已整理於互動時間軸。')] },
];

export const resumeProjectGroups = [
  { title: c('Selected Projects', '精選專案'), items: [c('Robot + ESD automation, Wi-Fi / FPGA validation, Camera / IPCam validation, AI/NPU validation, Audio AI validation, Android TV FAE automation, REST/WebUI/API automation, and CI/CD automation.', 'Robot + ESD 自動化、Wi-Fi / FPGA 驗證、Camera / IPCam 驗證、AI/NPU 驗證、Audio AI 驗證、Android TV FAE 自動化、REST/WebUI/API 自動化與 CI/CD 自動化。')] },
  { title: c('Leadership / Project Management', '領導 / 專案管理'), items: [c('Test planning, resource coordination, SOP, field trial, vendor coordination, customer communication, and cross-functional issue tracking.', '測試規劃、資源協調、SOP、Field trial、供應商協調、客戶溝通與跨部門問題追蹤。')] },
];

export const skillCategories = [
  { title: c('Programming', '程式語言'), skills: ['Python', 'C', 'C++', 'C#', 'Shell / Batch'] },
  { title: c('Automation', '自動化'), skills: ['pytest', 'Selenium', 'Playwright', 'Robot Framework', 'Appium', 'UIAutomator', 'Postman'] },
  { title: c('DevOps', 'DevOps'), skills: ['Jenkins', 'GitLab CI', 'GitHub', 'Docker'] },
  { title: c('Test / Validation', '測試 / 驗證'), skills: ['ATE', 'Camera', 'AI/NPU', 'Audio AI', 'Wi-Fi', '5G', 'CAN', 'GNSS', 'Android / Linux', 'Hardware/software integration'] },
  { title: c('Tools / Interfaces', '工具 / 介面'), skills: ['SCPI', 'DMM', 'Power Supply', 'VeriWave', 'Wireshark', 'iPerf', 'CANoe / CAPL', 'Jira', 'Confluence'] },
];

export const engineeringDebugMethodology = {
  title: c('Engineering Debug Methodology', '工程除錯方法論'),
  lead: c(
    'I focus on reproducible evidence, measurable criteria, and traceable engineering decisions rather than trial-and-error debugging.',
    '我重視可重現的問題、可量測的判定條件，以及可追蹤的工程證據，而不是只靠反覆嘗試進行 Debug。',
  ),
  flow: [
    c('Requirement', '需求'),
    c('Reproduce', '問題重現'),
    c('Evidence', '證據蒐集'),
    c('Isolation', '問題隔離'),
    c('RCA', '根因分析'),
    c('Fix Verification', '修正驗證'),
    c('Regression', '回歸測試'),
    c('Closure', '結案'),
  ],
  steps: [
    section('Requirement', '需求', 'Understand expected behavior, acceptance criteria, and failure definition.', '釐清預期行為、驗收條件與失敗定義。'),
    section('Reproduce', '問題重現', 'Create a repeatable condition that demonstrates the issue.', '建立可重複觸發問題的條件與步驟。'),
    section('Evidence', '證據蒐集', 'Collect logs, measurements, traces, screenshots, outputs, and environment data.', '收集 Log、量測值、Trace、畫面、輸出結果與環境資訊。'),
    section('Isolation', '問題隔離', 'Separate HW / FW / Driver / SDK / Application / Automation layers.', '區分 HW / FW / Driver / SDK / Application / Automation 各層。'),
    section('RCA', '根因分析', 'Identify the most defensible technical failure mechanism.', '找出最能由工程證據支持的失敗機制。'),
    section('Fix Verification', '修正驗證', 'Retest the original failing scenario with the proposed fix.', '使用原本的失敗情境驗證修正是否有效。'),
    section('Regression', '回歸測試', 'Verify related functions and previously passing scenarios remain stable.', '確認相關功能與原本正常案例沒有被修正影響。'),
    section('Closure', '結案', 'Record the evidence, result, remaining risk, and final disposition.', '記錄證據、驗證結果、剩餘風險與最終處理狀態。'),
  ],
};

export const flagshipCaseStudies: PortfolioItem[] = [
  {
    id: 'case-ai-npu', index: '01', title: c('AI / NPU Validation Pipeline', 'AI / NPU 自動化驗證流程'),
    summary: c('Hands-on pattern generation, controlled target execution, golden comparison, automated verdicts, and regression evidence.', '實作 Pattern 產生、受控目標執行、Golden 比對、自動判定與回歸證據。'),
    tags: ['Python', 'Pattern.bin', 'FPGA / NPU', 'Golden Output', 'Bit-accurate', 'Regression'],
    sections: [
      section('Overview', '案例概述', 'Within one continuous Novatek employment period, this work focused on hands-on AI / NPU validation through test-pattern generation, controlled execution, trusted-output comparison, automated PASS / FAIL, and regression.', '此工作位於聯詠同一段連續任職期間內，聚焦 AI / NPU 實作驗證：產生測試 Pattern、受控執行、可信結果比對、自動 PASS / FAIL 與回歸測試。'),
      section('Engineering Challenge', '工程挑戰', 'AI / NPU hardware output must be checked against a trusted expected result while separating numerical mismatches, binary-format errors, layer or output differences, and regressions introduced by SDK or firmware changes.', 'AI / NPU 硬體輸出必須與可信預期結果比對，並區分數值不一致、Binary 格式問題、Layer / Output 差異，以及 SDK 或韌體變更造成的回歸。'),
      section('My Role', '我的角色', 'Develop Python pattern-generation and validation automation, prepare binary inputs, orchestrate execution, parse outputs, compare golden results, automate verdicts, and integrate repeatable regression flows.', '開發 Python Pattern Generator 與驗證自動化、準備 Binary 輸入、協調執行、解析輸出、比對 Golden 結果、自動化判定並整合可重複回歸流程。'),
      { label: c('What I Implemented', '我實作的內容'), bullets: { en: ['Python Pattern Generator and binary test-pattern preparation', 'Simulator / FPGA / NPU-target execution orchestration', 'Output.bin parsing and Golden Output comparison', 'Bit-accurate or numerical verdict logic', 'Failure-artifact preservation and regression reporting'], zh: ['Python Pattern Generator 與 Binary 測試 Pattern 準備', 'Simulator / FPGA / NPU Target 執行協調', 'Output.bin 解析與 Golden Output 比對', 'Bit-accurate 或數值判定邏輯', '保留失敗產出物與回歸報告'] } },
      { label: c('Technical Architecture', '技術架構'), flow: [c('Model / Test Data', '模型 / 測試資料'), c('Python Pattern Generator', 'Python Pattern Generator'), c('Pattern.bin', 'Pattern.bin'), c('Simulator / FPGA / NPU Target', 'Simulator / FPGA / NPU Target'), c('Output.bin', 'Output.bin'), c('Golden Output', 'Golden Output'), c('Automated Comparison', '自動比對'), c('Bit-accurate Validation', 'Bit-accurate 驗證'), c('PASS / FAIL', 'PASS / FAIL'), c('Regression Report', '回歸報告')] },
      { label: c('Engineering Evidence', '工程證據'), body: c('Evidence is described by type only; proprietary binary files are not published.', '僅描述證據類型，不公開專有 Binary 檔案。'), bullets: { en: ['Pattern.bin input artifact', 'Output.bin execution result', 'Golden output reference', 'Comparison result', 'Mismatch log', 'Regression result', 'PASS / FAIL record'], zh: ['Pattern.bin 輸入產物', 'Output.bin 執行結果', 'Golden output 參考結果', '比對結果', 'Mismatch Log', '回歸結果', 'PASS / FAIL 紀錄'] } },
      section('Validation Strategy', '驗證策略', 'Use deterministic inputs, controlled execution modes, expected-versus-actual comparison, bit-accurate or numerical checks, layer/output inspection where applicable, repeatable regression, and preserved failure evidence. Validated model examples include MobileNetV2, ResNet-18, ResNet-50, VGG16, and VGG19.', '使用確定性輸入、受控執行模式、預期與實際比對、Bit-accurate 或數值檢查、適用時進行 Layer / Output 檢視、可重複回歸並保留失敗證據。已驗證範例包含 MobileNetV2、ResNet-18、ResNet-50、VGG16 與 VGG19。'),
      { label: c('Debug / RCA Method', '除錯與根因分析'), body: c('Preserve the exact input, output, execution mode, and version before isolating the failing boundary.', '先保留完整輸入、輸出、執行模式與版本，再隔離失敗邊界。'), flow: [c('Mismatch Detected', '發現不一致'), c('Preserve Input / Output', '保留輸入 / 輸出'), c('Identify Failing Stage', '識別失敗階段'), c('Compare Simulator / FPGA / Target', '比對 Simulator / FPGA / Target'), c('Format / Numerical Check', '格式 / 數值檢查'), c('Isolate Validation / SDK / HW', '隔離驗證 / SDK / HW'), c('Fix Verification', '修正驗證'), c('Regression', '回歸')] },
      { label: c('Tools & Technologies', '工具與技術'), bullets: { en: ['Python', 'FPGA / NPU Target', 'Simulator', 'Linux / SDK', 'Binary Pattern / Golden Output', 'Jenkins / CI where applicable'], zh: ['Python', 'FPGA / NPU Target', 'Simulator', 'Linux / SDK', 'Binary Pattern / Golden Output', '適用情境下的 Jenkins / CI'] } },
      { label: c('Engineering Outputs', '工程輸出'), bullets: { en: ['Reproducible binary patterns', 'Execution and comparison records', 'Mismatch evidence', 'Automated PASS / FAIL verdicts', 'Regression reports'], zh: ['可重現 Binary Pattern', '執行與比對紀錄', 'Mismatch 證據', '自動 PASS / FAIL 判定', '回歸報告'] } },
      section('Engineering Value', '工程價值', 'Turn numerical correctness into a repeatable, reviewable validation workflow that makes mismatches attributable and regression-ready.', '將數值正確性轉換為可重複、可審查的驗證流程，使不一致可歸因並可直接納入回歸。'),
      section('Ownership Boundary', '責任邊界', 'The responsibility covered AI / NPU validation and automation—not AI model architecture, AI compiler architecture, the full training pipeline, or semiconductor RTL architecture.', '責任範圍為 AI / NPU 驗證與自動化，不包含 AI 模型架構、AI Compiler 架構、完整訓練流程或半導體 RTL 架構。'),
    ],
  },
  {
    id: 'case-ate-robot-esd', index: '02', title: c('ATE / Robot / ESD System Integration', 'ATE / Robot / ESD 系統整合'),
    summary: c('Employer-neutral multi-equipment orchestration with explicit state, handshake, safety, timeout, evidence, and result boundaries.', '不綁定雇主的多設備流程整合，具備明確狀態、握手、安全、Timeout、證據與結果邊界。'),
    tags: ['C# / Python', 'ATE', 'Robot', 'ESD', 'State Machine', 'Traceability'],
    sections: [
      section('Overview', '案例概述', 'Employer-neutral integration of ATE software, fixture and instrument control, Robot communication, ESD equipment, state-machine sequencing, safety interlocks, result processing, and traceable logging.', '此為不綁定雇主的整合案例，涵蓋 ATE 軟體、治具與儀器控制、Robot 通訊、ESD 設備、狀態機時序、安全 Interlock、結果處理與可追溯 Log。'),
      section('Engineering Challenge', '工程挑戰', 'Production automation requires deterministic equipment sequencing, synchronized states, safe trigger conditions, bounded timeouts, abnormal-state recovery, duplicate-action prevention, and evidence that separates command acceptance from physical completion.', '產測自動化需要確定性設備時序、同步狀態、安全 Trigger 條件、受限 Timeout、異常狀態復原、防止重複動作，以及區分命令接受與實體完成的證據。'),
      section('My Role', '我的角色', 'Develop C# / Python engineering tools and integrate the ATE-side flow, equipment communication, state-machine control, instruments, result processing, logging, timeout and exception handling, and production-debug support.', '開發 C# / Python 工程工具，並整合 ATE 端流程、設備通訊、狀態機控制、儀器、結果處理、Log、Timeout / Exception 處理與產線 Debug 支援。'),
      { label: c('What I Implemented', '我實作的內容'), bullets: { en: ['ATE flow and fixture / instrument orchestration', 'Robot communication and guarded state transitions', '1027 = Robot → ATE feedback; read-only from the ATE side', '1028 = ATE → Robot parameter / motion pulse', '1029 = ATE → Robot discharge-complete pulse', 'Timeouts, abnormal handling, structured logs, and PASS / FAIL result correlation'], zh: ['ATE 流程與治具 / 儀器協調', 'Robot 通訊與受保護的狀態轉換', '1027 = Robot → ATE 回饋；ATE 端唯讀', '1028 = ATE → Robot 參數 / 移動 Pulse', '1029 = ATE → Robot 放電完成 Pulse', 'Timeout、異常處理、結構化 Log 與 PASS / FAIL 結果關聯'] } },
      { label: c('Technical Architecture', '技術架構'), flow: [c('Test Recipe', '測試 Recipe'), c('ATE', 'ATE'), c('Fixture / Instrument Control', '治具 / 儀器控制'), c('Robot Handshake', 'Robot 握手'), c('Position Ready', '位置就緒'), c('ESD Trigger / Completion', 'ESD Trigger / 完成'), c('Result Validation', '結果驗證'), c('Log / Report', 'Log / 報告'), c('PASS / FAIL', 'PASS / FAIL')] },
      { label: c('Engineering Evidence', '工程證據'), body: c('Employer-neutral evidence types used to separate command acceptance, equipment response, timeout behavior, and final result correlation.', '不綁定雇主的證據類型，用於區分命令接受、設備回應、Timeout 行為與最終結果關聯。'), bullets: { en: ['State / status log', 'Command / acknowledgement sequence', 'Equipment response', 'Instrument measurement', 'Timeout / exception record', 'Result correlation', 'PASS / FAIL report'], zh: ['State / Status Log', 'Command / Acknowledgement 序列', '設備回應', '儀器量測值', 'Timeout / Exception 紀錄', '結果關聯', 'PASS / FAIL 報告'] } },
      section('Validation Strategy', '驗證策略', 'Validate every state transition, acknowledgement, interlock, pulse edge, equipment status, timeout, reconnect or recovery path, stop-on-critical-failure behavior, result correlation, and report field.', '驗證每個狀態轉換、Acknowledgement、Interlock、Pulse 邊緣、設備狀態、Timeout、重連 / 復原路徑、重大失敗停止行為、結果關聯與報告欄位。'),
      { label: c('Debug / RCA Method', '除錯與根因分析'), body: c('Correlate commands, state transitions, equipment responses, timestamps, and result evidence before assigning a failure boundary.', '先關聯命令、狀態轉換、設備回應、時間戳與結果證據，再判定失敗邊界。'), flow: [c('Reproduce Sequence', '重現流程'), c('Collect ATE / Equipment Logs', '收集 ATE / 設備 Log'), c('Check State / Interlock', '檢查狀態 / Interlock'), c('Correlate Handshake', '關聯握手'), c('Isolate Communication / Equipment', '隔離通訊 / 設備'), c('Recovery Check', '復原檢查'), c('Fix Verification', '修正驗證'), c('Regression', '回歸')] },
      { label: c('Tools & Technologies', '工具與技術'), bullets: { en: ['C# / Python', 'ATE / State Machine', 'TCP/IP / Serial', 'Robot / ESD', 'DMM / Power Supply', 'Fixture / Test Point'], zh: ['C# / Python', 'ATE / State Machine', 'TCP/IP / Serial', 'Robot / ESD', 'DMM / Power Supply', 'Fixture / Test Point'] } },
      { label: c('Engineering Outputs', '工程輸出'), bullets: { en: ['Repeatable production flow', 'Equipment-state traceability', 'Structured logs', 'PASS / FAIL records', 'Reproducible failure evidence', 'Safer equipment sequencing'], zh: ['可重複產測流程', '設備狀態追溯', '結構化 Log', 'PASS / FAIL 紀錄', '可重現失敗證據', '較安全的設備時序'] } },
      section('Engineering Value', '工程價值', 'Make a multi-equipment sequence deterministic, diagnosable, recoverable, and auditable without substituting software acknowledgement for physical evidence.', '讓多設備流程具備確定性、可診斷、可復原與可稽核性，且不以軟體 Acknowledgement 取代實體證據。'),
      section('Ownership Boundary', '責任邊界', 'This employer-neutral case describes ATE-side integration and validated public handshake directions. It does not disclose additional proprietary mappings, customer identifiers, internal recipes, Robot firmware architecture, ESD hardware design, or unsupported physical-completion claims.', '此不綁定雇主的案例描述 ATE 端整合與已公開驗證的握手方向；不揭露額外專有 Mapping、客戶識別、內部 Recipe、Robot 韌體架構、ESD 硬體設計或無證據的實體完成宣稱。'),
    ],
  },
  {
    id: 'case-fae-rca', index: '03', title: c('FAE / Customer Issue Reproduction & RCA', 'FAE / 客戶問題重現與根因分析'),
    summary: c('Customer-facing reproduction, evidence collection, layer isolation, RD coordination, fix verification, regression, and closure.', '客戶面問題重現、證據收集、Layer 隔離、RD 協作、修正驗證、回歸與結案。'),
    tags: ['TPV FAE', 'Android / Linux', 'ADB / Appium', 'Jira', 'Jenkins', 'RCA'],
    sections: [
      section('Overview', '案例概述', 'Based on verified TPV customer-facing FAE experience across TV, Android TV, and Android / Linux environments: turn a customer report into reproducible evidence, coordinated analysis, fix verification, regression, and closure.', '依據已驗證的冠捷客戶面 FAE 經驗，涵蓋 TV、Android TV 與 Android / Linux 環境：將客戶回報轉換為可重現證據、協作分析、修正驗證、回歸與結案。'),
      section('Engineering Challenge', '工程挑戰', 'Customer-only, intermittent, or configuration-sensitive failures often arrive with insufficient logs and can cross application, framework, driver, SDK, system, and hardware boundaries.', '僅在客戶環境出現、間歇或受設定影響的問題，常伴隨 Log 不足，且可能跨越 Application、Framework、Driver、SDK、System 與 Hardware 邊界。'),
      section('My Role', '我的角色', 'Provide customer technical support, reproduce issues, develop reproduction tools and automated scripts, prepare environments, collect evidence, coordinate RD / QA / vendors, verify fixes, run regression, document results, and support remote or onsite closure.', '提供客戶技術支援、問題重現、重現工具與自動腳本開發、環境準備、證據收集、協調 RD / QA / Vendor、修正驗證、回歸、文件與遠端 / 現場結案支援。'),
      { label: c('What I Implemented', '我實作的內容'), bullets: { en: ['Repeatable reproduction procedures and environment records', 'Python / ADB automation and Android UI reproduction scripts', 'Version, configuration, Good-vs-Bad, log, screenshot, and recording evidence', 'Issue-tracking and RD-ready technical summaries', 'Regression-ready cases and customer-closure documentation'], zh: ['可重複重現步驟與環境紀錄', 'Python / ADB 自動化與 Android UI 重現腳本', '版本、設定、Good-vs-Bad、Log、截圖與錄影證據', 'Issue 追蹤與供 RD 使用的技術摘要', '可回歸案例與客戶結案文件'] } },
      { label: c('Technical Architecture', '技術架構'), flow: [c('Customer Report', '客戶回報'), c('Clarify Environment', '釐清環境'), c('Reproduce', '問題重現'), c('Capture Log / Evidence', '擷取 Log / 證據'), c('Compare Good vs Bad', 'Good vs Bad 比對'), c('Isolate Layer', '隔離 Layer'), c('RD / Vendor Analysis', 'RD / Vendor 分析'), c('Fix', '修正'), c('Fix Verification', '修正驗證'), c('Regression', '回歸'), c('Customer Closure', '客戶結案')] },
      { label: c('Engineering Evidence', '工程證據'), body: c('Evidence is summarized by category only; customer-confidential artifacts are not published.', '僅以類型摘要呈現證據，不公開客戶機密產物。'), bullets: { en: ['Reproduction steps', 'Environment / version information', 'ADB / system log', 'Screenshot / trace where applicable', 'Good-vs-Bad comparison', 'Fix verification result', 'Regression result', 'Issue closure record'], zh: ['問題重現步驟', '環境 / 版本資訊', 'ADB / System Log', '適用情境下的截圖 / Trace', 'Good-vs-Bad 比對', '修正驗證結果', '回歸結果', '問題結案紀錄'] } },
      section('Validation Strategy', '驗證策略', 'Validate in the original or customer-equivalent environment through functional, compatibility, OTA, streaming, stress, CTS / GTVS-support, and regression checks where applicable; document residual uncertainty instead of overstating closure.', '在原始或客戶等效環境中，依情境執行 Functional、Compatibility、OTA、Streaming、Stress、CTS / GTVS 支援與回歸檢查；記錄剩餘不確定性，不誇大結案。'),
      { label: c('Debug / RCA Method', '除錯與根因分析'), body: c('Change one controlled factor at a time, preserve raw evidence, and compare expected behavior with a known-good baseline before assigning ownership.', '一次只改變一個受控因素，保留原始證據，並先與已知正常基準比對，再判定責任邊界。'), flow: [c('Symptom / Version Check', '現象 / 版本確認'), c('Reproduce', '重現'), c('Evidence Capture', '證據擷取'), c('Good vs Bad', 'Good vs Bad'), c('Layer Isolation', 'Layer 隔離'), c('RCA Tracking', 'RCA 追蹤'), c('Fix Verification', '修正驗證'), c('Regression / Closure', '回歸 / 結案')] },
      { label: c('Tools & Technologies', '工具與技術'), bullets: { en: ['Python / ADB', 'UIAutomator / Appium', 'Android / Linux', 'JMeter / Monkey / MonkeyRunner', 'Jenkins / Jira', 'CTS / GTVS support'], zh: ['Python / ADB', 'UIAutomator / Appium', 'Android / Linux', 'JMeter / Monkey / MonkeyRunner', 'Jenkins / Jira', 'CTS / GTVS 支援'] } },
      { label: c('Engineering Outputs', '工程輸出'), bullets: { en: ['Reproduction package', 'Version and environment matrix', 'Logs, screenshots, and recordings', 'Issue-analysis record', 'Fix-verification and regression evidence', 'Customer-ready closure summary'], zh: ['重現 Package', '版本與環境矩陣', 'Log、截圖與錄影', '問題分析紀錄', '修正驗證與回歸證據', '客戶可理解的結案摘要'] } },
      section('Engineering Value', '工程價值', 'Improve reproducibility, evidence quality, ownership isolation, and RD/customer communication while making fix verification repeatable and issue closure less ambiguous.', '提升可重現性、證據品質、責任隔離與 RD / 客戶溝通，並讓修正驗證可重複、問題結案更少歧義。'),
      section('Ownership Boundary', '責任邊界', 'The work covered TPV customer-facing FAE reproduction, automation, coordination, and validation—not customer product architecture, upstream firmware ownership, vendor decisions, or unsupported root-cause claims.', '工作範圍為冠捷客戶面 FAE 的重現、自動化、協作與驗證，不包含客戶產品架構、上游韌體主責、Vendor 決策或缺乏證據的根因宣稱。'),
    ],
  },
];

export const visualItems: PortfolioItem[] = [
  {
    id: 'visual-automation-manager', index: 'VIS_01', title: c('Automation / Technical Manager Overview', '自動化 / 技術管理總覽'),
    summary: c('Visual summary of automation tool development, system validation, 5G/Wi-Fi testing, ATE flow, and AI-assisted result analysis.', '圖解總覽涵蓋自動化工具開發、系統驗證、5G/Wi-Fi 測試、ATE 流程與 AI 輔助結果分析。'),
    tags: ['Automation', 'ATE', '5G/Wi-Fi', 'Management'], image: { src: '/portfolio/automation-manager-overview.png', alt: c('Automation and technical manager visual portfolio board', '自動化與技術管理圖解作品') },
    sections: [
      section('Overview', '概述', 'This visual organizes automation development, system test framework design, storage/high-speed interface validation, communication performance testing, and technical management topics.', '此圖整理自動化開發、系統測試架構設計、儲存 / 高速介面驗證、通訊效能測試與技術管理主題。'),
      section('My Role', '我的角色', 'Automation and validation engineering across test orchestration, system analysis, technical coordination, and result review.', '負責測試流程控制、系統分析、技術協作與結果審查等自動化與驗證工程工作。'),
      section('What I Implemented', '我實作的內容', 'Automation flows, test orchestration, structured logging and reporting, validation criteria, and debug feedback loops.', '實作自動化流程、測試編排、結構化 Log 與報告、驗證條件及 Debug 回饋閉環。'),
      section('What I Validated', '我驗證的內容', 'System stability, equipment and test responses, network performance, regression behavior, and traceable engineering evidence.', '驗證系統穩定度、設備與測試回應、網路效能、回歸行為及可追溯工程證據。'),
      section('What I Did Not Own', '非本人負責範圍', 'Product hardware design, product firmware ownership, AI model ownership, and customer product decisions outside the automation and validation scope.', '不包含產品硬體設計、產品韌體主責、AI 模型主責，以及自動化與驗證範圍以外的客戶產品決策。'),
      section('Technical Flow', '技術流程', 'Jenkins / GitLab CI / Docker concepts, Python and C# tooling, ATE scripting, validation reporting, system stability, network testing, and field support are shown as connected workstreams.', '圖中以 Jenkins / GitLab CI / Docker 概念、Python 與 C# 工具、ATE 腳本、驗證報告、系統穩定度、網路測試與現場支援作為串接流程。'),
      section('Tools / Technologies', '工具 / 技術', 'Python, PowerShell, C#, Jenkins, GitLab, Docker, Keysight UXM, Wireshark, iPerf, 5G/Wi-Fi, ATE, and system validation concepts.', 'Python、PowerShell、C#、Jenkins、GitLab、Docker、Keysight UXM、Wireshark、iPerf、5G/Wi-Fi、ATE 與系統驗證概念。'),
      section('Validation Approach', '驗證方法', 'Use traceable automation, logs, instrument data, regression checks, and clear PASS / FAIL / risk boundaries.', '使用可追溯自動化、Log、儀器資料、回歸檢查，以及清楚的 PASS / FAIL / 風險邊界。'),
      section('Result / Value', '成果 / 價值', 'The visual communicates technical breadth and system-level thinking through connected automation, validation, debugging, and coordination workstreams.', '此圖透過串接的自動化、驗證、Debug 與協調工作流程，呈現技術廣度與系統思維。'),
    ],
  },
  {
    id: 'visual-novatek-wifi', index: 'VIS_02', title: c('Novatek Software Automation / Wi-Fi Validation', '聯詠軟體自動化 / Wi-Fi 驗證'),
    summary: c('Visual brief for Wi-Fi AC FPGA / chip validation, automation scripts, RF measurement, stress monitoring, and CI/CD reporting.', '圖解說明 Wi-Fi AC FPGA / 晶片驗證、自動化腳本、RF 量測、壓力監控與 CI/CD 報告。'),
    tags: ['Novatek', 'Wi-Fi', 'FPGA', 'CI/CD'], image: { src: '/portfolio/novatek-wifi-validation.png', alt: c('Novatek Wi-Fi validation visual portfolio board', '聯詠 Wi-Fi 驗證圖解作品') },
    sections: [
      section('Overview', '概述', 'The visual presents Wi-Fi FPGA/chip validation, MAC-layer certification focus, throughput/RF automation, IP camera stream checks, and CI/CD automation.', '圖解呈現 Wi-Fi FPGA / 晶片驗證、MAC Layer 認證重點、Throughput / RF 自動化、影像串流檢查與 CI/CD 自動化。'),
      section('My Role', '我的角色', 'Validation and automation engineering for test cases, equipment control, measurement capture, reporting, and issue evidence.', '負責測試案例、設備控制、量測擷取、報告與問題證據的驗證及自動化工程工作。'),
      section('What I Implemented', '我實作的內容', 'Python/pytest test cases, equipment adapters, measurement capture and reporting, stream-analysis automation, and CI workflows.', '實作 Python / pytest 測試案例、設備 Adapter、量測擷取與報告、串流分析自動化及 CI 流程。'),
      section('What I Validated', '我驗證的內容', 'Throughput, PER, latency, RF behavior, stream evidence, stress behavior, and system stability.', '驗證 Throughput、PER、Latency、RF 行為、串流證據、壓力行為與系統穩定度。'),
      section('What I Did Not Own', '非本人負責範圍', 'Wi-Fi chip or FPGA architecture, product firmware ownership, and certification-authority decisions.', '不包含 Wi-Fi 晶片或 FPGA 架構、產品韌體主責及認證機構的最終決策。'),
      section('Technical Flow', '技術流程', 'Test case design → pytest execution → hardware control → video stream or RF measurement → performance/stress analysis → report/notification.', '測試案例設計 → pytest 執行 → 硬體控制 → 影像串流或 RF 量測 → 效能 / 壓力分析 → 報告 / 通知。'),
      section('Tools / Technologies', '工具 / 技術', 'Python, pytest, OpenCV, FFmpeg, Jenkins, GitLab CI, Docker, PySerial, PyVISA, SCPI, LabVIEW, VeriWave, scope, PSU.', 'Python、pytest、OpenCV、FFmpeg、Jenkins、GitLab CI、Docker、PySerial、PyVISA、SCPI、LabVIEW、VeriWave、示波器、PSU。'),
      section('Validation Approach', '驗證方法', 'Control test parameters, collect throughput/PER/latency or stream evidence, monitor system stability, and generate reproducible reports.', '控制測試參數、收集 Throughput / PER / Latency 或串流證據、監控系統穩定度並產生可重現報告。'),
      section('Result / Value', '成果 / 價值', 'Shows repeatable automation coverage across test control, measurement collection, system monitoring, reporting, and notification.', '呈現測試控制、量測收集、系統監控、報告與通知之間可重複的自動化覆蓋。'),
    ],
  },
  {
    id: 'visual-novatek-ai-npu', index: 'VIS_03', title: c('AI / NPU Validation Pipeline', 'AI / NPU 驗證流程'),
    summary: c('Visual brief for AI/NPU model validation through pattern generation, simulator/FPGA execution, golden comparison, and regression testing.', 'AI/NPU 驗證圖解涵蓋 Pattern 產生、Simulator / FPGA 執行、Golden 比對與回歸測試。'),
    tags: ['AI/NPU', 'ResNet18', 'golden.bin', 'Regression'], image: { src: '/portfolio/novatek-ai-npu-validation.png', alt: c('Novatek AI NPU validation visual portfolio board', '聯詠 AI NPU 驗證圖解作品') },
    sections: [
      section('Overview', '概述', 'A repeatable AI/NPU validation pipeline that prepares test patterns, executes controlled modes, compares output against a reference, and produces reviewable PASS / FAIL evidence.', '建立可重複的 AI / NPU 驗證流程：準備測試 Pattern、執行受控模式、將輸出與參考結果比對，並產生可審查的 PASS / FAIL 證據。'),
      section('My Role', '我的角色', 'AI/NPU validation through test-pattern preparation or generation, controlled execution, numerical comparison, regression testing, and validation reporting.', '負責測試 Pattern 準備或產生、受控執行、數值比對、回歸測試與驗證報告等 AI / NPU 驗證工作。'),
      section('Engineering Challenge', '工程挑戰', 'Results from simulator, FPGA, target, or reference modes must be comparable under the same pattern, build, configuration, and criteria while preserving enough evidence to localize mismatches.', 'Simulator、FPGA、Target 或 Reference 模式的結果必須在相同 Pattern、Build、設定與判定條件下可比對，並保留足夠證據以定位 Mismatch。'),
      section('What I Implemented', '我實作的內容', 'Python-based pattern automation, Pattern.bin execution orchestration, output.bin-to-golden.bin comparison, mismatch review support, PASS / FAIL handling, and regression reporting.', '實作 Python Pattern 自動化、Pattern.bin 執行流程、output.bin 與 golden.bin 比對、Mismatch review 支援、PASS / FAIL 處理及回歸報告。'),
      { label: c('Technical Flow', '技術流程'), flow: [c('Model / Test Data', '模型 / 測試資料'), c('Pattern Generator', 'Pattern Generator'), c('Pattern.bin', 'Pattern.bin'), c('Simulator / FPGA / Target', 'Simulator / FPGA / Target'), c('output.bin', 'output.bin'), c('golden.bin Comparison', 'golden.bin 比對'), c('Bit-accurate / Numerical Validation', 'Bit-accurate / 數值驗證'), c('PASS / FAIL', 'PASS / FAIL'), c('Regression Report', '回歸報告')] },
      section('Tools / Technologies', '工具 / 技術', 'Python, C++ / Python utilities, internal toolchain, FPGA board, test-pattern database, binary outputs, and regression automation framework.', 'Python、C++ / Python 工具、內部工具鏈、FPGA Board、Test Pattern DB、Binary output 與 Regression 自動化框架。'),
      section('Validation Strategy', '驗證策略', 'Use deterministic patterns, controlled execution modes, known reference outputs, bit-accurate or layer-level comparison where applicable, explicit mismatch review, and repeatable regression criteria.', '使用確定性 Pattern、受控執行模式、已知參考輸出、適用情境下的 Bit-accurate 或 Layer 比對、明確的 Mismatch review 與可重複回歸條件。'),
      section('Debug / RCA Method', 'Debug / RCA 方法', 'Reproduce the mismatch with the same pattern and build, confirm mode and configuration, compare expected and actual outputs, localize the first divergence, and isolate test data, toolchain, runtime, or target behavior.', '以相同 Pattern 與 Build 重現 Mismatch、確認模式與設定、比對預期與實際輸出、定位第一個分歧點，再隔離測試資料、工具鏈、Runtime 或 Target 行為。'),
      section('Engineering Value', '工程價值', 'Turn AI/NPU execution into a traceable validation workflow with controlled inputs, comparable outputs, explicit criteria, and regression-ready evidence.', '將 AI / NPU 執行轉換為具受控輸入、可比輸出、明確條件及可回歸證據的可追溯驗證流程。'),
      section('What I Did Not Own', '非本人負責範圍', 'AI model architecture or training, AI compiler architecture, the complete model-training pipeline, and product decisions outside validation.', '不包含 AI 模型架構或訓練、AI Compiler 架構、完整模型訓練流程，以及驗證範圍以外的產品決策。'),
    ],
  },
  {
    id: 'visual-audio-ai', index: 'VIS_04', title: c('Audio AI Validation', 'Audio AI 驗證'),
    summary: c('Visual brief for smart-speaker/audio AI chip validation with scenarios, datasets, Python/Gradio/Docker test UI, and result analysis.', '智慧音箱 / Audio AI 晶片驗證圖解涵蓋情境、資料集、Python / Gradio / Docker 測試介面與結果分析。'),
    tags: ['Audio AI', 'Gradio', 'Docker', 'Dataset'], image: { src: '/portfolio/audio-ai-validation.png', alt: c('Audio AI validation visual portfolio board', 'Audio AI 驗證圖解作品') },
    sections: [
      section('Overview', '概述', 'The visual organizes audio wake-word, localization, noise reduction, and event-recognition validation around hardware acceleration and automated analysis.', '此圖以硬體加速與自動化分析整理語音喚醒、定位、降噪與事件辨識驗證。'),
      section('My Role', '我的角色', 'Audio-recognition validation and test-tool engineering for smart-speaker and Audio AI chip scenarios.', '負責智慧音箱與 Audio AI 晶片情境的語音辨識驗證及測試工具工程。'),
      section('What I Implemented', '我實作的內容', 'Test datasets and scripts, Python-based validation tooling, Gradio/Docker test surfaces, and result reporting.', '實作測試資料集與腳本、Python 驗證工具、Gradio / Docker 測試介面及結果報告。'),
      section('What I Validated', '我驗證的內容', 'Wake-word behavior, localization, noise reduction, event recognition, and multi-scenario repeatability.', '驗證喚醒行為、定位、降噪、事件辨識與多情境重複性。'),
      section('What I Did Not Own', '非本人負責範圍', 'Model training, core recognition-algorithm ownership, and product hardware design.', '不包含模型訓練、核心辨識演算法主責及產品硬體設計。'),
      section('Technical Flow', '技術流程', 'Scenario/audio input → Audio AI chip / hardware acceleration → preprocessing and inference → test platform → result analysis and report.', '情境 / 音訊輸入 → Audio AI 晶片 / 硬體加速 → 前處理與推論 → 測試平台 → 結果分析與報告。'),
      section('Tools / Technologies', '工具 / 技術', 'Python, Gradio, Docker, MIC array, Audio AI SoC, DSP/NPU, test datasets, test scripts, and web UI.', 'Python、Gradio、Docker、MIC array、Audio AI SoC、DSP/NPU、測試資料集、測試腳本與 Web UI。'),
      section('Validation Approach', '驗證方法', 'Evaluate wake success, localization accuracy, noise reduction, event recognition, and repeatable multi-scenario coverage.', '評估喚醒成功率、定位準確率、降噪效果、事件辨識與可重複的多情境覆蓋。'),
      section('Result / Value', '成果 / 價值', 'Shows how audio validation can be made repeatable and visible for technical review.', '呈現如何讓音訊驗證可重複、可視化並便於技術審查。'),
    ],
  },
  {
    id: 'visual-tpv-fae', index: 'VIS_05', title: c('TPV FAE / Customer Support', '冠捷 FAE / 客戶支援'),
    summary: c('Visual brief for FAE support, Android TV automation/certification, cross-team collaboration, and field engineering.', 'FAE 支援、Android TV 自動化 / 認證、跨團隊協作與現場工程圖解。'),
    tags: ['TPV', 'FAE', 'Android TV', 'CTS/GTVS'], image: { src: '/portfolio/tpv-fae-support.png', alt: c('TPV FAE customer support visual portfolio board', '冠捷 FAE 客戶支援圖解作品') },
    sections: [
      section('Overview', '概述', 'This visual shows FAE issue support, Android TV testing, automation/certification work, and cross-functional technical coordination.', '此圖呈現 FAE 問題支援、Android TV 測試、自動化 / 認證工作與跨部門技術協調。'),
      section('My Role', '我的角色', 'FAE/customer support and automation validation for Android/Linux applications and TV products.', '負責 Android / Linux 應用與 TV 產品的 FAE / 客戶支援及自動化驗證。'),
      section('What I Implemented', '我實作的內容', 'Python ADB/UI automation, remote-control sequences, screenshot and recording evidence, issue reproduction, and issue-tracking workflows.', '實作 Python ADB / UI 自動化、遙控器操作序列、截圖與錄影證據、問題重現及 Issue 追蹤流程。'),
      section('What I Validated', '我驗證的內容', 'Android TV functions, applications, OTA, streaming, stress behavior, and CTS/GTVS test readiness.', '驗證 Android TV 功能、應用程式、OTA、Streaming、壓力行為與 CTS / GTVS 測試準備度。'),
      section('What I Did Not Own', '非本人負責範圍', 'Customer product architecture, upstream firmware ownership, and certification-authority decisions.', '不包含客戶產品架構、上游韌體主責及認證機構的最終決策。'),
      section('Technical Flow', '技術流程', 'Customer issue → reproduction → debug log → RD fix → automation/regression → customer-ready explanation and closure.', '客戶問題 → 重現 → Debug Log → RD 修正 → 自動化 / 回歸 → 客戶可理解說明與結案。'),
      section('Tools / Technologies', '工具 / 技術', 'Python, ADB, UIAutomator, Appium, Monkey / MonkeyRunner, JMeter, Robot Framework, Jira, Confluence, Jenkins, GitLab, Android Studio.', 'Python、ADB、UIAutomator、Appium、Monkey / MonkeyRunner、JMeter、Robot Framework、Jira、Confluence、Jenkins、GitLab、Android Studio。'),
      section('Validation Approach', '驗證方法', 'Functional testing, app compatibility, OTA, streaming, stress testing, Google CTS/GTVS, screenshots/recording, and GUI recognition.', '功能測試、App 相容性、OTA、Streaming、壓力測試、Google CTS/GTVS、截圖 / 錄影與 GUI 辨識。'),
      section('Result / Value', '成果 / 價值', 'Communicates a practical field-engineering loop from customer symptom to reproducible evidence and regression.', '傳達從客戶現象到可重現證據與回歸測試的實務現場工程閉環。'),
    ],
  },
];

const project = (id:string,index:string,title:Copy,summary:Copy,tags:string[],approach:Copy,validation:Copy):PortfolioItem => ({id,index,title,summary,tags,sections:[section('Overview','概述',summary.en,summary.zh),{label:c('Architecture / Flow','架構 / 流程'),flow:[c('Configuration','設定'),c('Automation / Control','自動化 / 控制'),c('Data Collection','資料收集'),c('Criteria','判定條件'),c('Evidence / Report','證據 / 報告')]},section('Approach','方法',approach.en,approach.zh),section('Validation Method','驗證方法',validation.en,validation.zh),section('Result / Value','成果 / 價值','The structure supports clear coverage, artifacts, defect evidence, and outcome review.','此結構支援清楚的覆蓋範圍、產出物、缺陷證據與成果審查。')]});

export const projectItems: PortfolioItem[] = [
  project('router','01',c('5G / Wi-Fi Router Automation','5G / Wi-Fi Router 自動化'),c('Configurable network and device validation with traffic, packets, stability, and reproducible evidence.','以可設定流程驗證網路與裝置，涵蓋流量、封包、穩定度與可重現證據。'),['5G','Wi-Fi','iPerf'],c('Drive device APIs or UI, generate traffic, capture state and packets, then correlate failures across DUT, client, network, and automation.','控制裝置 API 或 UI、產生流量、擷取狀態與封包，再於 DUT、Client、網路與自動化間關聯失敗。'),c('Use topology and version control, throughput/stability criteria, Wireshark evidence, retries with reason, and regression.','使用拓撲與版本控管、吞吐 / 穩定度條件、Wireshark 證據、具原因的重試與回歸測試。')),
  project('rest','02',c('REST API Automation Testing','REST API 自動化測試'),c('Contract, authorization, data, negative-case, and service-behavior validation.','驗證 Contract、授權、資料、負向案例與服務行為。'),['API','Python','Postman'],c('Separate clients, test data, assertions, reporting, and environment configuration so cases stay readable.','分離 Client、測試資料、Assertion、報告與環境設定，維持案例可讀性。'),c('Verify status, schema, fields, error behavior, idempotency, timing, and correlation with service logs.','驗證狀態碼、Schema、欄位、錯誤行為、冪等性、Timing 與 Service Log 關聯。')),
  project('selenium','03',c('Selenium WebUI Automation','Selenium WebUI 自動化'),c('Accessible, maintainable browser journeys with explicit waits and failure evidence.','以明確等待與失敗證據建立可存取、可維護的瀏覽器流程。'),['Web UI','Selenium','Regression'],c('Use stable locators, page/component abstractions, explicit state checks, controlled data, and screenshots only as supporting evidence.','使用穩定 Locator、頁面 / 元件抽象、明確狀態檢查、受控資料，並將截圖作為輔助證據。'),c('Cover keyboard paths, responsive layouts, error states, navigation, and deterministic cleanup across supported browsers.','涵蓋鍵盤操作、響應式版面、錯誤狀態、導覽與支援瀏覽器上的確定性 Cleanup。')),
  project('can-hil','04',c('Automotive CAN / HIL Automation','車用 CAN / HIL 自動化'),c('Signal, timing, state, diagnostic, and fault-response validation with traceable bus evidence.','以可追溯 Bus 證據驗證 Signal、Timing、狀態、診斷與 Fault Response。'),['CAN','HIL','Diagnostics'],c('Map requirements to messages/signals, stimulate controlled conditions, capture traces, and correlate DUT state with expected transitions.','將需求對應至 Message / Signal，施加受控條件、擷取 Trace，並關聯 DUT 狀態與預期轉換。'),c('Check scaling, timing, timeout, invalid values, recovery, diagnostic behavior, and regression against recorded traces.','檢查 Scaling、Timing、Timeout、Invalid Value、復原、診斷行為與 Trace 回歸。')),
  project('opencv','05',c('OpenCV / Computer Vision Demo','OpenCV / 電腦視覺展示'),c('Reproducible acquisition, preprocessing, inspection criteria, and annotated visual evidence.','建立可重現取像、前處理、檢測條件與標註視覺證據。'),['OpenCV','Vision','AOI'],c('Control image inputs, preserve original pixels, isolate processing stages, and expose thresholds and intermediate outputs.','控制影像輸入、保存原始像素、隔離處理階段，並呈現門檻與中間輸出。'),c('Use labeled positive/negative cases, edge conditions, repeatability, and false-positive/false-negative review.','使用標註正負案例、邊界條件、重複性與誤判 / 漏判審查。')),
  project('cicd','06',c('CI/CD Automation','CI/CD 自動化'),c('Automated quality gates that keep build, test, evidence, and release decisions visible.','以自動化品質關卡清楚呈現 Build、測試、證據與發布決策。'),['CI/CD','Jenkins','GitLab CI'],c('Separate fast checks, integration tests, artifacts, deployment gates, and environment-specific credentials.','分離快速檢查、整合測試、Artifact、部署關卡與環境專用憑證。'),c('Require reproducible jobs, explicit exit codes, retained reports, failure ownership, and controlled rerun policy.','要求可重現 Job、明確 Exit Code、保留報告、失敗責任與受控重跑政策。')),
];
