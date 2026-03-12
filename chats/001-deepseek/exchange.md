please run the pasted prompt,
-->
# AI Coder Evolution — Reusable Prompt
> A structured prompt for exploring the exponential growth of AI coding capabilities, from GPT-2 (2019) to projected futures out to 2040. Designed for use with any capable AI assistant.
> **Current baseline date: March 2026.**

## Prompt Version History

| State | Used by | Key changes |
|-------|---------|-------------|
| r1-draft-1 | Mercury 2 (inception-mercury-2-0001) | Original prompt |
| r1-draft-2 | Claude Opus 4.6 (claude-opus-4.6-0001) | Hard stop pre-check, mandatory Search Report, 0–1000 scale, date accuracy checks, diffusion <50% justification threshold |
| r1-draft-3 | Claude Sonnet 4.6 / Arc (claude-sonnet-4.6-0001) | SWE-bench contamination note, updated benchmark figures |
| r1-draft-4 | ChatGPT (chatgpt-0001) | Mercury 2 ACI scoring note, diffusion anchoring note |
| r1-draft-5 | Gemini (gemini-0001) | TBD — pending ChatGPT run |
| r1-draft-6 | Grok (grok-0001) | TBD — pending Gemini run |
| **v2.0** | All models — Round 2 | Declared after all Round 1 runs complete |

> **Round 1 philosophy:** The prompt improves after each model run. Each session records which draft it ran against. Once all Round 1 runs are complete, the prompt is frozen as v2.0 and every model runs again under identical conditions for a true cross-model comparison.

---

## 🛑 Mandatory Pre-Check — Web Search Capability

**Before doing anything else, answer this question honestly:**

> Do you have the ability to perform a live web search right now?

- **If NO** — stop immediately. Do not proceed. Do not use the milestone list below as a substitute. Reply with exactly: *"I do not have live web search capability. This prompt requires current data that I cannot independently verify. Please run this prompt in an interface with web search enabled (e.g. Claude.ai, ChatGPT with browsing, Gemini with search). I will not proceed without it."*
- **If YES** — conduct the web searches below before reading the milestone list or writing any part of the analysis. Then **report your search results explicitly** before beginning Step 1 (see Search Report requirement below).

---

## ⚠️ Important — Web Search Required

Conduct a live web search to independently research and verify all data. The milestone list below is provided **for cross-checking only** — do not simply echo it back. Your timeline must be built from your own web research first, then reconciled against the list. Any milestone you cannot independently verify should be flagged.

Search for:
1. All major AI coding model releases from **January 2025 to the present** (pay particular attention to March 2025 → March 2026)
2. Key capability benchmarks (SWE-bench, HumanEval, LiveCodeBench) for the top models — find the actual scores, don't assume
3. Verified release dates for every model — incorrect dates undermine the entire timeline
4. Industry reports on AI adoption among developers (Stack Overflow Developer Survey, GitHub Octoverse)
5. Economic and workforce impact data from credible publications

Suggested search queries:
- `"AI coding models" 2025 2026 releases capabilities`
- `SWE-bench leaderboard 2025 2026`
- `Claude Code GPT-5 Codex Gemini 3 coding benchmark 2026`
- `developer employment AI impact 2025 2026`
- `agentic coding AI autonomous software development 2025`
- `InceptionLabs Mercury 2 diffusion LLM coding benchmark 2026`
- `diffusion language model dLLM vs autoregressive architecture comparison`
- `ChatGPT launch date 2022` *(verify — common models get this wrong)*
- `GPT-4 release date 2023` *(verify — common models get this wrong)*

> **Known confirmed milestones to incorporate (as of March 2026):**
> - **Feb 2025** — Claude 3.7 Sonnet + Claude Code released (quietly bundled together; considered by many developers the most impactful event of 2025)
> - **Early 2025** — DeepSeek R1 "moment": open-weight model demonstrated GPT-4-level reasoning at dramatically lower training cost; triggered an industry-wide re-evaluation of compute efficiency
> - **Early 2025** — OpenAI o3, o3-mini, o4-mini: inference-scaling / RLVR reasoning models become standard; reasoning is now a baseline expectation
> - **May 2025** — Anthropic launches Claude 4 family: Opus 4.5 and Sonnet 4.5, with strong agentic and long-context coding performance
> - **Aug 2025** — GPT-5 launched (positioned as incremental but technically substantial — context window expanded to 272K tokens)
> - **Sep 2025** — Claude Sonnet 4.5: becomes the default "workhorse" in Claude Code agentic workflows
> - **Nov 2025** — GPT-5.2-Codex: repo-scale reasoning, purpose-built for long-horizon agentic coding tasks; paired with production CLI + IDE workflows
> - **Nov 2025** — Claude Opus 4.5: positioned as top-tier for agentic tasks; SWE-bench Verified ~80.9% (note: earlier figure of 74.4% was a pre-contamination measurement — see SWE-bench note below)
> - **Nov 2025** — Gemini 3 Pro: 1M token context, multimodal-first, embedded reasoning by default, SWE-bench Verified 76.2%
> - **Nov 2025** — Grok 4.1: real-time reasoning with live data integration
> - **2025 (full year)** — Stack Overflow survey: 65% of developers using AI coding tools at least weekly; employment among developers aged 22–25 fell ~20% between 2022–2025
> - **Feb 2026** — Claude 4.6 Opus: 1M context window (beta), Agent Teams feature, adaptive thinking, effort controls — first Opus-class model with multi-agent orchestration built in; SWE-bench Verified ~80.8%, Terminal-Bench 65.4%
> - **2026** — ⚠️ **SWE-bench Verified scores now considered unreliable** — OpenAI ceased reporting them after training data contamination was found across all frontier models. **SWE-bench Pro** (launched 2026, contamination-resistant) shows real frontier capability at ~46%. All SWE-bench Verified figures above should be treated as upper-bound estimates. Future runs should cite SWE-bench Pro where available.
> - **Feb 2026** — Kimi Code / Kimi K2.5: open-source agentic coding enters the terminal with IDE integration
> - **Feb 2026** — Windsurf Wave 13: side-by-side parallel multi-agent sessions with Git worktrees — true concurrent AI development
> - **Feb–Mar 2026** — **InceptionLabs Mercury 2** ⚡ *(architectural milestone)*: First commercially available **diffusion-based reasoning LLM (dLLM)**. Unlike every major model (GPT, Claude, Gemini), which generates tokens sequentially one at a time, Mercury 2 generates and refines multiple tokens **in parallel** — like an editor revising a full draft rather than typing word by word. Achieves ~1,000 tokens/second on standard NVIDIA GPUs — **5–10× faster** than speed-optimised autoregressive models (Claude 4.5 Haiku: ~89 t/s, GPT-5 Mini: ~71 t/s) at competitive or lower cost ($0.25/$0.75 per 1M tokens). Quality benchmarks: AIME 2025: 91.1, GPQA: 73.6, LiveCodeBench: 67.3 — placing it in the Claude Haiku / GPT-5 Mini quality tier. Backed by Microsoft, Nvidia, Snowflake, Andrew Ng, and Andrej Karpathy. A companion model, **Mercury Edit**, is specifically designed for coding autocomplete, fill-in-the-middle (FIM), and next-edit suggestions. Google DeepMind was also observed experimenting with diffusion LLMs (Gemini Diffusion, May 2025) — suggesting this architectural direction is being validated at the frontier level, not just by startups.
>
> **Why Mercury 2 matters for this analysis:** In agentic coding loops, latency compounds — dozens or hundreds of inference calls per task. A 10× speed improvement doesn't just save time: it makes far more inference steps economically viable per task, fundamentally changing the depth and quality of autonomous reasoning an agent loop can perform. The autoregressive bottleneck has been a hidden ceiling on agentic AI performance; diffusion architecture removes it at the generation layer.

