---
date: 2026-04-14
source_articles:
  - "The formlessness of AI agents" (David Hoang / Proof of Concept) — core metaphor of agents finding the right "body" and examples of OpenClaw, ClawBody, and ClawStage
  - "Claude Cowork 101: How to automate your workday without touching code" (Claire Vo with JJ Englert / Lenny's Newsletter) — concrete example of AI moving from chat to embedded workflows on your own machine
  - "Hard truths about building in the AI era" (Lenny Rachitsky with Keith Rabois / Lenny's Newsletter) — perspective on what actually matters when building AI-native products and companies
status: draft
---

**Title: Why the Body of an AI Agent Matters More Than Its Brain**

Most of the AI hype still lives in the model: bigger, smarter, cheaper, multimodal, whatever comes next. But the longer I work with this stuff, the more I’m convinced the real leverage is in the body you give the intelligence, not the IQ score you chase.

In his piece on the [formlessness of AI agents](https://www.proofofconcept.pub/p/the-formlessness-of-ai-agents), David Hoang borrows a great metaphor from comics. Ultron doesn’t just level up by thinking harder; he keeps swapping into better shells. Same mind, different embodiment, wildly different impact. Our tools are in their Ultron-3 moment: mostly trapped in chat boxes and browser tabs, even as their capabilities quietly outgrow the container.

What I’m seeing in the wild is three kinds of “bodies” emerging:

- **Embedded copilots** like [Claude Cowork](https://www.lennysnewsletter.com/p/claude-cowork-101-how-to-automate), which live inside your actual files, folders, and tools instead of a website. JJ Englert describes it as building a nervous system for your computer: shared memory, scheduled tasks, connectors to mail and calendar. Same underlying model, but once it’s wired into your environment it stops feeling like chat and starts feeling like infrastructure.
- **Operational shells** like OpenClaw running on your own machine. The agent isn’t an app you visit; it’s a process that knows your calendar, moves files, and runs scripts. You talk to it over Telegram and it quietly does work in the background. Same intelligence, different posture.
- **Physical embodiments** like the ClawBody and ClawStage work Hoang highlights, where the agent grows motors, cameras, and a face. Give it perception and actuation and suddenly latency, safety, and ergonomics become as important as model quality.

What ties these together is something Keith Rabois keeps hammering in his conversation on [building in the AI era](https://www.lennysnewsletter.com/p/hard-truths-about-building-in-the-ai-era): in the end, customers don’t buy technology, they buy workflows. “Barrels,” in his language, are the people who can turn raw capability into systems that actually move the needle.

Bodies are just workflows with physics.

If you’re building in this space right now, I think the wrong question is “Which model?” and the right questions are:

- Where does this intelligence live day-to-day?
- What can it see and touch without being asked?
- How does it remember what just happened?
- What failure modes become unacceptable once it’s controlling something real?

Once you answer those, the choice of model starts to feel like an implementation detail. The frontier shifts from “Can this LLM pass the bar exam?” to “Can this agent reliably close the loop between sensing, deciding, and acting in this specific environment?”

We’re still early. Most people’s first experience of AI is a chat window, the way early television was just radio with a camera pointed at it. But the interesting work is happening where the shell is being redesigned from scratch: copilots that inhabit your filesystem, agents that grow limbs, small dedicated boxes that sit on your desk and quietly orchestrate your digital life.

The brain will keep getting better on its own. The hard, interesting, human work is choosing the right body.