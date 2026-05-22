// Regenerates src/data/disposable-email-domains.js from the upstream conf file.
//
// Usage: node scripts/build-disposable-list.mjs <blocklist.conf> <out.js>
//
// The upstream repo (disposable-email-domains/disposable-email-domains) ships
// `disposable_email_blocklist.conf` as their single curated list. The
// maintainers handle allow-listing internally during their build, so we just
// use the published file as-is.

import { readFileSync, writeFileSync } from 'node:fs';

const [, , blocklistPath, outputPath] = process.argv;

if (!blocklistPath || !outputPath) {
  console.error('Usage: node build-disposable-list.mjs <blocklist> <out>');
  process.exit(2);
}

const domains = readFileSync(blocklistPath, 'utf8')
  .split('\n')
  .map((line) => line.trim().toLowerCase())
  .filter((line) => line && !line.startsWith('#'));

const sorted = [...new Set(domains)].sort();

// Sanity check: if upstream is suddenly tiny, something is wrong (vandalism,
// repo rename, fetch error). Refuse to overwrite.
const MIN_DOMAINS = 1000;
if (sorted.length < MIN_DOMAINS) {
  console.error(
    `Refusing to write: only ${sorted.length} domains, expected at least ${MIN_DOMAINS}. ` +
      `Upstream may be broken.`,
  );
  process.exit(1);
}

const header = `// Auto-generated from disposable-email-domains/disposable-email-domains.
// Refreshed by .github/workflows/refresh-disposable-blocklist.yml.
// Do not edit by hand; changes will be overwritten on the next refresh.
// Source: https://github.com/disposable-email-domains/disposable-email-domains
// Last refresh: ${new Date().toISOString().slice(0, 10)}
// Count: ${sorted.length} domains
`;

const body = `export const disposableEmailDomains = new Set([\n${sorted
  .map((d) => `  '${d}'`)
  .join(',\n')},\n]);\n`;

writeFileSync(outputPath, header + body, 'utf8');
console.log(`Wrote ${sorted.length} domains to ${outputPath}`);