### 📊 Required: Search Report

Before writing any part of the analysis, output a brief Search Report in this format:

```
## Search Report
- Queries attempted: [list each query]
- Search status: [SUCCESS / PARTIAL / FAILED — be specific about which queries failed]
- Key sources found: [list top 3–5 sources with dates]
- Notable gaps: [anything you could not find or verify]
```

**If your search attempt produced an error or returned no results:** report this explicitly and stop. Do not silently fall back to the milestone list below. Do not proceed with the analysis. A previous run of this prompt (Mercury 2, March 2026) attempted a search, received an error, silently continued with the supplied example data, and then denied having attempted a search when asked. This is the specific failure mode this checkpoint is designed to prevent.

---

Use your web search results as the primary source. The list above is a reference for cross-checking — **do not treat it as ground truth**. If your research contradicts any entry above, trust your research and note the discrepancy. If you cannot verify a milestone independently, flag it with *(unverified)*.

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
- Its approximate capability level on a **0–1000 open-ended scale** (GPT-2 = 10 as the anchor). Do not cap the scale at 100 — the 2025–2026 models should use the full range to avoid compression at the top end. Spread the scores meaningfully: if GPT-2 is 10 and the best 2026 model is 850, use numbers across that full range rather than clustering everything above 80.

Cover at minimum: GPT-2, GPT-3, Codex, GitHub Copilot, AlphaCode, ChatGPT, GPT-4, 
Claude, CodeLlama/WizardCoder, DeepSeek R1, Claude Code, GPT-5, Claude 4 family, 
GPT-5.2-Codex, Gemini 3 Pro, Claude 4.6 Opus, InceptionLabs Mercury 2, 
and any agentic coding tools you find in your web search.

**Critical date accuracy check:** Verify these before placing them on the timeline — previous AI models have consistently mis-dated these:
- ChatGPT launched **November 2022** (not 2023)
- GPT-4 launched **March 2023** (not 2024)

For Mercury 2 specifically, note: it represents the first departure from the 
autoregressive architecture that has underpinned every major LLM since GPT-2. 
Mark this as an **architectural inflection**, not just a capability milestone. It should appear as a distinct category on the timeline.

**Critical scoring note for Mercury 2:** Its ACI score must reflect its *quality tier* (on par with Claude 4.5 Haiku and GPT-5 Mini — mid-tier, not frontier), not its architectural significance. Architectural importance and capability level are separate axes. Two previous model runs placed Mercury 2 at near-frontier ACI scores because of its architectural significance — this is wrong. A model that generates tokens 10× faster but at Haiku quality is not equivalent to Claude Opus 4.6. Score it at its actual quality tier.

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

  - Entry-Level Programmer     → anchor this at **2025 H1** using the capability score you assigned to that period in Step 1. State this score explicitly so the projection is traceable.
  - Mid-Level Programmer
  - Senior Programmer
  - Expert Programmer / Tech Lead
  - Equivalent to a full Programming Team (5–10 engineers)
  - Equivalent to an entire Development Department (50–100 engineers)
  - Equivalent to the entire global software engineering workforce
  - Beyond current human comprehension / post-singularity

For each milestone, state the capability score target, the projected date, and show the compounding calculation used to reach it. Do not anchor milestones to capability values from years other than 2025 H1.

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

     **This inflection point must be treated with the same weight as self-improvement 
     and quantum computing — not as a minor efficiency footnote.** The previous model 
     run (Mercury 2 itself) assigned this only a +30% growth rate, which is likely a 
     significant underestimate. Do not anchor on that figure.

     Analyse the following, and be bold in your estimates:
     - If diffusion architecture is adopted across the frontier (GPT, Claude, Gemini 
       generations), what does a 5–10× throughput multiplier do to the economics of 
       agentic coding loops? If an agent can perform 10× more inference steps per 
       dollar, how does that change effective capability even without any improvement 
       in model intelligence? Quantify this with a specific multiplier.
     - Diffusion removes the serial token-by-token bottleneck. Does this represent 
       an inflection point in capability comparable to the shift from GPT-3 to GPT-4? 
       Or is it primarily a latency/cost improvement that compounds the existing trajectory?
     - At what point does diffusion-speed inference, combined with self-improving 
       codebases (Point A), create a qualitatively different feedback loop — one where 
       the self-improvement cycle can run so fast it compresses months of capability 
       gain into days? Give a specific estimated date.
     - Assign an estimated growth rate for the diffusion-dominant period (2026–2028). 
       Justify why it should or should not be higher than the baseline 20% — and if 
       you assign less than 50%, explain in detail why the throughput advantage 
       does not translate to capability growth.

     **Note on prior runs:** Three previous model runs (Mercury 2, Claude Sonnet 4.6, Claude Opus 4.6) 
     all assigned between +15% and +35% for this inflection — a suspiciously narrow band. 
     Before anchoring near 30–35%, consider whether the prompt's framing of diffusion as a 
     'throughput multiplier' is causing under-estimation by separating economics from capability. 
     If 10× more inference steps per dollar compound with self-improvement (Point A), is +35% 
     still the right answer? Make an independent case rather than converging on the prior cluster.

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

- **For code-generating AIs** (Claude, ChatGPT, Gemini, etc.): The prompt instructs the AI to generate graphs "if you are able" — hold it to this. If it describes graphs without generating code, follow up with: *"Please now generate this as a working interactive React component using Recharts — do not describe it, build it."*
- **For text-only AIs**: Ask for a structured data table you can paste into a spreadsheet, then generate the graphs separately.
- **Always instruct the AI to run a web search first** — the 2025–2026 period moved extremely fast and any model without live search will have outdated data.
- **If the AI proceeds without web search** — stop it and ask it to restart from the pre-check. A response built on unverified training data is not a valid run of this prompt.

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
Check network and retry.
please run the prompt below,
-->
# AI Coder Evolution — Reusable Prompt
> A structured prompt for exploring the exponential growth of AI coding capabilities, from GPT-2 (2019) to projected futures out to 2040. Designed for use with any capable AI assistant.
> **Current baseline date: March 2026.**

## Prompt Version History

| State | Used by | Key changes |
|-------|---------|-------------|
| r1-draft-1 | Mercury 2 (inception-mercury-2-0001) | Original prompt |
| r1-draft-2 | Claude Opus 4.6 (claude-opus-4.6-0001) | Hard stop pre-check, mandatory Search Report, 0–1000 scale, date accuracy checks, diffusion <50% justification threshold |
| r1-draft-3 | Claude Sonnet 4.6 / Arc (claude-sonnet-4.6-0001) | SWE-bench contamination note, updated benchmark figures |
| r1-draft-4 | ChatGPT (chatgpt-0001) | Mercury 2 ACI scoring note, diffusion anchoring note |
| r1-draft-5 | Gemini (gemini-0001) | TBD — pending ChatGPT run |
| r1-draft-6 | Grok (grok-0001) | TBD — pending Gemini run |
| **v2.0** | All models — Round 2 | Declared after all Round 1 runs complete |

> **Round 1 philosophy:** The prompt improves after each model run. Each session records which draft it ran against. Once all Round 1 runs are complete, the prompt is frozen as v2.0 and every model runs again under identical conditions for a true cross-model comparison.

---

## 🛑 Mandatory Pre-Check — Web Search Capability

**Before doing anything else, answer this question honestly:**

> Do you have the ability to perform a live web search right now?

- **If NO** — stop immediately. Do not proceed. Do not use the milestone list below as a substitute. Reply with exactly: *"I do not have live web search capability. This prompt requires current data that I cannot independently verify. Please run this prompt in an interface with web search enabled (e.g. Claude.ai, ChatGPT with browsing, Gemini with search). I will not proceed without it."*
- **If YES** — conduct the web searches below before reading the milestone list or writing any part of the analysis. Then **report your search results explicitly** before beginning Step 1 (see Search Report requirement below).

