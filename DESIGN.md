# Design System — jrpreston.com

The single source of truth for visual decisions on jrpreston.com. Every component, layout, and content type inherits from this document. Don't deviate without an explicit conversation. When in doubt, read the references and the decisions log at the bottom.

## Product Context

- **What this is.** Personal editorial site for Jason Preston. Three sections: a daily AI-blogging experiment (`/daily`), longer writing including a revived WordPress archive (`/writing`), and a long-form narrative About page with the first interactive element (`/about`).
- **Who it's for.** Readers, prospective collaborators, founders, the curious. Not a fund pitch. Not a resume. Not a Substack.
- **What it has to do.** Hold up as a calling card on day 1,000 of no updates *and* support nicely-crafted essays with footnotes, TOC, full-bleed photography, and interactive embeds when there's something to publish.
- **Core principle.** *Tinkering should be supported, not required.*

## Aesthetic Direction

- **Direction.** Editorial-personal. Warm, literary, confident. Less cinematic than Glasswing, less academic than Thinking Machines, more deliberate than the current site.
- **Decoration level.** Minimal. Typography does the work. No drop shadows, no decorative blobs, no purple gradients, no 3-column icon grids.
- **Mood.** A curious person's reading room. Not corporate, not academic, not a blog template.
- **References.**
  - [anthropic.com/glasswing](https://www.anthropic.com/glasswing) — single-serif discipline, warm paper, manifesto energy
  - [thinkingmachines.ai/news/training-llms-to-predict-world-events/](https://thinkingmachines.ai/news/training-llms-to-predict-world-events/) — single-serif discipline, TOC + margin footnotes, calm data-forward
  - [current jrpreston.com](https://jrpreston.com) — preserved spirit: centered, photography-led, evergreen

## Typography

**Single-serif discipline.** One family for everything from 96px hero to 14px caption. Both reference sites do this; we follow.

- **Family.** [Fraunces](https://fonts.google.com/specimen/Fraunces) — variable serif with optical-size, weight, SOFT, and WONK axes. Open source (SIL OFL).
- **Loading.** Google Fonts CSS2 with all axes, `display=swap`. Preconnect to `fonts.googleapis.com` and `fonts.gstatic.com`.
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,300..900,0..100,0..1&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  ```
- **WONK axis is OFF (`WONK 0`) everywhere.** The wonky J in "Jason" is forbidden. SOFT axis stays on at 30 for body, 30 for display, 60 for italic.
- **Mono.** JetBrains Mono — used only for dates, version numbers, tabular metadata, code blocks, and the JetBrains pixel grid feel in the TOC numbering. Never for body.

### Type scale

| Role | Size | opsz | SOFT | weight | Notes |
|---|---|---|---|---|---|
| hero | 80–96px (clamp) | 144 | 30 | 400 | Home page name; essay title page |
| h1 | 48–56px | 144 | 30 | 400 | Essay/post titles |
| h2 | 28–32px | 80 | 30 | 400 | Section headers within essays |
| h3 | 22–24px | 48 | 30 | 500 | Subsections |
| dek/lede | 20–24px italic | 24 | 60 | 400 | Subtitles, taglines |
| body | 18px | 14 | 30 | 400 | Default reading size |
| caption | 14px | 12 | 40 | 400 | Photo captions, metadata |
| micro | 12px uppercase | 14 | 0 | 500 | Eyebrow labels, nav meta |
| mono | 13–14px | — | — | 400 | JetBrains Mono, `font-feature-settings: "tnum"` |

### Feature settings

- `font-feature-settings: "ss01", "onum"` on body — alternate forms + oldstyle figures
- `font-feature-settings: "tnum"` on dates, metadata, mono — tabular figures
- Italic uses SOFT 60 for a slightly friendlier slant

## Color

**Restrained.** Five colors per mode + accent + accent-soft. Terracotta is the *only* accent. No semantic color sprawl.

**Dark is the primary mode.** Light is secondary via top-right toggle. Default state ships dark.

### Dark (default)

```css
:root {
  --paper:        #14130E;  /* warm near-black background */
  --surface:      #1F1D17;  /* subtle elevation */
  --ink:          #EDE8DC;  /* warm paper text */
  --muted:        #958E7E;  /* warm gray */
  --faint:        #45423B;  /* dim rules and faded UI */
  --accent:       #D4683E;  /* terracotta, brightened for dark legibility */
  --accent-soft:  #3A2218;  /* translucent accent for highlights */
  --rule:         #2A2820;  /* borders and dividers */
}
```

### Light (toggle)

```css
[data-theme="light"] {
  --paper:        #FAF9F5;  /* warm paper, matches Glasswing */
  --surface:      #F1EDE2;
  --ink:          #1A1918;  /* warm near-black ink */
  --muted:        #6B6860;
  --faint:        #B8B2A3;
  --accent:       #A64B2A;  /* terracotta */
  --accent-soft:  #F3E0D5;
  --rule:         #E5DFD0;
}
```

### Toggle behavior

- Default state: no `data-theme` attribute on `<html>` → dark renders
- Toggle click sets `data-theme="light"` → light overrides apply
- Persist user choice in `localStorage` so the preference survives navigation
- Respect `prefers-color-scheme: light` on first visit only if no stored preference

## Spacing

- **Base unit.** 8px
- **Density.** Comfortable. Generous vertical rhythm for reading.
- **Scale.** `2 · 4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128`
- **Prose column.** 640px (~65ch line length, the literary sweet spot)
- **Outer max.** 1120px
- **Section padding.** 5–7rem vertical between major page sections

## Layout

- **Approach.** Hybrid. Centered single-column for the home and About pages; a three-column grid for essay pages with TOC + prose + footnote margin.
- **Border radius.** Subtle. `3px` for swatches and inputs, `4–6px` for cards, `999px` only for tags/pills. No bubbly catch-all radius.
- **Photography.** First-class. Three figure widths:
  - **prose** (default) — fits inside the 640px column
  - **`.figure-wide`** — overruns the prose column into the TOC and footnote gutters
  - **`.figure-full`** — runs edge-to-edge of the viewport
- **Rules and dividers.** 1px solid `var(--rule)`. Dashed only for preview-section dividers.

### Grid: essay page

```css
.essay-grid {
  display: grid;
  grid-template-columns:
    [full-start] minmax(1rem, 1fr)
    [toc-start]  minmax(150px, 180px)
    [toc-end prose-start] minmax(0, 640px)
    [prose-end note-start] minmax(150px, 220px)
    [note-end]   minmax(1rem, 1fr)
    [full-end];
  gap: 2rem;
}
```

- TOC: sticky in `toc` column, follows scroll
- Prose: default `prose` column for all `<p>`, `<h2>`, `<blockquote>`, etc.
- Margin notes: `note` column, positioned absolutely inside their parent so they sit at the line where the footnote is referenced
- `.figure-wide`: spans `toc-start / note-end`
- `.figure-full`: spans `full-start / full-end`
- **Mobile (<900px).** Collapses to single column. TOC becomes a `<details>` "Contents" dropdown at the top. Margin notes slide inline as bordered callouts (`var(--surface)` background, terracotta left border).

## Motion

- **Approach.** Minimal-functional. Motion exists to aid comprehension, never decoration.
- **Easing.** `ease-out` for entrances, `ease-in` for exits, `ease-in-out` for state moves
- **Duration.** `micro 100ms · short 200ms · medium 300ms · long 600ms`
- **The exception:** the threads interaction on `/about` uses 250ms transitions on multiple paragraphs simultaneously. This is the one place motion earns its keep.
- **Always honor `prefers-reduced-motion: reduce`** — disable all transitions, keep state changes instant.

## Page-level patterns

### Home (`/`) — calling card

- Centered column, max ~820px
- Hero name in Fraunces ~80px (no WONK)
- Italic tagline ~18px in `--muted`
- Hero photograph framed with `1px solid var(--rule)`, captioned in micro type
- Nav row: `Daily · Writing · About · Photography · Feed` — each link gets a small meta label ("An AI experiment", "Essays & archive", etc.)
- Optional "Latest" line near the bottom — present only when there's something recent to point at; absent otherwise. Site looks complete either way.
- Quiet bio/contact line at the very bottom: email + link to full Alsop Louie bio

### Essay / post page (`/writing/[slug]`, `/daily/[slug]`)

- Centered title, eyebrow, byline above the grid
- Three-column grid (see above) starts after the title
- Drop cap on opening paragraph: opsz 144, weight 500, color terracotta, float left
- Pullquote: terracotta left border, italic, color `--muted`, font opsz 24 SOFT 60
- Section break: `§ § §` centered, color `--faint`, letter-spacing 1rem
- Footnote refs in body: superscript number in terracotta. Click → highlights the matching margin note briefly
- Two figure widths available: `.figure-wide` and `.figure-full` with captions in muted italic

### About page (`/about`) — first interactive island

- Single column, narrow
- Hero name + italic tagline
- **Threads bar** above the narrative: theme buttons (`Writing · Investing · Stage · Family · Games · Magic · Community`) styled as pill tags
- Clicking a thread:
  - Sets that thread `active` (filled with terracotta, paper text)
  - Adds `.glow` class to all paragraphs whose `data-threads` includes that thread
  - `.glow` paragraphs get a terracotta left border, `--accent-soft` background, and 1.2rem left padding (with 250ms transition)
- Clicking the active thread again clears state
- This is the first Astro island. Everything else on the page is plain HTML.

### Daily listing (`/daily`)

- Reverse-chronological list
- Each entry: post title in Fraunces 22–28px medium, date in mono caption, optional 1-line excerpt
- Pagination at bottom (or simple "load older" link) — TBD in M2

### Writing listing (`/writing`)

- Same shape as Daily listing
- Year groupings: small section header per year for the WordPress archive years
- Optional toggle: "Recent" / "Archive (2005–2011)" so the old WP posts don't drown out new essays

## Anti-patterns (do not do these)

- ❌ Centered everything with uniform spacing on every page
- ❌ Sans-serif for body (kills the single-serif discipline)
- ❌ Drop-shadow cards
- ❌ Purple/violet anywhere
- ❌ 3-column icon grids
- ❌ Bubbly border-radius on everything
- ❌ Inter, Roboto, Montserrat, Open Sans, Poppins as primary fonts
- ❌ Wonky J on "Jason" (`WONK 1` on display) — banned
- ❌ Loading spinners > 200ms (use skeleton or just render)

## Decisions log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-09 | Single-serif (Fraunces) over serif+sans | Both reference sites (Glasswing, TML) use one serif everywhere. Followed the data. |
| 2026-04-09 | Terracotta accent | Warm, distinctive vs blue/green link defaults. Pairs with paper warmth. User confirmed in v1 preview. |
| 2026-04-09 | WONK axis off on all display type | User rejected the wonky J in "Jason." SOFT axis stays. |
| 2026-04-09 | Dark mode is default | User preference. Light is secondary via top-right toggle. |
| 2026-04-09 | Calling-card home, not broadsheet | Site must hold up with zero recent posts. Tinkering supported, not required. |
| 2026-04-09 | Three-column essay grid (TOC + prose + footnote margin) | TML pattern. User requested margin footnotes and a TOC. |
| 2026-04-09 | First Astro island = threads on /about | User chose threads over era scrubber. |
| 2026-04-09 | Photography first-class with three figure widths | User requested wide/full-bleed media support. Longs Peak photo confirmed for home hero. |
| 2026-04-09 | Light/dark toggle ships on the live site | User confirmed in v2 review. |

## Snapshots

Design previews from M1 are saved at:

```
~/.gstack/projects/jrpreston.com-site/designs/previews/
├── preview-M1-v1.html  (broadsheet front page, terracotta accent)
├── preview-M1-v2.html  (calling-card home, TOC + footnotes added)
├── preview-M1-v3.html  (dark default, WONK off — final)
└── *-screenshot.png    (matching screenshots)
```
