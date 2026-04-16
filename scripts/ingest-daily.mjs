/**
 * Ingest daily posts from _reference/daily-drafts/ into src/content/daily/.
 *
 * Converts the agent's output format (date, source_articles, status frontmatter
 * + H1/H2 title in the body) into the site's content schema (title, description,
 * pubDate, tags).
 *
 * Usage:
 *   node scripts/ingest-daily.mjs           # process all new files
 *   node scripts/ingest-daily.mjs --all     # reprocess everything (overwrites)
 *   node scripts/ingest-daily.mjs --dry-run # show what would happen, don't write
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { join, basename } from 'node:path';

const DRAFTS_DIR = '_reference/daily-drafts';
const OUTPUT_DIR = 'src/content/daily';
const args = process.argv.slice(2);
const ALL = args.includes('--all');
const DRY = args.includes('--dry-run');

// Create the drafts folder if missing (fresh clones won't have it since
// _reference/ is gitignored).
if (!existsSync(DRAFTS_DIR)) {
  mkdirSync(DRAFTS_DIR, { recursive: true });
  console.log(`Created ${DRAFTS_DIR}/`);
  console.log('No draft files to ingest yet.\n');
  process.exit(0);
}

const draftFiles = readdirSync(DRAFTS_DIR)
  .filter(f => f.endsWith('.md'))
  .sort();

let ingested = 0;
let skipped = 0;

for (const file of draftFiles) {
  const raw = readFileSync(join(DRAFTS_DIR, file), 'utf8');

  // Parse the agent's frontmatter
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  let frontmatter = '';
  let body = raw;
  if (fmMatch) {
    frontmatter = fmMatch[1];
    body = fmMatch[2];
  }

  // Extract date from frontmatter (date: YYYY-MM-DD)
  const dateMatch = frontmatter.match(/^date:\s*(\d{4}-\d{2}-\d{2})/m);
  const pubDate = dateMatch ? dateMatch[1] : file.slice(0, 10); // fall back to filename

  // Extract title from first H1 or H2 in the body
  const titleMatch = body.match(/^#{1,2}\s+(.+)$/m);
  let title = titleMatch ? titleMatch[1].trim() : basename(file, '.md').slice(11).replace(/-/g, ' ');

  // Strip the H1/H2 title line from the body (the site renders title via PostLayout)
  let cleanBody = body;
  if (titleMatch) {
    cleanBody = body.replace(/^#{1,2}\s+.+\n+/, '').trimStart();
  }

  // Generate description from first paragraph (~160 chars)
  const firstPara = cleanBody
    .split(/\n\n/)[0]
    .replace(/\*\*/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')  // strip markdown links
    .replace(/[#*_`>\\]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  const description = firstPara.length > 160
    ? firstPara.slice(0, 157) + '...'
    : firstPara;

  // Auto-tag based on common keywords
  const lowerBody = cleanBody.toLowerCase();
  const tags = ['ai'];
  if (lowerBody.includes('founder') || lowerBody.includes('venture') || lowerBody.includes('startup'))
    tags.push('venture');
  if (lowerBody.includes('agent') || lowerBody.includes('copilot'))
    tags.push('agents');
  if (lowerBody.includes('pricing') || lowerBody.includes('business model'))
    tags.push('pricing');
  if (lowerBody.includes('attention') || lowerBody.includes('reading') || lowerBody.includes('focus'))
    tags.push('attention');

  // Generate output filename: YYYY-MM-DD-slug.md
  const slug = title
    .toLowerCase()
    .replace(/\$[\d,]+/g, m => m.replace(/[$,]/g, ''))  // $136,000 → 136000
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const outFilename = `${pubDate}-${slug}.md`;
  const outPath = join(OUTPUT_DIR, outFilename);

  // Skip if a post for this date already exists (unless --all)
  if (!ALL) {
    const existing = readdirSync(OUTPUT_DIR).filter(f => f.startsWith(pubDate));
    if (existing.length > 0) {
      skipped++;
      continue;
    }
  }

  // Escape title for YAML
  const safeTitle = title.replace(/"/g, '\\"');
  const safeDesc = description.replace(/"/g, '\\"');

  const output = [
    '---',
    `title: "${safeTitle}"`,
    `description: "${safeDesc}"`,
    `pubDate: ${pubDate}`,
    `tags: [${tags.join(', ')}]`,
    '---',
    '',
    cleanBody,
  ].join('\n');

  if (DRY) {
    console.log(`  [dry-run] ${file} → ${outFilename} ("${title}")`);
  } else {
    writeFileSync(outPath, output);
    console.log(`  ✓ ${file} → ${outFilename}`);
  }
  ingested++;
}

console.log(`\nDone. Ingested: ${ingested}, Skipped (already exists): ${skipped}`);
if (DRY) console.log('(dry run — no files written)');
if (!DRY && ingested > 0) {
  console.log(`\nFiles written to ${OUTPUT_DIR}/. Run 'npm run dev' to see them.`);
}