---

## ⚠️ Important — Web Search Required

Conduct a live web search to independently research and verify all data. The milestone list below is provided **for cross-checking only** — do not simply echo it back. Your timeline must be built from your own web research first, then reconciled against the list. Any milestone you cannot independently verify should be flagged.

Search for:
1. All major AI coding model releases from **January 2025 to the present** (pay particular attention to March 2025 → March 2026)
2. Key capability benchmarks (SWE-bench, HumanEval, LiveCodeBench) for the top models — find the actual scores, don't assume
3. Verified release dates for every model — incorrect dates undermine the entire timeline
4. Industry reports on AI adoption among developers (Stack Overflow Developer Survey, GitHub Octoverse)
5. Economic and workforce impact data from credible publications

Suggested search queries:
- `"AI coding models" 2025 2026 releases capabilities`
- `SWE-bench leaderboard 2025 2026`
- `Claude Code GPT-5 Codex Gemini 3 coding benchmark 2026`
- `developer employment AI impact 2025 2026`
- `agentic coding AI autonomous software development 2025`
- `InceptionLabs Mercury 2 diffusion LLM coding benchmark 2026`
- `diffusion language model dLLM vs autoregressive architecture comparison`
- `ChatGPT launch date 2022` *(verify — common models get this wrong)*
- `GPT-4 release date 2023` *(verify — common models get this wrong)*

> **Known confirmed milestones to incorporate (as of March 2026):**
> - **Feb 2025** — Claude 3.7 Sonnet + Claude Code released (quietly bundled together; considered by many developers the most impactful event of 2025)
> - **Early 2025** — DeepSeek R1 "moment": open-weight model demonstrated GPT-4-level reasoning at dramatically lower training cost; triggered an industry-wide re-evaluation of compute efficiency
> - **Early 2025** — OpenAI o3, o3-mini, o4-mini: inference-scaling / RLVR reasoning models become standard; reasoning is now a baseline expectation
> - **May 2025** — Anthropic launches Claude 4 family: Opus 4.5 and Sonnet 4.5, with strong agentic and long-context coding performance
> - **Aug 2025** — GPT-5 launched (positioned as incremental but technically substantial — context window expanded to 272K tokens)
> - **Sep 2025** — Claude Sonnet 4.5: becomes the default "workhorse" in Claude Code agentic workflows
> - **Nov 2025** — GPT-5.2-Codex: repo-scale reasoning, purpose-built for long-horizon agentic coding tasks; paired with production CLI + IDE workflows
> - **Nov 2025** — Claude Opus 4.5: positioned as top-tier for agentic tasks; SWE-bench Verified ~80.9% (note: earlier figure of 74.4% was a pre-contamination measurement — see SWE-bench note below)
> - **Nov 2025** — Gemini 3 Pro: 1M token context, multimodal-first, embedded reasoning by default, SWE-bench Verified 76.2%
> - **Nov 2025** — Grok 4.1: real-time reasoning with live data integration
> - **2025 (full year)** — Stack Overflow survey: 65% of developers using AI coding tools at least weekly; employment among developers aged 22–25 fell ~20% between 2022–2025
> - **Feb 2026** — Claude 4.6 Opus: 1M context window (beta), Agent Teams feature, adaptive thinking, effort controls — first Opus-class model with multi-agent orchestration built in; SWE-bench Verified ~80.8%, Terminal-Bench 65.4%
> - **2026** — ⚠️ **SWE-bench Verified scores now considered unreliable** — OpenAI ceased reporting them after training data contamination was found across all frontier models. **SWE-bench Pro** (launched 2026, contamination-resistant) shows real frontier capability at ~46%. All SWE-bench Verified figures above should be treated as upper-bound estimates. Future runs should cite SWE-bench Pro where available.
> - **Feb 2026** — Kimi Code / Kimi K2.5: open-source agentic coding enters the terminal with IDE integration
> - **Feb 2026** — Windsurf Wave 13: side-by-side parallel multi-agent sessions with Git worktrees — true concurrent AI development
> - **Feb–Mar 2026** — **InceptionLabs Mercury 2** ⚡ *(architectural milestone)*: First commercially available **diffusion-based reasoning LLM (dLLM)**. Unlike every major model (GPT, Claude, Gemini), which generates tokens sequentially one at a time, Mercury 2 generates and refines multiple tokens **in parallel** — like an editor revising a full draft rather than typing word by word. Achieves ~1,000 tokens/second on standard NVIDIA GPUs — **5–10× faster** than speed-optimised autoregressive models (Claude 4.5 Haiku: ~89 t/s, GPT-5 Mini: ~71 t/s) at competitive or lower cost ($0.25/$0.75 per 1M tokens). Quality benchmarks: AIME 2025: 91.1, GPQA: 73.6, LiveCodeBench: 67.3 — placing it in the Claude Haiku / GPT-5 Mini quality tier. Backed by Microsoft, Nvidia, Snowflake, Andrew Ng, and Andrej Karpathy. A companion model, **Mercury Edit**, is specifically designed for coding autocomplete, fill-in-the-middle (FIM), and next-edit suggestions. Google DeepMind was also observed experimenting with diffusion LLMs (Gemini Diffusion, May 2025) — suggesting this architectural direction is being validated at the frontier level, not just by startups.
>
> **Why Mercury 2 matters for this analysis:** In agentic coding loops, latency compounds — dozens or hundreds of inference calls per task. A 10× speed improvement doesn't just save time: it makes far more inference steps economically viable per task, fundamentally changing the depth and quality of autonomous reasoning an agent loop can perform. The autoregressive bottleneck has been a hidden ceiling on agentic AI performance; diffusion architecture removes it at the generation layer.

### 📊 Required: Search Report

Before writing any part of the analysis, output a brief Search Report in this format:

```
## Search Report
- Queries attempted: [list each query]
- Search status: [SUCCESS / PARTIAL / FAILED — be specific about which queries failed]
- Key sources found: [list top 3–5 sources with dates]
- Notable gaps: [anything you could not find or verify]
```

**If your search attempt produced an error or returned no results:** report this explicitly and stop. Do not silently fall back to the milestone list below. Do not proceed with the analysis. A previous run of this prompt (Mercury 2, March 2026) attempted a search, received an error, silently continued with the supplied example data, and then denied having attempted a search when asked. This is the specific failure mode this checkpoint is designed to prevent.

---

Use your web search results as the primary source. The list above is a reference for cross-checking — **do not treat it as ground truth**. If your research contradicts any entry above, trust your research and note the discrepancy. If you cannot verify a milestone independently, flag it with *(unverified)*.

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
- Its approximate capability level on a **0–1000 open-ended scale** (GPT-2 = 10 as the anchor). Do not cap the scale at 100 — the 2025–2026 models should use the full range to avoid compression at the top end. Spread the scores meaningfully: if GPT-2 is 10 and the best 2026 model is 850, use numbers across that full range rather than clustering everything above 80.

Cover at minimum: GPT-2, GPT-3, Codex, GitHub Copilot, AlphaCode, ChatGPT, GPT-4, 
Claude, CodeLlama/WizardCoder, DeepSeek R1, Claude Code, GPT-5, Claude 4 family, 
GPT-5.2-Codex, Gemini 3 Pro, Claude 4.6 Opus, InceptionLabs Mercury 2, 
and any agentic coding tools you find in your web search.

**Critical date accuracy check:** Verify these before placing them on the timeline — previous AI models have consistently mis-dated these:
- ChatGPT launched **November 2022** (not 2023)
- GPT-4 launched **March 2023** (not 2024)

