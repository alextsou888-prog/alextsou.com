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
  cardFlow?: Copy[];
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

export type CapabilityOverviewCard = {
  id:
    | 'overview-test-automation'
    | 'overview-system-validation'
    | 'overview-wifi-5g'
    | 'overview-camera-ai-npu'
    | 'overview-ate-integration'
    | 'overview-fae-customer';
  index: string;
  title: Copy;
  positioning: Copy;
  tags: string[];
  points: Record<Language, string[]>;
  flow?: Copy[];
  related?: {
    itemId: string;
    label: Copy;
  };
};

export type ProblemSolvingHighlight = {
  id: 'highlight-wifi-throughput' | 'highlight-ate-handshake' | 'highlight-customer-rca';
  index: string;
  title: Copy;
  problem: Copy;
  approach: Copy;
  outcome: Copy;
  flow: Copy[];
  related: {
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
    about: 'About', skills: 'Capabilities', experience: 'Experience', projects: 'Projects', resume: 'Resume', visualPortfolio: 'Technical Portfolio', cases: 'Cases', domains: 'Domains', contact: 'Contact',
    eyebrow: 'Engineering Portfolio',
    heroA: 'Alex Tsou', heroB: '',
    heroRole: 'Senior Test Automation & System Validation Engineer',
    heroLead: 'Python / C# Automation · IC / SoC / FPGA · Wi-Fi / 5G · Camera / AI · ATE · FAE / Customer Engineering',
    heroContext: 'Requirements / Test Plan → Automation → Evidence Collection → Debug / RCA → Fix Verification → Regression',
    explore: 'Explore engineering areas', viewResume: 'View Resume', viewTechnicalPortfolio: 'View Technical Portfolio', viewEngineeringCases: 'View Engineering Cases', exploreTechnicalDomains: 'Explore Technical Domains', ready: 'READY', panelLabel: 'Engineering focus areas',
    aboutKicker: '07 / About', aboutTitle: 'Quality engineering with a systems mindset.',
    aboutP1: 'This portfolio is structured around reliable validation: clear test intent, automation that can be diagnosed, and evidence that supports engineering decisions.',
    aboutP2: 'The work spans software, firmware, devices, instruments, networks, camera systems, production test, and customer issue closure as connected engineering workflows.',
    principles: [
      ['Evidence first', 'Make test outcomes traceable, repeatable, and easy to review.'],
      ['Engineer for failure', 'Design automation around diagnostics, boundaries, recovery, and uncertainty.'],
      ['Close the loop', 'Connect reproduction, root-cause analysis, regression, and delivery.'],
    ],
    skillsKicker: '04 / Core Skills & Domains', skillsTitle: 'Core Skills & Technical Domains',
    skillsLead: 'Reusable engineering methods paired with hands-on product experience across connectivity, imaging / AI, ATE, automotive, and customer engineering.',
    expKicker: '03 / Experience', expTitle: 'Professional Experience',
    expLead: 'Official titles, product domains, strongest contributions, and technology stacks—concise on page and detailed on demand.',
    resumeKicker: '06 / Career Reference', resumeTitle: 'Resume / career portfolio',
    resumeLead: 'A public, privacy-conscious resume structure: concise on page, detailed on demand.',
    snapshotTitle: 'Career Snapshot',
    domainsKicker: '03 / Technical Domain Map',
    domainsTitle: 'Product & Technical Domains',
    domainsLead: 'Engineering experience and technical domains across validation, automation, customer support, imaging, connectivity, and industrial systems.',
    resumeDownloadsTitle: 'Resume Downloads',
    downloadChineseResume: 'Download Chinese Resume',
    downloadEnglishResume: 'Download English Resume',
    downloadPortfolio: 'One-page Engineering Portfolio',
    downloadPortfolioLabel: 'Download Alex Tsou one-page Engineering Portfolio PDF',
    downloadChineseResumeLabel: 'Download Alex Tsou Chinese Resume PDF',
    downloadEnglishResumeLabel: 'Download Alex Tsou English Resume PDF',
    contactChineseResume: 'Chinese Resume PDF',
    contactEnglishResume: 'English Resume PDF',
    educationTitle: 'Education',
    timelineTitle: 'Career Timeline',
    timelineLead: 'Select a career card to review responsibilities, technical scope, and engineering workflows.',
    technicalSkillsTitle: 'Technical Skills',
    flagshipKicker: '02 / Case Studies', flagshipTitle: 'Flagship Engineering Case Studies',
    flagshipLead: 'Four concise engineering briefs with detailed architecture, validation, RCA, outputs, and ownership boundaries available on demand.',
    viewCaseStudy: 'View Case Study',
    visualKicker: '05 / Technical Diagrams', visualTitle: 'Technical Diagrams',
    visualLead: 'Concise, recruiter-readable flows for the systems, validation methods, and engineering boundaries behind the work.',
    projectsKicker: '09 / Projects', projectsTitle: 'Selected project areas',
    projectsLead: 'Expandable technical briefs prepared for verified case studies, artifacts, and results.',
    contactKicker: '07 / Contact',
    contactSectionTitle: 'Contact Alex',
    contactSectionLead: 'Send an email directly or leave a private message with enough contact information for a reply.',
    sendEmailTitle: 'Send Email',
    sendEmailBody: 'Open your default email app with the portfolio contact subject prepared.',
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
    openImage: 'Open technical diagram',
    language: 'Language', selected: 'Selected',
  },
  zh: {
    skip: '跳至主要內容', name: '鄒志清', portfolio: '工程作品集', homeLabel: '鄒志清工程作品集首頁', navLabel: '主要導覽',
    about: '關於我', skills: '工程能力', experience: '經歷', projects: '專案', resume: '履歷', visualPortfolio: '技術作品', cases: '工程案例', domains: '技術領域', contact: '聯絡方式',
    eyebrow: '工程作品集',
    heroA: 'Alex Tsou', heroB: '',
    heroRole: '資深測試自動化與系統驗證工程師',
    heroLead: 'Python / C# 自動化 · IC / SoC / FPGA · Wi-Fi / 5G · Camera / AI · ATE · FAE / 客戶工程',
    heroContext: '需求 / 測試計畫 → 自動化 → 證據收集 → Debug / RCA → 修正驗證 → 回歸測試',
    explore: '瀏覽工程領域', viewResume: '查看完整履歷', viewTechnicalPortfolio: '查看技術作品', viewEngineeringCases: '查看工程案例', exploreTechnicalDomains: '探索技術領域', ready: '就緒', panelLabel: '工程專長領域',
    aboutKicker: '07 / 關於我', aboutTitle: '以系統思維實踐品質工程。',
    aboutP1: '本作品集以可靠驗證為核心：明確定義測試目的、建立可診斷的自動化流程，並以可追溯證據支援工程決策。',
    aboutP2: '技術範圍涵蓋軟體、韌體、裝置、儀器、網路、Camera 系統、產測與客戶問題結案，並將各項工作串接為完整工程流程。',
    principles: [
      ['證據優先', '讓測試結果可追溯、可重現，並便於技術審查。'],
      ['為失敗而設計', '預先納入診斷邊界、復原機制與不確定性處理。'],
      ['形成閉環', '串接問題重現、根因分析、回歸測試與交付流程。'],
    ],
    skillsKicker: '04 / 核心技能與領域', skillsTitle: '核心技能與技術領域',
    skillsLead: '將可重用的工程方法，應用於連線、影像 / AI、ATE、車載與客戶工程等實務產品領域。',
    expKicker: '03 / 工作經歷', expTitle: '工作經歷',
    expLead: '以正式職稱、產品領域、關鍵貢獻與技術工具呈現；首頁精簡，細節可點開查看。',
    resumeKicker: '06 / 職涯參考', resumeTitle: '履歷 / 職涯作品集',
    resumeLead: '以適合公開網站的方式呈現履歷：首頁精簡、細節可點開查看。',
    snapshotTitle: '職涯摘要',
    domainsKicker: '03 / 產品技術版圖',
    domainsTitle: '產品與技術領域',
    domainsLead: '橫跨驗證、自動化、客戶技術支援、影像、連線與工業系統的工程經驗與技術領域。',
    resumeDownloadsTitle: '下載履歷',
    downloadChineseResume: '下載中文履歷 PDF',
    downloadEnglishResume: '下載英文履歷 PDF',
    downloadPortfolio: '工程作品集一頁摘要',
    downloadPortfolioLabel: '下載鄒志清工程作品集一頁摘要 PDF',
    downloadChineseResumeLabel: '下載鄒志清中文履歷 PDF',
    downloadEnglishResumeLabel: '下載鄒志清英文履歷 PDF',
    contactChineseResume: '中文履歷 PDF',
    contactEnglishResume: 'English Resume PDF',
    educationTitle: '學歷',
    timelineTitle: '工作經歷',
    timelineLead: '點選職涯卡片查看職責、技術範圍與工程流程。',
    technicalSkillsTitle: '技術技能',
    flagshipKicker: '02 / 工程案例', flagshipTitle: '代表性工程案例',
    flagshipLead: '四個精簡工程摘要；點選後查看技術架構、驗證、RCA、工程輸出與技術範圍。',
    viewCaseStudy: '查看案例',
    visualKicker: '05 / 技術圖解', visualTitle: '技術圖解',
    visualLead: '以精簡流程呈現系統整合、驗證方法與責任邊界，方便招募與技術主管快速閱讀。',
    projectsKicker: '09 / 專案', projectsTitle: '精選專案領域',
    projectsLead: '以可展開摘要呈現代表性技術方法、驗證範圍與工程證據。',
    contactKicker: '07 / 聯絡方式',
    contactSectionTitle: '聯絡我',
    contactSectionLead: '可直接寄 Email，或留下私人訊息與可回覆的聯絡方式。',
    sendEmailTitle: '寄 Email 給我',
    sendEmailBody: '使用預設 Email 軟體開啟新郵件，並帶入作品集聯絡主旨。',
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
    openImage: '開啟技術圖解',
    language: '語言', selected: '已選取',
  },
} as const;

