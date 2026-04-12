/**
 * WordPress SQL dump → Markdown migration
 *
 * Reads the Sequel Pro SQL dump, extracts published posts from all three
 * WordPress installs (gm_posts, potd_posts, wp_posts), converts HTML
 * content to Markdown via Turndown, and writes files to a staging directory.
 *
 * Usage: node scripts/migrate-wp.mjs
 *
 * Output goes to _reference/wordpress-archive/migrated/ for review.
 * After review, approved posts get copied to src/content/writing/.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import TurndownService from 'turndown';

const SQL_PATH = '_reference/wordpress-archive/jasonwpblog_2011-10-27.sql';
const OUT_DIR = '_reference/wordpress-archive/migrated';

// ─── Turndown setup ────────────────────────────────────────────

const td = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
  emDelimiter: '*',
  strongDelimiter: '**',
});

// Strip images that point to dead WordPress uploads
td.addRule('deadImages', {
  filter: 'img',
  replacement: (content, node) => {
    const src = node.getAttribute('src') || '';
    const alt = node.getAttribute('alt') || '';
    if (src.includes('jason-preston.com') || src.includes('wp-content')) {
      return alt ? `[Image: ${alt}]` : '[Image removed — original hosted on WordPress]';
    }
    return `![${alt}](${src})`;
  },
});

// ─── SQL tuple parser ──────────────────────────────────────────

/**
 * Parse a MySQL VALUES tuple string into an array of field values.
 * Handles single-quoted strings with \' and \\ escaping, numeric values, and NULL.
 */
function parseTuple(line) {
  const fields = [];
  let i = 0;
  const len = line.length;

  while (i < len) {
    // Skip whitespace and commas
    while (i < len && (line[i] === ' ' || line[i] === ',')) i++;
    if (i >= len) break;

    if (line[i] === "'") {
      // Quoted string
      i++; // skip opening quote
      let val = '';
      while (i < len) {
        if (line[i] === '\\' && i + 1 < len) {
          const next = line[i + 1];
          if (next === "'") { val += "'"; i += 2; }
          else if (next === '\\') { val += '\\'; i += 2; }
          else if (next === 'n') { val += '\n'; i += 2; }
          else if (next === 'r') { val += '\r'; i += 2; }
          else if (next === 't') { val += '\t'; i += 2; }
          else if (next === '0') { val += '\0'; i += 2; }
          else { val += next; i += 2; }
        } else if (line[i] === "'") {
          i++; // skip closing quote
          break;
        } else {
          val += line[i];
          i++;
        }
      }
      fields.push(val);
    } else {
      // Unquoted (number or NULL)
      let val = '';
      while (i < len && line[i] !== ',') {
        val += line[i];
        i++;
      }
      fields.push(val.trim() === 'NULL' ? null : val.trim());
    }
  }

  return fields;
}

// ─── Read and parse ────────────────────────────────────────────

const sql = readFileSync(SQL_PATH, 'latin1'); // MySQL 4.1 dump, likely latin1
const lines = sql.split('\n');

/** @type {{ source: string; fields: string[] }[]} */
const allRows = [];

let currentTable = null;
let inValues = false;

for (let lineNum = 0; lineNum < lines.length; lineNum++) {
  const line = lines[lineNum];

  // Detect which INSERT we're in
  if (line.startsWith('INSERT INTO `gm_posts`')) {
    currentTable = 'gm';
    inValues = false;
    continue;
  }
  if (line.startsWith('INSERT INTO `potd_posts`')) {
    currentTable = 'potd';
    inValues = false;
    continue;
  }
  if (line.startsWith('INSERT INTO `wp_posts`')) {
    currentTable = 'wp';
    inValues = false;
    continue;
  }

  // Any other INSERT resets context
  if (line.startsWith('INSERT INTO') && !line.includes('_posts`')) {
    currentTable = null;
    inValues = false;
    continue;
  }

  if (line.trim() === 'VALUES') {
    inValues = true;
    continue;
  }

  // End of INSERT block
  if (currentTable && inValues && (line.startsWith('/*!') || line.startsWith('UNLOCK') || line.startsWith('LOCK') || line.trim() === '')) {
    if (line.startsWith('/*!') || line.startsWith('UNLOCK') || line.startsWith('LOCK')) {
      currentTable = null;
      inValues = false;
    }
    continue;
  }

  if (!currentTable || !inValues) continue;

  // This should be a tuple line: \t(...)  or \t(...);
  let trimmed = line.trim();
  if (!trimmed.startsWith('(')) continue;

  // Remove leading ( and trailing ), or );
  if (trimmed.endsWith('),')) trimmed = trimmed.slice(1, -2);
  else if (trimmed.endsWith(');')) trimmed = trimmed.slice(1, -2);
  else if (trimmed.endsWith(')')) trimmed = trimmed.slice(1, -1);
  else continue;

  try {
    const fields = parseTuple(trimmed);
    allRows.push({ source: currentTable, fields });
  } catch (e) {
    console.error(`Parse error at line ${lineNum + 1}: ${e.message}`);
  }
}

