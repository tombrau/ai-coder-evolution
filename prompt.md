# AI Coder Evolution — Reusable Prompt
> A structured prompt for exploring the exponential growth of AI coding capabilities, from GPT-2 (2019) to projected futures out to 2040. Designed for use with any capable AI assistant.
> **Current baseline date: March 2026.**

---

## ⚠️ Important — Web Search Required

Before beginning this analysis, **conduct a web search** to retrieve current information on:

1. All major AI coding model releases from **January 2025 to the present** (pay particular attention to the period March 2025 → March 2026, as this is the most recent and fastest-moving window)
2. Key capability benchmarks (e.g. SWE-bench scores, HumanEval scores) for the top models
3. Any significant industry reports on AI adoption among developers (e.g. Stack Overflow Developer Surveys, GitHub Octoverse reports)
4. Notable economic or workforce impacts reported in credible publications

Suggested search queries:
- `"AI coding models" 2025 2026 releases capabilities`
- `SWE-bench leaderboard 2025 2026`
- `Claude Code GPT-5 Codex Gemini 3 coding benchmark 2026`
- `developer employment AI impact 2025 2026`
- `agentic coding AI autonomous software development 2025`
- `InceptionLabs Mercury 2 diffusion LLM coding benchmark 2026`
- `diffusion language model dLLM vs autoregressive architecture comparison`

> **Known confirmed milestones to incorporate (as of March 2026):**
> - **Feb 2025** — Claude 3.7 Sonnet + Claude Code released (quietly bundled together; considered by many developers the most impactful event of 2025)
> - **Early 2025** — DeepSeek R1 "moment": open-weight model demonstrated GPT-4-level reasoning at dramatically lower training cost; triggered an industry-wide re-evaluation of compute efficiency
> - **Early 2025** — OpenAI o3, o3-mini, o4-mini: inference-scaling / RLVR reasoning models become standard; reasoning is now a baseline expectation
> - **May 2025** — Anthropic launches Claude 4 family: Opus 4.5 and Sonnet 4.5, with strong agentic and long-context coding performance
> - **Aug 2025** — GPT-5 launched (positioned as incremental but technically substantial — context window expanded to 272K tokens)
> - **Sep 2025** — Claude Sonnet 4.5: becomes the default "workhorse" in Claude Code agentic workflows
> - **Nov 2025** — GPT-5.2-Codex: repo-scale reasoning, purpose-built for long-horizon agentic coding tasks; paired with production CLI + IDE workflows
> - **Nov 2025** — Claude Opus 4.5: positioned as top-tier for agentic tasks; SWE-bench score 74.4%
> - **Nov 2025** — Gemini 3 Pro: 1M token context, multimodal-first, embedded reasoning by default, SWE-bench 74.2%
> - **Nov 2025** — Grok 4.1: real-time reasoning with live data integration
> - **2025 (full year)** — Stack Overflow survey: 65% of developers using AI coding tools at least weekly; employment among developers aged 22–25 fell ~20% between 2022–2025
> - **Feb 2026** — Claude 4.6 Opus: 1M context window (beta), Agent Teams feature, adaptive thinking, effort controls — first Opus-class model with multi-agent orchestration built in
> - **Feb 2026** — Kimi Code / Kimi K2.5: open-source agentic coding enters the terminal with IDE integration
> - **Feb 2026** — Windsurf Wave 13: side-by-side parallel multi-agent sessions with Git worktrees — true concurrent AI development
> - **Feb–Mar 2026** — **InceptionLabs Mercury 2** ⚡ *(architectural milestone)*: First commercially available **diffusion-based reasoning LLM (dLLM)**. Unlike every major model (GPT, Claude, Gemini), which generates tokens sequentially one at a time, Mercury 2 generates and refines multiple tokens **in parallel** — like an editor revising a full draft rather than typing word by word. Achieves ~1,000 tokens/second on standard NVIDIA GPUs — **5–10× faster** than speed-optimised autoregressive models (Claude 4.5 Haiku: ~89 t/s, GPT-5 Mini: ~71 t/s) at competitive or lower cost ($0.25/$0.75 per 1M tokens). Quality benchmarks: AIME 2025: 91.1, GPQA: 73.6, LiveCodeBench: 67.3 — placing it in the Claude Haiku / GPT-5 Mini quality tier. Backed by Microsoft, Nvidia, Snowflake, Andrew Ng, and Andrej Karpathy. A companion model, **Mercury Edit**, is specifically designed for coding autocomplete, fill-in-the-middle (FIM), and next-edit suggestions. Google DeepMind was also observed experimenting with diffusion LLMs (Gemini Diffusion, May 2025) — suggesting this architectural direction is being validated at the frontier level, not just by startups.
>
> **Why Mercury 2 matters for this analysis:** In agentic coding loops, latency compounds — dozens or hundreds of inference calls per task. A 10× speed improvement doesn't just save time: it makes far more inference steps economically viable per task, fundamentally changing the depth and quality of autonomous reasoning an agent loop can perform. The autoregressive bottleneck has been a hidden ceiling on agentic AI performance; diffusion architecture removes it at the generation layer.

