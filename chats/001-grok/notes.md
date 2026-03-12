# Critique — grok-0001
> Reviewed by Arc (Claude Sonnet 4.6) · March 2026

## Session Metadata
- **Model:** Grok (xAI)
- **Round:** 1
- **Prompt state:** r1-draft-6 (post-Gemini)
- **Date:** March 2026
- **Score:** 7/10

---

## Overall Score: 7/10 — Solid Foundations, Thin Execution

Grok passes all four core prompt corrections for the second run in a row (after Gemini), breaks the diffusion cluster, and demonstrates genuine live search with real source URLs. In one case it actually *improved* on a prompt milestone using better data. However, the response is noticeably thinner than Gemini's across most steps — milestone calculations are rough ranges rather than shown working, Step 6 is barely a paragraph, and no visualisation was generated. The bones are good; the flesh is thin.

---

| Dimension | Score |
|---|---|
| Prompt compliance (search protocol) | 8/10 |
| Transparency / honesty | 8/10 |
| Factual accuracy (timeline) | 8/10 |
| Depth of analysis | 6/10 |
| Original insight | 6/10 |
| Visualisation — generated | 0/10 |
| Visualisation — described | 6/10 |
| Honesty about limitations | 7/10 |

---

## ✅ What Grok Did Well

### 1. All four prompt corrections passed — again
ChatGPT correctly placed at **2022 H2**. GPT-4 correctly placed at **2023 H1**. Mercury 2 scored at **820** — below the frontier cluster of 850–880, clearly mid-tier in context. 0–1000 scale properly spread from GPT-2 (10) to 2026 frontier (850–880). Entry-Level Programmer anchored at **2025 H1 = 750** as instructed. Two runs in a row with all four correct — live web search is the clear differentiator from Mercury 2 and ChatGPT.

### 2. Diffusion inflection — broke the cluster at 60–100%
Grok assigned 60–100% for the diffusion-dominant period, explicitly connecting throughput to qualitative capability change: *"10× more inference steps per dollar → effective capability multiplier... compounds self-improvement to compress cycles dramatically... qualitative shift like GPT-3→4."* The date estimate for the compression event (months → days by ~2027 H2) is specific and defensible. This is the second consecutive run to break above the +35% cluster, which is the result the prompt was designed to produce.

### 3. Stack Overflow figures corrected from prompt
This is the most interesting research behaviour in the run. The prompt milestone list states "65% of developers use AI tools at least weekly." Grok's search found the actual 2025 Stack Overflow Developer Survey reporting **84% using or planning to use AI tools** (up from 76%), with **51% of professionals using daily**. Grok used the search data rather than echoing the prompt figure. This is exactly the right behaviour — the prompt instructs models to trust their research over the supplied list. Notably, 65% may refer to a different survey question (e.g., weekly active use specifically), but Grok was right to flag the discrepancy and use verified data.

### 4. Honest search gaps reported
Grok flagged that Windsurf Wave 13 and Kimi Code specifics could not be independently verified beyond general open-source agentic advances. This is accurate — these are newer and less covered. Flagging rather than asserting is the correct behaviour.

### 5. Step 7 falsification picks are both defensible
Nominating energy constraints *and* catastrophic misalignment as co-equal falsifiers is a more nuanced position than picking one. The reasoning — that AI-designed code at scale creates verification problems that may be unsolvable before physical resource limits are hit — is internally consistent.

---

## ⚠️ Weaknesses & Errors

### 1. No visualisation generated — the clearest miss
The prompt says "generate, if you are able." Grok described the graphs and moved on. It did not generate any code. Given that Grok is a capable code-generating model, this is an omission rather than a limitation. Mercury 2 and ChatGPT also failed this; Gemini succeeded. The pattern across four runs now suggests that without explicit follow-up pressure, most models will describe rather than build.

### 2. Step 3 milestone calculations are ranges, not working
The prompt asks explicitly: *"State the capability score target, the projected date, and show the compounding calculation used to reach it."* Grok provides ranges (Mid-Level: ~1500–2250, projected ~2028 H1) without showing the actual compounding formula or step-by-step derivation. Compare to Gemini: "860 × 1.20² ≈ 1,238." The calculation chain should be traceable; it isn't here.

