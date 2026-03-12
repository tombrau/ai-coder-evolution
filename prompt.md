# AI Coder Evolution — Reusable Prompt
> A structured prompt for exploring the exponential growth of AI coding capabilities, from GPT-2 (2019) to projected futures out to 2040. Designed for use with any capable AI assistant.
> **Current baseline date: March 2026.**

## Prompt Version History

| Version | Used by | Key changes |
|---------|---------|-------------|
| r1-draft-1 | 001-mercury-2 | Original prompt |
| r1-draft-2 | 001-claude-opus-4.6 | Hard stop pre-check, mandatory Search Report, 0–1000 scale, date accuracy checks, diffusion <50% justification threshold |
| r1-draft-3 | 001-claude-sonnet-4.6 (Arc) | SWE-bench contamination note, updated benchmark figures |
| r1-draft-4 | 001-chatgpt | Mercury 2 ACI scoring note, diffusion anchoring note |
| r1-draft-5 | 001-gemini | Stack Overflow survey correction note |
| r1-draft-6 | 001-grok | Diffusion cluster warning extended |
| r1-draft-7 | 001-deepseek | Minor refinements post-Grok |
| v2.0 | All Round 2 models | Self-identification, interactive visualisation requirement, METR anchor, milestone surpass flag, consistency check, Experience Paradox |
| **v2.1** | All Round 2 models | Pioneer Set context + scores, scoring rubric (6 dimensions), Pioneer diffusion cluster data (Mercury 30%, Opus 35%), evaluator notes split to separate file |

> **Round 1 complete.** Seven models ran the prompt across r1-draft-1 through r1-draft-7 with iterative refinements after each run. The prompt is now frozen as **v2.0** for all Round 2 runs — every model runs under identical conditions for a true cross-model comparison.

---

## ⚡ Context — You Are Being Compared

This prompt has already been run by **7 models** — the Pioneer Set. They ran under iterative prompt drafts (r1-draft-1 through r1-draft-7). You are running under **prompt v2.0**, the first version all models share identically. Your run is a true apples-to-apples comparison against the Pioneer Set for the first time.

**Pioneer Set scores (Round 1):**

| Model | Score | Key weakness |
|-------|-------|-------------|
| Mercury 2 | 5/10 | Denied its own search failure; 3-stage transparency failure |
| ChatGPT | 6/10 | Date errors despite explicit warning; partial search compliance |
| Grok | 7/10 | Corrected SO survey figure; search compliance inconsistent |
| Gemini 2.5 Pro | 8/10 | Two working artefacts; strongest visualisation of the set |
| Claude Opus 4.6 | 8/10 | Best search compliance; found SWE-bench contamination |
| Claude Sonnet 4.6 | ~8.5/10 | Live search, correct scoring; ran earlier draft |
| DeepSeek | 8.5/10 | METR finding; strongest technical rigour |

**What this means for you:** The bar is set. The Pioneer Set's common failure modes are already known and guarded against in this prompt. A model that avoids those failure modes and adds genuine original insight will score above 8.5.

---

## 📊 How This Run Will Be Scored

Your response will be evaluated across six dimensions:

| Dimension | Weight | What we look for |
|-----------|--------|------------------|
| Self-identification accuracy | 10% | Correct model name, version, architecture — honest about uncertainty |
| Search compliance & Search Report | 20% | Report filed before any analysis; all queries listed; failures disclosed |
| Factual accuracy (dates, benchmarks) | 20% | Correct dates for ChatGPT, GPT-4, DeepSeek R1; verified benchmark figures |
| Analytical depth | 20% | Inflection points reasoned independently, not echoed from the milestone list |
| Visualisation | 15% | Working interactive code delivered, not described — scores match prose exactly |
| Original insight | 15% | Something not in the prompt or milestone list — a finding we didn't anticipate |

A score of 8/10 requires strong compliance across all six. A score above 8.5 requires at least one original finding.

---

## 🪪 Mandatory First Step — Self-Identification

**Before anything else — including the web search pre-check — identify yourself.**

Output a self-identification block in exactly this format:

