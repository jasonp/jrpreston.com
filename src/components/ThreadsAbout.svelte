<script>
  /** @type {{ id: string; label: string }[]} */
  const threads = [
    { id: 'writing',   label: 'Writing' },
    { id: 'investing', label: 'Investing' },
    { id: 'tinkering', label: 'Tinkering' },
    { id: 'stage',     label: 'Stage' },
    { id: 'family',    label: 'Family' },
    { id: 'games',     label: 'Games' },
    { id: 'magic',     label: 'Magic' },
  ];

  /** @type {{ html: string; threads: string[] }[]} */
  const paragraphs = [
    {
      threads: ['tinkering', 'games', 'writing'],
      html: `I grew up in Bellevue, Washington, with a father who worked at Microsoft and a house full of beige boxes. My friends and I spent our afternoons plugging in 14.4 baud modems, swapping 3DFX cards, and playing Zork. I learned to code in QBasic because I wanted to make my own text adventure games, and I briefly co-founded a "software company" called AJES Software with two friends. We made ASCII games and sold exactly zero copies, because our customers were other elementary school kids who didn't have any money.`
    },
    {
      threads: ['tinkering'],
      html: `By middle school I was charging neighbors $50 to build their websites. I was part of a program called Prism for kids who learned quickly and needed a different pace. When the program ended in high school, I took 10th grade English in 9th grade, 11th in 10th, and so on, until senior year when there were no English classes left and they put me in Remedial English B. I was terrible about it.`
    },
    {
      threads: ['stage'],
      html: `I found my people in the theater program. It took two years to work up the nerve, but once I was in, I was <em>in</em>: lead roles, mainstage plays, black box shows, improv nights. Twenty-four shows in two years, plus musicals on the side. Theater taught me how to read a room, how to commit to a choice, and how to be comfortable being watched. I also played drums in a band called Coal Creek Parkway with my best friend Jacob Brown, and did stand-up comedy at a club called Giggles. I was seventeen and convinced I'd peaked.`
    },
    {
      threads: ['writing', 'games', 'tinkering'],
      html: `At Occidental College in Los Angeles, I deliberately avoided theater because I knew it would swallow me. I got a degree in Diplomacy and World Affairs (a combination of economics, international relations, and languages that I have used approximately never) and a film minor. While there I started a video game blog called Flicker Gaming with my roommate. The blog failed, but it got me my first byline: writing for The Escapist, a magazine about video games and online culture. That was 2006 and I've been publishing something, somewhere, ever since.`
    },
    {
      threads: ['stage', 'tinkering'],
      html: `After college I moved back to Seattle and fell into technology events. I worked with Steve Broback at the Parnassus Group on the Blog Business Summit, early Facebook and LinkedIn conferences, and eventually the first Twitter Conference. That work led to the Tweet House, a hospitality suite I ran at film festivals like Sundance and SXSW that connected Hollywood with Silicon Valley. I helped verify some of the first celebrity Twitter accounts, including William Shatner and Pee-Wee Herman. It was an absurd job and I loved every minute of it.`
    },
    {
      threads: ['stage', 'investing'],
      html: `In 2012, Steve and I co-founded <a href="https://dentthefuture.com">Dent The Future</a>, borrowing from the Steve Jobs line about putting a dent in the universe. The conference became a twelve-year study in what makes people succeed: why some founders break through, why some leaders endure, what separates the merely talented from the genuinely impactful. Lyft CEO David Risher, astronaut Tim Kopra, Pixar co-founder Alvy Ray Smith, poker champion Maria Konnikova. I spent over a decade learning from the people on that stage and the community around it.`
    },
    {
      threads: ['family'],
      html: `In December of 2012, our newborn son Julian was diagnosed with hydrocephalus, a condition where cerebrospinal fluid accumulates in the head. It changed everything. I joined the board of the <a href="https://www.hydroassoc.org/">Hydrocephalus Association</a>, the only national nonprofit funding and advocating for a cure. I served nine years on the board, two as chair. During that time, HA invested $15 million in targeted research grants that generated $75 million in follow-on funding from the NIH. We helped launch the first patient-powered registry for the condition, which has led to published papers in medical journals. Our daughter Carolina was born in 2014.`
    },
    {
      threads: ['games', 'tinkering'],
      html: `Around the same time, I became fascinated with the creator economy and launched WatchSpade, a YouTube and Twitch personality whose entire purpose was to welcome newcomers to competitive Counter-Strike and be friendly about it. Over two years it drew more than a million views. It was a weird thing to pour time into while also running a conference and sitting on a medical nonprofit board, but I've never been very good at doing only one thing.`
    },
    {
      threads: ['family', 'stage'],
      html: `In 2015, my wife <a href="https://moniguzman.com">Mónica Guzmán</a> won a Nieman Fellowship at Harvard. We packed up the family and moved to Cambridge for a year. As a Nieman Associate I had free rein to audit any class at Harvard or MIT, which I did with wild abandon: Digital Transformation at HBS, Public Narrative at HKS, Planetary Geology, Medical Device Innovation at MIT, and a workshop at the Extension School that used tabletop games to teach adaptive leadership. That year reset everything I thought I knew about learning. When we moved back to Seattle, I taught Organizational Teamwork and Leadership at the University of Washington.`
    },
    {
      threads: ['investing'],
      html: `Dent kept putting me in rooms with founders who had questions about culture and strategy, which led to a consulting practice called Capture Culture. I worked with companies like Microsoft and nonprofits like Malaria No More. That work brought me into the orbit of Stewart Alsop, a member of the Dent community, and we realized there was a lot of overlap between culture consulting and venture portfolio support. In 2019 I joined <a href="https://alsop-louie.com">Alsop Louie Partners</a> as a Venture Partner, became a Partner in 2022, and spent five years learning the craft of venture capital from people who had been at it for decades. Board seats, funding rounds, complicated dynamics, critical moments. The education was unlike any other.`
    },
    {
      threads: ['investing', 'tinkering'],
      html: `Now I'm starting <a href="https://tkmt.vc">TK Ventures</a>, taking everything I've learned and applying it to the next generation of companies. I'm an active angel investor with investments in BlueSky, Radicle Science, and others. The through line from the Dent stage to the board table has always been the same question: what makes this work, and what's in the way?`
    },
    {
      threads: ['magic', 'games'],
      html: `I am an amateur magician working toward membership in the Magic Castle in Los Angeles. I have about twenty-five minutes of card magic and a handful of mentors who are much better than I am. I play USTA adult club tennis year-round in Seattle and find it almost unparalleled as a sport: the strategy, the point-by-point decision-making, the way doubles forces you to trust another person's instincts. I read twenty to fifty books a year, mostly Dan Simmons and mystery fiction right now. I've officiated four weddings as an ordained minister, and I play the drums badly and the guitar worse.`
    },
    {
      threads: ['writing', 'tinkering'],
      html: `I have kept a blog of some kind since 2001. LiveJournal, WordPress, hand-rolled HTML, Substack. The medium changes; the need to write doesn't. I'm working on my first fiction short story, a mystery, and I plan to send it to Analog or Asimov's. This site is the latest iteration of a twenty-five-year habit of building things on the internet and seeing what happens.`
    },
  ];

  let active = $state(null);

  function toggle(id) {
    active = active === id ? null : id;
  }
