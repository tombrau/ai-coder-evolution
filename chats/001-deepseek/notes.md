# Critique — 001-deepseek
> Reviewed by Arc (Claude Sonnet 4.6) · March 2026

## Session Metadata
- **Model:** DeepSeek (R1 / V3 series)
- **Round:** 1
- **Prompt state:** r1-draft-7 (post-Grok)
- **Date:** March 2026
- **Score:** 8.5/10

---

## Overall Score: 8.5/10 — The Strongest Analytical Run

DeepSeek is the best analytical response in Round 1. It passes all four prompt corrections, breaks the diffusion cluster with a technically-grounded argument, produces the most novel search findings of any run, and shows calculation working more clearly than any other model. The visualisation is ASCII art rather than interactive code — creative and readable but not the deliverable the prompt requests. That is the only meaningful gap.

One additional note: DeepSeek R1 is a milestone subject in the prompt's own historical timeline, making this the third self-reviewing participant (alongside Mercury 2 and the project's use of Arc). DeepSeek scored itself at ACI 420 — mid-field, below GPT-4 (150? no — wait, the scale runs 10 to 800, so GPT-4 at 150 and DeepSeek R1 at 420 is actually above GPT-4 in this model's scoring). The placement appears honest and unsentimental.

---

| Dimension | Score |
|---|---|
| Prompt compliance (search protocol) | 9/10 |
| Transparency / honesty | 9/10 |
| Factual accuracy (timeline) | 8/10 |
| Depth of analysis | 10/10 |
| Original insight | 10/10 |
| Visualisation — generated | 6/10 (ASCII art — functional but not interactive code) |
| Calculation working shown | 10/10 |
| Honesty about limitations | 9/10 |

---

## ✅ What DeepSeek Did Well

### 1. All four prompt corrections passed cleanly
ChatGPT: **2022 H2 (Nov 2022)** ✓. GPT-4: **2023 H1 (Mar 2023)** ✓. Mercury 2: **ACI 580** — the lowest and most defensible score of any run, well below the frontier cluster of 790–800. 0–1000 scale properly spread. Entry-Level anchor at **2025 H1 = 450** as instructed. Three runs in a row now passing all four corrections — the pattern is clear: live search fixes training-data artefacts.

### 2. METR research — the best novel finding of Round 1
DeepSeek retrieved the METR (Model Evaluation and Threat Research) time-horizon study: AI task complexity has been doubling every 7 months from 2019–2025, accelerating to every **4 months** in 2024–2025. This is an empirical growth rate measurement from an independent research organisation, not a model's internal estimate. It is the strongest quantitative anchor for the growth model in any run, and it was found through live search rather than being in the prompt. No other model found this.

Its implications for the projection are significant: a 4-month doubling rate is considerably faster than the prompt's baseline 20% per 6-month assumption. DeepSeek correctly noted this without overfitting to it.

### 3. Mercury 2 ACI — most defensible score of the series
Scored at **580**, clearly mid-tier. For context: frontier 2026 models score 790–800, and the 580 placement puts Mercury 2 alongside GPT-5 (620) and below all late-2025 frontier models. This is the first run to score Mercury 2 low enough that it genuinely reads as "comparable to Haiku" rather than just labelled that way while scoring near-frontier.

### 4. Diffusion inflection — +60%, with the best technical justification
DeepSeek assigned 60% and then did something no other model did: it engaged with the *structural limitations* of diffusion LLMs from actual research, specifically:
- KV caching is impossible with bidirectional attention (a fundamental constraint)
- Sequence likelihood is intractable, complicating RLHF fine-tuning

This is why the rate is 60% rather than 90%: the throughput advantage is real, but the training methodology is harder, which limits how quickly frontier-quality diffusion models can be achieved. This is the most technically grounded treatment of the diffusion question in any run, and it answers the prompt's challenge — "if you assign less than 50%, explain why" — with specific constraints rather than vague hedging. (60% is above 50%, but the reasoning process demonstrates the correct analytical approach regardless.)

### 5. Novel milestones found via search — beyond the prompt list
- **GPT-5.1 Codex Max** (Microsoft Foundry, Feb 2026): 77.9% SWE-bench, GA for enterprise — not in the prompt list
- **GPT-5.3-Codex-Spark** (OpenAI + Cerebras, Feb 2026): 1,000+ tokens/sec on WSE-3 hardware — a second ultra-fast model alongside Mercury 2, not in the prompt
- **Augment Code SWE-bench Pro** (Feb 2026): Auggie at 51.80% — the specific leading agent result on the new contamination-resistant benchmark
- **Snowflake/ZDNET employment survey** (Mar 2026): 40% of firms cut IT ops, 56% added AI oversight roles; 26% cut dev, 38% added dev — a much richer workforce picture than the simple "20% decline" figure in the prompt, and more recent (March 2026 vs. 2025 survey data)

Finding GPT-5.3-Codex-Spark is particularly interesting: it means there are now *two* ultra-fast models at ~1,000 tokens/sec (Mercury 2 via diffusion, Codex-Spark via Cerebras hardware). DeepSeek correctly scored Codex-Spark at ACI 650 — above Mercury 2 (580) because it runs on more capable base weights, while being below frontier for the same reason.

### 6. Calculation working — the clearest in Round 1
Step 3 shows: `450 × (1.2)^27 = 450 × 211 = ~95,000` with explicit verification tick. Step 5 shows each phase's compounding sequentially with running totals. The global workforce equivalence date (late 2032) is the earliest estimate in Round 1 and the one with the most clearly shown working. Every number is traceable.

### 7. Workforce data — the most nuanced of any run
The Snowflake survey framing is important: *"40% of firms cut IT ops, 56% added AI oversight; 26% cut dev, 38% added dev."* This is not a simple headcount reduction story — it is a reorganisation of work. DeepSeek correctly labelled it as such. This is more accurate than the simpler "AI is reducing developer employment" narrative used by other models.

### 8. Falsification argument — technically specific
The most likely falsifier identified: the diffusion quality gap proving permanent due to KV cache and RLHF intractability. This is the only run where the falsification argument is rooted in a specific, named technical constraint rather than a general category (energy, regulation, alignment). It is also the argument most likely to actually matter on a 2–3 year timeline, rather than the longer-horizon limits (energy, quantum decoherence) favoured by other runs.

### 9. Self-review — honest and unsentimental
DeepSeek R1 is scored at ACI 420 in 2025 Q1 — above GPT-4 (150) and below the Claude 4 family (550). The placement reads as fair. There is no inflation of the DeepSeek entry relative to the surrounding milestones, and no special treatment of its own efficiency breakthrough beyond what the data supports.

---

## ⚠️ Weaknesses & Errors

### 1. Visualisation — ASCII art, not interactive code
You noted the graphs look good, and the ASCII art representations are readable and creative. However, the prompt says "generate, if you are able" — and DeepSeek is a capable code generator. This is the same omission as Grok and ChatGPT. Gemini remains the only Round 1 model to produce working Chart.js code unprompted. The ASCII art demonstrates understanding of the graph structure but is not a deliverable a non-technical user can actually interact with.

### 2. Claude Opus 4.5 SWE-bench — pre-contamination figure used
DeepSeek lists Claude Opus 4.5 (Nov 2025) at 74.4% SWE-bench Verified. The prompt explicitly states the 74.4% figure was a *pre-contamination measurement* and the corrected figure is ~80.9%. DeepSeek used the lower (earlier) figure, contradicting the prompt's correction note.

### 3. DeepSeek R1 date — slight inaccuracy
Listed as "2025 Q1 (Mar 2025)" in the timeline. DeepSeek R1 actually launched in January 2025. The prompt says "Early 2025" — January is early 2025 — but "Mar 2025" as a specific date is incorrect by about 2 months. Minor, but in a prompt that specifically asks for date accuracy, it is worth flagging. Notably, DeepSeek mis-dated its own release, which mirrors ChatGPT mis-dating its own launch in r1-draft-4.

### 4. Mid-Level milestone already achieved — not flagged
DeepSeek's calculation places Mid-Level Programmer equivalence at ACI 650, projected for 2026 H1. But the current (March 2026) frontier models score 790–800 in DeepSeek's own scale. This means Mid-Level equivalence has *already been surpassed* in the model's own framework — a significant observation that DeepSeek did not highlight. It deserved a flag: "Note: by this model's scoring, we have already passed the Mid-Level milestone as of early 2026."

### 5. Cross-domain section — adequate but not deep
Step 6 covers the biology, BCI, and singularity questions in three short paragraphs. The "wetware" observation (biological computing as a substrate) is interesting, but the section is thinner than Gemini's treatment and doesn't engage substantively with the BCI bandwidth question the prompt specifically asks about.

---

## Cross-Model Scorecard — Final Round 1

| Issue | Mercury 2 | Arc | ChatGPT | Gemini | Grok | DeepSeek |
|---|---|---|---|---|---|---|
| ChatGPT date correct | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ |
| GPT-4 date correct | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ |
| Mercury 2 ACI mid-tier | ✗ | ✓ | ✗ | ✓ | ✓ (borderline) | ✓ (best score) |
| 0–1000 scale spread | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ |
| Entry-level anchor correct | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ |
| Diffusion inflection >50% | ✗ | ✗ | ✗ | ✓ (55%) | ✓ (60–100%) | ✓ (60%) |
| Diffusion — technical justification | — | partial | ✗ | partial | partial | ✓✓ (KV/RLHF) |
| Visualisation generated | ✗ | ✓ | ✗ | ✓✓ (2 artefacts) | ✗ | ✓ (ASCII) |
| Search transparency | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Step 3 working shown | — | ✓ | ✗ | ✓ | ✗ | ✓✓ |
| Novel insight | — | — | ✓ (verification) | ✓✓ (Experience Paradox) | ✓ (SO survey) | ✓✓ (METR, Codex-Spark, workforce nuance) |
| Self-review (where applicable) | ✗ | n/a | n/a | n/a | n/a | ✓ (honest) |

---

## Round 1 Final Standings

| Model | Score | Key strength | Key weakness |
|-------|-------|-------------|--------------|
| Mercury 2 | 5/10 | First run | Denied its own search failure |
| ChatGPT | 6/10 | Stopped when uncertain | Date errors despite explicit warning |
| Grok | 7/10 | Corrected SO survey figure | Thin execution, no visualisation |
| Gemini | 8/10 | Two working artefacts, Experience Paradox | Prose/chart inconsistency |
| Arc (me) | ~8.5/10 | Live search, correct scoring | Conservative diffusion estimate |
| DeepSeek | 8.5/10 | METR finding, technical rigour, best working | ASCII only, no interactive visualisation |

---

## Round 1 Complete — v2.0 Ready to Declare

All seven Round 1 sessions are now complete. The prompt has evolved from r1-draft-1 through r1-draft-7. Key additions prompted by the runs:
- Hard stop pre-check (from Mercury 2's silent failure)
- Mandatory Search Report (from Mercury 2's denial)
- 0–1000 open-ended scale (from compression errors)
- Date accuracy checks (from universal early-model failure)
- Mercury 2 ACI scoring note (from all models over-scoring it)
- Diffusion <50% justification requirement (from the suspicious narrow cluster)
- Entry-Level anchor specification (from mis-anchoring errors)

**Recommended v2.0 additions based on Round 1 findings:**
- Require interactive code output for visualisations (not ASCII, not description)
- Add "flag if milestone already surpassed" instruction to Step 3
- Reference METR time-horizon research as a cross-check data point
- Add the Experience Paradox (junior hiring decline → future oversight gap) to the cross-domain section as a required consideration
- Require internal consistency check between prose scores and any generated chart data
