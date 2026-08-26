import assert from 'node:assert/strict';

import {
  defaultVisitorTestSiteUrl,
  isLocalVisitorTestHost,
  isProductionVisitorHost,
  resolveVisitorTestSiteUrl,
} from './lib/visitor-test-target.mjs';

const results = [];

function test(name, callback) {
  try {
    callback();
    results.push({ name, passed: true });
    console.log(`PASS  ${name}`);
  } catch (error) {
    results.push({ name, passed: false, error });
    console.error(`FAIL  ${name} — ${error.message}`);
  }
}

function expectBlocked(siteUrl, allowProduction = '') {
  assert.throws(
    () => resolveVisitorTestSiteUrl({ siteUrl, allowProduction }),
    (error) => error instanceof Error
      && error.message.includes(new URL(siteUrl).hostname)
      && error.message.includes('mutate production D1')
      && error.message.includes(defaultVisitorTestSiteUrl)
      && error.message.includes('ALLOW_PRODUCTION_VISITOR_TEST=1'),
  );
}

test('DEFAULT: repository target is isolated localhost', () => {
  const target = resolveVisitorTestSiteUrl();
  assert.equal(target.href, defaultVisitorTestSiteUrl);
  assert.equal(isLocalVisitorTestHost(target.hostname), true);
});

for (const siteUrl of [
  'http://localhost:3000/',
  'http://localhost:8788/',
  'http://127.0.0.1:3000/',
  'http://127.0.0.1:8788/',
]) {
  test(`ALLOW LOCAL: ${siteUrl}`, () => {
    assert.equal(resolveVisitorTestSiteUrl({ siteUrl }).href, siteUrl);
  });
}

for (const siteUrl of [
  'https://alextsou.com/',
  'https://www.alextsou.com/',
  'https://alextsou-com.alextsou888.workers.dev/',
]) {
  test(`BLOCK PRODUCTION: ${siteUrl}`, () => {
    assert.equal(isProductionVisitorHost(new URL(siteUrl).hostname), true);
    expectBlocked(siteUrl);
  });

  test(`BLOCK INEXACT OVERRIDE: ${siteUrl}`, () => {
    expectBlocked(siteUrl, 'true');
  });

  test(`ALLOW EXPLICIT OVERRIDE: ${siteUrl}`, () => {
    assert.equal(resolveVisitorTestSiteUrl({ siteUrl, allowProduction: '1' }).href, siteUrl);
  });
}

test('BLOCK PRODUCTION SUBDOMAIN ALIAS', () => {
  expectBlocked('https://preview.alextsou.com/');
});

test('BLOCK NON-HTTP PROTOCOL', () => {
  assert.throws(
    () => resolveVisitorTestSiteUrl({ siteUrl: 'file:///tmp/visitor-test' }),
    /must use http or https/,
  );
});

const failed = results.filter((result) => !result.passed);
console.log(`\n${results.length - failed.length}/${results.length} visitor target guard checks passed.`);

if (failed.length > 0) process.exit(1);
