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

  const requiredSections = ['home', 'case-studies', 'experience', 'skills', 'domains', 'visual-portfolio', 'resume', 'contact'];
  for (const id of requiredSections) {
    if (!new RegExp(`id=["']${id}["']`).test(html)) {
      fail(`Missing section target #${id}`);
    }
  }

  const primaryHierarchy = ['home', 'case-studies', 'experience', 'skills', 'domains', 'visual-portfolio', 'resume', 'contact'];
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
  if (!html.includes('核心技能與技術領域')) fail('Missing Core Skills & Technical Domains section title');

  const flagshipCards = [...html.matchAll(/data-case-study-card=["']([^"']+)["']/g)].map((match) => match[1]);
  const expectedFlagshipCards = ['case-ate-robot-esd', 'case-wifi-uxm', 'case-ai-npu', 'case-fae-rca'];
  if (flagshipCards.length !== 4 || expectedFlagshipCards.some((id, index) => flagshipCards[index] !== id)) {
    fail(`Expected flagship case order ${expectedFlagshipCards.join(' → ')}, found: ${flagshipCards.join(' → ') || 'none'}`);
  }

  const engineeringMethodPosition = html.search(/data-engineering-method=["']compact["']/);
  if (engineeringMethodPosition <= html.search(/id=["']case-studies["']/)) {
    fail('The compact engineering method must appear after the flagship cases');
  }

  for (const marker of [
    '20+ 年工程經驗',
    '資深測試自動化與系統驗證工程師',
    '以 Python / C# 進行測試自動化與系統驗證 — 應用於 Wi-Fi / 5G、Camera / AI、IC / SoC / FPGA、ATE 與客戶工程。',
    '需求 / 測試計畫',
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
    'Alex Tsou — Senior Test Automation &amp; System Validation Engineer',
    '20+ years in Python / C# test automation, system validation, IC / SoC / FPGA, Wi-Fi / 5G, Camera / AI, ATE, and customer engineering.',
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
  'Senior Test Automation & System Validation Engineer',
  '資深測試自動化與系統驗證工程師',
  'Requirements / Test Plan → Automation → Evidence Collection → Debug / RCA → Fix Verification → Regression',
  '需求 / 測試計畫 → 自動化 → 證據收集 → Debug / RCA → 修正驗證 → 回歸測試',
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
console.log('Checked recruiter hierarchy, capability and case counts, unique IDs, internal references, emitted assets, SEO metadata, robots.txt, and sitemap.xml.');
