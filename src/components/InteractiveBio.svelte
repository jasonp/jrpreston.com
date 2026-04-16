<script>
  import { onMount } from 'svelte';
  import rough from 'roughjs';

  /** @type {{ id: string; title: string; items: string[] }[]} */
  const categories = [
    {
      id: 'founder',
      title: 'Founder',
      items: [
        'Co-founder of Dent',
      ],
    },
    {
      id: 'writer',
      title: 'Writer',
      items: [
        'Blogger since 2001',
        'Wrote for The Escapist (online magazine about video games)',
        'Fiction and Sci-Fi writer (not yet published)',
      ],
    },
    {
      id: 'investor',
      title: 'Investor',
      items: [
        '9 Angel Investments including BlueSky and Staris Tech',
        'Joined Alsop Louie in 2019, became a partner in 2022',
        'Standing up a new VC firm with Stewart Alsop, Jim Ward, and Shwetak Patel',
      ],
    },
    {
      id: 'twiddler',
      title: 'Twiddler of Thumbs',
      items: [
        'Machine Learning Certificate in 2019',
        'Created Eat Sleep Publish, a blog and event series from 2008–2010',
        'WatchSpade: eSports personality on YouTube with 1M views',
        'Self-taught Ruby on Rails around 2010',
      ],
    },
    {
      id: 'miscellany',
      title: 'Miscellany of Life',
      items: [
        'Avid club tennis player in USTA',
        'Developing a Buddhist practice',
        'Amateur magician (angling for membership at the Magic Castle)',
        'Spent 9 years on the BOD of the Hydrocephalus Association',
        'Graduated with an A.B. from Occidental College in LA',
      ],
    },
  ];

  let openId = $state(null);
  /** @type {Record<string, HTMLDivElement>} */
  let cardRefs = {};
  /** @type {Record<string, SVGSVGElement>} */
  let svgRefs = {};

  function toggle(id) {
    openId = openId === id ? null : id;
    // Re-draw after expansion animation completes so the hand-drawn border
    // matches the new size.
    setTimeout(() => drawBorder(id), 320);
  }

  function drawBorder(id) {
    const card = cardRefs[id];
    const svg = svgRefs[id];
    if (!card || !svg) return;

    const { width, height } = card.getBoundingClientRect();
    if (width === 0 || height === 0) return;

    // Clear previous paths
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    svg.setAttribute('width', String(width));
    svg.setAttribute('height', String(height));
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

    const rc = rough.svg(svg);
    // Read CSS variables for theme-aware stroke color
    const style = getComputedStyle(document.documentElement);
    const strokeColor = style.getPropertyValue('--ink').trim() || '#EDE8DC';
    const accentColor = style.getPropertyValue('--accent').trim() || '#D4683E';

    const isOpen = openId === id;
    const path = rc.rectangle(4, 4, width - 8, height - 8, {
      stroke: isOpen ? accentColor : strokeColor,
      strokeWidth: isOpen ? 1.6 : 1.1,
      roughness: 1.8,
      bowing: 1.4,
      seed: hashSeed(id),
    });
    svg.appendChild(path);
  }

  function hashSeed(id) {
    // Deterministic seed per card so border shape is stable across re-renders
    let h = 0;
    for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0;
    return Math.abs(h) || 1;
  }

  function drawAll() {
    for (const c of categories) drawBorder(c.id);
  }

  onMount(() => {
    drawAll();
    window.addEventListener('resize', drawAll);

    // Redraw when theme changes (data-theme attribute on <html>)
    const observer = new MutationObserver(() => {
      // small delay so CSS vars settle
      setTimeout(drawAll, 20);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => {
      window.removeEventListener('resize', drawAll);
      observer.disconnect();
    };
  });
</script>

<div class="bio-grid">
  {#each categories as c}
    {@const isOpen = openId === c.id}
    <div
      class="card"
      class:open={isOpen}
      bind:this={cardRefs[c.id]}
    >
      <svg
        class="border"
        bind:this={svgRefs[c.id]}
        aria-hidden="true"
      ></svg>

      <button
        class="toggle"
        onclick={() => toggle(c.id)}
        aria-expanded={isOpen}
        aria-controls={`list-${c.id}`}
      >
        <span class="title">{c.title}</span>
        <span class="carrot" class:rotated={isOpen}>
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <!-- hand-drawn-ish chevron: two short strokes -->
            <path
              d="M 5 9 Q 7 9 8 10 Q 10 12 12 14 M 12 14 Q 14 12 16 10 Q 17 9 19 9"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>

      {#if isOpen}
        <ul id={`list-${c.id}`} class="items">
          {#each c.items as item}
            <li>
              <span class="bullet" aria-hidden="true">✦</span>
              <span>{item}</span>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  {/each}
</div>

<style>
  .bio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
    gap: 1.25rem;
    max-width: 920px;
    margin: 0 auto;
  }

  .card {
    position: relative;
    padding: 0;
    background: transparent;
  }

  .border {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  .toggle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1.2rem 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--ink);
    font-family: var(--font-serif);
    text-align: left;
    position: relative;
    z-index: 1;
    transition: color .2s;
  }
  .toggle:hover { color: var(--accent); }
  .toggle:hover .carrot { color: var(--accent); }

  .title {
    font-size: 1.3rem;
    font-variation-settings: "opsz" 48, "SOFT" 30, "WONK" 0;
    font-weight: 500;
    letter-spacing: -.01em;
    line-height: 1.1;
  }

  .carrot {
    display: inline-flex;
    color: var(--muted);
    transition: transform .25s ease, color .2s;
  }
  .carrot.rotated { transform: rotate(180deg); color: var(--accent); }

  .items {
    list-style: none;
    padding: 0 1.5rem 1.3rem;
    margin: 0;
    position: relative;
    z-index: 1;
    animation: slide-in .25s ease;
  }

  @keyframes slide-in {
    from { opacity: 0; transform: translateY(-4px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .items li {
    display: flex;
    gap: .65rem;
    padding: .4rem 0;
    color: var(--ink);
    font-size: .98rem;
    line-height: 1.5;
  }

  .bullet {
    color: var(--accent);
    flex-shrink: 0;
    font-size: .8rem;
    padding-top: .2em;
  }

  @media (prefers-reduced-motion: reduce) {
    .items { animation: none; }
    .carrot { transition: color .2s; }
  }
</style>
