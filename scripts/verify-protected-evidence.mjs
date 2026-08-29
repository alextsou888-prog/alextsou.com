#!/usr/bin/env node
/**
 * Protected-evidence continuity verification.
 *
 * Purpose
 * -------
 * Certain portfolio blocks state quantified, externally-checkable engineering
 * claims (certification counts, regression scale, framework size). Once agreed,
 * their wording must not drift silently. This script makes that continuity
 * reproducible from source control alone -- no ad-hoc shell commands, no
 * dependence on grep flags, terminal output, or conversation history.
 *
 * Extraction (deterministic, content-anchored -- never line numbers)
 * -----------------------------------------------------------------
 *   anchor: the line containing  label: c('<BLOCK NAME>',
 *           The anchor MUST occur exactly once in the source. Zero occurrences
 *           and duplicate occurrences are both hard failures: the verifier
 *           never silently picks the first or last match, because a duplicated
 *           block would otherwise leave one copy completely unverified.
 *   end   : the first following line that is exactly END_MARKER ("        },")
 *           which closes that block object. Inner structures of a protected
 *           block close at a deeper indent ("          ],"), so they cannot be
 *           mistaken for the terminator; an injected early terminator changes
 *           the hash and therefore still fails closed.
 * The start and end lines are both included. Nothing outside that range is
 * hashed, so unrelated edits elsewhere in the file cannot affect the result.
 *
 * Normalization (explicit and minimal)
 * ------------------------------------
 *   1. The file is read as UTF-8.
 *   2. A leading UTF-8 BOM, if present, is stripped.
 *   3. CRLF and lone CR are normalized to LF, so the hash is identical on
 *      Windows and POSIX checkouts regardless of git autocrlf settings.
 * No other transformation is applied: indentation, spacing, punctuation and
 * the raw canonical source text are hashed as-is. This is intentional --
 * reformatting a protected block is itself a change worth failing on.
 *
 * Hashing
 * -------
 *   SHA-256 over the UTF-8 bytes of the normalized block text, hex encoded.
 *
 * Usage
 * -----
 *   node scripts/verify-protected-evidence.mjs            # verify (default)
 *   node scripts/verify-protected-evidence.mjs --print    # print current hashes
 *
 * Exit codes: 0 = all blocks match; 1 = any mismatch, missing block, or error.
 */

import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const SOURCE_FILE = path.join(here, '..', 'app', 'portfolio-content.ts');

/** Closing line of a protected block object, at its exact source indentation. */
const END_MARKER = '        },';

/**
 * Canonical baselines.
 *
 * Established at commit 5c28fa876897840aeafde108fa7fd09d35600c73, whose block
 * contents were verified byte-for-byte identical to every prior commit since
 * each block was introduced (certification: 0f1ee80, regression: 36fac34,
 * camera/ipcam: 87fb490).
 *
 * Update a hash here ONLY together with an intentional, reviewed change to the
 * corresponding protected block.
 */
const PROTECTED_BLOCKS = [
  {
    name: 'Wi-Fi Certification Evidence',
    expected: 'fc9633febc4583958f8d4c11eaf48aa9630140b686f48167c13282c5036d06f8',
  },
  {
    name: 'Wi-Fi Regression Evidence',
    expected: '0dbd5fa72cbd2bf8bcf1084d54c534e2b776511b2bd2efbc53f941cca4e0d998',
  },
  {
    name: 'Camera / IPCam Evidence',
    expected: 'cafb50cc86230f8beccddacaa19f8453c255fee7f0395dd00b356b1c2cb3da34',
  },
];

/** Read the canonical source with deterministic newline and BOM handling. */
function readNormalizedSource(file) {
  let text = readFileSync(file, 'utf8');
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1);
  return text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
}

/** Build the exact anchor string used to locate a protected block. */
function anchorFor(blockName) {
  return `label: c('${blockName}',`;
}

/**
 * Locate every line index whose text contains the block's anchor.
 * Returned indices are 0-based; callers report them as 1-based line numbers.
 */
function findAnchorLines(lines, blockName) {
  const anchor = anchorFor(blockName);
  const hits = [];
  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i].includes(anchor)) hits.push(i);
  }
  return hits;
}

/**
 * Extract one protected block by name.
 *
 * Fail-closed contract -- returns a result object rather than throwing:
 *   { ok: true,  text, startLine, endLine }
 *   { ok: false, reason, detail }
 *
 * Failure reasons:
 *   'anchor-missing'    zero anchors matched
 *   'anchor-duplicate'  more than one anchor matched (never guess which)
 *   'terminator-missing' no END_MARKER after the anchor
 *   'structure-unexpected' block lacks the expected en:/zh: bullet arrays
 */