export const capabilityOverview = {
  kicker: c('01 / Professional Snapshot', '01 / 專業摘要'),
  title: c('Engineering Capability Overview', '工程能力總覽'),
  subtitle: c(
    'Build reproducible, traceable automation and system-validation workflows with Python / C# across IC / SoC / FPGA, connectivity, imaging / AI, ATE, and customer engineering.',
    '以 Python / C# 建立可重現、可追溯的自動化與系統驗證流程，涵蓋 IC / SoC / FPGA、連線、影像 / AI、ATE 與客戶工程。',
  ),
  snapshot: [
    c('20+ Years Engineering Experience', '20+ 年工程經驗'),
    c('National Cheng Kung University · Electrical Engineering', '國立成功大學 · 電機工程'),
    c('Python / C#', 'Python / C#'),
    c('Test Automation · System Validation · Debug / RCA · System Integration', '測試自動化 · 系統驗證 · Debug / RCA · 系統整合'),
  ],
  cards: [
    {
      id: 'overview-test-automation',
      index: '01',
      title: c('Test Automation', '測試自動化'),
      positioning: c(
        'Build maintainable Python / C# automation frameworks that connect execution, DUT or instrument control, evidence, verdicts, and regression reports.',
        '以 Python / C# 建立可維護的自動化框架，串接執行、DUT / 儀器控制、工程證據、自動判定與回歸報告。',
      ),
      tags: ['Python', 'C#', 'Test Framework', 'CI'],
      points: {
        en: ['Framework / Orchestration', 'DUT / Instrument Control', 'Automated Verdict / Regression Report'],
        zh: ['框架 / 流程協調', 'DUT / 儀器控制', '自動判定 / 回歸報告'],
      },
    },
    {
      id: 'overview-system-validation',
      index: '02',
      title: c('System Validation & Debug / RCA', '系統驗證與 Debug / RCA'),
      positioning: c(
        'Translate system and IC / SoC / FPGA validation requirements into measurable criteria, reproducible evidence, fix verification, and regression.',
        '將系統與 IC / SoC / FPGA 驗證需求轉換為可量測 Criteria、可重現證據、修正驗證與 Regression。',
      ),
      tags: ['Validation', 'Evidence', 'RCA', 'Regression'],
      points: {
        en: ['IC / SoC / FPGA Validation Criteria', 'Reproducible Evidence → Isolation', 'Fix Verification → Regression'],
        zh: ['IC / SoC / FPGA 驗證判定條件', '可重現證據 → 問題隔離', '修正驗證 → 回歸'],
      },
    },
    {
      id: 'overview-wifi-5g',
      index: '03',
      title: c('Wi-Fi / 5G Connectivity', 'Wi-Fi / 5G 連線驗證'),
      positioning: c(
        'Use Python to validate 5G router and Wi-Fi client connectivity, performance, stability, and failure evidence.',
        '以 Python 驗證 5G Router 與 Wi-Fi Client 的連線、效能、穩定度與失敗證據。',
      ),
      tags: ['Python', 'Wi-Fi / 5G', 'Keysight UXM', 'Wireshark'],
      points: {
        en: ['5G Router / Wi-Fi Validation', 'Throughput / Latency / Packet-loss Evidence', 'Reconnect / Stability / RCA'],
        zh: ['5G Router / Wi-Fi 驗證', 'Throughput / Latency / Packet-loss 證據', 'Reconnect / 穩定度 / RCA'],
      },
      related: { itemId: 'case-wifi-uxm', label: c('View Wi-Fi / 5G + UXM Case', '查看 Wi-Fi / 5G + UXM 案例') },
    },
    {
      id: 'overview-camera-ai-npu',
      index: '04',
      title: c('Camera / AI / NPU', 'Camera / AI / NPU 驗證'),
      positioning: c(
        'Use Python to automate Camera / SDK validation, image and video checks, and AI/NPU execution against golden outputs.',
        '以 Python 自動化 Camera / SDK、影像與影音驗證，以及 AI/NPU 執行與 Golden Output 比對。',
      ),
      tags: ['Python', 'Camera SDK', 'OpenCV', 'Golden Output'],
      points: {
        en: ['Camera / SDK Automation', 'Image / Video Validation', 'AI/NPU Execution + Golden Comparison'],
        zh: ['Camera / SDK 自動化', '影像 / 影音驗證', 'AI/NPU 執行 + Golden 比對'],
      },
      related: { itemId: 'case-ai-npu', label: c('View AI / NPU Case', '查看 AI / NPU 案例') },
    },
    {
      id: 'overview-ate-integration',
      index: '05',
      title: c('ATE / System Integration', 'ATE / 系統整合'),
      positioning: c(
        'Orchestrate ATE, fixtures, instruments, Robot, and ESD equipment through explicit states, handshakes, interlocks, and traceable verdicts.',
        '透過明確狀態、握手、Interlock 與可追溯判定，協調 ATE、治具、儀器、Robot 與 ESD 設備。',
      ),
      tags: ['C# / Python', 'ATE', 'State Machine', 'Robot / ESD'],
      points: {
        en: ['Equipment Orchestration', 'Handshake / Interlock / State Control', 'Timeout / Recovery / Traceable Verdict'],
        zh: ['設備流程協調', '握手 / Interlock / 狀態控制', 'Timeout / 復原 / 可追溯判定'],
      },
      related: { itemId: 'case-ate-robot-esd', label: c('View ATE / Robot / ESD Case', '查看 ATE / Robot / ESD 案例') },
    },
    {
      id: 'overview-fae-customer',
      index: '06',
      title: c('FAE / Customer Engineering', 'FAE / 客戶工程'),
      positioning: c(
        'Turn customer-reported symptoms into reproducible cases and evidence that supports cross-team analysis, fix verification, and closure.',
        '將客戶回報轉成可重現案例與工程證據，支援跨團隊分析、修正驗證與結案。',
      ),
      tags: ['Customer Support', 'Issue Reproduction', 'RCA', 'Cross-team'],
      points: {
        en: ['Customer Issue → Reproducible Case', 'Evidence / Layer Isolation', 'RD / Vendor Coordination → Verified Closure'],
        zh: ['客戶問題 → 可重現案例', '工程證據 / Layer 隔離', 'RD / Vendor 協作 → 驗證結案'],
      },
      related: { itemId: 'case-fae-rca', label: c('View FAE / RCA Case', '查看 FAE / RCA 案例') },
    },
  ] satisfies CapabilityOverviewCard[],
};