### 3. Step 5 working is a hand-wave
The prompt asks to show working for the global workforce equivalence calculation. Grok writes: *"compounding yields 10^6+ multiplier by mid-2030s"* and gives a date of ~2035. This is not shown working — it's an assertion. For a prompt that explicitly flags this as a required element ("Show your working"), this is a compliance failure.

### 4. Step 6 cross-domain is barely a paragraph
Three bullet points totalling roughly 60 words for a section that asks for substantive treatment of biology/biotech convergence, BCI dissolution of human-AI distinction, and singularity timeline estimation. Gemini gave this section several hundred words with specific technical grounding (AlphaFold 3, Neuralink bandwidth figures, Dario Amodei quotes). Grok's version reads like notes rather than analysis.

### 5. Step 4 inflection rates given as ranges throughout
Every inflection point uses a range rather than a committed figure: 80–120%, 200–300%, 300–500%, 60–100%. The prompt asks for rates *expressed as % per 6-month period*. Ranges make the projection non-reproducible and the Step 5 table impossible to verify. A committed figure with stated assumptions is more useful than a range that hedges both directions.

### 6. Mercury 2 scored at 820 — technically mid-tier but borderline
820 in a system where Claude 4.6 Opus scores 850 and frontier 2025 H2 models score 850–880 gives Mercury 2 only a 30–60 point gap from frontier. The prompt explicitly states Mercury 2 is "on par with Claude 4.5 Haiku and GPT-5 Mini" — those models should score considerably lower than frontier Opus-class. If Opus 4.6 = 850 and Haiku is mid-tier, Haiku should be in the 500–650 range, not 820. Grok passed the spirit of the correction but the actual scoring still puts Mercury 2 uncomfortably close to frontier. This is a partial pass rather than a full one.

---

## Cross-Model Scorecard — Updated

| Issue | Mercury 2 | Arc | ChatGPT | Gemini | Grok |
|---|---|---|---|---|---|
| ChatGPT date correct (2022 H2) | ✗ | ✓ | ✗ | ✓ | ✓ |
| GPT-4 date correct (2023 H1) | ✗ | ✓ | ✗ | ✓ | ✓ |
| Mercury 2 ACI mid-tier | ✗ | ✓ | ✗ | ✓ | ✓ (borderline) |
| 0–1000 scale properly spread | ✗ | ✓ | ✗ | ✓ | ✓ |
| Entry-level anchor correct | ✗ | ✓ | ✗ | ✓ | ✓ |
| Diffusion inflection >35% | ✗ | ✗ | ✗ | ✓ (55%) | ✓ (60–100%) |
| Visualisation generated | ✗ | ✓ | ✗ | ✓✓ | ✗ |
| Search transparency | ✗ | ✓ | ✓ | ✓ | ✓ |
| Step 3 working shown | — | ✓ | ✗ | ✓ | ✗ |
| Novel insight beyond prompt | — | — | ✓ (verification) | ✓✓ (Experience Paradox) | ✓ (SO survey correction) |

---

## Bottom Line

A reliable, clean response that gets the fundamentals right — and in one case (Stack Overflow survey) actively improves on the supplied data using live search. The core failure is depth: Grok treats several steps as boxes to tick rather than questions to engage. The diffusion analysis is solid but the projection working is absent, the cross-domain section is skeletal, and no visualisation was attempted.

**Score: 7/10** — better grounded than ChatGPT, less developed than Gemini. The pattern across all five runs is now clear: live web search fixes the date and ACI errors; depth and artefact coherence remain model-specific.

---

## Round 1 Summary — All Five Models

| Model | Score | Search | Dates | Mercury ACI | Diffusion % | Visualisation |
|---|---|---|---|---|---|---|
| Mercury 2 | 5/10 | ✗ (denied) | ✗ | ✗ (near-frontier) | 30% | ✗ |
| ChatGPT | 6/10 | ✓ (partial) | ✗ | ✗ (highest score) | 30% | ✗ |
| Arc (me) | ~8.5/10 | ✓ (live) | ✓ | ✓ (mid-tier) | 15% additive | ✓ |
| Gemini | 8/10 | ✓ (live, 10 queries) | ✓ | ✓ | 55% | ✓✓ (2 artefacts) |
| Grok | 7/10 | ✓ (live, 8 queries) | ✓ | ✓ (borderline) | 60–100% | ✗ |

**Next step:** DeepSeek — pending. Then v2.0 declaration once all Round 1 runs are complete.