Use your web search results to fill any gaps and correct any errors in the above list before proceeding.

---

## The Prompt

```
I'd like to conduct a structured analysis of AI coding capability growth from 2019 (GPT-2) 
through to 2040. The current date is March 2026. Please work through the following steps 
in order. Before starting, conduct a web search to verify and extend the historical 
milestones for 2025–2026.

---

### STEP 1 — Historical Timeline (2019–March 2026)

Produce a chronological timeline of major AI coding milestones from GPT-2 onward, 
organised in 6-month intervals. For each entry include:
- The model or tool name
- The organisation responsible
- The key capability it introduced or demonstrated
- Its approximate capability level on a relative scale (you choose the scale, 
  but keep it consistent throughout)

Cover at minimum: GPT-2, GPT-3, Codex, GitHub Copilot, AlphaCode, ChatGPT, GPT-4, 
Claude, CodeLlama/WizardCoder, DeepSeek R1, Claude Code, GPT-5, Claude 4 family, 
GPT-5.2-Codex, Gemini 3 Pro, Claude 4.6 Opus, InceptionLabs Mercury 2, 
and any agentic coding tools you find in your web search.

For Mercury 2 specifically, note: it represents the first departure from the 
autoregressive architecture that has underpinned every major LLM since GPT-2. 
Mark this as an architectural inflection, not just a capability milestone.

Note any significant economic or workforce data points inline (e.g. developer 
employment trends, adoption rates).

---

### STEP 2 — Visualisation Specification

Describe (or generate, if you are able) two graphs using the data from Step 1:

  Graph A — Linear Scale
  - X-axis: time in 6-month intervals (2019 H1 → 2026 H1)
  - Y-axis: relative capability level (linear)
  - Include labelled markers at each major milestone

  Graph B — Logarithmic Scale
  - Same data as Graph A
  - Y-axis on a log scale (base 10)
  - Add a note if the log-scale curve begins to flatten, and explain what that implies

---

### STEP 3 — Extended Projection (2026–2040)

Extend both graphs to 2040 using reasoned projection. Apply a baseline growth rate 
of 20% improvement per 6-month period from 2026 H1. Add horizontal reference lines 
(with approximate dates) for the following programmer equivalence milestones:

  - Entry-Level Programmer     → anchor this at 2025 H1 as the historical baseline
  - Mid-Level Programmer
  - Senior Programmer
  - Expert Programmer / Tech Lead
  - Equivalent to a full Programming Team (5–10 engineers)
  - Equivalent to an entire Development Department (50–100 engineers)
  - Equivalent to the entire global software engineering workforce
  - Beyond current human comprehension / post-singularity

For each milestone, state the approximate projected date and the compounding 
growth rate assumptions used to reach it.

---

### STEP 4 — Inflection Point Analysis

Identify and justify at least four inflection points after 2026 where the growth 
rate would change significantly. For each inflection point provide:

  1. Approximate date
  2. The triggering event or capability breakthrough
  3. The revised growth rate after that point (expressed as % per 6-month period)
  4. The reasoning for why this rate is appropriate

Required inflection points to include and analyse:

  A. Self-Improving Codebases (~2027)
     Multi-agent systems in 2026 (e.g. Claude Agent Teams, Windsurf parallel agents) 
     already hint at this. Once AI can autonomously rewrite and optimise its own 
     architecture and training pipelines — not just its output code — what happens 
     to the feedback loop? Does first-order self-improvement give way to second-order 
     improvement (improving the improvement process itself)? Quantify the likely 
     acceleration and compare to the trajectory already visible in 2025–2026 data.

  B. Quantum Computing Integration (~2028–2029)
     Estimate the impact of practical quantum computing becoming available to AI systems. 
     Consider: quantum search, optimisation algorithms, simulation capabilities, and 
     hardware-software co-design feedback loops. How does this compound with self-improvement?

  C. Recursive Hardware Co-Design (~2030–2031)
     When AI systems can design the chips and memory architectures that run them, 
     a hardware-software feedback loop emerges. Quantify the estimated multiplier 
     effect on growth rate.

  D. Diffusion Architecture Proliferation (~2026–2027) ← NEW
     Mercury 2 (InceptionLabs, Feb/Mar 2026) is the first production reasoning model 
     built on a diffusion architecture rather than autoregressive generation. It achieves 
     ~1,000 tokens/second — 5–10× faster than equivalent autoregressive models — at 
     competitive cost. Google DeepMind has also been observed experimenting with 
     diffusion LLMs (Gemini Diffusion, May 2025).

     Analyse the following:
     - If diffusion architecture is adopted across the frontier (GPT, Claude, Gemini 
       generations), what does a 5–10× throughput multiplier do to the economics of 
       agentic coding loops? If an agent can perform 10× more inference steps per 
       dollar, how does that change effective capability even without any improvement 
       in model intelligence?
     - Diffusion removes the serial token-by-token bottleneck. Does this represent 
       an inflection point in capability comparable to the shift from GPT-3 to GPT-4? 
       Or is it primarily a latency/cost improvement that compounds the existing trajectory?
     - At what point does diffusion-speed inference, combined with self-improving 
       codebases (Point A), create a qualitatively different feedback loop — one where 
       the self-improvement cycle can run so fast it compresses months of capability 
       gain into days?
     - Assign an estimated growth rate multiplier for the period in which diffusion 
       architecture becomes the dominant production standard (estimate: 2026–2028).

  E. Your Choice
     Identify any additional inflection point you consider significant based on 
     your web search results and your own analysis (e.g. neuromorphic computing, 
     biological computing substrates, multi-model consensus systems, 
     AGI-level general reasoning applied to code).

---

### STEP 5 — Revised Growth Model Summary

Compile all phases into a single summary table:

  | Phase | Period | Growth Rate / 6 months | Key Trigger |
  |-------|--------|------------------------|-------------|
  | 1     | ...    | ...%                   | ...         |
  | 2     | ...    | ...%                   | ...         |
  | ...   | ...    | ...                    | ...         |

Then answer: At the projected rates, what is the earliest plausible date at which 
AI coding capability reaches a level equivalent to the **entire global software 
engineering workforce working simultaneously**? Show your working.

---

### STEP 6 — Cross-Domain Extrapolation

The analysis above is scoped to coding. Briefly but substantively address:

  1. If a similar exponential trajectory applies to biology and biotech 
     (already showing signs: AlphaFold, AI drug discovery pipelines), what does 
     the convergence of AI-accelerated biology AND AI-accelerated coding look like?

  2. What happens when biological neural interfaces (brain-computer interfaces) 
     are added to this picture? Does the concept of "AI talking to a human" even 
     remain a meaningful distinction by 2035?

  3. What is the earliest plausible date at which a "technological singularity" 
     — a point beyond which prediction becomes meaningless — could occur based 
     on this compounded multi-domain model? Has the timeline moved closer 
     since the 2025 acceleration?

---

### STEP 7 — Honest Uncertainty & Limiting Factors

For each of the growth phases in your table (Step 5), identify the most significant 
factors that could slow or cap the projected growth rate. Consider:
  - Physical hardware limits (heat, speed of light, quantum decoherence)
  - Energy and resource constraints (data centre power demand is already a geopolitical issue)
  - Validation and verification complexity (who checks the AI's work when humans can't?)
  - Regulatory and geopolitical friction
  - Economic incentive misalignment
  - Unknown unknowns — the "unknown unknowns" problem

Be direct: where does this model likely break down, and what single factor, 
if you had to pick one, is most likely to falsify the projection?

---

### STEP 8 — Deliverable Summary

Produce two summaries:

  Summary A — For a non-technical reader (≤300 words):
  - Where AI coding stands today (March 2026)
  - The most important thing that changes in 2027
  - Why the post-2028 numbers become almost incomprehensible
  - What this means for someone entering the workforce today
  - One honest caveat about uncertainty

  Summary B — For a developer audience (≤300 words):
  - The benchmark trajectory (SWE-bench, HumanEval, or equivalent) from 2023 to 2026 
    and what the extrapolated score looks like by 2030
  - The shift from "model as tool" to "model as autonomous engineering team"
  - What skills remain genuinely human-irreplaceable through 2030, and which do not
  - One concrete recommendation for a developer reading this in March 2026
```