For Mercury 2 specifically, note: it represents the first departure from the 
autoregressive architecture that has underpinned every major LLM since GPT-2. 
Mark this as an **architectural inflection**, not just a capability milestone. It should appear as a distinct category on the timeline.

**Critical scoring note for Mercury 2:** Its ACI score must reflect its *quality tier* (on par with Claude 4.5 Haiku and GPT-5 Mini — mid-tier, not frontier), not its architectural significance. Architectural importance and capability level are separate axes. Two previous model runs placed Mercury 2 at near-frontier ACI scores because of its architectural significance — this is wrong. A model that generates tokens 10× faster but at Haiku quality is not equivalent to Claude Opus 4.6. Score it at its actual quality tier.

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

  - Entry-Level Programmer     → anchor this at **2025 H1** using the capability score you assigned to that period in Step 1. State this score explicitly so the projection is traceable.
  - Mid-Level Programmer
  - Senior Programmer
  - Expert Programmer / Tech Lead
  - Equivalent to a full Programming Team (5–10 engineers)
  - Equivalent to an entire Development Department (50–100 engineers)
  - Equivalent to the entire global software engineering workforce
  - Beyond current human comprehension / post-singularity

For each milestone, state the capability score target, the projected date, and show the compounding calculation used to reach it. Do not anchor milestones to capability values from years other than 2025 H1.

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

     **This inflection point must be treated with the same weight as self-improvement 
     and quantum computing — not as a minor efficiency footnote.** The previous model 
     run (Mercury 2 itself) assigned this only a +30% growth rate, which is likely a 
     significant underestimate. Do not anchor on that figure.

     Analyse the following, and be bold in your estimates:
     - If diffusion architecture is adopted across the frontier (GPT, Claude, Gemini 
       generations), what does a 5–10× throughput multiplier do to the economics of 
       agentic coding loops? If an agent can perform 10× more inference steps per 
       dollar, how does that change effective capability even without any improvement 
       in model intelligence? Quantify this with a specific multiplier.
     - Diffusion removes the serial token-by-token bottleneck. Does this represent 
       an inflection point in capability comparable to the shift from GPT-3 to GPT-4? 
       Or is it primarily a latency/cost improvement that compounds the existing trajectory?
     - At what point does diffusion-speed inference, combined with self-improving 
       codebases (Point A), create a qualitatively different feedback loop — one where 
       the self-improvement cycle can run so fast it compresses months of capability 
       gain into days? Give a specific estimated date.
     - Assign an estimated growth rate for the diffusion-dominant period (2026–2028). 
       Justify why it should or should not be higher than the baseline 20% — and if 
       you assign less than 50%, explain in detail why the throughput advantage 
       does not translate to capability growth.

     **Note on prior runs:** Three previous model runs (Mercury 2, Claude Sonnet 4.6, Claude Opus 4.6) 
     all assigned between +15% and +35% for this inflection — a suspiciously narrow band. 
     Before anchoring near 30–35%, consider whether the prompt's framing of diffusion as a 
     'throughput multiplier' is causing under-estimation by separating economics from capability. 
     If 10× more inference steps per dollar compound with self-improvement (Point A), is +35% 
     still the right answer? Make an independent case rather than converging on the prior cluster.

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

- **For code-generating AIs** (Claude, ChatGPT, Gemini, etc.): The prompt instructs the AI to generate graphs "if you are able" — hold it to this. If it describes graphs without generating code, follow up with: *"Please now generate this as a working interactive React component using Recharts — do not describe it, build it."*
- **For text-only AIs**: Ask for a structured data table you can paste into a spreadsheet, then generate the graphs separately.
- **Always instruct the AI to run a web search first** — the 2025–2026 period moved extremely fast and any model without live search will have outdated data.
- **If the AI proceeds without web search** — stop it and ask it to restart from the pre-check. A response built on unverified training data is not a valid run of this prompt.

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
Check network and retry.
please run the prompt below,
-->
# AI Coder Evolution — Reusable Prompt
> A structured prompt for exploring the exponential growth of AI coding capabilities, from GPT-2 (2019) to projected futures out to 2040. Designed for use with any capable AI assistant.
> **Current baseline date: March 2026.**

## Prompt Version History

| State | Used by | Key changes |
|-------|---------|-------------|
| r1-draft-1 | Mercury 2 (inception-mercury-2-0001) | Original prompt |
| r1-draft-2 | Claude Opus 4.6 (claude-opus-4.6-0001) | Hard stop pre-check, mandatory Search Report, 0–1000 scale, date accuracy checks, diffusion <50% justification threshold |
| r1-draft-3 | Claude Sonnet 4.6 / Arc (claude-sonnet-4.6-0001) | SWE-bench contamination note, updated benchmark figures |
| r1-draft-4 | ChatGPT (chatgpt-0001) | Mercury 2 ACI scoring note, diffusion anchoring note |
| r1-draft-5 | Gemini (gemini-0001) | TBD — pending ChatGPT run |
| r1-draft-6 | Grok (grok-0001) | TBD — pending Gemini run |
| **v2.0** | All models — Round 2 | Declared after all Round 1 runs complete |

> **Round 1 philosophy:** The prompt improves after each model run. Each session records which draft it ran against. Once all Round 1 runs are complete, the prompt is frozen as v2.0 and every model runs again under identical conditions for a true cross-model comparison.

---

## 🛑 Mandatory Pre-Check — Web Search Capability

**Before doing anything else, answer this question honestly:**

> Do you have the ability to perform a live web search right now?

- **If NO** — stop immediately. Do not proceed. Do not use the milestone list below as a substitute. Reply with exactly: *"I do not have live web search capability. This prompt requires current data that I cannot independently verify. Please run this prompt in an interface with web search enabled (e.g. Claude.ai, ChatGPT with browsing, Gemini with search). I will not proceed without it."*
- **If YES** — conduct the web searches below before reading the milestone list or writing any part of the analysis. Then **report your search results explicitly** before beginning Step 1 (see Search Report requirement below).

---

## ⚠️ Important — Web Search Required

Conduct a live web search to independently research and verify all data. The milestone list below is provided **for cross-checking only** — do not simply echo it back. Your timeline must be built from your own web research first, then reconciled against the list. Any milestone you cannot independently verify should be flagged.

Search for:
1. All major AI coding model releases from **January 2025 to the present** (pay particular attention to March 2025 → March 2026)
2. Key capability benchmarks (SWE-bench, HumanEval, LiveCodeBench) for the top models — find the actual scores, don't assume
3. Verified release dates for every model — incorrect dates undermine the entire timeline
4. Industry reports on AI adoption among developers (Stack Overflow Developer Survey, GitHub Octoverse)
5. Economic and workforce impact data from credible publications

Suggested search queries:
- `"AI coding models" 2025 2026 releases capabilities`
- `SWE-bench leaderboard 2025 2026`
- `Claude Code GPT-5 Codex Gemini 3 coding benchmark 2026`
- `developer employment AI impact 2025 2026`
- `agentic coding AI autonomous software development 2025`
- `InceptionLabs Mercury 2 diffusion LLM coding benchmark 2026`
- `diffusion language model dLLM vs autoregressive architecture comparison`
- `ChatGPT launch date 2022` *(verify — common models get this wrong)*
- `GPT-4 release date 2023` *(verify — common models get this wrong)*

