import { readFile } from 'node:fs/promises';

const siteUrl = new URL(process.env.SITE_URL ?? 'http://localhost:3000/');
const failures = [];

function fail(message) {
  failures.push(message);
}

async function get(url) {
  try {
    return await fetch(url, { redirect: 'follow' });
  } catch (error) {
    fail(`${url}: ${error.message}`);
    return null;
  }
}

const response = await get(siteUrl);

if (!response || !response.ok) {
  fail(`Homepage returned ${response?.status ?? 'no response'}`);
} else {
  const html = await response.text();

  const requiredSections = ['home', 'capability-overview', 'case-studies', 'problem-solving', 'domains', 'skills', 'experience', 'resume', 'about', 'projects', 'contact'];
  for (const id of requiredSections) {
    if (!new RegExp(`id=["']${id}["']`).test(html)) {
      fail(`Missing section target #${id}`);
    }
  }

  const primaryHierarchy = ['home', 'capability-overview', 'case-studies', 'domains', 'skills', 'experience', 'resume', 'contact'];
  const hierarchyPositions = primaryHierarchy.map((id) => html.search(new RegExp(`id=["']${id}["']`)));
  if (hierarchyPositions.some((position, index) => index > 0 && position <= hierarchyPositions[index - 1])) {
    fail(`Primary homepage hierarchy is out of order: ${primaryHierarchy.join(' → ')}`);
  }

  const domainCards = html.match(/data-domain-card=/g) ?? [];
  if (domainCards.length !== 6) {
    fail(`Expected exactly 6 product / technical domain cards, found ${domainCards.length}`);
  }

  const capabilityCards = [...html.matchAll(/data-capability-card=["']([^"']+)["']/g)].map((match) => match[1]);
  const expectedCapabilities = [
    'capability-automation',
    'capability-validation',
    'capability-debug-rca',
    'capability-system-integration',
    'capability-customer-engineering',
    'capability-test-architecture',
  ];
  if (capabilityCards.length !== 6 || expectedCapabilities.some((id) => !capabilityCards.includes(id))) {
    fail(`Expected exactly 6 engineering capability cards, found: ${capabilityCards.join(', ') || 'none'}`);
  }
  if (!html.includes('核心工程能力')) fail('Missing Engineering Capabilities section title');

  const overviewCards = [...html.matchAll(/data-overview-card=["']([^"']+)["']/g)].map((match) => match[1]);
  const expectedOverviewCards = [
    'overview-test-automation',
    'overview-system-validation',
    'overview-wifi-5g',
    'overview-camera-ai-npu',
    'overview-ate-integration',
    'overview-fae-customer',
  ];
  if (overviewCards.length !== 6 || expectedOverviewCards.some((id) => !overviewCards.includes(id))) {
    fail(`Expected exactly 6 Engineering Capability Overview cards, found: ${overviewCards.join(', ') || 'none'}`);
  }

  const overviewTagCounts = [...html.matchAll(/data-overview-tag-count=["'](\d+)["']/g)].map((match) => Number(match[1]));
  const overviewPointCounts = [...html.matchAll(/data-overview-point-count=["'](\d+)["']/g)].map((match) => Number(match[1]));
  if (overviewTagCounts.length !== 6 || overviewTagCounts.some((count) => count > 4)) {
    fail(`Overview cards must expose at most 4 tags each, found: ${overviewTagCounts.join(', ') || 'none'}`);
  }
  if (overviewPointCounts.length !== 6 || overviewPointCounts.some((count) => count > 3)) {
    fail(`Overview cards must expose at most 3 evidence points each, found: ${overviewPointCounts.join(', ') || 'none'}`);
  }

  const flagshipCards = [...html.matchAll(/data-case-study-card=["']([^"']+)["']/g)].map((match) => match[1]);
  const expectedFlagshipCards = ['case-ate-robot-esd', 'case-wifi-uxm', 'case-ai-npu', 'case-fae-rca'];
  if (flagshipCards.length !== 4 || expectedFlagshipCards.some((id, index) => flagshipCards[index] !== id)) {
    fail(`Expected flagship case order ${expectedFlagshipCards.join(' → ')}, found: ${flagshipCards.join(' → ') || 'none'}`);
  }

  const problemSolvingCards = [...html.matchAll(/data-problem-solving-card=["']([^"']+)["']/g)].map((match) => match[1]);
  const expectedProblemSolvingCards = ['highlight-wifi-throughput', 'highlight-ate-handshake', 'highlight-customer-rca'];
  if (problemSolvingCards.length !== 3 || expectedProblemSolvingCards.some((id, index) => problemSolvingCards[index] !== id)) {
    fail(`Expected problem-solving highlight order ${expectedProblemSolvingCards.join(' → ')}, found: ${problemSolvingCards.join(' → ') || 'none'}`);
  }
  const problemSolvingPosition = html.search(/id=["']problem-solving["']/);
  const engineeringMethodPosition = html.search(/data-engineering-method=["']compact["']/);
  if (problemSolvingPosition <= html.search(/id=["']case-studies["']/) || engineeringMethodPosition <= problemSolvingPosition) {
    fail('Problem-Solving Highlights must appear after flagship cases and before the compact engineering method');
  }

  for (const marker of [
    '工程能力總覽',
    '21+ 年工程經驗',
    '資深測試自動化 / 系統驗證工程師',
    'Python / C# 自動化，涵蓋連線、影像 / AI、ATE 與客戶工程',
    'Wi-Fi / 5G Router + Keysight UXM Python 自動化',
    '四個精簡工程摘要',
  ]) {
    if (!html.includes(marker)) fail(`Missing recruiter-overview marker: ${marker}`);
  }
  if (html.includes('三個精簡工程摘要')) fail('Stale three-case wording remains');
  if (!html.includes('data-engineering-method="compact"')) fail('Missing compact engineering-method flow');
  if (html.includes('class="methodology-step"')) fail('Expanded homepage methodology cards remain');

  const ids = [...html.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]);
  const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  if (duplicateIds.length > 0) fail(`Duplicate HTML ids found: ${duplicateIds.join(', ')}`);

  const idSet = new Set(ids);
  const fragmentTargets = [...html.matchAll(/href=["']#([^"']+)["']/g)].map((match) => match[1]);
  const brokenFragments = [...new Set(fragmentTargets.filter((target) => !idSet.has(target)))];
  if (brokenFragments.length > 0) fail(`Broken internal fragment targets: ${brokenFragments.join(', ')}`);

  const relatedCaseTargets = [...html.matchAll(/data-related-case=["']([^"']+)["']/g)].map((match) => match[1]);
  const expectedRelatedCaseTargets = ['case-wifi-uxm', 'case-ai-npu', 'case-ate-robot-esd', 'case-fae-rca'];
  if (relatedCaseTargets.length !== 4 || expectedRelatedCaseTargets.some((id) => !relatedCaseTargets.includes(id))) {
    fail(`Unexpected overview related-case targets: ${relatedCaseTargets.join(', ') || 'none'}`);
  }
  const brokenRelatedCases = [...new Set(relatedCaseTargets.filter((target) => !idSet.has(target)))];
  if (brokenRelatedCases.length > 0) fail(`Broken overview related-case targets: ${brokenRelatedCases.join(', ')}`);

  const highlightRelatedTargets = [...html.matchAll(/data-highlight-related-case=["']([^"']+)["']/g)].map((match) => match[1]);
  const expectedHighlightRelatedTargets = ['case-wifi-uxm', 'case-ate-robot-esd', 'case-fae-rca'];
  if (highlightRelatedTargets.length !== 3 || expectedHighlightRelatedTargets.some((id, index) => highlightRelatedTargets[index] !== id)) {
    fail(`Unexpected problem-solving related-case targets: ${highlightRelatedTargets.join(', ') || 'none'}`);
  }
  const brokenHighlightRelatedCases = [...new Set(highlightRelatedTargets.filter((target) => !idSet.has(target)))];
  if (brokenHighlightRelatedCases.length > 0) fail(`Broken problem-solving related-case targets: ${brokenHighlightRelatedCases.join(', ')}`);

  const forbiddenPublicWording = ['職缺快速對照', '職缺對照', '職缺匹配', '求職對照'];
  for (const phrase of forbiddenPublicWording) {
    if (html.includes(phrase)) fail(`Forbidden public job-match wording remains: ${phrase}`);
  }

  const requiredSeo = [
    '<title>',
    'name="description"',
    'rel="canonical"',
    'property="og:title"',
    'name="twitter:card"',
  ];
  for (const marker of requiredSeo) {
    if (!html.includes(marker)) fail(`Missing SEO marker: ${marker}`);
  }

  const expectedMetadata = [
    'Alex Tsou — Engineering Portfolio',
    'Automation · Validation · Debug &amp; RCA · System Integration · AI/NPU · Camera · Connectivity · Customer Engineering',
    'https://alextsou.com/portfolio/alex-tsou-og-preview.png',
    'content="1200"',
    'content="630"',
    'summary_large_image',
  ];
  for (const marker of expectedMetadata) {
    if (!html.includes(marker)) fail(`Missing expected social metadata: ${marker}`);
  }

  for (const href of [
    '/resume/alex-tsou-resume-zh.pdf',
    '/resume/alex-tsou-resume-en.pdf',
    '/resume/alex-tsou-engineering-portfolio-zh.pdf',
  ]) {
    if (!html.includes(href)) fail(`Missing resume download link: ${href}`);
  }

  const attrPattern = /(?:href|src)=["']([^"']+)["']/g;
  const rawTargets = [...html.matchAll(attrPattern)].map((match) => match[1]);
  const targets = [...new Set(rawTargets)].filter(
    (target) =>
      !target.startsWith('#') &&
      !target.startsWith('data:') &&
      !target.startsWith('mailto:') &&
      !target.startsWith('tel:') &&
      !target.startsWith('javascript:'),
  );

  for (const target of targets) {
    const url = new URL(target, siteUrl);
    if (url.origin !== siteUrl.origin) continue;
    const assetResponse = await get(url);
    if (assetResponse && !assetResponse.ok) {
      fail(`${url.pathname} returned ${assetResponse.status}`);
    }
  }
}

const portfolioSource = await readFile(new URL('../app/portfolio-content.ts', import.meta.url), 'utf8');
for (const marker of [
  'Senior Test Automation / System Validation Engineer',
  '資深測試自動化 / 系統驗證工程師',
  'Python / C# automation across connectivity, imaging / AI, ATE, and customer engineering',
  'Python / C# 自動化，涵蓋連線、影像 / AI、ATE 與客戶工程',
  'Problem-Solving Highlights',
  '困難案例與問題解決',
  'Automation Engineering Approach',
  '自動化工程思維',
  'Separate DUT Failure from Automation Failure',
  '分離 DUT 失敗與自動化失敗',
  'Example — Wi-Fi / 5G Connectivity Automation',
  '範例 — Wi-Fi / 5G Connectivity 自動化',
]) {
  if (!portfolioSource.includes(marker)) fail(`Missing bilingual recruiter-positioning source marker: ${marker}`);
}

for (const path of [
  '/robots.txt',
  '/sitemap.xml',
  '/icon.png',
  '/portfolio/alex-tsou-og-preview.png',
  '/resume/alex-tsou-engineering-portfolio-zh.pdf',
  '/resume/alex-tsou-engineering-portfolio-en.pdf',
]) {
  const url = new URL(path, siteUrl);
  const assetResponse = await get(url);
  if (assetResponse && !assetResponse.ok) {
    fail(`${path} returned ${assetResponse.status}`);
  }
}

if (failures.length > 0) {
  console.error('Site verification failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Site verification passed for ${siteUrl}`);
console.log('Checked required sections, overview and case counts, unique IDs, internal references, emitted assets, SEO metadata, robots.txt, and sitemap.xml.');
