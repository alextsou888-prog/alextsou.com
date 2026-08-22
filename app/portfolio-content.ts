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
  verification?: Copy;
};

const c = (en: string, zh: string): Copy => ({ en, zh });
const section = (labelEn: string, labelZh: string, bodyEn: string, bodyZh: string): DetailSection => ({
  label: c(labelEn, labelZh),
  body: c(bodyEn, bodyZh),
});

export const ui = {
  en: {
    skip: 'Skip to main content', portfolio: 'Engineering Portfolio', navLabel: 'Primary navigation',
    about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects', contact: 'Contact',
    eyebrow: 'Software quality · automation · systems',
    heroA: 'Building reliable systems through', heroB: 'rigorous automation.',
    heroLead: 'A focused engineering portfolio covering software automation, customer-facing engineering, camera validation, production test, robotics, and computer vision.',
    explore: 'Explore engineering areas', ready: 'READY', panelLabel: 'Engineering focus areas',
    aboutKicker: '01 / About', aboutTitle: 'Quality engineering with a systems mindset.',
    aboutP1: 'This portfolio is structured around reliable validation: clear test intent, automation that can be diagnosed, and evidence that supports engineering decisions.',
    aboutP2: 'The work spans software, firmware, devices, instruments, networks, camera systems, production test, and customer issue closure—while keeping verified facts separate from placeholders.',
    principles: [
      ['Evidence first', 'Make test outcomes traceable, repeatable, and easy to review.'],
      ['Engineer for failure', 'Design automation around diagnostics, boundaries, recovery, and uncertainty.'],
      ['Close the loop', 'Connect reproduction, root-cause analysis, regression, and delivery.'],
    ],
    skillsKicker: '02 / Engineering Focus', skillsTitle: 'Technical capabilities',
    skillsLead: 'Select a card to review responsibilities, architecture, tools, validation, debugging, and engineering value.',
    expKicker: '03 / Experience', expTitle: 'Experience areas',
    expLead: 'Company names requested for presentation; unverified title, dates, tenure, customers, and metrics remain explicitly unpublished.',
    projectsKicker: '04 / Projects', projectsTitle: 'Selected project areas',
    projectsLead: 'Expandable technical briefs prepared for verified case studies, artifacts, and results.',
    contactKicker: '05 / Contact', contactTitle: "Let's connect the right way.",
    contactBody: 'Verified public contact channels have not been provided. Add a confirmed email, LinkedIn profile, or GitHub profile before publishing it.',
    contactTodo: 'TODO: Add verified contact details', contactCode: 'CONTACT_CHANNEL',
    footer: 'Built for alextsou.com · Unverified facts remain clearly marked.', backTop: 'Back to top',
    open: 'Open details', close: 'Close details', dialogLabel: 'Engineering detail',
    verification: 'Verification boundary', language: 'Language', selected: 'Selected',
  },
  zh: {
    skip: '跳至主要內容', portfolio: '工程作品集', navLabel: '主要導覽',
    about: '關於我', skills: '技能', experience: '經歷', projects: '專案', contact: '聯絡方式',
    eyebrow: '軟體品質 · 自動化 · 系統驗證',
    heroA: '以嚴謹的自動化方法，打造', heroB: '可靠且可驗證的系統。',
    heroLead: '聚焦軟體自動化、客戶技術支援、Camera 驗證、產測、機器人整合與電腦視覺的工程作品集。',
    explore: '瀏覽工程領域', ready: '就緒', panelLabel: '工程專長領域',
    aboutKicker: '01 / 關於我', aboutTitle: '以系統思維實踐品質工程。',
    aboutP1: '本作品集以可靠驗證為核心：明確定義測試目的、建立可診斷的自動化流程，並以可追溯證據支援工程決策。',
    aboutP2: '技術範圍涵蓋軟體、韌體、裝置、儀器、網路、Camera 系統、產測與客戶問題結案，同時清楚區分已驗證事實與待補資料。',
    principles: [
      ['證據優先', '讓測試結果可追溯、可重現，並便於技術審查。'],
      ['為失敗而設計', '預先納入診斷邊界、復原機制與不確定性處理。'],
      ['形成閉環', '串接問題重現、根因分析、回歸測試與交付流程。'],
    ],
    skillsKicker: '02 / 工程專長', skillsTitle: '技術能力',
    skillsLead: '點選卡片查看職責、架構、工具、驗證方法、Debug 流程與工程價值。',
    expKicker: '03 / 經歷', expTitle: '經歷領域',
    expLead: '依需求呈現公司名稱；未確認的職稱、日期、年資、客戶與成果數據均不公開或推測。',
    projectsKicker: '04 / 專案', projectsTitle: '精選專案領域',
    projectsLead: '可展開的技術摘要，後續可加入已驗證案例、產出物與成果。',
    contactKicker: '05 / 聯絡方式', contactTitle: '以正確且可信的方式建立聯繫。',
    contactBody: '目前尚未提供可公開且已確認的聯絡管道；發布前可加入已驗證的 Email、LinkedIn 或 GitHub。',
    contactTodo: 'TODO：加入已驗證的聯絡資料', contactCode: '聯絡管道',
    footer: '為 alextsou.com 建置 · 未驗證資訊均明確標示。', backTop: '返回頂端',
    open: '開啟詳細內容', close: '關閉詳細內容', dialogLabel: '工程技術詳情',
    verification: '驗證邊界', language: '語言', selected: '已選取',
  },
} as const;