export const focusItems: PortfolioItem[] = [
  {
    id: 'capability-automation', index: '01', title: c('Automation', '測試自動化'),
    summary: c(
      'Build maintainable automation frameworks that connect test setup, execution, evidence collection, PASS / FAIL criteria, and regression reporting.',
      '建立可維護的測試自動化框架，串接測試設定、執行、證據蒐集、PASS / FAIL 判定與 Regression 報告。',
    ),
    tags: ['Python', 'C#', 'pytest', 'REST API', 'Selenium', 'Appium', 'CI'],
    sections: [
      section(
        'Automation Engineering Approach',
        '自動化工程思維',
        'Automation is not just replacing manual operation. It turns test intent into repeatable, diagnosable, traceable, and regression-ready engineering execution.',
        '自動化不只是取代人工操作，而是把測試目的轉換成可重複、可診斷、可追溯、可回歸的工程流程。',
      ),
      {
        label: c('1. Test Intent First', '1. 測試目的優先'),
        body: c(
          'Automation begins with measurable test intent, preconditions, acceptance criteria, and required evidence—not with immediately writing scripts.',
          '自動化從可量測的測試目的、前置條件、驗收標準與必要證據開始，而不是直接開始撰寫 Script。',
        ),
        flow: [c('Requirement', '需求'), c('Preconditions', '前置條件'), c('Execution', '執行'), c('Criteria', '判定條件'), c('Evidence', '證據')],
      },
      {
        label: c('2. Separation of Concerns', '2. 關注點分離'),
        body: c(
          'Keep device- and instrument-specific control behind adapters so test intent, orchestration, criteria, and reporting can evolve independently.',
          '將裝置與儀器專屬控制封裝在 Adapter 後方，使測試目的、流程控制、判定與報告可獨立演進。',
        ),
        flow: [c('Test Case', '測試案例'), c('Orchestration', '流程控制'), c('Device / Instrument Adapter', '裝置 / 儀器 Adapter'), c('Result Parsing', '結果解析'), c('Criteria', '判定條件'), c('Reporting', '報告')],
      },
      {
        label: c('3. Evidence-First Automation', '3. 證據優先的自動化'),
        body: c(
          'A verdict must correlate the test context with raw evidence. An automation system that returns only PASS or FAIL is not sufficiently diagnosable.',
          '判定結果必須關聯測試脈絡與原始證據；只輸出 PASS 或 FAIL 的自動化系統，缺乏足夠的可診斷性。',
        ),
        flow: [c('Configuration', '設定'), c('Version', '版本'), c('Timestamp', '時間戳'), c('Raw Measurement', '原始量測'), c('Log', 'Log'), c('Criteria', '判定條件'), c('PASS / FAIL', 'PASS / FAIL')],
      },
      {
        label: c('4. Design for Failure', '4. 為失敗情境而設計'),
        body: c(
          'Instrument, DUT, Robot, and external-equipment automation must define bounded failure behavior and leave the system in a known, safe state.',
          '儀器、DUT、Robot 與外部設備自動化必須定義有界限的失敗行為，並使系統回到已知且安全的狀態。',
        ),
        bullets: {
          en: ['Timeout / Retry / Reconnect', 'Abort / Cleanup / Safe State', 'Exception Handling with traceable reason'],
          zh: ['Timeout / Retry / Reconnect', 'Abort / Cleanup / Safe State', '具可追溯原因的 Exception Handling'],
        },
      },
      {
        label: c('5. Separate DUT Failure from Automation Failure', '5. 分離 DUT 失敗與自動化失敗'),
        body: c(
          'A failed test result is not automatically a DUT defect. Isolate the failing layer before assigning ownership or reporting a product failure.',
          '測試失敗不等同於 DUT 缺陷；在判定責任或回報產品失敗前，必須先隔離真正的失敗層級。',
        ),
        flow: [c('Test Tool', '測試工具'), c('Transport', '傳輸層'), c('Instrument', '儀器'), c('DUT', 'DUT'), c('Driver / Firmware', 'Driver / Firmware'), c('Network / RF', 'Network / RF'), c('Automation Logic', '自動化邏輯')],
      },
      {
        label: c('6. Regression-Ready Design', '6. 可回歸的設計'),
        body: c(
          'When appropriate, a reproduced failure becomes a deterministic regression case with preserved evidence and a reportable result.',
          '在適用情境下，已重現的失敗應轉換成具保存證據與可報告結果的確定性回歸案例。',
        ),
        flow: [c('Bug Reproduction', '問題重現'), c('Evidence', '證據'), c('Fix Verification', '修正驗證'), c('Regression Case', '回歸案例'), c('CI / Report', 'CI / 報告')],
      },
      {
        label: c('Example — Wi-Fi / 5G Connectivity Automation', '範例 — Wi-Fi / 5G Connectivity 自動化'),
        body: c(
          'A compact architecture example; implementation details and technical boundaries remain in the existing Wi-Fi / UXM case study.',
          '此處僅呈現精簡架構；實作細節與技術邊界保留於既有 Wi-Fi / UXM 工程案例。',
        ),
        flow: [c('Test Configuration', '測試設定'), c('Python Controller', 'Python Controller'), c('Keysight UXM / DUT / Wi-Fi Client', 'Keysight UXM / DUT / Wi-Fi Client'), c('iPerf / Wireshark', 'iPerf / Wireshark'), c('Measurements / Logs', '量測 / Log'), c('Criteria', '判定條件'), c('PASS / FAIL', 'PASS / FAIL'), c('Failure Isolation', '失敗隔離'), c('Regression Report', '回歸報告')],
      },
      {
        label: c('Example Inputs & Evidence', '範例輸入與證據'),
        bullets: {
          en: ['Inputs: firmware version, band / channel, bandwidth, distance / environment, TCP / UDP, DL / UL', 'Evidence: throughput, latency, packet loss, RSSI / MCS, retransmission, DUT / instrument logs'],
          zh: ['輸入：Firmware Version、Band / Channel、Bandwidth、Distance / Environment、TCP / UDP、DL / UL', '證據：Throughput、Latency、Packet Loss、RSSI / MCS、Retransmission、DUT / Instrument Log'],
        },
      },
    ],
  },
  {
    id: 'capability-validation', index: '02', title: c('Validation', '系統與功能驗證'),
    summary: c(
      'Translate system, IC / SoC / FPGA, and feature requirements into validation plans, measurable criteria, repeatable cases, and traceable evidence.',
      '將系統、IC / SoC / FPGA 與 Feature 需求轉換成 Validation Plan、可量測 Criteria、可重複 Test Case 與可追蹤證據。',
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
      {
        label: c('Cross-Layer Isolation', '跨層隔離'),
        flow: [c('Hardware / FPGA / Chip', 'Hardware / FPGA / Chip'), c('Firmware', 'Firmware'), c('Driver', 'Driver'), c('SDK / Middleware', 'SDK / Middleware'), c('Application / Test Tool', 'Application / Test Tool'), c('Network / RF / Instrument', 'Network / RF / Instrument')],
      },
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
      section('System Integration', '系統整合', 'Integrates software, equipment, interfaces, and workflows across systems, complementing the ATE / Robot / ESD technical domain without duplicating its positioning.', '跨系統整合軟體、設備、介面與流程，與 ATE / Robot / ESD 技術領域互補而不重複。'),
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
      jobTitle: c('Technical Manager | Hands-on Test Automation & System Validation', '技術經理｜Hands-on 測試自動化與系統驗證'),
      period: '2022/09 – 2026/04',
      tenure: c('3 years 8 months', '3年8個月'),
      management: c('Managed 4 team members', '管理人數4人'),
    },
    sections: [
      section('Products / Domains', '產品 / 領域', '5G Router · Automotive · AI Glasses · Stylus · Wireless Charging · ESD Validation', '5G Router · 車載 · AI 眼鏡 · 觸控筆 · 無線充電 · ESD 驗證'),
      {
        label: c('Key Contributions', '關鍵貢獻'),
        bullets: {
          en: [
            'Developed Python / C# automation tools and integrated ATE-side system workflows',
            'Performed EVT / DVT / PVT-stage system and firmware validation',
            'Used reproducible test flows and logs for debugging, root-cause isolation, fix verification, and regression',
            'Automated 5G / Wi-Fi throughput, latency, packet-loss, reconnect, and stability validation',
            'Integrated DMM / PSU control for power-rail and power-consumption validation',
            'Validated CAN, touch-panel, and eMMC reliability behaviors with traceable evidence',
            'Integrated Robot / ESD / Camera workflows with explicit states, interlocks, timeout handling, and safety boundaries',
          ],
          zh: [
            '開發 Python / C# 自動化工具，並整合 ATE 端系統流程',
            '執行 EVT / DVT / PVT 階段的系統與韌體驗證',
            '以可重現測試流程與 Log 進行除錯、根因隔離、修正驗證與回歸',
            '自動化 5G / Wi-Fi Throughput、Latency、Packet Loss、Reconnect 與穩定度驗證',
            '整合 DMM / PSU 控制，進行 Power Rail 與 Power Consumption 驗證',
            '以可追溯證據驗證 CAN、Touch Panel 與 eMMC 可靠度行為',
            '以明確狀態、Interlock、Timeout 處理與安全邊界整合 Robot / ESD / Camera 流程',
          ],
        },
      },
      section('Process Alignment', '流程對齊', 'Used Siemens Polarion ALM for requirements traceability, test-case management, defect tracking, and verification activities aligned with Automotive SPICE / ISO 26262 development processes.', '使用 Siemens Polarion ALM 進行需求追溯、測試案例管理、缺陷追蹤，以及與 Automotive SPICE / ISO 26262 開發流程對齊的驗證活動。'),
      section('Tech Stack', '技術工具', 'Python · C# · Jenkins · GitLab CI · Docker · Keysight UXM · Wireshark · CAN · SCPI · DMM / PSU', 'Python · C# · Jenkins · GitLab CI · Docker · Keysight UXM · Wireshark · CAN · SCPI · DMM / PSU'),
    ],
  },
  {
    id: 'career-novatek', index: '02', title: c('Novatek Experience', '聯詠科技經歷'),
    summary: c('Nearly nine years of validation and test automation experience spanning IC / SoC / FPGA, Wi-Fi connectivity, Camera SoC / SDK, AI/NPU, Audio AI, measurement, defect reproduction, and regression.', '近九年的驗證與測試自動化經驗，涵蓋 IC / SoC / FPGA、Wi-Fi 連線、Camera SoC / SDK、AI/NPU、Audio AI、量測、問題重現與回歸。'),
    tags: ['IC / SoC Validation', 'Wi-Fi FPGA', 'Camera SoC', 'AI/NPU', 'Audio AI', 'Python Automation'],
    career: {
      company: c('Novatek Microelectronics Corp.', '聯詠科技股份有限公司'),
      cardCompany: c('Novatek Microelectronics', '聯詠科技'),
      jobTitle: c('Principal Software Engineer | Test Automation & SoC Validation', '軟體開發主任工程師｜測試自動化與 SoC 驗證'),
      period: '2013/10 – 2022/07',
      displayPeriod: c('2013/10 – 2022/07', '2013/10 – 2022/07'),
      tenure: c('8 years 10 months', '8年10個月'),
    },
    sections: [
      {
        label: c('Overview', '概述'),
        body: c('One continuous Novatek employment period with two technical stages: connectivity validation first, followed by Camera SoC and AI-assisted media validation.', '聯詠為同一段連續任職經歷，分為兩個技術階段：先是連線驗證，之後轉入 Camera SoC 與 AI 輔助媒體驗證。'),
        flow: [c('2013–2019 · Wi-Fi FPGA / MAC / Certification Automation', '2013–2019 · Wi-Fi FPGA / MAC / 認證自動化'), c('2019–2022 · Camera SoC / AI-NPU / Audio AI Automation', '2019–2022 · Camera SoC / AI-NPU / Audio AI 自動化')],
      },
      {
        label: c('Stage 1 · 2013–2019 · Wi-Fi FPGA / MAC / Certification Automation', '階段一 · 2013–2019 · Wi-Fi FPGA / MAC / 認證自動化'),
        bullets: {
          en: ['Wi-Fi FPGA / chip and MAC-layer validation', 'Python automation with SCPI / USB / LAN equipment control', 'Power supply, oscilloscope, and VeriWave integration', 'Throughput, PER, latency, Tx power, Rx sensitivity, and RvR validation', 'Windows / Linux driver and router / API validation', 'Wi-Fi Alliance 11n / 11ac and SGS certification support', 'Weekly Wi-Fi regression execution with automated report generation'],
          zh: ['Wi-Fi FPGA / 晶片與 MAC Layer 驗證', '使用 Python 自動化整合 SCPI / USB / LAN 設備控制', '整合 Power Supply、Oscilloscope 與 VeriWave', '驗證 Throughput、PER、Latency、Tx Power、Rx Sensitivity 與 RvR', 'Windows / Linux Driver 與 Router / API 驗證', 'Wi-Fi Alliance 11n / 11ac 與 SGS 認證支援', '每週執行 Wi-Fi 回歸測試並自動產生報告'],
        },
      },
      {
        label: c('Wi-Fi Certification Evidence', 'Wi-Fi 認證實績'),
        bullets: {
          en: [
            'Performed 802.11n / 802.11ac certification testing for STA and AP modes on Ubuntu / Linux.',
            'Prepared certification test results, logs, and supporting evidence for SGS submission.',
            'Successfully completed 2 certification programs covering STA / AP validation.',
          ],
          zh: [
            '於 Ubuntu / Linux 環境執行 802.11n / 802.11ac 的 STA 與 AP 模式認證測試。',
            '整理測試結果、Log 與認證證據並提交 SGS。',
            '最終成功完成 2 項認證，涵蓋 STA / AP 驗證。',
          ],
        },
      },
      {
        label: c('Wi-Fi Regression Evidence', 'Wi-Fi 回歸驗證實績'),
        bullets: {
          en: [
            'Built and maintained a Python-based Wi-Fi validation framework for approximately 3 years.',
            'Executed a representative full Wi-Fi regression suite weekly, covering 100+ distinct test cases, excluding parameterized execution counts.',
            'The representative full regression typically ran for approximately 7 days and included RF and performance measurements, with automated report generation.',
          ],
          zh: [
            '以 Python 建立並維護 Wi-Fi 驗證框架約 3 年。',
            '每週執行具代表性的完整 Wi-Fi 回歸測試套件，涵蓋 100+ 個不同測試案例（不含參數化執行次數）。',
            '該代表性完整回歸測試的典型執行時間約為 7 天，包含 RF 與效能量測，並自動產生報告。',
          ],
        },
      },
      {
        label: c('Stage 2 · 2019–2022 · Camera SoC / AI-NPU / Audio AI Automation', '階段二 · 2019–2022 · Camera SoC / AI-NPU / Audio AI 自動化'),
        bullets: {
          en: ['Built Python / pytest automation for IP Camera and Video SoC SDK validation', 'Integrated PySerial, SDK / CGI, UART, Linux, relay, and power-control interfaces', 'Validated H.264 / H.265 modes, resolution, FPS, GOP, bitrate, and CBR / VBR behavior', 'Automated cold boot, warm boot, stress, stability, memory-leak monitoring, and firmware programming', 'Orchestrated Pattern.bin execution across simulator, FPGA, and target modes', 'Compared output.bin with golden.bin and automated numerical PASS / FAIL plus regression evidence', 'Supported repeatable Audio AI validation with Python, Gradio, Docker, datasets, and scripts'],
          zh: ['以 Python / pytest 建立 IP Camera 與 Video SoC SDK 驗證自動化', '整合 PySerial、SDK / CGI、UART、Linux、Relay 與電源控制介面', '驗證 H.264 / H.265 模式、解析度、FPS、GOP、Bitrate 與 CBR / VBR 行為', '自動化 Cold Boot、Warm Boot、Stress、穩定度、Memory Leak 監控與 Firmware Programming', '協調 Pattern.bin 在 Simulator、FPGA 與 Target 模式執行', '比對 output.bin 與 golden.bin，並自動產生數值 PASS / FAIL 與回歸證據', '以 Python、Gradio、Docker、資料集與腳本支援可重複的 Audio AI 驗證'],
        },
      },
      {
        label: c('Camera / IPCam Evidence', 'Camera / IPCam 工程證據'),
        bullets: {
          en: [
            'Built and maintained a Python / pytest Camera / IPCam and Video SoC SDK validation framework for approximately 3 years, comprising approximately 128 pytest test functions—excluding parameterized execution counts—across 2 SDK / firmware build streams',
            'Built Jenkins CI pipeline/job automation, maintained Jenkins jobs, and integrated the Camera/IPCam pytest suite into weekly Jenkins CI regression workflows with automated test execution, result processing, and report generation.',
            'Executed the representative full Camera / IPCam regression weekly, with a typical runtime of approximately 7 days',
            'Executed a separate extended Camera / IPCam stress and stability regression lasting approximately 7 days',
          ],
          zh: [
            '建立並維護 Python / pytest Camera / IPCam 與 Video SoC SDK 驗證框架約 3 年，涵蓋 2 個 SDK / Firmware Build Stream 與約 128 個 pytest 測試函式（不含參數化執行次數）',
            '建立 Jenkins CI Pipeline / Job 自動化、維護 Jenkins Job，並將 Camera / IPCam pytest 測試套件整合至每週執行的 Jenkins CI 回歸流程，自動完成測試執行、結果處理與報告產生。',
            '每週執行代表性完整 Camera / IPCam 回歸測試，典型執行時間約 7 天',
            '另行執行延伸 Camera / IPCam 壓力與穩定性回歸測試，執行時間約 7 天',
          ],
        },
      },
      {
        label: c('AI / NPU Validation Pipeline', 'AI / NPU 驗證流程'),
        body: c('The automation scope covered controlled pattern execution, output comparison, mismatch evidence, PASS / FAIL handling, and regression—not AI model training, model architecture, or NPU compiler ownership.', '自動化範圍涵蓋受控 Pattern 執行、輸出比對、Mismatch 證據、PASS / FAIL 處理與回歸；不包含 AI 模型訓練、模型架構或 NPU Compiler 主責。'),
        flow: [c('Model', '模型'), c('Pattern.bin', 'Pattern.bin'), c('Simulator', 'Simulator'), c('FPGA / Target', 'FPGA / Target'), c('output.bin', 'output.bin'), c('golden.bin', 'golden.bin'), c('Compare', '比對'), c('PASS / FAIL', 'PASS / FAIL')],
      },
      section('Tech Stack', '技術工具', 'Python · pytest · PySerial · SCPI · VeriWave · OpenCV · FFmpeg · Gradio · Docker · Jenkins · GitLab CI', 'Python · pytest · PySerial · SCPI · VeriWave · OpenCV · FFmpeg · Gradio · Docker · Jenkins · GitLab CI'),
    ],
  },
  {
    id: 'career-tpv-fae', index: '03', title: c('TPV Experience', '冠捷科技經歷'),
    summary: c('FAE debugging, Android TV automation testing, certification support, cross-team coordination, and field engineering.', 'FAE 除錯、Android TV 自動化測試、認證支援、跨團隊協作與現場工程支援。'),
    tags: ['Customer Support', 'Android TV', 'Automation', 'System Debug', 'Certification'],
    career: {
      company: c('TPV / 冠捷科技', '冠捷科技 / TPV'),
      cardCompany: c('TPV Technology', '冠捷科技（TPV）'),
      jobTitle: c('Assistant Manager, FAE | Customer Support & Validation', 'FAE 副理｜客戶支援與驗證'),
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
      section('Tech Stack', '技術工具', 'Python · ADB · UIAutomator · Appium · Android / Linux · JMeter · Robot Framework · Jira', 'Python · ADB · UIAutomator · Appium · Android / Linux · JMeter · Robot Framework · Jira'),
    ],
  },
  {
    id: 'career-management-validation', index: '04', title: c('Compal Experience', '仁寶電腦經歷'),
    summary: c('Notebook system validation (BIOS/driver/OS, stability, compatibility, Wi-Fi/Bluetooth), issue isolation with HW/FW/BIOS/RD teams, WHQL/GCF execution, plus test management and team leadership.', 'Notebook 系統驗證（BIOS / Driver / OS、系統穩定性、相容性、Wi-Fi / Bluetooth）、與 HW / FW / BIOS / RD 團隊協同除錯定位問題、執行 WHQL / GCF，並負責測試管理與團隊帶領。'),
    tags: ['Notebook Validation', 'BIOS/Driver/OS', 'Wi-Fi/Bluetooth', 'WHQL/GCF', 'Management'],
    career: {
      company: c('Compal / 仁寶電腦', '仁寶電腦 / Compal'),
      cardCompany: c('Compal Electronics', '仁寶電腦'),
      jobTitle: c('Software Design Validation Section Manager | System Validation & Test Management', '軟體設計驗證課長｜系統驗證與測試管理'),
      period: '2002/07 – 2008/09',
      tenure: c('6 years 3 months', '6年3個月'),
      management: c('Managed approximately 13 team members', '管理約13人'),
    },
    sections: [
      section('Products / Domains', '產品 / 領域', 'Notebook · Mobile broadband · Wi-Fi / Bluetooth connectivity · BIOS / Driver / OS qualification', 'Notebook · 行動寬頻 · Wi-Fi / Bluetooth 連線 · BIOS / Driver / OS 驗證'),
      {
        label: c('Engineering Scope', '工程範圍'),
        bullets: {
          en: [
            'Notebook system validation: BIOS / driver / OS compatibility and stability testing across platform configurations',
            'System stability testing: stress/burn-in and long-run stability validation, with hang/crash reproduction and analysis',
            'Wi-Fi / Bluetooth validation on notebook platforms: connectivity, throughput, and coexistence testing',
            'Issue isolation and cross-functional debugging with HW, FW, BIOS, and RD teams to root-cause and close out failures',
            'WHQL and GCF test execution for driver / hardware logo qualification',
            'Field trial coordination and pre-mass-production validation',
            'Test planning, SOP development, and project/test management',
            'Team leadership, resource allocation, and vendor / customer cross-functional communication',
          ],
          zh: [
            'Notebook 系統驗證：跨平台配置的 BIOS / Driver / OS 相容性與穩定性測試',
            '系統穩定性測試：長時間 Stress / Burn-in 驗證，並重現與分析當機 / 無回應問題',
            'Notebook 平台 Wi-Fi / Bluetooth 驗證：連線、傳輸效能與共存性測試',
            '與 HW、FW、BIOS、RD 團隊協同進行問題定位與跨部門除錯，追蹤問題直到結案',
            '執行 WHQL、GCF 測試，完成 Driver / 硬體 Logo 驗證',
            'Field trial 協調與量產前驗證',
            '測試規劃、SOP 建立與專案 / 測試管理',
            '團隊帶領、資源分配，以及供應商 / 客戶跨部門溝通',
          ],
        },
      },
      section('Tech Stack', '技術工具', 'Windows · BIOS / Driver / OS · Wi-Fi / Bluetooth · WHQL · GCF · Stability / Stress Test · Test Plan · SOP · Vendor Coordination', 'Windows · BIOS / Driver / OS · Wi-Fi / Bluetooth · WHQL · GCF · 穩定性 / Stress 測試 · Test Plan · SOP · Vendor Coordination'),
    ],
  },
];

