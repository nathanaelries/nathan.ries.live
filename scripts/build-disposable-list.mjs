// Regenerates src/data/disposable-email-domains.js from upstream conf files.
//
// Usage: node scripts/build-disposable-list.mjs <blocklist.conf> <allowlist.conf> <out.js>
//
// The upstream repo (disposable-email-domains/disposable-email-domains) ships
// `disposable_email_blocklist.conf` and `allowlist.conf`. We use the blocklist
// minus the allowlist (the allowlist is for domains the community has agreed
// are legitimate despite looking suspect).

import { readFileSync, writeFileSync } from 'node:fs';

const [, , blocklistPath, allowlistPath, outputPath] = process.argv;

if (!blocklistPath || !allowlistPath || !outputPath) {
  console.error('Usage: node build-disposable-list.mjs <blocklist> <allowlist> <out>');
  process.exit(2);
}

const readDomains = (path) =>
  readFileSync(path, 'utf8')
    .split('\n')
    .map((line) => line.trim().toLowerCase())
    .filter((line) => line && !line.startsWith('#'));

const block = new Set(readDomains(blocklistPath));
const allow = new Set(readDomains(allowlistPath));
for (const domain of allow) block.delete(domain);

const sorted = [...block].sort();

// Sanity check: if upstream is suddenly tiny, something is wrong (vandalism,
// repo rename, fetch error). Refuse to overwrite.
const MIN_DOMAINS = 1000;
if (sorted.length < MIN_DOMAINS) {
  console.error(
    `Refusing to write: only ${sorted.length} domains after filtering, ` +
      `expected at least ${MIN_DOMAINS}. Upstream may be broken.`,
  );
  process.exit(1);
}

const header = `// Auto-generated from disposable-email-domains/disposable-email-domains.
// Refreshed by .github/workflows/refresh-disposable-blocklist.yml.
// Do not edit by hand; changes will be overwritten on the next refresh.
// Source: https://github.com/disposable-email-domains/disposable-email-domains
// Last refresh: ${new Date().toISOString().slice(0, 10)}
// Count: ${sorted.length} domains (blocklist minus allowlist)
`;

const body = `export const disposableEmailDomains = new Set([\n${sorted
  .map((d) => `  '${d}'`)
  .join(',\n')},\n]);\n`;

writeFileSync(outputPath, header + body, 'utf8');
console.log(`Wrote ${sorted.length} domains to ${outputPath}`);
