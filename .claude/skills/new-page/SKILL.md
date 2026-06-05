---
name: new-page
description: Create a correctly formatted page for jrpreston.com (Astro static site). Use whenever the user wants to add a new daily post, a writing essay, import an archive post, or add a standalone .astro page (like About or Projects). Produces files that match the content-collection schema, filename/slug rules, layouts, and design tokens exactly so the site builds without errors.
runtime: [code, cowork]
tools_required:
  - Read
  - Write
  - Bash
---

# New page for jrpreston.com

You are creating a page for **jrpreston.com** — an Astro static site with an editorial design. This is a fill-in-the-template task: pick the page type, copy the exact template, replace the placeholders, save to the exact path, and verify the build. **Do not invent new frontmatter fields, new layouts, new CSS variables, or new directory structures.** Everything you need is below.

> **Why this skill is strict:** the site uses typed content collections (Zod schema in `src/content.config.ts`) and a TypeScript-strict build. A wrong frontmatter field name, a missing `pubDate`, or a quote that isn't escaped will fail `astro build`. Follow the templates character-for-character and the build will pass.

---

## Step 0: Decide which kind of page (pick exactly one)

| You want to… | Page type | What you actually create | Go to |
|---|---|---|---|
| Add a short, dated post / blog-style note | **Daily post** | One markdown file in `src/content/daily/` | Recipe A |
| Add an essay or longer piece | **Writing essay** | One markdown file in `src/content/writing/` | Recipe B |
| Import an old WordPress-era post | **Archive post** | One markdown file in `src/content/writing/archive/` | Recipe C |
| Add a top-level page (About, Now, etc.) | **Standalone page** | One `.astro` file in `src/pages/` | Recipe D |

**Critical mental model:** For Recipes A, B, and C you create **only a markdown file**. The URL route, layout, table of contents, read-time, and styling are already wired up by `src/pages/<section>/[...slug].astro` + `src/layouts/PostLayout.astro`. **Never create an `.astro` file for a post.** Only Recipe D (standalone pages) uses `.astro`.

**Index / list pages update themselves — never hand-edit them.** The section landing pages (`src/pages/writing/index.astro`, `src/pages/daily/index.astro`), the homepage, the archive list (`src/pages/projects/`), and the RSS feeds all query the content collections at build time and regenerate automatically. When you add a post (Recipe A/B/C), it appears on the relevant index and feed on the next build with **no edits to those files**. Do **not** open an index page to "register" or link a new post — that's already automatic, and editing it by hand will only introduce bugs.

If the user hasn't said which type, default to **Daily post** for anything short and dated, **Writing essay** for anything they call an "essay," "piece," or "article." If genuinely ambiguous, ask one short question.

---

## The frontmatter schema (authoritative — from `src/content.config.ts`)

Both `daily` and `writing` collections share these fields. **These are the ONLY allowed fields. Do not add others** (no `author`, `date`, `slug`, `layout`, `image`, `category` — they will fail the build or be silently ignored).

| Field | Type | Required? | Rules |
|---|---|---|---|
| `title` | string | **Yes** | Always wrap in double quotes. Escape any inner `"` as `\"`. |
| `description` | string | No (but always include it) | One sentence. Used for SEO + Open Graph + list pages. Wrap in double quotes. |
| `pubDate` | date | **Yes** | Format `YYYY-MM-DD` (e.g. `2026-06-05`). No quotes. No time. |
| `tags` | array of strings | No | Lowercase, short. Format `[ai, venture, founders]`. |
| `draft` | boolean | No (default `false`) | Set `draft: true` to keep it out of the build/RSS. Omit it for published posts. |
| `archive` | boolean | No (default `false`) | **`writing` collection only.** `true` routes the post to the archive surface. Omit for normal essays. |

### Frontmatter rules that trip up models — read these
1. **`title` and `description` MUST be in double quotes.** Unquoted YAML breaks on colons, apostrophes, and quotes inside the text.
2. **To put a double-quote inside a quoted string, escape it: `\"`.** Example: `title: "On \"durable\" moats"`.
3. **`pubDate` is bare, no quotes:** `pubDate: 2026-06-05` ✅ — not `pubDate: "2026-06-05"` and never `June 5, 2026`.
4. **Do not add a `# Title` heading at the top of the markdown body.** The layout renders the title from frontmatter. A body `#` H1 would duplicate it.
5. **Tags are optional.** If you don't have good tags, omit the field entirely rather than writing `tags: []`.

---