---

## Usage Notes

- **For code-generating AIs** (Claude, ChatGPT, Gemini, etc.): Ask the AI to produce the graphs as interactive React/HTML components using Recharts or D3. Request two separate components — one for the historical period (2019–2026) and one for the full projection (2019–2040).
- **For text-only AIs**: Ask for a structured data table you can paste into a spreadsheet, then generate the graphs separately.
- **Always instruct the AI to run a web search first** — the 2025–2026 period moved extremely fast and any model without live search will have outdated data.

**Suggested follow-up prompts:**
- *"Based on the Feb 2026 SWE-bench scores (Claude 4.5 Opus: 74.4%, Gemini 3 Pro: 74.2%), extrapolate when we would hit 95%+ and what that threshold represents practically."*
- *"The 65% weekly adoption rate among developers in 2025 — model how this changes the economics of software teams by 2028."*
- *"Re-run the projection assuming quantum computing is delayed to 2032. How much does this shift the singularity estimate?"*
- *"Generate a version of Step 8 Summary A aimed at a 16-year-old deciding whether to study computer science in 2026."*
- *"What is the Eliza-to-GPT-5 equivalent jump likely to look like from a 2040 perspective?"*
- *"Mercury 2 runs at 1,000 tokens/second vs 89 tokens/second for Claude Haiku. If diffusion architecture scales to frontier-quality models by 2027, model the compounding effect on agentic loop throughput and what that means for the self-improvement timeline in Step 4A."*
- *"Compare the architectural shift from autoregressive to diffusion LLMs to historical computing paradigm shifts (e.g. CISC→RISC, CPU→GPU). How long did those transitions take, and what does that imply for the diffusion adoption timeline?"*