const sharedArchitecture: DetailSection = {
  label: c('Architecture / Flow', '架構 / 流程'),
  flow: [c('Test Config', '測試設定'), c('Test Runner', '測試執行器'), c('Device / API / Instrument Control', '裝置 / API / 儀器控制'), c('Data Collection', '資料收集'), c('Criteria', '判定條件'), c('PASS / FAIL', 'PASS / FAIL'), c('Log / Report', 'Log / 報告')],
};

export const focusItems: PortfolioItem[] = [
  {
    id: 'sw-automation', index: '01', title: c('SW Automation', '軟體自動化'),
    summary: c('Maintainable test frameworks that connect configuration, control, evidence, criteria, and reports.', '建立可維護的測試框架，串接設定、控制、證據、判定條件與報告。'),
    tags: ['Python', 'C#', 'pytest', 'CI/CD'],
    sections: [
      section('Overview', '概述', 'Automation for software, hardware/software integration, regression, and production test workflows.', '涵蓋軟體、軟硬體整合、回歸測試與產測流程的自動化。'),
      section('Role / Responsibility', '角色 / 職責', 'Translate test intent into reusable cases, deterministic orchestration, clear exception handling, and reviewable evidence.', '將測試目的轉換為可重用案例、可預期的流程控制、明確的例外處理與可審查證據。'),
      sharedArchitecture,
      section('Tools / Technologies', '工具 / 技術', 'Python, C#, pytest, Selenium, Postman, RESTful APIs, Locust, JSON configuration, logging, reporting, and CI/CD quality gates.', 'Python、C#、pytest、Selenium、Postman、RESTful API、Locust、JSON 設定、Log、報告與 CI/CD 品質關卡。'),
      section('Validation Method', '驗證方法', 'Use explicit preconditions, measurable criteria, negative cases, regression suites, and reproducible reports.', '使用明確前置條件、可量測判定標準、負向案例、回歸套件與可重現報告。'),
      section('Debug Method', '問題分析 / Debug', 'Preserve inputs, timestamps, raw responses, device state, exceptions, retries, and final verdict so failures remain diagnosable.', '保留輸入、時間戳、原始回應、裝置狀態、例外、重試與最終判定，確保失敗可診斷。'),
      section('Result / Value', '成果 / 價值', 'Reduce repetitive execution, improve coverage consistency, and make failures faster to reproduce and assign.', '降低重複操作、提升覆蓋一致性，並加速問題重現與責任邊界釐清。'),
    ],
  },
  {
    id: 'fae-customer', index: '02', title: c('FAE / Customer', 'FAE / 客戶技術支援'),
    summary: c('Structured customer issue clarification, reproduction, cross-functional analysis, and closure.', '以結構化方式完成客戶問題釐清、重現、跨團隊分析與結案。'), tags: ['FAE', 'RCA', 'Jira', 'Regression'],
    sections: [
      section('Overview', '概述', 'Customer-facing engineering distinct from test-framework implementation: clarify symptoms, align environments, and drive technical closure.', '不同於測試框架開發的客戶面工程：釐清現象、對齊環境並推動技術結案。'),
      section('Role / Responsibility', '角色 / 職責', 'Confirm scope, priority, versions, topology, reproduction rate, expected behavior, and acceptance criteria with the customer.', '與客戶確認範圍、優先級、版本、拓撲、重現率、預期行為與驗收標準。'),
      section('Approach', '處理方法', 'Create reproduction steps, collect logs, compare customer and internal environments, isolate failure conditions, and provide a workaround when verified.', '建立重現步驟、收集 Log、比較客戶與內部環境、隔離失敗條件，並在確認後提供可行 workaround。'),
      section('Cross-functional Interaction', '跨團隊協作', 'Coordinate firmware, software, validation, RD, product, and customer teams through Jira or equivalent bug tracking.', '透過 Jira 或同類追蹤系統，協調 FW、SW、驗證、RD、產品與客戶團隊。'),
      section('Validation / Closure', '驗證 / 結案', 'Verify the fix against the original environment, run regression around adjacent functions, document residual risk, and explain the outcome in customer-ready language.', '在原始環境驗證修正，針對鄰近功能執行回歸測試，記錄殘餘風險，並以客戶可理解的方式說明結果。'),
      section('Key Takeaways', '關鍵重點', 'A credible FAE loop preserves evidence, avoids premature root-cause claims, and keeps ownership and next actions explicit.', '可信的 FAE 閉環需保留證據、避免過早宣稱根因，並清楚標示負責人與下一步。'),
    ],
  },
  {
    id: 'camera', index: '03', title: c('Camera / IPCam Validation', 'Camera / IPCam 驗證'),
    summary: c('Automated validation of camera, ISP, codec, image quality, AI detection, stress, and daily builds.', '自動驗證 Camera、ISP、Codec、影像品質、AI 偵測、壓力測試與 Daily Build。'), tags: ['ISP', 'Codec', 'SSIM', 'IPCam'],
    sections: [
      section('Overview', '概述', 'Automated validation of camera acquisition, ISP controls, codec behavior, image quality, and AI detection functions.', '自動驗證 Camera 取像、ISP 控制、Codec 行為、影像品質與 AI 偵測功能。'),
      { label: c('Architecture / Flow', '架構 / 流程'), flow: [c('Test Configuration / JSON', '測試設定 / JSON'), c('Python Test Case', 'Python 測試案例'), c('SDK / CGI', 'SDK / CGI'), c('Camera / ISP / Codec Setting', 'Camera / ISP / Codec 設定'), c('Snapshot / Record', '截圖 / 錄影'), c('Result Collection', '結果收集'), c('Criteria Comparison', '條件比對'), c('PASS / FAIL', 'PASS / FAIL'), c('Log', 'Log')] },
      { label: c('Coverage Examples', '驗證項目範例'), bullets: { en: ['Brightness, contrast, saturation, sharpness, noise reduction', 'FPS, bitrate, GOP, ROI, rotation, SSIM', 'Face, person, and car detection', 'Stress test, daily build, and customer issue reproduction'], zh: ['亮度、對比、飽和度、銳利度、降噪', 'FPS、Bitrate、GOP、ROI、旋轉、SSIM', '人臉、人員與車輛偵測', '壓力測試、Daily Build 與客戶問題重現'] } },
      section('Validation Method', '驗證方法', 'Control inputs and capture conditions, preserve reference media, compare measurable criteria, and separate transport, imaging, codec, and algorithm verdicts.', '控制輸入與取像條件、保留參考影像，依可量測標準比對，並區分傳輸、影像、Codec 與演算法判定。'),
      section('Debug Method', '問題分析 / Debug', 'Reproduce; preserve logs, images, and video; verify acquisition; inspect exposure, gain, and focus; compare expected versus actual; then isolate SDK, firmware, algorithm, or automation.', '先重現並保留 Log、圖片與影片；確認取像後檢查曝光、Gain、Focus，比對預期與實際，再隔離 SDK、FW、演算法或自動化問題。'),
      section('Result / Value', '成果 / 價值', 'Provide repeatable evidence for release decisions and shorten the path from customer symptom to an attributable failure boundary.', '為版本決策提供可重現證據，縮短從客戶現象到可歸因失敗邊界的路徑。'),
    ],
  },
  {
    id: 'vision-aoi', index: '04', title: c('AI / Computer Vision / AOI', 'AI / 電腦視覺 / AOI'),
    summary: c('Image-processing pipelines with controlled inputs, measurable inspection criteria, and explainable failure evidence.', '以受控輸入、可量測檢測標準與可解釋失敗證據建立影像處理流程。'), tags: ['OpenCV', 'AOI', 'Detection'],
    sections: [section('Overview','概述','Build reproducible vision demos and AOI inspection flows without presenting model output as ground truth.','建立可重現的電腦視覺展示與 AOI 檢測流程，不把模型輸出直接視為真值。'),section('Approach','方法','Normalize acquisition, define regions of interest, extract features or detections, apply thresholds, and preserve annotated evidence.','標準化取像、定義 ROI、擷取特徵或偵測結果、套用門檻並保存標註證據。'),section('Validation Method','驗證方法','Use labeled references, positive/negative samples, boundary cases, repeatability checks, and false-positive/false-negative review.','使用標註參考、正負樣本、邊界案例、重複性檢查，以及誤判與漏判審查。'),section('Debug Method','問題分析 / Debug','Separate lighting, optics, acquisition, preprocessing, feature extraction, model, and criteria errors.','分離光源、光學、取像、前處理、特徵擷取、模型與判定條件問題。'),section('Tools / Technologies','工具 / 技術','Python, OpenCV, image statistics, contour/component analysis, template or feature comparison, and visual evidence overlays.','Python、OpenCV、影像統計、輪廓 / 元件分析、樣板或特徵比對與視覺證據疊圖。')],
  },
  {
    id: 'ate', index: '05', title: c('ATE Production Test', 'ATE 產測'),
    summary: c('Deterministic station orchestration, instrument control, limits, traceability, and production-safe verdicts.', '以確定性站台流程、儀器控制、規格上下限、追溯性與產線安全判定支援產測。'), tags: ['ATE', 'Instruments', 'Traceability'],
    sections: [section('Overview','概述','Production test automation that coordinates DUT state, instruments, fixtures, recipes, limits, and station evidence.','協調 DUT 狀態、儀器、治具、Recipe、規格上下限與站台證據的產測自動化。'),sharedArchitecture,section('Validation Method','驗證方法','Validate initialization, interlocks, command acknowledgement, measurement stability, limit evaluation, retest policy, and report integrity.','驗證初始化、Interlock、命令確認、量測穩定度、規格判定、重測政策與報告完整性。'),section('Debug Method','問題分析 / Debug','Correlate station timestamps, instrument responses, DUT logs, fixture state, recipe version, and operator action.','關聯站台時間戳、儀器回應、DUT Log、治具狀態、Recipe 版本與操作紀錄。'),section('Result / Value','成果 / 價值','Improve consistency and traceability without hiding fixture, instrument, product, or process uncertainty.','提升一致性與可追溯性，同時不掩蓋治具、儀器、產品或製程的不確定性。')],
  },
  {
    id: 'robot-esd', index: '06', title: c('Robot + ESD Automation', 'Robot + ESD 自動化'),
    summary: c('Register-based ATE/Robot handshake and state machine designed to prevent duplicate fire and missed pulses.', '以 Register 為基礎的 ATE / Robot 握手與狀態機，避免重複放電與遺漏 Pulse。'), tags: ['Robot TCP', 'ESD', 'State machine'],
    sections: [
      section('Overview', '概述', 'ATE-driven orchestration of Robot TCP initialization, case parameters, motion, discharge-complete feedback, timeouts, and traceable verdicts.', '由 ATE 協調 Robot TCP 初始化、CASE 參數、移動、放電完成通知、Timeout 與可追溯判定。'),
      { label: c('Robot Initialization', 'Robot 初始化'), bullets: { en: ['4096.0 = 0 STOP → 200 ms', '4096.2 = 0 DISABLE → 200 ms', '4096.1 = 1 ERR CLEAR → 200 ms → 0 → 200 ms', '4096.3 = 1 Load Program → 200 ms → 0 → 200 ms', '4096.2 = 1 ENABLE', '4096.0 = 1 START Program'], zh: ['4096.0 = 0 STOP → 200 ms', '4096.2 = 0 DISABLE → 200 ms', '4096.1 = 1 ERR CLEAR → 200 ms → 0 → 200 ms', '4096.3 = 1 載入程式 → 200 ms → 0 → 200 ms', '4096.2 = 1 ENABLE', '4096.0 = 1 START Program'] } },
      { label: c('Robot → ATE Feedback (Read Only)', 'Robot → ATE 回饋（唯讀）'), bullets: { en: ['1027 is read-only from the ATE perspective', '1 = Waiting / HOME / initialization complete', '2 = Parameters received', '3 = Intermediate / running feedback', '4 = At test point / safe position', '5 = Robot operation complete'], zh: ['1027 對 ATE 而言為唯讀，ATE 不可寫入', '1 = 等待 / HOME / 初始化完成', '2 = 已收到參數', '3 = 中間狀態 / 執行中回饋', '4 = 已到測試點 / 安全位置', '5 = Robot 動作完成'] } },
      { label: c('ATE → Robot Parameters and Pulses', 'ATE → Robot 參數與 Pulse'), bullets: { en: ['1024: 1 Contact; 2 AIR', '1025: Contact TP1–TP6 = 1–6; AIR ATP1–ATP6 = 7–12', '1026: shot count', '1028: 0 → 1 → 0 parameter-submit pulse; 200 ms intervals', '1028: 0 → 2 → 0 robot-motion pulse; 200 ms intervals', '1029: 0 → 1 → 0 Contact discharge-complete pulse', '1029: 0 → 2 → 0 AIR discharge-complete pulse'], zh: ['1024：1 = Contact；2 = AIR', '1025：Contact TP1–TP6 = 1–6；AIR ATP1–ATP6 = 7–12', '1026：Shot count', '1028：0 → 1 → 0 參數提交 Pulse；間隔 200 ms', '1028：0 → 2 → 0 Robot 移動 Pulse；間隔 200 ms', '1029：0 → 1 → 0 Contact 放電完成 Pulse', '1029：0 → 2 → 0 AIR 放電完成 Pulse'] } },
      section('CASE / Production Flow', 'CASE / 產線流程', 'Execute the same CASE loop, then advance to the next CASE. The represented plan contains 144 statuses and a production total of 1,980 shots.', '執行同一 CASE 迴圈後進入下一 CASE；此流程呈現 144 Status 與產線總計 1,980 shots。'),
      section('Safety and Reliability', '安全與可靠性', 'Treat the handshake as a state machine: edge-controlled pulses, acknowledgement checks, bounded timeouts, idempotent recovery, and explicit prevention of duplicate fire or missed pulse.', '以狀態機管理握手：控制 Pulse 邊緣、確認回饋、限制 Timeout、可重入復原，並明確防止重複放電或遺漏 Pulse。'),
      section('Traceability / Verdict', '追溯性 / 判定', 'Record case, point, shot, commands, 1027 transitions, pulse timestamps, timeout evidence, and final PASS / FAIL / UNCERTAIN. Command acceptance alone is not physical discharge evidence.', '記錄 CASE、點位、Shot、命令、1027 狀態轉換、Pulse 時間戳、Timeout 證據與最終 PASS / FAIL / UNCERTAIN；命令接受不等於實體放電證據。'),
    ],
  },
  {
    id:'python',index:'07',title:c('Python Automation','Python 自動化'),summary:c('Configuration-driven test runners, device/API control, parsers, evidence, and reports.','以設定驅動的測試執行器整合裝置 / API 控制、解析、證據與報告。'),tags:['Python','pytest','JSON'],sections:[section('Overview','概述','Use Python to compose readable test layers and reusable adapters.','以 Python 組合易讀的測試層與可重用 Adapter。'),sharedArchitecture,section('Reliability','可靠性','Apply typed boundaries where practical, explicit timeouts, controlled retries, structured logging, and deterministic cleanup.','依需要使用型別邊界、明確 Timeout、受控重試、結構化 Log 與確定性 Cleanup。'),section('Validation','驗證','Unit-test parsers and criteria; integration-test real interfaces separately from mocks.','以單元測試驗證 Parser 與條件判定，並將真實介面整合測試與 Mock 分開。')],
  },
  {
    id:'csharp',index:'08',title:c('C# Automation','C# 自動化'),summary:c('Windows-oriented automation, device orchestration, UI integration, and strongly structured workflows.','適用 Windows 的自動化、裝置流程控制、UI 整合與強結構化工作流程。'),tags:['C#','.NET','Windows'],sections:[section('Overview','概述','Use C# for maintainable desktop, station, and hardware-integration automation.','以 C# 建立可維護的桌面、站台與硬體整合自動化。'),section('Architecture','架構','Separate UI, orchestration, transport, device services, criteria, and persistence boundaries.','分離 UI、流程控制、Transport、裝置服務、判定與資料保存邊界。'),section('Debug Method','問題分析 / Debug','Correlate exceptions, state transitions, transport traces, device responses, and operator-visible status.','關聯 Exception、狀態轉換、Transport Trace、裝置回應與操作介面狀態。'),section('Validation','驗證','Test state transitions and failure paths with fakes before controlled integration with real devices.','先以 Fake 驗證狀態轉換與失敗路徑，再受控整合真實裝置。')],
  },
  {
    id:'api-web',index:'09',title:c('REST API / Web / Performance','REST API / Web / 效能測試'),summary:c('API contracts, browser journeys, negative cases, concurrency, and measurable service behavior.','驗證 API Contract、瀏覽器流程、負向案例、併發與可量測服務行為。'),tags:['Postman','Selenium','Locust'],sections:[section('Overview','概述','Combine REST API, WebUI, and load testing at the correct layer.','在正確層級整合 REST API、WebUI 與負載測試。'),section('Tools','工具','Postman for exploration and collections; Python/pytest for maintainable assertions; Selenium or Playwright for user journeys; Locust for load profiles.','以 Postman 探索與管理 Collection；Python / pytest 建立可維護 Assertion；Selenium 或 Playwright 驗證使用者流程；Locust 建立負載模型。'),section('Validation','驗證','Check status, schema, fields, authorization, idempotency, latency, concurrency, error handling, and recovery.','檢查狀態碼、Schema、欄位、授權、冪等性、Latency、併發、錯誤處理與復原。'),section('Debug','問題分析 / Debug','Preserve request/response, correlation IDs, timing, browser evidence, server logs, and data preconditions.','保留 Request / Response、Correlation ID、Timing、瀏覽器證據、Server Log 與資料前置條件。')],
  },
  {
    id:'validation',index:'10',title:c('Validation / Verification','Validation / Verification 驗證'),summary:c('Requirements-to-evidence coverage with controlled environments, criteria, traceability, and regression.','從需求到證據的覆蓋，包含受控環境、判定條件、追溯性與回歸測試。'),tags:['Coverage','Criteria','Regression'],sections:[section('Overview','概述','Turn requirements and risks into observable, reviewable test evidence.','將需求與風險轉換為可觀察、可審查的測試證據。'),section('Approach','方法','Define environment, preconditions, steps, oracle, data, boundaries, negative cases, and exit criteria.','定義環境、前置條件、步驟、Oracle、資料、邊界、負向案例與退出條件。'),section('Traceability','追溯性','Link requirement, case, build, configuration, evidence, defect, fix, and regression result.','串接需求、案例、Build、設定、證據、Defect、修正與回歸結果。'),section('Verdict','判定','Use PASS, FAIL, BLOCKED, or UNCERTAIN when evidence does not support a binary claim.','當證據不足以支援二元結論時，使用 PASS、FAIL、BLOCKED 或 UNCERTAIN。')],
  },
  {
    id:'debug-rca',index:'11',title:c('Debug / Root Cause Analysis','問題分析 / 根因分析'),summary:c('Evidence-preserving isolation from symptom to reproducible condition and attributable failure boundary.','保留證據，從現象逐步隔離至可重現條件與可歸因的失敗邊界。'),tags:['Logs','RCA','Isolation'],sections:[section('Overview','概述','Debug is a controlled narrowing process, not a premature root-cause label.','Debug 是受控縮小範圍的過程，不是過早貼上根因標籤。'),section('Approach','方法','Reproduce, freeze the environment, establish a timeline, compare known-good and failing states, vary one factor, and record each observation.','重現、固定環境、建立時間線、比較正常與失敗狀態、一次只改一項因素並記錄觀察。'),section('Evidence','證據','Preserve logs, packets, media, versions, configuration, timestamps, raw responses, and failure artifacts.','保存 Log、封包、媒體、版本、設定、時間戳、原始回應與失敗產出物。'),section('Result','結果','State confirmed cause, probable cause, excluded areas, remaining uncertainty, owner, and next experiment separately.','分別標示已確認原因、可能原因、已排除範圍、剩餘不確定性、負責人與下一個實驗。')],
  },
  {
    id:'customer-repro',index:'12',title:c('Customer Issue Reproduction','客戶問題重現'),summary:c('Translate incomplete field symptoms into controlled, shareable, regression-ready reproduction cases.','將不完整的現場現象轉換為受控、可分享且可回歸的重現案例。'),tags:['Environment','Evidence','Closure'],sections:[section('Overview','概述','Reproduction bridges customer language and engineering evidence.','問題重現是客戶描述與工程證據之間的橋樑。'),section('Inputs','輸入','Confirm product, firmware/software, topology, settings, frequency, trigger, expected result, actual result, and available evidence.','確認產品、FW / SW、拓撲、設定、發生率、觸發條件、預期結果、實際結果與現有證據。'),section('Method','方法','Match the environment, reproduce the minimum case, preserve artifacts, then simplify without losing the symptom.','對齊環境、重現最小案例並保留產出物，再在不遺失現象的前提下簡化。'),section('Closure','結案','Convert the case into a regression test, verify the fix in customer-equivalent conditions, and communicate residual risk.','將案例轉為回歸測試，在客戶等效條件驗證修正，並說明殘餘風險。')],
  },
];