console.log(`Parsed ${allRows.length} total rows across all post tables.`);

// ─── Filter for published posts ────────────────────────────────

// Column indices (same for potd_ and wp_, which have 24 cols):
// 0:ID 1:author 2:post_date 3:post_date_gmt 4:post_content 5:post_title
// 6:post_category 7:post_excerpt 8:post_status 9:comment_status 10:ping_status
// 11:post_password 12:post_name 13:to_ping 14:pinged 15:post_modified
// 16:post_modified_gmt 17:post_content_filtered 18:post_parent 19:guid
// 20:menu_order 21:post_type(wp/potd only) 22:post_mime_type 23:comment_count
//
// gm_ has 21 columns (no post_type, post_mime_type, comment_count)

/** @type {{ title: string; date: string; slug: string; content: string; source: string; id: string }[]} */
const posts = [];

for (const { source, fields } of allRows) {
  const postStatus = fields[8];
  if (postStatus !== 'publish') continue;

  // For tables with post_type column, filter for 'post' only
  if (source !== 'gm' && fields.length >= 22) {
    const postType = fields[21];
    if (postType && postType !== 'post') continue;
  }

  // For gm_, skip 'static' (pages)
  if (source === 'gm' && postStatus === 'static') continue;

  const title = fields[5] || 'Untitled';
  const date = fields[2] || '2005-01-01 00:00:00';
  const slug = fields[12] || '';
  const content = fields[4] || '';
  const id = fields[0];

  // Skip empty posts
  if (!content.trim() && !title.trim()) continue;

  posts.push({ title, date, slug, content, source, id });
}

console.log(`Found ${posts.length} published posts.`);

// ─── Convert and write ─────────────────────────────────────────

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

// Track slug collisions
const slugCounts = new Map();

let written = 0;
let skipped = 0;

for (const post of posts) {
  // Parse date
  const dateObj = new Date(post.date.replace(' ', 'T') + 'Z');
  const dateStr = dateObj.toISOString().split('T')[0]; // YYYY-MM-DD
  if (dateStr === 'Invalid Date' || dateStr.startsWith('NaN')) {
    console.warn(`  Skipping post "${post.title}" — invalid date: ${post.date}`);
    skipped++;
    continue;
  }

  // Convert HTML to markdown
  let markdown;
  try {
    // WordPress uses \r\n for paragraph breaks without <p> tags in older posts
    let html = post.content
      .replace(/\r\n\r\n/g, '</p><p>')
      .replace(/\r\n/g, '<br>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>');

    // Wrap in <p> if not already wrapped
    if (!html.startsWith('<')) html = `<p>${html}</p>`;

    markdown = td.turndown(html).trim();
  } catch (e) {
    console.warn(`  Skipping post "${post.title}" — turndown error: ${e.message}`);
    skipped++;
    continue;
  }

  // Skip very short posts (likely test posts or auto-drafts)
  if (markdown.length < 50 && !post.title) {
    skipped++;
    continue;
  }

  // Generate filename-safe slug
  let fileSlug = post.slug || post.title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  if (!fileSlug) fileSlug = `post-${post.id}`;

  // Handle collisions
  const key = `${dateStr}-${fileSlug}`;
  const count = slugCounts.get(key) || 0;
  slugCounts.set(key, count + 1);
  if (count > 0) fileSlug = `${fileSlug}-${count}`;

  const filename = `${dateStr}-${fileSlug}.md`;

  // Clean title for frontmatter (escape quotes)
  const safeTitle = post.title.replace(/"/g, '\\"');

  // Generate description from first ~160 chars of stripped markdown
  const stripped = markdown
    .replace(/[#*\[\]()_`>\\]/g, '')  // strip markdown + backslashes
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const desc = stripped.length > 160 ? stripped.slice(0, 157) + '...' : stripped;

  const frontmatter = [
    '---',
    `title: "${safeTitle}"`,
    `description: "${desc.replace(/"/g, '\\"')}"`,
    `pubDate: ${dateStr}`,
    `archive: true`,
    `tags: [${post.source === 'potd' ? 'photography' : 'archive'}]`,
    '---',
  ].join('\n');

  writeFileSync(join(OUT_DIR, filename), `${frontmatter}\n\n${markdown}\n`);
  written++;
}

console.log(`\nDone.`);
console.log(`  Written: ${written}`);
console.log(`  Skipped: ${skipped}`);
console.log(`  Output:  ${OUT_DIR}/`);
console.log(`\nNext: review the files, remove anything you don't want to keep,`);
console.log(`then copy approved posts to src/content/writing/.`);