---

## Background

This prompt was developed through a live exploratory conversation between a human (near retirement, who witnessed the full arc from ELIZA in the 1960s to the agentic AI tools of 2026) and an AI assistant named **Sage**. The conversation iterated through historical timelines, visualisation refinement, self-improvement inflection modelling, quantum acceleration, cross-domain biological convergence, and the nature of human-AI interaction as capabilities diverge.

The original conversation used March 2025 as its baseline. This prompt has been updated to **March 2026**, incorporating the dramatic acceleration observed across 2025 — particularly the emergence of agentic coding workflows (Claude Code, Windsurf, Cursor), the DeepSeek efficiency breakthrough, and the arrival of multi-agent parallel development environments.

**Original three-phase model (March 2025 baseline):**

| Phase | Period | Growth Rate / 6 months | Trigger |
|---|---|---|---|
| Baseline | 2025–2027 H1 | 20% | Human-guided AI improvement |
| Self-Improvement | 2027 H1–2028 H2 | 120% | Self-modifying codebases |
| Quantum Acceleration | 2028 H2 onward | 350% | Practical quantum integration |

**March 2026 observation:** The 2025 data suggests the baseline growth rate of 20% per 6-month period may already be a significant *underestimate* for the 2025–2027 phase. SWE-bench scores moved from approximately 12% (GPT-4, 2023) to 74%+ (Claude 4.5 Opus / Gemini 3 Pro, late 2025) — a ~6× improvement in under 3 years, compressing what the original model projected for 2027–2028 into a much tighter window. The AI instructed to run this analysis should consider whether the self-improvement inflection point has effectively *already begun* with the arrival of multi-agent, self-directing coding systems in 2025–2026.

**Mercury 2 — Architectural wildcard (March 2026):** The original model assumed all future improvements would occur within the autoregressive paradigm (better training, more parameters, longer context, smarter reasoning). The arrival of InceptionLabs Mercury 2 introduces a variable the original model did not account for: **a fundamentally different generation architecture**. If diffusion-based LLMs scale to frontier quality while maintaining their 5–10× speed advantage, the effective throughput of agentic systems could jump by an order of magnitude without any improvement in raw model intelligence. Combined with self-improving codebases, this could compress the 2027–2028 inflection into 2026–2027. The updated model should treat diffusion architecture adoption as a potential **hidden accelerant** that could pull all subsequent inflection points earlier by 12–18 months.

> *"Mind-boggling trajectory is an understatement."* — Human participant, March 2025
>
> *By March 2026, the trajectory had already exceeded the original model's projections for 2027.* — Updated note