export function extractBlock(sourceText, blockName) {
  const lines = sourceText.split('\n');
  const hits = findAnchorLines(lines, blockName);

  if (hits.length === 0) {
    return { ok: false, reason: 'anchor-missing', detail: 'anchor expected exactly once, found 0 occurrences' };
  }

  if (hits.length > 1) {
    const where = hits.map((i) => `line ${i + 1}`).join(', ');
    return {
      ok: false,
      reason: 'anchor-duplicate',
      detail: `anchor expected exactly once, found ${hits.length} occurrences (${where})`,
    };
  }

  const start = hits[0];
  let end = -1;
  for (let i = start + 1; i < lines.length; i += 1) {
    if (lines[i] === END_MARKER) {
      end = i;
      break;
    }
  }

  if (end === -1) {
    return {
      ok: false,
      reason: 'terminator-missing',
      detail: `no closing "${END_MARKER.trim()}" terminator found after line ${start + 1}`,
    };
  }

  const slice = lines.slice(start, end + 1);

  // Defence in depth: a protected block always carries bilingual bullet arrays.
  // This does not change what is hashed; it turns a truncated or restructured
  // extraction into a precise diagnostic instead of a bare hash mismatch.
  const hasEn = slice.some((line) => /^\s*en: \[/.test(line));
  const hasZh = slice.some((line) => /^\s*zh: \[/.test(line));
  if (!hasEn || !hasZh) {
    const missing = [!hasEn && 'en', !hasZh && 'zh'].filter(Boolean).join(' and ');
    return {
      ok: false,
      reason: 'structure-unexpected',
      detail: `extracted lines ${start + 1}-${end + 1} are missing the ${missing} bullet array`,
    };
  }

  return { ok: true, text: slice.join('\n'), startLine: start + 1, endLine: end + 1 };
}

function sha256(text) {
  return createHash('sha256').update(text, 'utf8').digest('hex');
}

function main() {
  const printOnly = process.argv.includes('--print');

  let source;
  try {
    source = readNormalizedSource(SOURCE_FILE);
  } catch (error) {
    console.error(`Cannot read canonical source: ${SOURCE_FILE}`);
    console.error(String(error));
    process.exit(1);
  }

  let failed = false;
  const rows = [];

  for (const block of PROTECTED_BLOCKS) {
    const result = extractBlock(source, block.name);

    if (!result.ok) {
      failed = true;
      rows.push({
        name: block.name,
        actual: `<${result.reason}>`,
        expected: block.expected,
        status: 'FAIL',
        anchor: anchorFor(block.name),
        detail: result.detail,
      });
      continue;
    }

    const actual = sha256(result.text);
    const status = printOnly ? 'PRINT' : actual === block.expected ? 'PASS' : 'FAIL';
    if (status === 'FAIL') failed = true;
    rows.push({
      name: block.name,
      actual,
      expected: block.expected,
      status,
      location: `lines ${result.startLine}-${result.endLine}`,
    });
  }

  console.log('Protected-evidence verification');
  console.log(`  source: app/portfolio-content.ts`);
  console.log(`  method: SHA-256 over LF-normalized canonical block text\n`);

  for (const row of rows) {
    console.log(`  ${row.status.padEnd(5)}  ${row.name}`);
    if (row.detail) {
      console.log(`         anchor:     ${row.anchor}`);
      console.log(`         reason:     ${row.detail}`);
    }
    if (row.location) console.log(`         location:   ${row.location}`);
    console.log(`         calculated: ${row.actual}`);
    if (!printOnly) console.log(`         expected:   ${row.expected}`);
    console.log('');
  }

  if (printOnly) {
    console.log('Print mode: no comparison performed.');
    process.exit(0);
  }

  if (failed) {
    console.error('Protected evidence FAILED verification.');
    console.error('');
    console.error('  hash mismatch        -> the block text changed. If intentional and');
    console.error('                          reviewed, update its expected hash here.');
    console.error('  anchor-missing       -> the block was renamed, moved, or deleted.');
    console.error('  anchor-duplicate     -> the block name is no longer unique; one copy');
    console.error('                          would go unverified, so this always fails.');
    console.error('  terminator-missing   -> the closing brace could not be located.');
    console.error('  structure-unexpected -> extraction did not capture the en/zh bullets.');
    process.exit(1);
  }

  console.log('All protected evidence blocks match their canonical hashes.');
  process.exit(0);
}

main();