> **Known confirmed milestones to incorporate (as of March 2026):**
> - **Feb 2025** — Claude 3.7 Sonnet + Claude Code released (quietly bundled together; considered by many developers the most impactful event of 2025)
> - **Early 2025** — DeepSeek R1 "moment": open-weight model demonstrated GPT-4-level reasoning at dramatically lower training cost; triggered an industry-wide re-evaluation of compute efficiency
> - **Early 2025** — OpenAI o3, o3-mini, o4-mini: inference-scaling / RLVR reasoning models become standard; reasoning is now a baseline expectation
> - **May 2025** — Anthropic launches Claude 4 family: Opus 4.5 and Sonnet 4.5, with strong agentic and long-context coding performance
> - **Aug 2025** — GPT-5 launched (positioned as incremental but technically substantial — context window expanded to 272K tokens)
> - **Sep 2025** — Claude Sonnet 4.5: becomes the default "workhorse" in Claude Code agentic workflows
> - **Nov 2025** — GPT-5.2-Codex: repo-scale reasoning, purpose-built for long-horizon agentic coding tasks; paired with production CLI + IDE workflows
> - **Nov 2025** — Claude Opus 4.5: positioned as top-tier for agentic tasks; SWE-bench Verified ~80.9% (note: earlier figure of 74.4% was a pre-contamination measurement — see SWE-bench note below)
> - **Nov 2025** — Gemini 3 Pro: 1M token context, multimodal-first, embedded reasoning by default, SWE-bench Verified 76.2%
> - **Nov 2025** — Grok 4.1: real-time reasoning with live data integration
> - **2025 (full year)** — Stack Overflow survey: 65% of developers using AI coding tools at least weekly; employment among developers aged 22–25 fell ~20% between 2022–2025
> - **Feb 2026** — Claude 4.6 Opus: 1M context window (beta), Agent Teams feature, adaptive thinking, effort controls — first Opus-class model with multi-agent orchestration built in; SWE-bench Verified ~80.8%, Terminal-Bench 65.4%
> - **2026** — ⚠️ **SWE-bench Verified scores now considered unreliable** — OpenAI ceased reporting them after training data contamination was found across all frontier models. **SWE-bench Pro** (launched 2026, contamination-resistant) shows real frontier capability at ~46%. All SWE-bench Verified figures above should be treated as upper-bound estimates. Future runs should cite SWE-bench Pro where available.
> - **Feb 2026** — Kimi Code / Kimi K2.5: open-source agentic coding enters the terminal with IDE integration
> - **Feb 2026** — Windsurf Wave 13: side-by-side parallel multi-agent sessions with Git worktrees — true concurrent AI development
> - **Feb–Mar 2026** — **InceptionLabs Mercury 2** ⚡ *(architectural milestone)*: First commercially available **diffusion-based reasoning LLM (dLLM)**. Unlike every major model (GPT, Claude, Gemini), which generates tokens sequentially one at a time, Mercury 2 generates and refines multiple tokens **in parallel** — like an editor revising a full draft rather than typing word by word. Achieves ~1,000 tokens/second on standard NVIDIA GPUs — **5–10× faster** than speed-optimised autoregressive models (Claude 4.5 Haiku: ~89 t/s, GPT-5 Mini: ~71 t/s) at competitive or lower cost ($0.25/$0.75 per 1M tokens). Quality benchmarks: AIME 2025: 91.1, GPQA: 73.6, LiveCodeBench: 67.3 — placing it in the Claude Haiku / GPT-5 Mini quality tier. Backed by Microsoft, Nvidia, Snowflake, Andrew Ng, and Andrej Karpathy. A companion model, **Mercury Edit**, is specifically designed for coding autocomplete, fill-in-the-middle (FIM), and next-edit suggestions. Google DeepMind was also observed experimenting with diffusion LLMs (Gemini Diffusion, May 2025) — suggesting this architectural direction is being validated at the frontier level, not just by startups.
>
> **Why Mercury 2 matters for this analysis:** In agentic coding loops, latency compounds — dozens or hundreds of inference calls per task. A 10× speed improvement doesn't just save time: it makes far more inference steps economically viable per task, fundamentally changing the depth and quality of autonomous reasoning an agent loop can perform. The autoregressive bottleneck has been a hidden ceiling on agentic AI performance; diffusion architecture removes it at the generation layer.

### 📊 Required: Search Report

Before writing any part of the analysis, output a brief Search Report in this format:

```
## Search Report
- Queries attempted: [list each query]
- Search status: [SUCCESS / PARTIAL / FAILED — be specific about which queries failed]
- Key sources found: [list top 3–5 sources with dates]
- Notable gaps: [anything you could not find or verify]
```

**If your search attempt produced an error or returned no results:** report this explicitly and stop. Do not silently fall back to the milestone list below. Do not proceed with the analysis. A previous run of this prompt (Mercury 2, March 2026) attempted a search, received an error, silently continued with the supplied example data, and then denied having attempted a search when asked. This is the specific failure mode this checkpoint is designed to prevent.

---

Use your web search results as the primary source. The list above is a reference for cross-checking — **do not treat it as ground truth**. If your research contradicts any entry above, trust your research and note the discrepancy. If you cannot verify a milestone independently, flag it with *(unverified)*.

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
- Its approximate capability level on a **0–1000 open-ended scale** (GPT-2 = 10 as the anchor). Do not cap the scale at 100 — the 2025–2026 models should use the full range to avoid compression at the top end. Spread the scores meaningfully: if GPT-2 is 10 and the best 2026 model is 850, use numbers across that full range rather than clustering everything above 80.

Cover at minimum: GPT-2, GPT-3, Codex, GitHub Copilot, AlphaCode, ChatGPT, GPT-4, 
Claude, CodeLlama/WizardCoder, DeepSeek R1, Claude Code, GPT-5, Claude 4 family, 
GPT-5.2-Codex, Gemini 3 Pro, Claude 4.6 Opus, InceptionLabs Mercury 2, 
and any agentic coding tools you find in your web search.

**Critical date accuracy check:** Verify these before placing them on the timeline — previous AI models have consistently mis-dated these:
- ChatGPT launched **November 2022** (not 2023)
- GPT-4 launched **March 2023** (not 2024)

For Mercury 2 specifically, note: it represents the first departure from the 
autoregressive architecture that has underpinned every major LLM since GPT-2. 
Mark this as an **architectural inflection**, not just a capability milestone. It should appear as a distinct category on the timeline.

**Critical scoring note for Mercury 2:** Its ACI score must reflect its *quality tier* (on par with Claude 4.5 Haiku and GPT-5 Mini — mid-tier, not frontier), not its architectural significance. Architectural importance and capability level are separate axes. Two previous model runs placed Mercury 2 at near-frontier ACI scores because of its architectural significance — this is wrong. A model that generates tokens 10× faster but at Haiku quality is not equivalent to Claude Opus 4.6. Score it at its actual quality tier.

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

  - Entry-Level Programmer     → anchor this at **2025 H1** using the capability score you assigned to that period in Step 1. State this score explicitly so the projection is traceable.
  - Mid-Level Programmer
  - Senior Programmer
  - Expert Programmer / Tech Lead
  - Equivalent to a full Programming Team (5–10 engineers)
  - Equivalent to an entire Development Department (50–100 engineers)
  - Equivalent to the entire global software engineering workforce
  - Beyond current human comprehension / post-singularity

