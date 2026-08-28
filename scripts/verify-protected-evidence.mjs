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
 *   start : the line containing  label: c('<BLOCK NAME>',
 *   end   : the first following line that is exactly END_MARKER ("        },")
 *           which closes that block object.
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

/**
 * Extract one protected block by name.
 * Returns the raw canonical block text (start line through END_MARKER, joined
 * with LF), or null when the block or its terminator cannot be located.
 */
export function extractBlock(sourceText, blockName) {
  const lines = sourceText.split('\n');
  const anchor = `label: c('${blockName}',`;

  const start = lines.findIndex((line) => line.includes(anchor));
  if (start === -1) return null;

  let end = -1;
  for (let i = start + 1; i < lines.length; i += 1) {
    if (lines[i] === END_MARKER) {
      end = i;
      break;
    }
  }
  if (end === -1) return null;

  return lines.slice(start, end + 1).join('\n');
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
    const text = extractBlock(source, block.name);

    if (text === null) {
      failed = true;
      rows.push({ name: block.name, actual: '<BLOCK NOT FOUND>', expected: block.expected, status: 'FAIL' });
      continue;
    }

    const actual = sha256(text);
    const status = printOnly ? 'PRINT' : actual === block.expected ? 'PASS' : 'FAIL';
    if (status === 'FAIL') failed = true;
    rows.push({ name: block.name, actual, expected: block.expected, status });
  }

  console.log('Protected-evidence verification');
  console.log(`  source: app/portfolio-content.ts`);
  console.log(`  method: SHA-256 over LF-normalized canonical block text\n`);

  for (const row of rows) {
    console.log(`  ${row.status.padEnd(5)}  ${row.name}`);
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
    console.error('A protected block changed. If the change is intentional and reviewed,');
    console.error('update the corresponding expected hash in this script.');
    process.exit(1);
  }

  console.log('All protected evidence blocks match their canonical hashes.');
  process.exit(0);
}

main();