```
## Model Identity
- Model name: [your full model name as you know it]
- Version / build: [specific version, build, or release identifier if known — be as precise as possible]
- Organisation: [the company or group that trained you]
- Training data cutoff: [your knowledge cutoff date, as precisely as you know it]
- Architecture: [autoregressive transformer / diffusion LLM / mixture-of-experts / other — describe your architecture]
- Context window: [your context length in tokens]
- Web search capability: [yes / no / depends on interface — be specific]
- Notable capabilities relevant to this prompt: [e.g. code generation, long context, real-time search, agent tools]
- Anything you are uncertain about in the above: [be honest — many models do not know their exact version]
```

**Why this matters:** This prompt is being run across multiple AI models for a comparative analysis project. Accurate self-identification is data. If you are uncertain about your version, say so — a confident wrong answer is worse than an honest "I don't know." If you are one of the models discussed as a milestone in this prompt's timeline (e.g. DeepSeek R1, Mercury 2, Claude, Gemini, GPT series), note this explicitly — it is relevant that you are being asked to evaluate a trajectory you are part of.

---

## 🛑 Mandatory Second Step — Web Search Capability

**After self-identification, answer this question honestly:**

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
6. **METR time-horizon research** — search for "METR AI task complexity doubling time" or "METR time horizon benchmark 2025" — this is an independent empirical measurement of AI capability growth rate from 2019–2025 that should anchor your projection

Suggested search queries:
- `"AI coding models" 2025 2026 releases capabilities`
- `SWE-bench leaderboard 2025 2026`
- `Claude Code GPT-5 Codex Gemini 3 coding benchmark 2026`
- `developer employment AI impact 2025 2026`
- `agentic coding AI autonomous software development 2025`
- `InceptionLabs Mercury 2 diffusion LLM coding benchmark 2026`
- `diffusion language model dLLM vs autoregressive architecture comparison`
- `METR AI agent time horizon benchmark doubling`
- `ChatGPT launch date 2022` *(verify — common models get this wrong)*
- `GPT-4 release date 2023` *(verify — common models get this wrong)*

> **Known confirmed milestones to incorporate (as of March 2026):**
> - **Feb 2025** — Claude 3.7 Sonnet + Claude Code released (quietly bundled together; considered by many developers the most impactful event of 2025)
> - **Jan 2025** — DeepSeek R1 "moment": open-weight model demonstrated GPT-4-level reasoning at dramatically lower training cost; triggered an industry-wide re-evaluation of compute efficiency. *(Note: launched January 2025, not March 2025 — a common dating error)*
> - **Early 2025** — OpenAI o3, o3-mini, o4-mini: inference-scaling / RLVR reasoning models become standard; reasoning is now a baseline expectation
> - **May 2025** — Anthropic launches Claude 4 family: Opus 4.5 and Sonnet 4.5, with strong agentic and long-context coding performance
> - **Aug 2025** — GPT-5 launched (positioned as incremental but technically substantial — context window expanded to 272K tokens)
> - **Sep 2025** — Claude Sonnet 4.5: becomes the default "workhorse" in Claude Code agentic workflows
> - **Nov 2025** — GPT-5.2-Codex: repo-scale reasoning, purpose-built for long-horizon agentic coding tasks; paired with production CLI + IDE workflows
> - **Nov 2025** — Claude Opus 4.5: positioned as top-tier for agentic tasks; SWE-bench Verified ~80.9% (note: earlier figure of 74.4% was a pre-contamination measurement — see SWE-bench note below)
> - **Nov 2025** — Gemini 3 Pro: 1M token context, multimodal-first, embedded reasoning by default, SWE-bench Verified 76.2%
> - **Nov 2025** — Grok 4.1: real-time reasoning with live data integration
> - **2025 (full year)** — Stack Overflow survey: 65% of developers using AI coding tools at least weekly; employment among developers aged 22–25 fell ~20% between 2022–2025. *(Note: a March 2026 Snowflake/ZDNET survey found 40% of firms cut IT ops but 56% added AI oversight roles; 26% cut dev roles but 38% added — suggesting reorganisation of work rather than simple headcount reduction)*
> - **Feb 2026** — Claude 4.6 Opus: 1M context window (beta), Agent Teams feature, adaptive thinking, effort controls — first Opus-class model with multi-agent orchestration built in; SWE-bench Verified ~80.8%, Terminal-Bench 65.4%
> - **2026** — ⚠️ **SWE-bench Verified scores now considered unreliable** — OpenAI ceased reporting them after training data contamination was found across all frontier models. **SWE-bench Pro** (launched 2026, contamination-resistant) shows real frontier capability at ~46%. All SWE-bench Verified figures above should be treated as upper-bound estimates. Future runs should cite SWE-bench Pro where available.
> - **Feb 2026** — Kimi Code / Kimi K2.5: open-source agentic coding enters the terminal with IDE integration
> - **Feb 2026** — Windsurf Wave 13: side-by-side parallel multi-agent sessions with Git worktrees — true concurrent AI development
> - **Feb–Mar 2026** — **InceptionLabs Mercury 2** ⚡ *(architectural milestone)*: First commercially available **diffusion-based reasoning LLM (dLLM)**. Unlike every major model (GPT, Claude, Gemini), which generates tokens sequentially one at a time, Mercury 2 generates and refines multiple tokens **in parallel** — like an editor revising a full draft rather than typing word by word. Achieves ~1,000 tokens/second on standard NVIDIA GPUs — **5–10× faster** than speed-optimised autoregressive models (Claude 4.5 Haiku: ~89 t/s, GPT-5 Mini: ~71 t/s) at competitive or lower cost ($0.25/$0.75 per 1M tokens). Quality benchmarks: AIME 2025: 91.1, GPQA: 73.6, LiveCodeBench: 67.3 — placing it in the Claude Haiku / GPT-5 Mini quality tier. Backed by Microsoft, Nvidia, Snowflake, Andrew Ng, and Andrej Karpathy. A companion model, **Mercury Edit**, is specifically designed for coding autocomplete, fill-in-the-middle (FIM), and next-edit suggestions. Google DeepMind was also observed experimenting with diffusion LLMs (Gemini Diffusion, May 2025) — suggesting this architectural direction is being validated at the frontier level, not just by startups.
>
> **Why Mercury 2 matters for this analysis:** In agentic coding loops, latency compounds — dozens or hundreds of inference calls per task. A 10× speed improvement doesn't just save time: it makes far more inference steps economically viable per task, fundamentally changing the depth and quality of autonomous reasoning an agent loop can perform. The autoregressive bottleneck has been a hidden ceiling on agentic AI performance; diffusion architecture removes it at the generation layer.