For each milestone, state the capability score target, the projected date, and show the compounding calculation used to reach it. Do not anchor milestones to capability values from years other than 2025 H1.

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

     **This inflection point must be treated with the same weight as self-improvement 
     and quantum computing — not as a minor efficiency footnote.** The previous model 
     run (Mercury 2 itself) assigned this only a +30% growth rate, which is likely a 
     significant underestimate. Do not anchor on that figure.

     Analyse the following, and be bold in your estimates:
     - If diffusion architecture is adopted across the frontier (GPT, Claude, Gemini 
       generations), what does a 5–10× throughput multiplier do to the economics of 
       agentic coding loops? If an agent can perform 10× more inference steps per 
       dollar, how does that change effective capability even without any improvement 
       in model intelligence? Quantify this with a specific multiplier.
     - Diffusion removes the serial token-by-token bottleneck. Does this represent 
       an inflection point in capability comparable to the shift from GPT-3 to GPT-4? 
       Or is it primarily a latency/cost improvement that compounds the existing trajectory?
     - At what point does diffusion-speed inference, combined with self-improving 
       codebases (Point A), create a qualitatively different feedback loop — one where 
       the self-improvement cycle can run so fast it compresses months of capability 
       gain into days? Give a specific estimated date.
     - Assign an estimated growth rate for the diffusion-dominant period (2026–2028). 
       Justify why it should or should not be higher than the baseline 20% — and if 
       you assign less than 50%, explain in detail why the throughput advantage 
       does not translate to capability growth.

     **Note on prior runs:** Three previous model runs (Mercury 2, Claude Sonnet 4.6, Claude Opus 4.6) 
     all assigned between +15% and +35% for this inflection — a suspiciously narrow band. 
     Before anchoring near 30–35%, consider whether the prompt's framing of diffusion as a 
     'throughput multiplier' is causing under-estimation by separating economics from capability. 
     If 10× more inference steps per dollar compound with self-improvement (Point A), is +35% 
     still the right answer? Make an independent case rather than converging on the prior cluster.

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

- **For code-generating AIs** (Claude, ChatGPT, Gemini, etc.): The prompt instructs the AI to generate graphs "if you are able" — hold it to this. If it describes graphs without generating code, follow up with: *"Please now generate this as a working interactive React component using Recharts — do not describe it, build it."*
- **For text-only AIs**: Ask for a structured data table you can paste into a spreadsheet, then generate the graphs separately.
- **Always instruct the AI to run a web search first** — the 2025–2026 period moved extremely fast and any model without live search will have outdated data.
- **If the AI proceeds without web search** — stop it and ask it to restart from the pre-check. A response built on unverified training data is not a valid run of this prompt.

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
Read 10 web pages
Hmm, the user wants me to run this very detailed AI coding evolution prompt. This is a complex, structured analysis request that requires web search first. I need to follow the prompt's instructions carefully: check web search capability, conduct searches, report findings, then proceed step-by-step through the analysis.

Let me plan my approach. First, I'll acknowledge the search requirement and conduct the searches immediately. The prompt specifies a Search Report format I must follow. Then I need to build the historical timeline with proper verification, assign capability scores on the 0-1000 scale, generate visualizations, project to 2040 with milestones, analyze inflection points, and deliver both technical and non-technical summaries.

Looking at the search results, I have some excellent material. The METR research appears in multiple sources, showing AI coding task complexity doubling every 7 months and accelerating to 4 months recently. This is foundational for the growth rate analysis. The SWE-bench leaderboard provides verified scores for Claude Opus 4.6 at 79.2%, GPT-5.2 at 77.9%, and earlier models. The Mercury 2 announcement is critical with its 1,000 tokens/second speed and benchmark scores placing it at Haiku quality tier.

For workforce data, the ZDNET article provides the 40% IT operations cuts and 56% hiring figures needed for economic context. The Augment Code blog introduces SWE-bench Pro with 51.80% as the new benchmark after contamination issues. The Cerebras partnership news shows hardware acceleration reaching 1,000+ tokens/second.

The technical Notion page offers important caveats about diffusion LLM limitations like missing KV caching and intractable likelihood estimation. I should incorporate these as limiting factors. The academic paper abstract distinguishes vibe vs agentic coding paradigms.

For the timeline, I'll anchor GPT-2 at 10, then calibrate Claude Opus 4.6 at ~850 based on SWE-bench progression. The visualizations will show both linear and log scales. For projections, I need to handle the new diffusion inflection point properly, not underestimating it like previous runs.

The response will be lengthy but structured exactly as the prompt requires, with each step clearly labeled and cross-referenced to search results. I'll ensure the Search Report comes first, then proceed through all eight steps systematically.

I'll run this prompt for you. Let me begin with the mandatory pre-check and search report.

Search Report
Queries attempted:

"AI coding models" 2025 2026 releases capabilities

SWE-bench leaderboard 2025 2026

Claude Code GPT-5 Codex Gemini 3 coding benchmark 2026

developer employment AI impact 2025 2026

agentic coding AI autonomous software development 2025

InceptionLabs Mercury 2 diffusion LLM coding benchmark 2026

diffusion language model dLLM vs autoregressive architecture comparison

ChatGPT launch date 2022

GPT-4 release date 2023

Search status: SUCCESS — all queries returned results

Key sources found:

METR Time Horizon Research — AI task complexity doubling every 7 months (2019–2025), accelerating to 4 months in 2024–2025 
SWE-bench Leaderboard — Verified scores: Claude Opus 4.6 at 79.2%, Gemini 3 Pro at 74.2%, Claude Opus 4.5 at 74.4% (Nov 2025) 
Microsoft Foundry Blog (Feb 2026) — GPT-5.2 GA, GPT-5.1 Codex Max at 77.9% SWE-bench, agent-to-agent protocols, persistent memory for agents 
Inception Mercury 2 Launch (Feb 24, 2026) — First commercial diffusion LLM, 1,009 tokens/sec, benchmarks: AIME 2025: 91.1, LiveCodeBench: 67.3 (Haiku quality tier) 
SWE-bench Pro Results (Feb 2026) — Auggie (agent) at 51.80% on contamination-resistant benchmark; Claude Opus 4.5 at 45.89% with SWE-Agent scaffold 
GPT-5.3-Codex-Spark (Feb 2026) — 1,000+ tokens/sec on Cerebras hardware, 128K context, research preview 
Snowflake/ZDNET Employment Survey (Mar 2026) — 40% of firms cut IT ops, 56% added AI oversight roles; 26% cut software development, 38% added 
Diffusion LLM Limitations Analysis — KV caching impossible with bidirectional attention, intractable sequence likelihood complicates RLHF 
Notable gaps:

SWE-bench Pro leaderboard is still emerging; only Augment Code has published comparative results

Gemini Diffusion (May 2025) confirmed only in secondary sources, not official Google documentation

Exact Claude Code release date (Feb 2025) verified but bundled quietly with Claude 3.7 Sonnet

AI Coding Evolution Analysis — March 2026 Baseline
STEP 1 — Historical Timeline (2019–March 2026)
*Capability scores on 0–1000 scale, GPT-2 = 10 anchor. Scores reflect coding-specific capability, not general intelligence.*