export const experienceItems: PortfolioItem[] = [
  {id:'novatek',index:'EXP_01',title:c('Novatek Experience','Novatek 經歷'),summary:c('Camera / IPCam validation and customer-facing engineering focus; verified role details remain to be published.','聚焦 Camera / IPCam 驗證與客戶面工程；已驗證職務資料仍待公開。'),tags:['Camera','Validation','FAE'],verification:c('TODO: Add verified title, dates, responsibilities, and non-sensitive evidence.','TODO：加入已驗證的職稱、日期、職責與非機密證據。'),sections:[section('Technical Focus','技術重點','Camera/IPCam validation, ISP/codec behavior, automation, issue reproduction, logs, and cross-functional analysis are represented as portfolio capabilities.','以作品集能力呈現 Camera / IPCam 驗證、ISP / Codec 行為、自動化、問題重現、Log 與跨團隊分析。'),section('Customer Interaction','客戶互動','Clarify environments and symptoms, prepare reproduction evidence, coordinate analysis, and verify regression where confirmed.','釐清環境與現象、準備重現證據、協調分析，並在確認後執行回歸驗證。'),section('Verification Boundary','驗證邊界','No title, dates, tenure, customer identity, or quantified result is asserted here.','此處不宣稱職稱、日期、年資、客戶身分或量化成果。')]},
  {id:'fih',index:'EXP_02',title:c('FIH Experience','FIH 經歷'),summary:c('System validation, automation, and customer issue workflow focus; unverified employment facts remain unpublished.','聚焦系統驗證、自動化與客戶問題流程；未驗證任職資訊不公開。'),tags:['System Test','Automation','Customer'],verification:c('TODO: Add verified title, dates, responsibilities, and non-sensitive evidence.','TODO：加入已驗證的職稱、日期、職責與非機密證據。'),sections:[section('Technical Focus','技術重點','System-level validation across software, devices, networks, logs, and regression workflows.','涵蓋軟體、裝置、網路、Log 與回歸流程的系統層級驗證。'),section('Engineering Method','工程方法','Align environments, automate repeatable checks, isolate failures, and maintain defect-to-regression traceability.','對齊環境、自動化重複檢查、隔離失敗，並維持 Defect 到回歸測試的追溯性。'),section('Verification Boundary','驗證邊界','No title, dates, tenure, customer identity, or quantified result is asserted here.','此處不宣稱職稱、日期、年資、客戶身分或量化成果。')]},
  {id:'foxlink',index:'EXP_03',title:c('Foxlink / ATE Experience','Foxlink / ATE 經歷'),summary:c('ATE, production test, instrument, Robot, and ESD integration focus; verified employment details remain pending.','聚焦 ATE、產測、儀器、Robot 與 ESD 整合；已驗證任職資料仍待補。'),tags:['ATE','Production Test','Robot'],verification:c('TODO: Add verified title, dates, responsibilities, and non-sensitive evidence.','TODO：加入已驗證的職稱、日期、職責與非機密證據。'),sections:[section('Technical Focus','技術重點','Station orchestration, production recipes, device/instrument control, Robot handshakes, ESD sequencing, verdicts, and traceability.','站台流程、產測 Recipe、裝置 / 儀器控制、Robot 握手、ESD 時序、判定與追溯性。'),section('Engineering Method','工程方法','Use explicit state transitions, interlocks, acknowledgement, timeouts, evidence, and safe recovery boundaries.','使用明確狀態轉換、Interlock、Ack、Timeout、證據與安全復原邊界。'),section('Verification Boundary','驗證邊界','The technical flow is represented; title, dates, tenure, customer identity, and outcome metrics are not invented.','呈現技術流程，但不虛構職稱、日期、年資、客戶身分或成果數據。')]},
];