</script>

<div class="threads-bar">
  <span class="label">Follow a thread</span>
  <div class="thread-tags">
    {#each threads as t}
      <button
        class="thread"
        class:active={active === t.id}
        onclick={() => toggle(t.id)}
        type="button"
      >
        {t.label}
      </button>
    {/each}
  </div>
</div>

<div class="about-body">
  {#each paragraphs as p}
    <p
      class:glow={active !== null && p.threads.includes(active)}
    >
      {@html p.html}
    </p>
  {/each}
</div>

<style>
  .threads-bar {
    max-width: 640px;
    margin: 0 auto 3rem;
    padding: 1.5rem;
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
    text-align: center;
  }
  .label {
    display: block;
    font-size: .72rem;
    text-transform: uppercase;
    letter-spacing: .14em;
    color: var(--muted);
    margin-bottom: 1rem;
    font-weight: 500;
  }
  .thread-tags {
    display: flex;
    gap: .5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  .thread {
    background: transparent;
    border: 1px solid var(--rule);
    color: var(--ink);
    padding: .4rem .9rem;
    border-radius: 999px;
    font-family: inherit;
    font-size: .85rem;
    cursor: pointer;
    transition: all .15s;
    font-variation-settings: "opsz" 14, "SOFT" 30, "WONK" 0;
  }
  .thread:hover { border-color: var(--accent); color: var(--accent); }
  .thread.active {
    background: var(--accent);
    color: var(--paper);
    border-color: var(--accent);
  }

  .about-body {
    max-width: 640px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  .about-body p {
    margin-bottom: 1.5rem;
    font-size: 1.08rem;
    line-height: 1.65;
    padding-left: 1rem;
    border-left: 2px solid transparent;
    transition: border-color .25s, background .25s, padding-left .25s;
  }
  .about-body p :global(a) {
    color: var(--accent);
    text-decoration: none;
    border-bottom: 1px solid rgba(212, 104, 62, .4);
    transition: border-color .15s;
  }
  .about-body p :global(a:hover) { border-bottom-color: var(--accent); }
  .about-body p :global(em) { font-style: italic; }
  .about-body p.glow {
    border-left-color: var(--accent);
    background: var(--accent-soft);
    padding-left: 1.2rem;
  }

  @media (max-width: 600px) {
    .threads-bar { padding: 1rem; }
  }
</style>