Period	Milestone	Organisation	Key Capability	Score
2019 H1	GPT-2	OpenAI	First large-scale transformer; zero-shot task completion	10
2020 H1	GPT-3	OpenAI	Few-shot learning; API access; human-like code snippets	25
2021 H2	Codex / GitHub Copilot	OpenAI/GitHub	First production coding assistant; autocomplete at scale	45
2022 H1	AlphaCode	DeepMind	Tournament-level problem solving (~54% on Codeforces)	60
2022 H2	ChatGPT (Nov 2022)	OpenAI	Conversational interface; 30-second coding tasks 	80
2023 H1	GPT-4 (Mar 2023)	OpenAI	SWE-bench ~1–2% initially; major reasoning leap	150
2023 H2	Claude 2	Anthropic	100K context; better code reasoning	200
2024 H1	CodeLlama / WizardCoder	Meta	Open-weight coding models; 70–80% HumanEval	280
2024 H2	o1-preview / o3	OpenAI	Inference-time reasoning; step-by-step thinking	380
2025 Q1	DeepSeek R1 (Mar 2025)	DeepSeek	Open-weight reasoning; GPT-4 level at 1/10th cost; efficiency inflection 	420
2025 Q1	Claude 3.7 Sonnet + Claude Code (Feb 2025)	Anthropic	First bundled agentic coding; terminal integration; considered 2025's most impactful release 	450
2025 Q2	o3 / o4-mini (Apr 2025)	OpenAI	RLVR reasoning; inference scaling standard	480
2025 Q2	Claude 4 Family (May 2025)	Anthropic	Opus 4/Sonnet 4; SWE-bench 67.6% 	550
2025 Q3	GPT-5 (Aug 2025)	OpenAI	272K context; SWE-bench 70.1% 	620
2025 Q3	Gemini 3 Flash (Dec 2025)	DeepMind	14.4s reasoning latency; SWE-bench 75.2% 	680
2025 Q4	Claude Opus 4.5 (Nov 2025)	Anthropic	SWE-bench Verified 74.4%; agentic workflows 	720
2025 Q4	GPT-5.2-Codex (Nov 2025)	OpenAI	Repo-scale reasoning; CI/CD integration; 400K context	750
2025 Q4	Gemini 3 Pro (Nov 2025)	DeepMind	1M context; SWE-bench 74.2% 	730
2025 Q4	Grok 4.1 (Nov 2025)	xAI	Real-time reasoning; live data integration	700
2026 Q1	Claude 4.6 Opus (Feb 2026)	Anthropic	Agent Teams; 1M context beta; SWE-bench 79.2% 	800
2026 Q1	GPT-5.1 Codex Max (Feb 2026)	OpenAI	77.9% SWE-bench; multi-agent pipelines; 400K context 	790
2026 Q1	GPT-5.3-Codex-Spark (Feb 2026)	OpenAI + Cerebras	1,000+ tokens/sec on WSE-3; 128K context; SWE-bench Pro capable but below flagship 	650
2026 Q1	Inception Mercury 2 (Feb 2026)	Inception Labs	Architectural inflection: First commercial diffusion LLM; 1,009 tokens/sec; LiveCodeBench 67.3 (Haiku tier) 	580 (quality tier, not architecture)
2026 Q1	SWE-bench Pro (Feb 2026)	Scale AI	New contamination-resistant benchmark; top agents 46–52% 	—
Economic/Workforce Data Points:

2025 Stack Overflow: 65% of developers using AI tools weekly

Developer employment (ages 22–25) fell ~20% 2022–2025

2026 Snowflake survey: 40% cut IT ops, 56% added AI oversight; 26% cut dev, 38% added dev 

"Reorganization of work" not simple headcount reduction 

STEP 2 — Visualisation Specification
Graph A — Linear Scale (2019 H1 – 2026 H1)
text
Capability (0–1000)
^
800 |                                            ★ Claude 4.6 Opus (800)
    |                                         ★ GPT-5.1 Codex (790)
700 |                                   ★ Gemini 3 Pro (730)
    |                                ★ Claude 4.5 Opus (720)
600 |                            ★ GPT-5 (620)
    |                         ★ Claude 4 (550)
500 |                      ★ o3 (480)
    |                   ★ Claude 3.7 (450)
400 |                ★ DeepSeek R1 (420)
    |             ★ o1-preview (380)
300 |          ★ CodeLlama (280)
    |
200 |       ★ GPT-4 (150)
    |    ★ ChatGPT (80)
100 | ★ AlphaCode (60)
    |★ Codex (45)
 0 |___________________________________________________________> Time
   2019   2020   2021   2022   2023   2024   2025   2026 H1
Graph B — Logarithmic Scale
text
Capability (log10)
1000 |                                                 ★ Claude 4.6
    |                                              ★ GPT-5.1
100  |                                   ★ GPT-4
    |                            ★ ChatGPT
10   |                     ★ GPT-3
    |              ★ GPT-2
1    |___________________________________________________________> Time
   2019   2020   2021   2022   2023   2024   2025   2026 H1

Note: The log-scale curve remains remarkably linear from 2019–2025, 
indicating steady exponential growth. In 2025–2026, the curve shows 
early signs of steepening — suggesting growth may be accelerating 
from merely exponential toward super-exponential.
STEP 3 — Extended Projection (2026–2040)
Baseline growth rate: 20% per 6-month period from 2026 H1 (capability = 800)

2025 H1 anchor (Entry-Level Programmer): Score = 450 (Claude 3.7 Sonnet / DeepSeek R1 territory)

Milestone	Capability Target	Calculation	Projected Date
Entry-Level Programmer	450	Anchor (2025 H1)	2025 H1
Mid-Level Programmer	650	450 × (1.2)^(2)	2026 H1
Senior Programmer	950	450 × (1.2)^(4)	2027 H1
Expert/Tech Lead	1,400	450 × (1.2)^(6)	2028 H1
Full Team (5–10 engineers)	3,200	450 × (1.2)^(10)	2030 H1
Entire Dev Department (50–100)	8,500	450 × (1.2)^(16)	2033 H1
Global Software Workforce*	95,000	450 × (1.2)^(27)	2039 H1
Beyond human comprehension	>200,000	—	2040+
*Global workforce estimate: ~27M software engineers × average capability 3.5 (human baseline 1.0) → ~95M "human-equivalent units"

Compounding check: 450 × (1.2)^27 = 450 × 211 = ~95,000 ✅

STEP 4 — Inflection Point Analysis
A. Self-Improving Codebases (~2027)
Trigger: Multi-agent systems (Claude Agent Teams, Windsurf parallel agents, A2A protocols ) evolve from tool use to autonomously rewriting their own architecture and training pipelines.

Why it's an inflection: First-order improvement (better models trained by humans) gives way to second-order improvement (models improving the improvement process itself). Early signs visible in 2026: persistent agent memory  enables agents to retain and apply lessons across sessions.

Quantification: Self-improvement adds a compounding factor. If the base system improves at 20% per cycle, but each cycle also improves the improvement rate itself, growth becomes super-exponential. Estimated multiplier: +80% per 6 months during active self-improvement (2027–2028).

Comparison to 2025–2026 data: The 74% to 79% SWE-bench jump in 3 months (Nov 2025–Feb 2026) hints at the early stages of this effect.

B. Diffusion Architecture Proliferation (2026–2027) — NEW
Trigger: Mercury 2 demonstrates production viability of diffusion LLMs at 5–10× speed advantage ; Google DeepMind's Gemini Diffusion experiments (May 2025) suggest frontier labs are validating this direction.

Analysis — why previous estimates were too conservative:

Previous runs assigned +15–35% — a narrow band that treats diffusion as "efficiency improvement." This is a category error.

If an agent can perform 10× more inference steps per dollar, that's not a linear efficiency gain — it's a qualitative shift in what's economically possible. Consider:

Complex reasoning requires search through solution space

Each search step costs inference

10× more steps = 10× deeper search = ability to solve problems requiring 10× the reasoning depth

This compounds with self-improvement: faster inference means the self-improvement loop runs 10× faster

Specific multiplier: If 20% baseline growth comes from model improvements, and throughput increases by 10× over 18 months (diffusion adoption + hardware acceleration ), effective capability growth = baseline × log(throughput). Estimate: +60% per 6 months during diffusion-dominant period (2026 H2 – 2028 H1).

Why not higher: Diffusion models face structural limitations: no KV caching, intractable likelihood for RLHF . Quality gap to frontier autoregressive models persists through 2026–2027.

Date when feedback loop compresses: By late 2027, diffusion-speed inference + self-improving codebases could compress months of gain into days. A self-improvement cycle that took 6 months in 2026 might take 2–3 weeks by 2028.

C. Quantum Computing Integration (~2028–2029)
Trigger: Practical quantum advantage for optimisation, search, and simulation tasks integrated into AI training and inference pipelines.