const project = (id:string,index:string,title:Copy,summary:Copy,tags:string[],approach:Copy,validation:Copy):PortfolioItem => ({id,index,title,summary,tags,verification:c('TODO: Add verified project-specific artifacts and results.','TODO：加入已驗證的專案產出物與成果。'),sections:[section('Overview','概述',summary.en,summary.zh),{label:c('Architecture / Flow','架構 / 流程'),flow:[c('Configuration','設定'),c('Automation / Control','自動化 / 控制'),c('Data Collection','資料收集'),c('Criteria','判定條件'),c('Evidence / Report','證據 / 報告')]},section('Approach','方法',approach.en,approach.zh),section('Validation Method','驗證方法',validation.en,validation.zh),section('Result / Value','成果 / 價值','The structure is ready for verified coverage, artifacts, defects, and outcomes without inventing metrics.','此結構可加入已驗證的覆蓋、產出物、Defect 與成果，不虛構量化數據。')]});

export const projectItems: PortfolioItem[] = [
  project('router','01',c('5G / Wi-Fi Router Automation','5G / Wi-Fi Router 自動化'),c('Configurable network and device validation with traffic, packets, stability, and reproducible evidence.','以可設定流程驗證網路與裝置，涵蓋流量、封包、穩定度與可重現證據。'),['5G','Wi-Fi','iPerf'],c('Drive device APIs or UI, generate traffic, capture state and packets, then correlate failures across DUT, client, network, and automation.','控制裝置 API 或 UI、產生流量、擷取狀態與封包，再於 DUT、Client、網路與自動化間關聯失敗。'),c('Use topology and version control, throughput/stability criteria, Wireshark evidence, retries with reason, and regression.','使用拓撲與版本控管、吞吐 / 穩定度條件、Wireshark 證據、具原因的重試與回歸測試。')),
  project('rest','02',c('REST API Automation Testing','REST API 自動化測試'),c('Contract, authorization, data, negative-case, and service-behavior validation.','驗證 Contract、授權、資料、負向案例與服務行為。'),['API','Python','Postman'],c('Separate clients, test data, assertions, reporting, and environment configuration so cases stay readable.','分離 Client、測試資料、Assertion、報告與環境設定，維持案例可讀性。'),c('Verify status, schema, fields, error behavior, idempotency, timing, and correlation with service logs.','驗證狀態碼、Schema、欄位、錯誤行為、冪等性、Timing 與 Service Log 關聯。')),
  project('selenium','03',c('Selenium WebUI Automation','Selenium WebUI 自動化'),c('Accessible, maintainable browser journeys with explicit waits and failure evidence.','以明確等待與失敗證據建立可存取、可維護的瀏覽器流程。'),['Web UI','Selenium','Regression'],c('Use stable locators, page/component abstractions, explicit state checks, controlled data, and screenshots only as supporting evidence.','使用穩定 Locator、頁面 / 元件抽象、明確狀態檢查、受控資料，並將截圖作為輔助證據。'),c('Cover keyboard paths, responsive layouts, error states, navigation, and deterministic cleanup across supported browsers.','涵蓋鍵盤操作、響應式版面、錯誤狀態、導覽與支援瀏覽器上的確定性 Cleanup。')),
  project('can-hil','04',c('Automotive CAN / HIL Automation','車用 CAN / HIL 自動化'),c('Signal, timing, state, diagnostic, and fault-response validation with traceable bus evidence.','以可追溯 Bus 證據驗證 Signal、Timing、狀態、診斷與 Fault Response。'),['CAN','HIL','Diagnostics'],c('Map requirements to messages/signals, stimulate controlled conditions, capture traces, and correlate DUT state with expected transitions.','將需求對應至 Message / Signal，施加受控條件、擷取 Trace，並關聯 DUT 狀態與預期轉換。'),c('Check scaling, timing, timeout, invalid values, recovery, diagnostic behavior, and regression against recorded traces.','檢查 Scaling、Timing、Timeout、Invalid Value、復原、診斷行為與 Trace 回歸。')),
  project('opencv','05',c('OpenCV / Computer Vision Demo','OpenCV / 電腦視覺展示'),c('Reproducible acquisition, preprocessing, inspection criteria, and annotated visual evidence.','建立可重現取像、前處理、檢測條件與標註視覺證據。'),['OpenCV','Vision','AOI'],c('Control image inputs, preserve original pixels, isolate processing stages, and expose thresholds and intermediate outputs.','控制影像輸入、保存原始像素、隔離處理階段，並呈現門檻與中間輸出。'),c('Use labeled positive/negative cases, edge conditions, repeatability, and false-positive/false-negative review.','使用標註正負案例、邊界條件、重複性與誤判 / 漏判審查。')),
  project('cicd','06',c('CI/CD Automation','CI/CD 自動化'),c('Automated quality gates that keep build, test, evidence, and release decisions visible.','以自動化品質關卡清楚呈現 Build、測試、證據與發布決策。'),['CI/CD','Jenkins','GitLab CI'],c('Separate fast checks, integration tests, artifacts, deployment gates, and environment-specific credentials.','分離快速檢查、整合測試、Artifact、部署關卡與環境專用憑證。'),c('Require reproducible jobs, explicit exit codes, retained reports, failure ownership, and controlled rerun policy.','要求可重現 Job、明確 Exit Code、保留報告、失敗責任與受控重跑政策。')),
];
