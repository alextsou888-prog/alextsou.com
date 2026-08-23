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

  const requiredSections = ['home', 'about', 'skills', 'experience', 'domains', 'projects', 'contact'];
  for (const id of requiredSections) {
    if (!new RegExp(`id=["']${id}["']`).test(html)) {
      fail(`Missing section target #${id}`);
    }
  }

  const domainCards = html.match(/data-domain-card=/g) ?? [];
  if (domainCards.length !== 6) {
    fail(`Expected exactly 6 product / technical domain cards, found ${domainCards.length}`);
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

for (const path of ['/robots.txt', '/sitemap.xml', '/icon.png', '/og.png']) {
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
console.log('Checked required sections, internal links, emitted assets, SEO metadata, robots.txt, and sitemap.xml.');