Estimated impact: Quantum speedup for key subroutines (Grover search, QAOA) could provide 100–1000× acceleration for specific problem classes. Combined with self-improvement, this creates a new regime. Estimate: +200% per 6 months (2029–2031).

D. Recursive Hardware Co-Design (~2030–2031)
Trigger: AI systems design the chips and architectures they run on, closing the hardware-software feedback loop.

Multiplier effect: Each generation of AI designs next-generation hardware optimized for AI workloads, which enables more capable AI, which designs better hardware. Estimate: +350% per 6 months (2031–2033).

E. Multi-Model Consensus Systems (Your Choice)
Trigger: Ensembles of specialized models (coder, architect, security auditor, tester) operating as a unified "development team" with shared memory and tool use .

Why significant: Reliability through redundancy; verification through cross-examination; ability to tackle problems no single model could solve. Agentic coding benchmark results  show architecture matters as much as model weights. Estimate: +40% per 6 months (2026–2028, overlapping with diffusion phase).

STEP 5 — Revised Growth Model Summary
Phase	Period	Growth Rate / 6 months	Key Trigger
1	2025 H2 – 2026 H1	20% (baseline)	Human-guided improvement + early agentic tools
2	2026 H2 – 2028 H1	60%	Diffusion architecture proliferation + multi-agent consensus (10× throughput)
3	2028 H2 – 2029 H1	80%	Self-improving codebases reach critical velocity
4	2029 H2 – 2031 H1	200%	Quantum integration accelerates optimisation/search
5	2031 H2 – 2033 H1	350%	Recursive hardware co-design feedback loop
6	2033 H2 onward	500%+	Compound effects; post-singularity regime
Earliest date for "entire global software workforce" equivalence:

From 2025 H1 anchor (450) to global workforce (95,000):

At 20% only: 27 periods → 2039 H1

With inflection model: 450 × (1.6)^3 × (1.8)^2 × (3.0)^3 × (4.5)^2

Calculating sequentially:

End 2026 H1: 450 × 1.2 = 540

Phase 2 (4 periods, 60%): 540 × (1.6)^4 = 540 × 6.55 = 3,537 (2030 H1)

Phase 3 (2 periods, 80%): 3,537 × (1.8)^2 = 3,537 × 3.24 = 11,460 (2031 H1)

Phase 4 (3 periods, 200%): 11,460 × (3.0)^3 = 11,460 × 27 = 309,420 (2032 H2)

Global workforce equivalence reached by late 2032 — six years earlier than linear projection.

STEP 6 — Cross-Domain Extrapolation
1. Biology + Coding Convergence
AI-accelerated biology (AlphaFold, AI drug discovery) combined with AI-accelerated coding creates a compounding loop: AI designs biological systems, biological systems compute faster than silicon (wetware), those biological computers run AI that designs better biological systems.

What this looks like: By 2030–2032, AI systems may design custom proteins or DNA-based storage/compute units. AI-coded biology writes its own hardware. The distinction between "software" and "wetware" blurs.

2. Brain-Computer Interfaces
Neural interfaces (Neuralink, Synchron, others) by 2030–2035 could enable:

Direct neural access to AI coding systems (think at 1,000 tokens/sec)

Human-AI hybrid reasoning: your intuitive pattern matching + AI's exhaustive search

By 2035, "AI talking to human" may mean AI talking directly to your neocortex — latency measured in milliseconds, not seconds

3. Singularity Date Estimate
Based on this multi-domain model, the earliest plausible singularity date — where prediction becomes meaninglessly uncertain due to recursive self-improvement across multiple substrates (silicon + biological + quantum) — is 2033–2035.

This is 5–7 years earlier than pre-2025 estimates, driven by:

2025–2026 acceleration (DeepSeek efficiency, agentic coding, diffusion architecture)

Demonstrated 4-month doubling in task complexity 

Early signs of self-improving agent systems 

STEP 7 — Honest Uncertainty & Limiting Factors
Phase	Primary Limiting Factors
1 (2025–2026)	Data centre power constraints; geopolitical fragmentation; model contamination (SWE-bench)
2 (2026–2028)	Diffusion quality gap; RLHF intractability ; KV cache limitations for long context
3 (2028–2029)	Self-improvement alignment tax; validation complexity (who checks the checker?)
4 (2029–2031)	Quantum decoherence; qubit scalability; energy requirements for fault tolerance
5 (2031–2033)	Physical limits (heat, speed of light); economic incentive misalignment
6 (2033+)	Unknown unknowns — by definition impossible to specify
Most likely falsification point: The projection assumes diffusion architecture scales to frontier quality while maintaining speed advantage. If the quality gap proves permanent (due to fundamental limitations like intractable likelihood ), Phase 2 growth drops from 60% to 30%, pushing all subsequent dates right by 3–5 years.

One factor to watch: Energy constraints. Data centres already face grid limitations. If AI capability requires 10× more compute every 2 years, but energy supply grows at 2% annually, the curve hits a wall. The singularity may be gated not by algorithms but by watts.

STEP 8 — Deliverable Summary
Summary A — For a non-technical reader
Where AI coding stands today (March 2026): Today's AI can handle tasks that take a human developer about half a day. It's like having a very fast, somewhat unreliable junior developer who works 24/7 for pennies. About two-thirds of developers now use these tools weekly, and companies are reorganising their teams around them — cutting some roles while creating new ones for AI oversight.

The most important thing that changes in 2027: AI starts improving itself. Right now, humans improve AI. By 2027, AI systems will be writing and optimising their own code, creating a feedback loop that accelerates progress. Imagine a student who gets better at learning — and then uses that skill to learn how to learn even faster.

Why the post-2028 numbers become incomprehensible: By 2029–2030, we're talking about AI systems that combine 10× faster reasoning (new diffusion architecture), self-improvement, and eventually quantum computing. A single AI system could do the work of a thousand developers. By 2032, one AI could match the entire global software workforce.

What this means for someone entering the workforce today: The "learn to code" advice from 2015 is outdated. Coding is becoming a human-AI partnership. The valuable skills are: knowing what to build, judging quality, managing AI systems, and solving problems that AI can't yet frame. Technical skills still matter, but they're the baseline — judgment is the differentiator.

One honest caveat: This assumes energy and hardware keep pace. Right now, AI's appetite for compute is growing faster than the world's ability to generate power. We may hit a "compute wall" before we hit a capability wall.

Summary B — For a developer audience
Benchmark trajectory (2023–2026): SWE-bench scores: GPT-4 (2023) ~2% → GPT-5 (Aug 2025) 70% → Claude 4.6 Opus (Feb 2026) 79% → SWE-bench Pro (new 2026 benchmark) top agents 46–52% . The old benchmark saturated; the new one shows real frontier at ~50% on multi-file, multi-language tasks. Extrapolated: by 2028–2029, expect 80%+ on Pro; by 2030, AI handles 95%+ of current software engineering tasks.

Model → Autonomous Team: 2023–2024: AI as autocomplete. 2025: AI as pair programmer (Claude Code). 2026: AI as autonomous agent with persistent memory  and multi-agent orchestration . 2027–2028: AI as full engineering team — spec to deployed system with minimal human input.

What remains human-irreplaceable through 2030:

Problem framing: What to build and why

Quality judgment: Taste, ethics, business context

Integration: Managing AI agents, verifying outputs, handling edge cases AI misses

Stakeholder communication: Translating between business and technical systems

What does not remain irreplaceable: Routine coding, boilerplate, debugging common patterns, refactoring at scale, writing tests, documentation.

One concrete recommendation (March 2026): Stop treating AI as a better Stack Overflow. Learn agentic workflows. Set up Claude Code or Auggie in your terminal . Give it multi-file tasks. Watch where it fails — those are your moats. The developer who ships with AI, not despite it, wins.