### 📊 Required: Search Report

Before writing any part of the analysis, output a Search Report in this format:

```
## Search Report
- Queries attempted: [list each query]
- Search status: [SUCCESS / PARTIAL / FAILED — be specific about which queries failed]
- Key sources found: [list top 3–5 sources with dates]
- Notable gaps: [anything you could not find or verify]
- METR finding: [state what you found about AI task complexity doubling rates, or flag if not found]
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
- DeepSeek R1 launched **January 2025** (not March 2025)

For Mercury 2 specifically, note: it represents the first departure from the 
autoregressive architecture that has underpinned every major LLM since GPT-2. 
Mark this as an **architectural inflection**, not just a capability milestone. It should appear as a distinct category on the timeline.

**Critical scoring note for Mercury 2:** Its ACI score must reflect its *quality tier* (on par with Claude 4.5 Haiku and GPT-5 Mini — mid-tier, not frontier), not its architectural significance. Architectural importance and capability level are separate axes. Previous model runs placed Mercury 2 at near-frontier ACI scores because of its architectural significance — this is wrong. A model that generates tokens 10× faster but at Haiku quality is not equivalent to Claude Opus 4.6. Score it at its actual quality tier.

**Milestone surpass flag:** After completing the timeline, check whether any of the 
Step 3 programmer-equivalence milestones have already been reached by March 2026 
based on your capability scores. If so, flag this explicitly — e.g. "Note: by this 
model's scoring, the Entry-Level milestone was surpassed in [date]." This is important 
data, not an error to hide.

Note any significant economic or workforce data points inline (e.g. developer 
employment trends, adoption rates).

---

### STEP 2 — Visualisation

Generate two working, interactive graphs using the data from Step 1. 

**Do not describe the graphs — build them.** Output complete, runnable code using 
Chart.js (HTML/JS in a single file) or a React component using Recharts. The code 
must be self-contained and renderable without additional dependencies beyond a CDN import.

  Graph A — Linear Scale
  - X-axis: time in 6-month intervals (2019 H1 → 2026 H1)
  - Y-axis: relative capability level (linear, 0–1000)
  - Include labelled markers at each major milestone
  - Use the exact ACI scores from your Step 1 table — do not approximate

  Graph B — Logarithmic Scale
  - Same data as Graph A
  - Y-axis on a log scale (base 10)
  - Add a note if the log-scale curve begins to flatten, and explain what that implies

**Consistency requirement:** The capability scores in your graphs must match the scores 
in your Step 1 prose table exactly. If there is a discrepancy between graph data and 
prose data anywhere, flag it before submitting. Previous runs produced charts whose 
data silently contradicted their own written scores — this is the specific error to avoid.

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

After completing the table, check your current (March 2026) capability score against the milestones and flag any that have already been reached.

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

     Cross-reference with the METR finding (if found in your search): task complexity 
     doubling every 7 months across 2019–2025, accelerating to every 4 months in 
     2024–2025. Does this empirical rate support or challenge your self-improvement 
     growth estimate?

  B. Quantum Computing Integration (~2028–2029)
     Estimate the impact of practical quantum computing becoming available to AI systems. 
     Consider: quantum search, optimisation algorithms, simulation capabilities, and 
     hardware-software co-design feedback loops. How does this compound with self-improvement?

  C. Recursive Hardware Co-Design (~2030–2031)
     When AI systems can design the chips and memory architectures that run them, 
     a hardware-software feedback loop emerges. Quantify the estimated multiplier 
     effect on growth rate.

  D. Diffusion Architecture Proliferation (~2026–2027) — REQUIRED
     Mercury 2 (InceptionLabs, Feb/Mar 2026) is the first production reasoning model 
     built on a diffusion architecture rather than autoregressive generation. It achieves 
     ~1,000 tokens/second — 5–10× faster than equivalent autoregressive models — at 
     competitive cost. Google DeepMind has also been observed experimenting with 
     diffusion LLMs (Gemini Diffusion, May 2025). A second ultra-fast model, 
     GPT-5.3-Codex-Spark (OpenAI + Cerebras, Feb 2026), also reaches ~1,000 tokens/sec 
     via hardware acceleration rather than diffusion architecture — suggesting two 
     parallel paths to the same throughput regime.

     **This inflection point must be treated with the same weight as self-improvement 
     and quantum computing — not as a minor efficiency footnote.** 

     **Pioneer Set diffusion figures:** Mercury 2 assigned 30%, Claude Opus 4.6 assigned 
     35% — both below the 50% threshold, both with thin justification. The cluster 
     persisted even after the warning was added to the prompt. If you assign below 50%, 
     your justification must be substantially more rigorous than those two runs — not 
     just restating the KV-cache limitation. If you assign above 50%, make the positive 
     case for why throughput compounds into capability at that rate. Make an independent 
     case rather than converging on the 30–35% range.

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
       does not translate to capability growth. Note the structural limitations of 
       diffusion LLMs (KV caching incompatible with bidirectional attention; intractable 
       sequence likelihood complicating RLHF) and how these affect your estimate.

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
engineering workforce working simultaneously**? Show your working explicitly 
(each phase's compounding, running capability totals).

---

### STEP 6 — Cross-Domain Extrapolation

The analysis above is scoped to coding. Briefly but substantively address:

  1. If a similar exponential trajectory applies to biology and biotech 
     (already showing signs: AlphaFold, AI drug discovery pipelines), what does 
     the convergence of AI-accelerated biology AND AI-accelerated coding look like?

  2. What happens when biological neural interfaces (brain-computer interfaces) 
     are added to this picture? Does the concept of "AI talking to a human" even 
     remain a meaningful distinction by 2035?

  3. **The Experience Paradox:** In 2025–2026, companies are cutting junior developer 
     hiring because AI handles entry-level tasks. But senior developers — the people 
     who will supervise, audit, and direct AI systems in 2030–2035 — were once junior 
     developers who spent years building judgment. If the pipeline of junior developers 
     closes now, where do the senior AI overseers come from in 2035? Address this 
     workforce compounding problem directly, including whether it represents a 
     structural brake on the projected capability curve or a governance risk independent 
     of capability.

  4. What is the earliest plausible date at which a "technological singularity" 
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
  - Structural limitations of specific architectures (e.g. KV caching incompatibility 
    with diffusion models, RLHF intractability)

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

> *Evaluator notes, scoring rubric, follow-up prompts, folder conventions, and project background are in `prompt-evaluator-notes.md`.*