export const experienceItems = experienceCatalog.filter((item) => Boolean(item.career));

export const careerSnapshot = {
  name: c('Alex Tsou', '鄒志清'),
  role: c(
    'Senior Test Automation & System Validation Engineer',
    '資深測試自動化與系統驗證工程師',
  ),
  experience: c('20+ Years Engineering Experience', '20+ 年工程經驗'),
  education: c(
    'National Cheng Kung University · Electrical Engineering',
    '國立成功大學 · 電機工程學系',
  ),
  summary: c(
    'Engineering experience across test automation, system validation, FAE, camera / AI validation, and ATE engineering.',
    '工程經驗橫跨測試自動化、系統驗證、FAE、Camera / AI 與 ATE。',
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
    { label: c('Professional Experience', '工作經驗'), values: [c('20+ Years Engineering Experience', '20+ 年工程經驗')] },
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
      values: [c('Python / C# · HW/SW Integration · Test Automation · Debug / RCA · CI', 'Python / C# · HW/SW Integration · Test Automation · Debug / RCA · CI')],
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
    tags: ['Python', 'Pattern Generation', 'FPGA / NPU', 'Golden Comparison', 'Mismatch Analysis', 'Regression'],
    related: { itemId: 'case-ai-npu', label: c('Related Case Study', '相關工程案例') },
  },
  {
    id: 'wifi-connectivity',
    index: '02',
    title: c('Wi-Fi / 5G Connectivity', 'Wi-Fi / 5G 連線驗證'),
    summary: c(
      'End-to-end Wi-Fi / 5G router validation covering the cellular-side test platform, DUT, Wi-Fi client, traffic endpoints, packet evidence, and regression.',
      '端到端 Wi-Fi / 5G Router 驗證，涵蓋 Cellular-side 測試平台、DUT、Wi-Fi Client、Traffic Endpoint、封包證據與 Regression。',
    ),
    tags: ['Wi-Fi / 5G', 'Keysight UXM', 'iPerf', 'Wireshark', 'FPGA / MAC Validation', 'Regression', 'Automation'],
    related: { itemId: 'case-wifi-uxm', label: c('Related Case Study', '相關工程案例') },
  },
  {
    id: 'android-tv-fae',
    index: '03',
    title: c('Android TV / FAE', 'Android TV / FAE 客戶技術支援'),
    summary: c(
      'Customer-facing engineering support covering issue reproduction, log/evidence collection, layer isolation, fix verification, regression, certification support, and technical closure.',
      '面向客戶的技術支援，涵蓋問題重現、Log / Evidence 蒐集、問題隔離、修正驗證、Regression、認證支援與技術結案。',
    ),
    tags: ['Customer Support', 'Android / Linux', 'ADB', 'UIAutomator / Appium', 'RCA', 'CTS / GTVS', 'Jira / Robot Framework'],
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
  { title: c('Selected Projects', '精選專案'), items: [c('Robot + ESD automation, Wi-Fi / FPGA validation, Camera / IPCam validation, AI/NPU validation, Audio AI validation, Android TV FAE automation, REST/WebUI/API automation, and Camera / IPCam Jenkins CI regression automation.', 'Robot + ESD 自動化、Wi-Fi / FPGA 驗證、Camera / IPCam 驗證、AI/NPU 驗證、Audio AI 驗證、Android TV FAE 自動化、REST/WebUI/API 自動化與 Camera / IPCam Jenkins CI 回歸自動化。')] },
  { title: c('Leadership / Project Management', '領導 / 專案管理'), items: [c('Test planning, resource coordination, SOP, field trial, vendor coordination, customer communication, and cross-functional issue tracking.', '測試規劃、資源協調、SOP、Field trial、供應商協調、客戶溝通與跨部門問題追蹤。')] },
];

export const skillCategories = [
  { title: c('Programming', '程式語言'), skills: ['Python', 'C', 'C++', 'C#', 'Shell / Batch'] },
  { title: c('Automation', '自動化'), skills: ['Python Automation', 'pytest', 'Test Framework', 'Robot Framework', 'Appium', 'UIAutomator', 'Postman'] },
  { title: c('CI & Engineering Tooling', 'CI 與工程工具'), skills: ['Jenkins', 'GitLab CI', 'GitHub', 'Docker'] },
  { title: c('Test / Validation', '測試 / 驗證'), skills: ['IC / SoC / FPGA Validation', 'Camera SoC', 'AI/NPU', 'Audio AI', 'Wi-Fi / 5G', 'Stress / Stability', 'Regression', 'PASS / FAIL Criteria', 'HW / FW / Driver / Software Isolation'] },
  { title: c('Tools / Interfaces', '工具 / 介面'), skills: ['Instrument Control', 'SCPI', 'DMM', 'Power Supply', 'VeriWave', 'Wireshark', 'iPerf', 'Logs / Traces', 'Jira'] },
];

export const engineeringDebugMethodology = {
  title: c('Reusable Engineering Method', '可重用工程方法'),
  flow: [
    c('Requirements / Test Plan', '需求 / 測試計畫'),
    c('Automation', '自動化'),
    c('Evidence Collection', '證據收集'),
    c('Debug / RCA', 'Debug / RCA'),
    c('Fix Verification', '修正驗證'),
    c('Regression', '回歸'),
  ],
};

export const problemSolvingHighlights = {
  kicker: c('Problem Solving', '問題解決'),
  title: c('Problem-Solving Highlights', '困難案例與問題解決'),
  lead: c(
    'Selected examples showing how failures are reproduced, isolated with evidence, verified, and converted into regression coverage.',
    '以代表性案例呈現問題如何被重現、透過證據隔離、完成修正驗證，並轉換為 Regression Coverage。',
  ),
  labels: {
    problem: c('Problem', '問題'),
    approach: c('Approach', '方法'),
    outcome: c('Isolation Outcome', '隔離結果'),
    logic: c('Engineering Logic', '工程邏輯'),
  },
  cards: [
    {
      id: 'highlight-wifi-throughput',
      index: '01',
      title: c('Wi-Fi / 5G Throughput Degradation', 'Wi-Fi / 5G Throughput 下降分析'),
      problem: c(
        'Measured throughput falls below a known-good baseline.',
        '實測 Throughput 低於已知正常基準。',
      ),
      approach: c(
        'Freeze the baseline and configuration, then correlate RF, link, packet, DUT, router, backhaul, and cellular-side evidence.',
        '固定基準與設定，再關聯 RF、Link、Packet、DUT、Router、Backhaul 與 Cellular-side 證據。',
      ),
      outcome: c(
        'Establish the failure boundary without overstating root-cause ownership; verify the responsible team’s fix and add regression coverage.',
        '在不誇大 Root Cause 責任的前提下建立 Failure Boundary，驗證負責團隊的修正並加入 Regression Coverage。',
      ),
      flow: [c('Baseline', 'Baseline'), c('RF / Link Quality', 'RF / Link Quality'), c('Wi-Fi PHY / MAC', 'Wi-Fi PHY / MAC'), c('TCP / UDP / Packet Evidence', 'TCP / UDP / Packet Evidence'), c('DUT / Driver / Firmware', 'DUT / Driver / Firmware'), c('Router / Backhaul', 'Router / Backhaul'), c('Cellular Side', 'Cellular Side'), c('Isolation', '隔離'), c('Fix Verification', '修正驗證'), c('Regression', '回歸')],
      related: { itemId: 'case-wifi-uxm', label: c('View Wi-Fi / UXM case', '查看 Wi-Fi / UXM 案例') },
    },
    {
      id: 'highlight-ate-handshake',
      index: '02',
      title: c('ATE / Robot / ESD Handshake Failure', 'ATE / Robot / ESD Handshake 異常'),
      problem: c(
        'A handshake sequence does not reach the expected equipment state, or a timeout / exception interrupts deterministic execution.',
        'Handshake 流程未到達預期設備狀態，或 Timeout / Exception 中斷確定性執行。',
      ),
      approach: c(
        'Correlate states, interlocks, commands, acknowledgements, timestamps, equipment responses, and recovery behavior.',
        '關聯 State、Interlock、Command、Acknowledgement、Timestamp、設備回應與 Recovery 行為。',
      ),
      outcome: c(
        'Assign a defensible failure boundary, recover to a safe known state, verify the fix, and preserve PASS / FAIL regression evidence.',
        '建立可辯護的 Failure Boundary、回復至安全已知狀態、驗證修正，並保存 PASS / FAIL 回歸證據。',
      ),
      flow: [c('Reproduce Sequence', '重現流程'), c('Check State', '檢查 State'), c('Check Handshake', '檢查 Handshake'), c('Verify Interlock', '確認 Interlock'), c('Correlate Command / Acknowledgement', '關聯 Command / Acknowledgement'), c('Check Equipment Response', '檢查設備回應'), c('Timeout / Exception Boundary', 'Timeout / Exception Boundary'), c('Recovery', '復原'), c('Fix Verification', '修正驗證'), c('Regression', '回歸')],
      related: { itemId: 'case-ate-robot-esd', label: c('View ATE / Robot / ESD case', '查看 ATE / Robot / ESD 案例') },
    },
    {
      id: 'highlight-customer-rca',
      index: '03',
      title: c('Customer Issue Reproduction & RCA', '客戶問題重現與 RCA'),
      problem: c(
        'A customer-reported symptom must be reproduced across environment, version, and configuration differences before ownership can be assigned.',
        '客戶回報現象必須先跨環境、版本與設定差異完成重現，才能判定責任。',
      ),
      approach: c(
        'Freeze the environment matrix, capture evidence, compare Good vs Bad, isolate the failing layer, and coordinate RD / vendor analysis.',
        '固定環境矩陣、擷取證據、進行 Good vs Bad 比對、隔離失敗層級，並協調 RD / Vendor 分析。',
      ),
      outcome: c(
        'Document the isolation outcome or RD / vendor-owned fix, verify it in the target environment, convert it to regression, and close with evidence.',
        '記錄 Isolation Outcome 或 RD / Vendor-owned fix，在目標環境完成驗證、轉換為 Regression，並以證據結案。',
      ),
      flow: [c('Customer Symptom', '客戶現象'), c('Clarify Environment', '釐清環境'), c('Reproduce', '重現'), c('Freeze Version / Configuration', '固定版本 / 設定'), c('Capture Evidence', '擷取證據'), c('Good vs Bad', 'Good vs Bad'), c('Layer Isolation', 'Layer 隔離'), c('RD / Vendor Coordination', 'RD / Vendor 協作'), c('Fix Verification', '修正驗證'), c('Regression', '回歸'), c('Closure', '結案')],
      related: { itemId: 'case-fae-rca', label: c('View customer RCA case', '查看客戶 RCA 案例') },
    },
  ] satisfies ProblemSolvingHighlight[],
};

export const flagshipCaseStudies: PortfolioItem[] = [
  {
    id: 'case-ai-npu', index: '03', title: c('AI / NPU Validation Pipeline', 'AI / NPU 自動化驗證流程'),
    summary: c('Hands-on pattern generation, controlled target execution, golden comparison, automated verdicts, and regression evidence.', '實作 Pattern 產生、受控目標執行、Golden 比對、自動判定與回歸證據。'),
    tags: ['Python', 'Pattern.bin', 'FPGA / NPU', 'Golden Output', 'Mismatch Analysis', 'Regression'],
    sections: [
      section('Overview', '案例概述', 'Within one continuous Novatek employment period, this work focused on hands-on AI / NPU validation through test-pattern generation, controlled execution, trusted-output comparison, automated PASS / FAIL, and regression.', '此工作位於聯詠同一段連續任職期間內，聚焦 AI / NPU 實作驗證：產生測試 Pattern、受控執行、可信結果比對、自動 PASS / FAIL 與回歸測試。'),
      section('Engineering Challenge', '工程挑戰', 'AI / NPU hardware output must be checked against a trusted expected result while separating numerical mismatches, binary-format errors, layer or output differences, and regressions introduced by SDK or firmware changes.', 'AI / NPU 硬體輸出必須與可信預期結果比對，並區分數值不一致、Binary 格式問題、Layer / Output 差異，以及 SDK 或韌體變更造成的回歸。'),
      section('My Role', '我的角色', 'Develop Python pattern-generation and validation automation, prepare binary inputs, orchestrate execution, parse outputs, compare golden results, automate verdicts, and integrate repeatable regression flows.', '開發 Python Pattern Generator 與驗證自動化、準備 Binary 輸入、協調執行、解析輸出、比對 Golden 結果、自動化判定並整合可重複回歸流程。'),
      { label: c('What I Implemented', '我實作的內容'), bullets: { en: ['Python pattern automation and binary test-pattern preparation', 'Simulator / FPGA / NPU-target execution orchestration', 'output.bin parsing and golden.bin comparison', 'Numerical comparison and explicit PASS / FAIL handling', 'Failure-artifact preservation and regression reporting'], zh: ['Python Pattern 自動化與 Binary 測試 Pattern 準備', 'Simulator / FPGA / NPU Target 執行協調', 'output.bin 解析與 golden.bin 比對', '數值比對與明確 PASS / FAIL 處理', '保留失敗產出物與回歸報告'] } },
      { label: c('Technical Architecture', '技術架構'), flow: [c('Model', '模型'), c('Pattern.bin', 'Pattern.bin'), c('Simulator', 'Simulator'), c('FPGA / Target', 'FPGA / Target'), c('output.bin', 'output.bin'), c('golden.bin', 'golden.bin'), c('Compare', '比對'), c('PASS / FAIL', 'PASS / FAIL')] },
      { label: c('Engineering Evidence', '工程證據'), body: c('Evidence is described by type only; proprietary binary files are not published.', '僅描述證據類型，不公開專有 Binary 檔案。'), bullets: { en: ['Pattern.bin input artifact', 'Output.bin execution result', 'Golden output reference', 'Comparison result', 'Mismatch log', 'Regression result', 'PASS / FAIL record'], zh: ['Pattern.bin 輸入產物', 'Output.bin 執行結果', 'Golden output 參考結果', '比對結果', 'Mismatch Log', '回歸結果', 'PASS / FAIL 紀錄'] } },
      section('Validation Strategy', '驗證策略', 'Use deterministic inputs, controlled execution modes, expected-versus-actual numerical comparison, explicit mismatch review, repeatable criteria, and preserved failure evidence.', '使用確定性輸入、受控執行模式、預期與實際數值比對、明確的 Mismatch Review、可重複判定條件與保留的失敗證據。'),
      { label: c('Debug / RCA Method', '除錯與根因分析'), body: c('Preserve the exact input, output, execution mode, and version before isolating the failing boundary.', '先保留完整輸入、輸出、執行模式與版本，再隔離失敗邊界。'), flow: [c('Mismatch Detected', '發現不一致'), c('Preserve Input / Output', '保留輸入 / 輸出'), c('Identify Failing Stage', '識別失敗階段'), c('Compare Simulator / FPGA / Target', '比對 Simulator / FPGA / Target'), c('Format / Numerical Check', '格式 / 數值檢查'), c('Isolate Validation / SDK / HW', '隔離驗證 / SDK / HW'), c('Fix Verification', '修正驗證'), c('Regression', '回歸')] },
      { label: c('Tools & Technologies', '工具與技術'), bullets: { en: ['Python', 'FPGA / NPU Target', 'Simulator', 'Linux / SDK', 'Binary Pattern / Golden Output'], zh: ['Python', 'FPGA / NPU Target', 'Simulator', 'Linux / SDK', 'Binary Pattern / Golden Output'] } },
      { label: c('Engineering Outputs', '工程輸出'), bullets: { en: ['Reproducible binary patterns', 'Execution and comparison records', 'Mismatch evidence', 'Automated PASS / FAIL verdicts', 'Regression reports'], zh: ['可重現 Binary Pattern', '執行與比對紀錄', 'Mismatch 證據', '自動 PASS / FAIL 判定', '回歸報告'] } },
      section('Engineering Value', '工程價值', 'Turn numerical correctness into a repeatable, reviewable validation workflow that makes mismatches attributable and regression-ready.', '將數值正確性轉換為可重複、可審查的驗證流程，使不一致可歸因並可直接納入回歸。'),
      section('Technical Scope', '技術範圍', 'The work covered AI / NPU validation and automation—not AI model architecture, AI compiler architecture, the full training pipeline, or semiconductor RTL architecture.', '工作涵蓋 AI / NPU 驗證與自動化，不包含 AI 模型架構、AI Compiler 架構、完整訓練流程或半導體 RTL 架構。'),
    ],
  },
  {
    id: 'case-ate-robot-esd', index: '01', title: c('ATE / Robot / ESD System Integration', 'ATE / Robot / ESD 系統整合'),
    summary: c('Multi-equipment orchestration with explicit state, handshake, safety, timeout, evidence, and result boundaries.', '多設備流程整合，具備明確狀態、握手、安全、Timeout、證據與結果邊界。'),
    tags: ['C# / Python', 'ATE', 'Robot', 'ESD', 'State Machine', 'Traceability'],
    sections: [
      section('Overview', '案例概述', 'Integration of ATE software, fixture and instrument control, Robot communication, ESD equipment, state-machine sequencing, safety interlocks, result processing, and traceable logging.', '此整合案例涵蓋 ATE 軟體、治具與儀器控制、Robot 通訊、ESD 設備、狀態機時序、安全 Interlock、結果處理與可追溯 Log。'),
      section('Engineering Challenge', '工程挑戰', 'Production automation requires deterministic equipment sequencing, synchronized states, safe trigger conditions, bounded timeouts, abnormal-state recovery, duplicate-action prevention, and evidence that separates command acceptance from physical completion.', '產測自動化需要確定性設備時序、同步狀態、安全 Trigger 條件、受限 Timeout、異常狀態復原、防止重複動作，以及區分命令接受與實體完成的證據。'),
      section('My Role', '我的角色', 'Develop C# / Python engineering tools and integrate the ATE-side flow, equipment communication, state-machine control, instruments, result processing, logging, timeout and exception handling, and production-debug support.', '開發 C# / Python 工程工具，並整合 ATE 端流程、設備通訊、狀態機控制、儀器、結果處理、Log、Timeout / Exception 處理與產線 Debug 支援。'),
      { label: c('What I Implemented', '我實作的內容'), bullets: { en: ['ATE flow and fixture / instrument orchestration', 'Robot communication and guarded state transitions', '1027 = Robot → ATE feedback; read-only from the ATE side', '1028 = ATE → Robot parameter / motion pulse', '1029 = ATE → Robot discharge-complete pulse', 'Timeouts, abnormal handling, structured logs, and PASS / FAIL result correlation'], zh: ['ATE 流程與治具 / 儀器協調', 'Robot 通訊與受保護的狀態轉換', '1027 = Robot → ATE 回饋；ATE 端唯讀', '1028 = ATE → Robot 參數 / 移動 Pulse', '1029 = ATE → Robot 放電完成 Pulse', 'Timeout、異常處理、結構化 Log 與 PASS / FAIL 結果關聯'] } },
      { label: c('Technical Architecture', '技術架構'), flow: [c('Test Recipe', '測試 Recipe'), c('ATE', 'ATE'), c('Fixture / Instrument Control', '治具 / 儀器控制'), c('Robot Handshake', 'Robot 握手'), c('Position Ready', '位置就緒'), c('ESD Trigger / Completion', 'ESD Trigger / 完成'), c('Result Validation', '結果驗證'), c('Log / Report', 'Log / 報告'), c('PASS / FAIL', 'PASS / FAIL')] },
      { label: c('Engineering Evidence', '工程證據'), body: c('Evidence types used to separate command acceptance, equipment response, timeout behavior, and final result correlation.', '用於區分命令接受、設備回應、Timeout 行為與最終結果關聯的證據類型。'), bullets: { en: ['State / status log', 'Command / acknowledgement sequence', 'Equipment response', 'Instrument measurement', 'Timeout / exception record', 'Result correlation', 'PASS / FAIL report'], zh: ['State / Status Log', 'Command / Acknowledgement 序列', '設備回應', '儀器量測值', 'Timeout / Exception 紀錄', '結果關聯', 'PASS / FAIL 報告'] } },
      section('Validation Strategy', '驗證策略', 'Validate every state transition, acknowledgement, interlock, pulse edge, equipment status, timeout, reconnect or recovery path, stop-on-critical-failure behavior, result correlation, and report field.', '驗證每個狀態轉換、Acknowledgement、Interlock、Pulse 邊緣、設備狀態、Timeout、重連 / 復原路徑、重大失敗停止行為、結果關聯與報告欄位。'),
      { label: c('Debug / RCA Method', '除錯與根因分析'), body: c('Correlate commands, state transitions, equipment responses, timestamps, and result evidence before assigning a failure boundary.', '先關聯命令、狀態轉換、設備回應、時間戳與結果證據，再判定失敗邊界。'), flow: [c('Reproduce Sequence', '重現流程'), c('Collect ATE / Equipment Logs', '收集 ATE / 設備 Log'), c('Check State / Interlock', '檢查狀態 / Interlock'), c('Correlate Handshake', '關聯握手'), c('Isolate Communication / Equipment', '隔離通訊 / 設備'), c('Recovery Check', '復原檢查'), c('Fix Verification', '修正驗證'), c('Regression', '回歸')] },
      { label: c('Tools & Technologies', '工具與技術'), bullets: { en: ['C# / Python', 'ATE / State Machine', 'TCP/IP / Serial', 'Robot / ESD', 'DMM / Power Supply', 'Fixture / Test Point'], zh: ['C# / Python', 'ATE / State Machine', 'TCP/IP / Serial', 'Robot / ESD', 'DMM / Power Supply', 'Fixture / Test Point'] } },
      { label: c('Engineering Outputs', '工程輸出'), bullets: { en: ['Repeatable production flow', 'Equipment-state traceability', 'Structured logs', 'PASS / FAIL records', 'Reproducible failure evidence', 'Safer equipment sequencing'], zh: ['可重複產測流程', '設備狀態追溯', '結構化 Log', 'PASS / FAIL 紀錄', '可重現失敗證據', '較安全的設備時序'] } },
      section('Engineering Value', '工程價值', 'Make a multi-equipment sequence deterministic, diagnosable, recoverable, and auditable without substituting software acknowledgement for physical evidence.', '讓多設備流程具備確定性、可診斷、可復原與可稽核性，且不以軟體 Acknowledgement 取代實體證據。'),
      section('Technical Scope', '技術範圍', 'This case describes ATE-side integration and validated public handshake directions. It does not disclose additional proprietary mappings, customer identifiers, internal recipes, Robot firmware architecture, ESD hardware design, or unsupported physical-completion claims.', '此案例描述 ATE 端整合與已公開驗證的握手方向；不揭露額外專有 Mapping、客戶識別、內部 Recipe、Robot 韌體架構、ESD 硬體設計或無證據的實體完成宣稱。'),
    ],
  },
  {
    id: 'case-fae-rca', index: '04', title: c('FAE / Customer Issue Reproduction & RCA', 'FAE / 客戶問題重現與根因分析'),
    summary: c('Customer-facing reproduction, evidence collection, layer isolation, RD coordination, fix verification, regression, and closure.', '客戶面問題重現、證據收集、Layer 隔離、RD 協作、修正驗證、回歸與結案。'),
    tags: ['TPV FAE', 'Android / Linux', 'ADB / Appium', 'Jira', 'Robot Framework', 'RCA'],
    sections: [
      section('Overview', '案例概述', 'Based on verified TPV customer-facing FAE experience across TV, Android TV, and Android / Linux environments: turn a customer report into reproducible evidence, coordinated analysis, fix verification, regression, and closure.', '依據已驗證的冠捷客戶面 FAE 經驗，涵蓋 TV、Android TV 與 Android / Linux 環境：將客戶回報轉換為可重現證據、協作分析、修正驗證、回歸與結案。'),
      section('Engineering Challenge', '工程挑戰', 'Customer-only, intermittent, or configuration-sensitive failures often arrive with insufficient logs and can cross application, framework, driver, SDK, system, and hardware boundaries.', '僅在客戶環境出現、間歇或受設定影響的問題，常伴隨 Log 不足，且可能跨越 Application、Framework、Driver、SDK、System 與 Hardware 邊界。'),
      section('My Role', '我的角色', 'Provide customer technical support, reproduce issues, develop reproduction tools and automated scripts, prepare environments, collect evidence, coordinate RD / QA / vendors, verify fixes, run regression, document results, and support remote or onsite closure.', '提供客戶技術支援、問題重現、重現工具與自動腳本開發、環境準備、證據收集、協調 RD / QA / Vendor、修正驗證、回歸、文件與遠端 / 現場結案支援。'),
      { label: c('What I Implemented', '我實作的內容'), bullets: { en: ['Repeatable reproduction procedures and environment records', 'Python / ADB automation and Android UI reproduction scripts', 'Version, configuration, Good-vs-Bad, log, screenshot, and recording evidence', 'Issue-tracking and RD-ready technical summaries', 'Regression-ready cases and customer-closure documentation'], zh: ['可重複重現步驟與環境紀錄', 'Python / ADB 自動化與 Android UI 重現腳本', '版本、設定、Good-vs-Bad、Log、截圖與錄影證據', 'Issue 追蹤與供 RD 使用的技術摘要', '可回歸案例與客戶結案文件'] } },
      { label: c('Technical Architecture', '技術架構'), flow: [c('Customer Report', '客戶回報'), c('Clarify Environment', '釐清環境'), c('Reproduce', '問題重現'), c('Capture Log / Evidence', '擷取 Log / 證據'), c('Compare Good vs Bad', 'Good vs Bad 比對'), c('Isolate Layer', '隔離 Layer'), c('RD / Vendor Analysis', 'RD / Vendor 分析'), c('Fix', '修正'), c('Fix Verification', '修正驗證'), c('Regression', '回歸'), c('Customer Closure', '客戶結案')] },
      { label: c('Engineering Evidence', '工程證據'), body: c('Evidence is summarized by category only; customer-confidential artifacts are not published.', '僅以類型摘要呈現證據，不公開客戶機密產物。'), bullets: { en: ['Reproduction steps', 'Environment / version information', 'ADB / system log', 'Screenshot / trace where applicable', 'Good-vs-Bad comparison', 'Fix verification result', 'Regression result', 'Issue closure record'], zh: ['問題重現步驟', '環境 / 版本資訊', 'ADB / System Log', '適用情境下的截圖 / Trace', 'Good-vs-Bad 比對', '修正驗證結果', '回歸結果', '問題結案紀錄'] } },
      section('Validation Strategy', '驗證策略', 'Validate in the original or customer-equivalent environment through functional, compatibility, OTA, streaming, stress, CTS / GTVS-support, and regression checks where applicable; document residual uncertainty instead of overstating closure.', '在原始或客戶等效環境中，依情境執行 Functional、Compatibility、OTA、Streaming、Stress、CTS / GTVS 支援與回歸檢查；記錄剩餘不確定性，不誇大結案。'),
      { label: c('Debug / RCA Method', '除錯與根因分析'), body: c('Change one controlled factor at a time, preserve raw evidence, and compare expected behavior with a known-good baseline before locating the source of a failure.', '一次只改變一個受控因素，保留原始證據，並先與已知正常基準比對，再定位失敗來源。'), flow: [c('Symptom / Version Check', '現象 / 版本確認'), c('Reproduce', '重現'), c('Evidence Capture', '證據擷取'), c('Good vs Bad', 'Good vs Bad'), c('Layer Isolation', 'Layer 隔離'), c('RCA Tracking', 'RCA 追蹤'), c('Fix Verification', '修正驗證'), c('Regression / Closure', '回歸 / 結案')] },
      { label: c('Tools & Technologies', '工具與技術'), bullets: { en: ['Python / ADB', 'UIAutomator / Appium', 'Android / Linux', 'JMeter / Monkey / MonkeyRunner', 'Robot Framework / Jira', 'CTS / GTVS support'], zh: ['Python / ADB', 'UIAutomator / Appium', 'Android / Linux', 'JMeter / Monkey / MonkeyRunner', 'Robot Framework / Jira', 'CTS / GTVS 支援'] } },
      { label: c('Engineering Outputs', '工程輸出'), bullets: { en: ['Reproduction package', 'Version and environment matrix', 'Logs, screenshots, and recordings', 'Issue-analysis record', 'Fix-verification and regression evidence', 'Customer-ready closure summary'], zh: ['重現 Package', '版本與環境矩陣', 'Log、截圖與錄影', '問題分析紀錄', '修正驗證與回歸證據', '客戶可理解的結案摘要'] } },
      section('Engineering Value', '工程價值', 'Improve reproducibility, evidence quality, engineering-layer isolation, and RD/customer communication while making fix verification repeatable and issue closure less ambiguous.', '提升可重現性、證據品質、工程層級隔離與 RD / 客戶溝通，並讓修正驗證可重複、問題結案更少歧義。'),
      section('Technical Scope', '技術範圍', 'The work covered TPV customer-facing FAE reproduction, automation, coordination, and validation—not customer product architecture, upstream firmware implementation, vendor decisions, or unsupported root-cause claims.', '工作範圍為冠捷客戶面 FAE 的重現、自動化、協作與驗證，不包含客戶產品架構、上游韌體實作、Vendor 決策或缺乏證據的根因宣稱。'),
    ],
  },
  {
    id: 'case-wifi-uxm', index: '02', title: c('Wi-Fi / 5G Router + Keysight UXM Python Automation', 'Wi-Fi / 5G Router + Keysight UXM Python 自動化'),
    summary: c(
      'End-to-end Python automation across the cellular-side test platform, 5G router, Wi-Fi client, traffic tools, packet evidence, automated verdicts, and regression reporting.',
      '以 Python 串接 Cellular-side 測試平台、5G Router、Wi-Fi Client、流量工具、封包證據、自動判定與 Regression Report。',
    ),
    tags: ['Python', 'Keysight UXM', 'SCPI / VISA', '5G Router', 'Wi-Fi', 'iPerf', 'Wireshark'],
    sections: [
      section(
        'Overview',
        '案例概述',
        'End-to-end connectivity and performance validation in which Keysight UXM represents the cellular / 5G-side test platform—not a Wi-Fi tester—while the DUT / 5G router bridges traffic to a Wi-Fi client and controlled endpoints.',
        '此案例為端到端連線與效能驗證：Keysight UXM 代表 Cellular / 5G-side 測試平台，而非 Wi-Fi Tester；DUT / 5G Router 再將流量橋接至 Wi-Fi Client 與受控 Traffic Endpoint。',
      ),
      section(
        'Engineering Challenge',
        '工程挑戰',
        'A throughput or stability failure can originate from cellular setup, router state, Wi-Fi association, traffic generation, packet behavior, automation timing, or environmental conditions. The workflow must preserve enough synchronized evidence to isolate the failing boundary.',
        'Throughput 或穩定度失敗可能來自 Cellular Setup、Router 狀態、Wi-Fi Association、Traffic Generation、封包行為、自動化時序或環境條件；流程必須保留足夠的同步證據以隔離失敗邊界。',
      ),
      section(
        'My Role',
        '我的角色',
        'Build Python automation for scenario configuration, supported instrument and DUT interfaces, execution control, measurement capture, result parsing, PASS / FAIL criteria, failure evidence, and repeatable regression reporting.',
        '建立 Python 自動化流程，涵蓋情境設定、支援的儀器與 DUT 介面、執行控制、量測擷取、結果解析、PASS / FAIL Criteria、失敗證據與可重複的 Regression Report。',
      ),
      {
        label: c('What I Implemented', '我實作的內容'),
        bullets: {
          en: ['Configuration-driven 5G router and Wi-Fi scenarios', 'Python orchestration across supported UXM, DUT, client, and traffic interfaces', 'iPerf result parsing and Wireshark evidence capture', 'DL / UL throughput, latency, and packet-loss criteria', 'Reconnect, stability, interference, distance, angle, GNSS, USB, and coexistence scenarios', 'Structured failure artifacts and regression reports'],
          zh: ['設定驅動的 5G Router 與 Wi-Fi 測試情境', '以 Python 協調受支援的 UXM、DUT、Client 與 Traffic 介面', 'iPerf 結果解析與 Wireshark 證據擷取', 'DL / UL Throughput、Latency 與 Packet Loss Criteria', 'Reconnect、穩定度、干擾、距離、角度、GNSS、USB 與共存情境', '結構化失敗產物與 Regression Report'],
        },
      },
      {
        label: c('Technical Architecture', '技術架構'),
        flow: [c('Python Controller', 'Python Controller'), c('Keysight UXM / Cellular Side', 'Keysight UXM / Cellular Side'), c('DUT / 5G Router', 'DUT / 5G Router'), c('Wi-Fi Client', 'Wi-Fi Client'), c('iPerf / Wireshark', 'iPerf / Wireshark'), c('Metrics / Evidence', 'Metrics / Evidence'), c('PASS / FAIL', 'PASS / FAIL'), c('Regression Report', 'Regression Report')],
      },
      {
        label: c('Engineering Evidence', '工程證據'),
        body: c('Evidence is described by category only; proprietary configurations, traces, and customer data are not published.', '僅以類型描述工程證據；不公開專有設定、Trace 或客戶資料。'),
        bullets: {
          en: ['Scenario and topology record', 'UXM / DUT / client state', 'iPerf DL / UL measurements', 'Wireshark packet evidence', 'Latency and packet-loss results', 'Timeout / reconnect record', 'PASS / FAIL and regression report'],
          zh: ['情境與拓撲紀錄', 'UXM / DUT / Client 狀態', 'iPerf DL / UL 量測', 'Wireshark 封包證據', 'Latency 與 Packet Loss 結果', 'Timeout / Reconnect 紀錄', 'PASS / FAIL 與 Regression Report'],
        },
      },
      section(
        'Validation Strategy',
        '驗證策略',
        'Freeze topology, build, configuration, cellular and Wi-Fi state, traffic direction, duration, and acceptance criteria; correlate instrument, DUT, client, traffic, and packet evidence before assigning a failure boundary; then verify the fix and rerun related regressions.',
        '固定拓撲、Build、設定、Cellular / Wi-Fi 狀態、流量方向、測試時間與驗收條件；先關聯儀器、DUT、Client、Traffic 與封包證據，再判定失敗邊界，最後執行 Fix Verification 與相關 Regression。',
      ),
      {
        label: c('Debug / RCA Method', '除錯與根因分析'),
        flow: [c('Reproduce', '重現'), c('Freeze Topology / Version', '固定拓撲 / 版本'), c('Collect UXM / DUT / Client Evidence', '收集 UXM / DUT / Client 證據'), c('Compare Good / Bad', 'Good / Bad 比對'), c('Isolate Cellular / Router / Wi-Fi / Traffic', '隔離 Cellular / Router / Wi-Fi / Traffic'), c('Fix Verification', '修正驗證'), c('Regression', '回歸')],
      },
      {
        label: c('Tools & Technologies', '工具與技術'),
        bullets: {
          en: ['Python', 'Keysight UXM as the cellular / 5G-side platform', 'Supported SCPI / VISA interfaces', '5G router and Wi-Fi client', 'iPerf', 'Wireshark', 'Structured logs and regression reporting'],
          zh: ['Python', '作為 Cellular / 5G-side 平台的 Keysight UXM', '受支援的 SCPI / VISA 介面', '5G Router 與 Wi-Fi Client', 'iPerf', 'Wireshark', '結構化 Log 與 Regression Report'],
        },
      },
      section(
        'Engineering Value',
        '工程價值',
        'Turn a multi-hop connectivity path into a repeatable, measurable, and diagnosable validation workflow with explicit criteria, attributable evidence, and regression-ready results.',
        '將多段連線路徑轉換成可重複、可量測、可診斷的驗證流程，具備明確 Criteria、可歸因證據與可直接回歸的結果。',
      ),
      section(
        'Technical Scope',
        '技術範圍',
        'The work covered validation automation and supported equipment integration. It does not claim ownership of Keysight internal implementation, modem RF design, cellular protocol-stack implementation, proprietary calibration algorithms, or customer-confidential architecture.',
        '工作範圍為驗證自動化與受支援的設備整合；不宣稱負責 Keysight 內部實作、Modem RF 設計、Cellular Protocol Stack 實作、專有 Calibration Algorithm 或客戶機密架構。',
      ),
    ],
  },
].sort((first, second) => first.index.localeCompare(second.index));

export const visualItems: PortfolioItem[] = [
  {
    id: 'visual-automation-manager', index: 'VIS_01', title: c('Cross-product Engineering Method', '跨產品工程方法'),
    summary: c('A reusable workflow connecting requirements, automation, evidence, debugging, fix verification, and regression.', '以可重用流程串接需求、自動化、工程證據、除錯、修正驗證與回歸。'),
    tags: ['Automation', 'Validation', 'Evidence', 'RCA'],
    cardFlow: [c('Requirements', '需求'), c('Automation', '自動化'), c('Evidence', '證據'), c('RCA', '根因分析'), c('Regression', '回歸')],
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
    summary: c('Visual brief for Wi-Fi AC FPGA / chip validation, automation scripts, RF measurement, stress monitoring, and automated regression reporting.', '圖解說明 Wi-Fi AC FPGA / 晶片驗證、自動化腳本、RF 量測、壓力監控與自動化回歸報告。'),
    tags: ['Novatek', 'Wi-Fi', 'FPGA', 'Regression Reporting'],
    cardFlow: [c('Test Case', '測試案例'), c('DUT / FPGA', 'DUT / FPGA'), c('Instrument', '儀器'), c('Measure', '量測'), c('Report', '報告')],
    sections: [
      section('Overview', '概述', 'The visual presents Wi-Fi FPGA/chip validation, MAC-layer certification focus, throughput/RF automation, IP camera stream checks, and automated regression reporting.', '圖解呈現 Wi-Fi FPGA / 晶片驗證、MAC Layer 認證重點、Throughput / RF 自動化、影像串流檢查與自動化回歸報告。'),
      section('My Role', '我的角色', 'Validation and automation engineering for test cases, equipment control, measurement capture, reporting, and issue evidence.', '負責測試案例、設備控制、量測擷取、報告與問題證據的驗證及自動化工程工作。'),
      section('What I Implemented', '我實作的內容', 'Python/pytest test cases, equipment adapters, measurement capture and reporting, and stream-analysis automation.', '實作 Python / pytest 測試案例、設備 Adapter、量測擷取與報告及串流分析自動化。'),
      section('What I Validated', '我驗證的內容', 'Throughput, PER, latency, RF behavior, stream evidence, stress behavior, and system stability.', '驗證 Throughput、PER、Latency、RF 行為、串流證據、壓力行為與系統穩定度。'),
      section('What I Did Not Own', '非本人負責範圍', 'Wi-Fi chip or FPGA architecture, product firmware ownership, and certification-authority decisions.', '不包含 Wi-Fi 晶片或 FPGA 架構、產品韌體主責及認證機構的最終決策。'),
      section('Technical Flow', '技術流程', 'Test case design → pytest execution → hardware control → video stream or RF measurement → performance/stress analysis → report/notification.', '測試案例設計 → pytest 執行 → 硬體控制 → 影像串流或 RF 量測 → 效能 / 壓力分析 → 報告 / 通知。'),
      section('Tools / Technologies', '工具 / 技術', 'Python, pytest, OpenCV, FFmpeg, Docker, PySerial, PyVISA, SCPI, LabVIEW, VeriWave, scope, PSU.', 'Python、pytest、OpenCV、FFmpeg、Docker、PySerial、PyVISA、SCPI、LabVIEW、VeriWave、示波器、PSU。'),
      section('Validation Approach', '驗證方法', 'Control test parameters, collect throughput/PER/latency or stream evidence, monitor system stability, and generate reproducible reports.', '控制測試參數、收集 Throughput / PER / Latency 或串流證據、監控系統穩定度並產生可重現報告。'),
      section('Result / Value', '成果 / 價值', 'Shows repeatable automation coverage across test control, measurement collection, system monitoring, reporting, and notification.', '呈現測試控制、量測收集、系統監控、報告與通知之間可重複的自動化覆蓋。'),
    ],
  },
  {
    id: 'visual-novatek-ai-npu', index: 'VIS_03', title: c('AI / NPU Validation Pipeline', 'AI / NPU 驗證流程'),
    summary: c('Visual brief for AI/NPU model validation through pattern generation, simulator/FPGA execution, golden comparison, and regression testing.', 'AI/NPU 驗證圖解涵蓋 Pattern 產生、Simulator / FPGA 執行、Golden 比對與回歸測試。'),
    tags: ['AI/NPU', 'Pattern.bin', 'golden.bin', 'Regression'],
    cardFlow: [c('Model', '模型'), c('Pattern.bin', 'Pattern.bin'), c('FPGA / Target', 'FPGA / Target'), c('Compare', '比對'), c('PASS / FAIL', 'PASS / FAIL')],
    sections: [
      section('Overview', '概述', 'A repeatable AI/NPU validation pipeline that prepares test patterns, executes controlled modes, compares output against a reference, and produces reviewable PASS / FAIL evidence.', '建立可重複的 AI / NPU 驗證流程：準備測試 Pattern、執行受控模式、將輸出與參考結果比對，並產生可審查的 PASS / FAIL 證據。'),
      section('My Role', '我的角色', 'AI/NPU validation through test-pattern preparation or generation, controlled execution, numerical comparison, regression testing, and validation reporting.', '負責測試 Pattern 準備或產生、受控執行、數值比對、回歸測試與驗證報告等 AI / NPU 驗證工作。'),
      section('Engineering Challenge', '工程挑戰', 'Results from simulator, FPGA, target, or reference modes must be comparable under the same pattern, build, configuration, and criteria while preserving enough evidence to localize mismatches.', 'Simulator、FPGA、Target 或 Reference 模式的結果必須在相同 Pattern、Build、設定與判定條件下可比對，並保留足夠證據以定位 Mismatch。'),
      section('What I Implemented', '我實作的內容', 'Python-based pattern automation, Pattern.bin execution orchestration, output.bin-to-golden.bin comparison, mismatch review support, PASS / FAIL handling, and regression reporting.', '實作 Python Pattern 自動化、Pattern.bin 執行流程、output.bin 與 golden.bin 比對、Mismatch review 支援、PASS / FAIL 處理及回歸報告。'),
      { label: c('Technical Flow', '技術流程'), flow: [c('Model', '模型'), c('Pattern.bin', 'Pattern.bin'), c('Simulator', 'Simulator'), c('FPGA / Target', 'FPGA / Target'), c('output.bin', 'output.bin'), c('golden.bin', 'golden.bin'), c('Compare', '比對'), c('PASS / FAIL', 'PASS / FAIL')] },
      section('Tools / Technologies', '工具 / 技術', 'Python, C++ / Python utilities, internal toolchain, FPGA board, test-pattern database, binary outputs, and regression automation framework.', 'Python、C++ / Python 工具、內部工具鏈、FPGA Board、Test Pattern DB、Binary output 與 Regression 自動化框架。'),
      section('Validation Strategy', '驗證策略', 'Use deterministic patterns, controlled execution modes, known reference outputs, numerical comparison, explicit mismatch review, and repeatable regression criteria.', '使用確定性 Pattern、受控執行模式、已知參考輸出、數值比對、明確的 Mismatch Review 與可重複回歸條件。'),
      section('Debug / RCA Method', 'Debug / RCA 方法', 'Reproduce the mismatch with the same pattern and build, confirm mode and configuration, compare expected and actual outputs, localize the first divergence, and isolate test data, toolchain, runtime, or target behavior.', '以相同 Pattern 與 Build 重現 Mismatch、確認模式與設定、比對預期與實際輸出、定位第一個分歧點，再隔離測試資料、工具鏈、Runtime 或 Target 行為。'),
      section('Engineering Value', '工程價值', 'Turn AI/NPU execution into a traceable validation workflow with controlled inputs, comparable outputs, explicit criteria, and regression-ready evidence.', '將 AI / NPU 執行轉換為具受控輸入、可比輸出、明確條件及可回歸證據的可追溯驗證流程。'),
      section('What I Did Not Own', '非本人負責範圍', 'AI model architecture or training, AI compiler architecture, the complete model-training pipeline, and product decisions outside validation.', '不包含 AI 模型架構或訓練、AI Compiler 架構、完整模型訓練流程，以及驗證範圍以外的產品決策。'),
    ],
  },
  {
    id: 'visual-audio-ai', index: 'VIS_04', title: c('Audio AI Validation', 'Audio AI 驗證'),
    summary: c('Visual brief for smart-speaker/audio AI chip validation with scenarios, datasets, Python/Gradio/Docker test UI, and result analysis.', '智慧音箱 / Audio AI 晶片驗證圖解涵蓋情境、資料集、Python / Gradio / Docker 測試介面與結果分析。'),
    tags: ['Audio AI', 'Gradio', 'Docker', 'Dataset'],
    cardFlow: [c('Scenario', '情境'), c('Audio Input', '音訊輸入'), c('Target', '目標平台'), c('Analyze', '分析'), c('Report', '報告')],
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
    tags: ['TPV', 'FAE', 'Android TV', 'CTS/GTVS'],
    cardFlow: [c('Customer Issue', '客戶問題'), c('Reproduce', '重現'), c('Evidence', '證據'), c('Fix Verify', '修正驗證'), c('Closure', '結案')],
    sections: [
      section('Overview', '概述', 'This visual shows FAE issue support, Android TV testing, automation/certification work, and cross-functional technical coordination.', '此圖呈現 FAE 問題支援、Android TV 測試、自動化 / 認證工作與跨部門技術協調。'),
      section('My Role', '我的角色', 'FAE/customer support and automation validation for Android/Linux applications and TV products.', '負責 Android / Linux 應用與 TV 產品的 FAE / 客戶支援及自動化驗證。'),
      section('What I Implemented', '我實作的內容', 'Python ADB/UI automation, remote-control sequences, screenshot and recording evidence, issue reproduction, and issue-tracking workflows.', '實作 Python ADB / UI 自動化、遙控器操作序列、截圖與錄影證據、問題重現及 Issue 追蹤流程。'),
      section('What I Validated', '我驗證的內容', 'Android TV functions, applications, OTA, streaming, stress behavior, and CTS/GTVS test readiness.', '驗證 Android TV 功能、應用程式、OTA、Streaming、壓力行為與 CTS / GTVS 測試準備度。'),
      section('What I Did Not Own', '非本人負責範圍', 'Customer product architecture, upstream firmware ownership, and certification-authority decisions.', '不包含客戶產品架構、上游韌體主責及認證機構的最終決策。'),
      section('Technical Flow', '技術流程', 'Customer issue → reproduction → debug log → RD fix → automation/regression → customer-ready explanation and closure.', '客戶問題 → 重現 → Debug Log → RD 修正 → 自動化 / 回歸 → 客戶可理解說明與結案。'),
      section('Tools / Technologies', '工具 / 技術', 'Python, ADB, UIAutomator, Appium, Monkey / MonkeyRunner, JMeter, Robot Framework, Jira, Confluence, Android Studio.', 'Python、ADB、UIAutomator、Appium、Monkey / MonkeyRunner、JMeter、Robot Framework、Jira、Confluence、Android Studio。'),
      section('Validation Approach', '驗證方法', 'Functional testing, app compatibility, OTA, streaming, stress testing, Google CTS/GTVS, screenshots/recording, and GUI recognition.', '功能測試、App 相容性、OTA、Streaming、壓力測試、Google CTS/GTVS、截圖 / 錄影與 GUI 辨識。'),
      section('Result / Value', '成果 / 價值', 'Communicates a practical field-engineering loop from customer symptom to reproducible evidence and regression.', '傳達從客戶現象到可重現證據與回歸測試的實務現場工程閉環。'),
    ],
  },
];

const project = (id:string,index:string,title:Copy,summary:Copy,tags:string[],approach:Copy,validation:Copy):PortfolioItem => ({id,index,title,summary,tags,sections:[section('Overview','概述',summary.en,summary.zh),{label:c('Architecture / Flow','架構 / 流程'),flow:[c('Configuration','設定'),c('Automation / Control','自動化 / 控制'),c('Data Collection','資料收集'),c('Criteria','判定條件'),c('Evidence / Report','證據 / 報告')]},section('Approach','方法',approach.en,approach.zh),section('Validation Method','驗證方法',validation.en,validation.zh),section('Result / Value','成果 / 價值','The structure supports clear coverage, artifacts, defect evidence, and outcome review.','此結構支援清楚的覆蓋範圍、產出物、缺陷證據與成果審查。')]});

export const projectItems: PortfolioItem[] = [
  project('router','01',c('5G / Wi-Fi Router Automation','5G / Wi-Fi Router 自動化'),c('Configurable network and device validation with traffic, packets, stability, and reproducible evidence.','以可設定流程驗證網路與裝置，涵蓋流量、封包、穩定度與可重現證據。'),['5G','Wi-Fi','iPerf'],c('Drive device APIs or UI, generate traffic, capture state and packets, then correlate failures across DUT, client, network, and automation.','控制裝置 API 或 UI、產生流量、擷取狀態與封包，再於 DUT、Client、網路與自動化間關聯失敗。'),c('Use topology and version control, throughput/stability criteria, Wireshark evidence, retries with reason, and regression.','使用拓撲與版本控管、吞吐 / 穩定度條件、Wireshark 證據、具原因的重試與回歸測試。')),
  project('rest','02',c('REST API Automation Testing','REST API 自動化測試'),c('Contract, authorization, data, negative-case, and service-behavior validation.','驗證 Contract、授權、資料、負向案例與服務行為。'),['API','Python','Postman'],c('Separate clients, test data, assertions, reporting, and environment configuration so cases stay readable.','分離 Client、測試資料、Assertion、報告與環境設定，維持案例可讀性。'),c('Verify status, schema, fields, error behavior, idempotency, timing, and correlation with service logs.','驗證狀態碼、Schema、欄位、錯誤行為、冪等性、Timing 與 Service Log 關聯。')),
  project('selenium','03',c('Selenium WebUI Automation','Selenium WebUI 自動化'),c('Web UI Automation with Selenium','Selenium Web UI 自動化驗證'),['Web UI','Selenium','Regression'],c('Automated repeatable Web UI validation scenarios such as login, configuration changes, apply/save behavior, and post-change verification.','將登入、設定變更、套用/儲存與變更後確認等 Web UI 操作轉成可重複執行的自動化驗證情境。'),c('Validated expected UI behavior and configuration results through repeatable automated execution and result checks.','透過可重複的自動化執行與結果確認，驗證 UI 行為與設定結果是否符合預期。')),
  project('can-hil','04',c('Automotive CAN / HIL Automation','車用 CAN / HIL 自動化'),c('Signal, timing, state, diagnostic, and fault-response validation with traceable bus evidence.','以可追溯 Bus 證據驗證 Signal、Timing、狀態、診斷與 Fault Response。'),['CAN','HIL','Diagnostics'],c('Map requirements to messages/signals, stimulate controlled conditions, capture traces, and correlate DUT state with expected transitions.','將需求對應至 Message / Signal，施加受控條件、擷取 Trace，並關聯 DUT 狀態與預期轉換。'),c('Check scaling, timing, timeout, invalid values, recovery, diagnostic behavior, and regression against recorded traces.','檢查 Scaling、Timing、Timeout、Invalid Value、復原、診斷行為與 Trace 回歸。')),
  project('opencv','05',c('OpenCV / Computer Vision Demo','OpenCV / 電腦視覺展示'),c('Reproducible acquisition, preprocessing, inspection criteria, and annotated visual evidence.','建立可重現取像、前處理、檢測條件與標註視覺證據。'),['OpenCV','Vision','AOI'],c('Control image inputs, preserve original pixels, isolate processing stages, and expose thresholds and intermediate outputs.','控制影像輸入、保存原始像素、隔離處理階段，並呈現門檻與中間輸出。'),c('Use labeled positive/negative cases, edge conditions, repeatability, and false-positive/false-negative review.','使用標註正負案例、邊界條件、重複性與誤判 / 漏判審查。')),
  project('cicd','06',c('Camera / IPCam Jenkins CI Regression Automation','Camera / IPCam Jenkins CI 回歸自動化'),c('Camera / IPCam pytest automation integrated into weekly Jenkins CI regression workflows with automated test execution, result processing, and report generation.','將 Camera / IPCam pytest 自動化整合至每週 Jenkins CI 回歸流程，自動完成測試執行、結果處理與報告產生。'),['Jenkins CI','pytest','Regression'],c('Build Jenkins CI pipeline/job automation, maintain Jenkins jobs, and integrate the Camera / IPCam pytest suite into weekly Jenkins CI regression workflows.','建立 Jenkins CI Pipeline / Job 自動化、維護 Jenkins Job，並將 Camera / IPCam pytest 測試套件整合至每週 Jenkins CI 回歸流程。'),c('Verify automated test execution, result processing, and report generation within the Jenkins CI workflow.','驗證 Jenkins CI 流程中的自動測試執行、結果處理與報告產生。')),
];