## Filename → URL slug rules (this controls the page's URL — get it exact)

The URL slug **is the filename minus the `.md` extension**. There is no separate slug field.

| Collection | Filename pattern | Example filename | Resulting URL |
|---|---|---|---|
| `daily` | `YYYY-MM-DD-kebab-title.md` | `2026-06-05-velocity-is-the-moat.md` | `/daily/2026-06-05-velocity-is-the-moat` |
| `writing` | `kebab-title.md` *(no date prefix)* | `confusing-complexity-for-difficulty.md` | `/writing/confusing-complexity-for-difficulty` |
| `writing/archive` | `YYYY-MM-DD-kebab-title.md` | `2008-03-18-why-openid-will-never-work.md` | `/writing/archive/2008-03-18-why-openid-will-never-work` |

**Kebab-case rules for the title part of the filename:**
- All lowercase.
- Spaces → hyphens.
- Remove apostrophes, quotes, commas, colons, and other punctuation (don't replace them with hyphens). `Isn't it odd?` → `isnt-it-odd`.
- `&` → `and`. Strip any other symbol.
- No double hyphens, no leading/trailing hyphen.

**Daily date prefix = the `pubDate`.** The `YYYY-MM-DD` at the front of a daily filename must match the `pubDate` in its frontmatter. If they disagree, the URL and the displayed date won't match.

---

## Recipe A — Daily post

**Path:** `src/content/daily/YYYY-MM-DD-kebab-title.md`

**Template (copy, then replace the ALL-CAPS placeholders):**

```markdown
---
title: "TITLE IN DOUBLE QUOTES"
description: "One-sentence summary in double quotes."
pubDate: YYYY-MM-DD
tags: [tag-one, tag-two]
---

Opening paragraph. This first paragraph gets a decorative drop-cap, so start it with plain prose (a normal sentence), not a blockquote, list, or heading.

Second paragraph. Write in Markdown. Use [inline links](https://example.com) normally.

## Optional section heading

More prose. Every `##` heading automatically becomes a numbered entry in the post's Table of Contents.
```

- If today's post, set both the filename prefix and `pubDate` to today's date.
- Tags are optional — omit the line if none fit.
- Keep `draft: true` out unless the user wants it hidden.

---

## Recipe B — Writing essay

**Path:** `src/content/writing/kebab-title.md` **(no date in the filename)**

```markdown
---
title: "ESSAY TITLE IN DOUBLE QUOTES"
description: "One-sentence dek in double quotes."
pubDate: YYYY-MM-DD
tags: [craft, simplicity]
---

Opening paragraph in plain prose (gets the drop-cap).

## A section

Body prose. Use `##` for sections you want in the Table of Contents, `###` for sub-points (these do NOT appear in the TOC — only `##` does).

> Blockquotes render as a left-bordered pull quote. Fine to lead a section with one, just not the very first element of the post if you want the drop-cap.
```

- **Do NOT set `archive`** on a normal new essay (that's Recipe C only).
- Filename has **no date prefix** — that's what distinguishes the clean `/writing/...` URL from the dated archive URLs.

---

## Recipe C — Archive post (WordPress-era import)

**Path:** `src/content/writing/archive/YYYY-MM-DD-kebab-title.md`

Identical to a writing essay **except**: it lives in the `archive/` subfolder, keeps a date prefix in the filename, and **must** set `archive: true` and carry the `archive` tag.

```markdown
---
title: "OLD POST TITLE IN DOUBLE QUOTES"
description: "One-sentence summary in double quotes."
pubDate: YYYY-MM-DD
archive: true
tags: [archive]
---

Original post body in Markdown.
```

Use the original publication date for both the filename prefix and `pubDate`.

---

## Recipe D — Standalone `.astro` page (About, Now, etc.)

Use this **only** for a top-level page that is not a blog post. It is a real route: `src/pages/NAME.astro` → `/NAME/`. Build it on `BaseLayout` and use the existing section markup + design tokens — do not introduce new colors or fonts.

**Path:** `src/pages/PAGE-NAME.astro` (e.g. `src/pages/now.astro` → `/now/`)

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="PAGE TITLE — Jason Preston"
  description="One-sentence description for SEO and social cards."
>
  <section class="section">
    <header class="section-header">
      <div class="eyebrow">SHORT EYEBROW LABEL</div>
      <h1>Page Heading</h1>
      <p class="dek">A one-line italic dek under the heading.</p>
    </header>

    <div class="prose">
      <p>Body content goes here. Write normal HTML inside the prose container.</p>
    </div>
  </section>
</BaseLayout>

<style>
  .section {
    max-width: var(--maxw);
    margin: 0 auto;
    padding: 4rem 2rem 4rem;
  }
  .section-header { text-align: center; margin-bottom: 4rem; }
  .eyebrow {
    font-size: .72rem;
    text-transform: uppercase;
    letter-spacing: .16em;
    color: var(--accent);
    margin-bottom: 1rem;
    font-weight: 500;
  }
  h1 {
    font-size: clamp(2.6rem, 6vw, 4rem);
    font-variation-settings: "opsz" 144, "SOFT" 30, "WONK" 0;
    font-weight: 400;
    letter-spacing: -.03em;
    line-height: 1;
    margin: 0 0 1rem;
  }
  .dek {
    color: var(--muted);
    font-size: 1.05rem;
    font-variation-settings: "opsz" 24, "SOFT" 60, "WONK" 0;
    font-style: italic;
    max-width: 56ch;
    margin: 0 auto;
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    .section { padding: 2rem 1.25rem 3rem; }
  }
</style>
```

### Design tokens you may use (CSS variables — defined in `src/styles/global.css`)
Use these, never raw hex colors or pixel font sizes:
- **Colors:** `var(--paper)` (bg), `var(--surface)`, `var(--ink)` (text), `var(--muted)`, `var(--faint)`, `var(--accent)` (the orange), `var(--rule)` (hairlines).
- **Layout:** `var(--maxw)` (1120px page max), `var(--prose)` (640px reading column).
- **Spacing scale (8px base):** `var(--s-xs)` … `var(--s-5xl)`.
- **Fonts:** `var(--font-serif)` (Fraunces — body/display), `var(--font-mono)` (JetBrains Mono — metadata only).
- Light mode is handled automatically via the `[data-theme="light"]` overrides on these same variables. If you only use the tokens, light mode just works — don't write your own light-mode colors.

**`BaseLayout` props:** `title` (string), `description` (string), `image` (OG image path, optional), `noChrome` (boolean — hides header/footer; used only by the homepage). For a normal page, pass `title` and `description` and leave the rest default.

---

## Body / Markdown conventions (apply to Recipes A, B, C)

- **First paragraph = drop-cap.** Start the post with a normal prose sentence. If the first element is a heading, list, or blockquote, the drop-cap won't render and the opening looks off.
- **`##` headings build the Table of Contents.** Only `##` (h2) appears in the TOC sidebar. Use them for real sections. `###` (h3) is for sub-points and is not in the TOC.
- **No body `#` (h1).** The title comes from frontmatter.
- **Links:** standard Markdown `[text](url)`. External links are fine inline.
- **Blockquotes:** `>` renders as an accent-bordered italic pull quote.
- **Footnotes:** GFM footnotes (`[^1]`) render at the bottom of the post — supported.
- **Code:** fenced code blocks get syntax highlighting (theme `github-dark-dimmed`). Inline code uses backticks.
- **Images:** put image files in `public/images/` and reference them as `/images/filename.jpg` (absolute path from site root). Provide alt text.

---

## Step Final: Validate before you call it done

1. **Confirm the path and filename** match the rules above (right collection folder, right slug pattern, date prefix only where required).
2. **Re-read the frontmatter** against the schema table: `title` and `description` quoted, `pubDate` bare `YYYY-MM-DD`, no invented fields, no body `#` H1.
3. **Run the build** to catch schema/type errors:
   ```bash
   npm run build
   ```
   A clean build means the page is valid. If it fails, the error almost always names the file and the bad field — fix that field, don't restructure.
4. **(Optional) Preview locally:** `npm run dev`, then open the URL from the slug table (e.g. `http://localhost:4321/daily/2026-06-05-...`).
5. Tell the user the exact file path created and the URL it will live at.

---

## Hard rules (do not violate)

- **Never invent frontmatter fields.** Only the six in the schema table exist.
- **Never add an `.astro` file for a blog post** — posts are markdown only; routing is automatic.
- **Never hard-code colors, hex values, or pixel font sizes** in a standalone page — use the design tokens.
- **Never add a body `# H1`** — the title is in frontmatter.
- **Don't change `src/content.config.ts`, layouts, or `global.css`** to make a page fit. If a page seems to need a new field or token, stop and ask the user.
- When unsure about visual/design choices on a standalone page, consult `DESIGN.md` at the repo root (the single source of truth) before deviating.
