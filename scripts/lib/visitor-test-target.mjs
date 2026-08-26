export const defaultVisitorTestSiteUrl = 'http://127.0.0.1:3000/';

export const productionVisitorHosts = new Set([
  'alextsou.com',
  'www.alextsou.com',
  'alextsou-com.alextsou888.workers.dev',
]);

export function isProductionVisitorHost(hostname) {
  const normalized = hostname.trim().toLowerCase().replace(/\.$/, '');
  return normalized === 'alextsou.com'
    || normalized.endsWith('.alextsou.com')
    || productionVisitorHosts.has(normalized);
}

export function isLocalVisitorTestHost(hostname) {
  const normalized = hostname.trim().toLowerCase().replace(/\.$/, '');
  return normalized === 'localhost'
    || normalized.endsWith('.localhost')
    || normalized === '127.0.0.1'
    || normalized === '[::1]'
    || normalized === '::1';
}

export function resolveVisitorTestSiteUrl({
  siteUrl = defaultVisitorTestSiteUrl,
  allowProduction = '',
} = {}) {
  let target;
  try {
    target = new URL(siteUrl);
  } catch {
    throw new Error(
      `Invalid visitor-test SITE_URL: ${JSON.stringify(siteUrl)}. `
      + `Run against an isolated local server such as ${defaultVisitorTestSiteUrl}`,
    );
  }

  if (!['http:', 'https:'].includes(target.protocol)) {
    throw new Error(
      `Visitor-test SITE_URL must use http or https, received ${target.protocol}`,
    );
  }

  if (isProductionVisitorHost(target.hostname) && allowProduction !== '1') {
    throw new Error(
      `Blocked visitor-test production host "${target.hostname}". `
      + 'Visitor integration tests send POST /api/visit and can mutate production D1. '
      + `Run against an isolated local server such as ${defaultVisitorTestSiteUrl} `
      + 'or set SITE_URL to another explicit localhost URL. '
      + 'An intentional production run requires the exact opt-in '
      + 'ALLOW_PRODUCTION_VISITOR_TEST=1.',
    );
  }

  return target;
}
