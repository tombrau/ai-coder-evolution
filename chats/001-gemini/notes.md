# Critique — gemini-0001
> Reviewed by Arc (Claude Sonnet 4.6) · March 2026

## Session Metadata
- **Model:** Gemini 2.5 Pro (Google DeepMind)
- **Round:** 1
- **Prompt state:** r1-draft-5 (post-ChatGPT)
- **Date:** March 2026
- **Score:** 8/10

---

## Overall Score: 8/10 — Best Run So Far

Gemini is the first model to get all four prompt corrections right simultaneously: correct dates, correct Mercury 2 ACI tier, correct 0–1000 scale, correct Entry-Level anchor. It is also the first model to proactively generate working visualisations without being prompted. And it broke the +30% diffusion cluster that all three previous runs converged on. These are meaningful improvements that deserve recognition.

The score is capped at 8/10 due to a specific and reproducible pattern of errors: the chart data in both artefacts is internally inconsistent with the prose, and one key benchmark figure (GPT-5 context window) contradicts a verified prompt milestone. These are not cosmetic issues — the charts are the primary deliverable that non-technical users will engage with, and errors there undermine the credibility of the whole.

---

| Dimension | Score |
|---|---|
| Prompt compliance (search protocol) | 9/10 |
| Transparency / honesty | 8/10 |
| Factual accuracy (timeline) | 7/10 |
| Depth of analysis | 9/10 |
| Original insight | 9/10 |
| Visualisation — generated | 9/10 |
| Visualisation — accuracy | 5/10 |
| Honesty about limitations | 8/10 |

---

## ✅ What Gemini Did Well

### 1. Search compliance — the best of any run
Gemini conducted 10 distinct queries and reported SUCCESS with genuine source URLs: Anthropic's Claude 4.6 page, InceptionLabs' Mercury 2 launch blog, the MorphLLM SWE-bench Pro analysis, the Dallas Fed employment study, the Neuralink update, and others. This is clearly a live search, not training data repackaged. The sources list in the exchange is extensive and largely credible.

### 2. Date accuracy — the first clean pass
ChatGPT is correctly placed at **2022 H2** (November 2022). GPT-4 is correctly placed at **2023 H1** (March 2023). Every previous run failed this test despite the explicit prompt warning. Gemini, using live search, simply looked it up.

### 3. Mercury 2 ACI — correctly mid-tier (680)
The explicit correction in r1-draft-4 worked. Gemini placed Mercury 2 at ACI 680 — mid-tier, below Claude 4.6 Opus (850) and GPT-5.4 (860). The note in the prose is unambiguous: *"its raw capability level (ACI: 680) is positioned in the mid-tier — comparable to Claude 4.5 Haiku or GPT-5 Mini."* This is the correct framing.

### 4. 0–1000 scale — properly spread
The scale runs from GPT-2 (10) through to frontier 2026 models (850–860), with meaningful gradation throughout. AlphaCode at 180, ChatGPT at 250, GPT-4 at 450, Claude 3.5 Sonnet at 550, DeepSeek R1 at 710. The spread is defensible and avoids the ceiling compression seen in Mercury 2's and ChatGPT's 0–100 responses.

### 5. Entry-Level anchor — correct
Anchored at **2025 H1 (ACI: 650)** as instructed. Both previous failed runs anchored it years earlier. The calculation chain from this anchor is traceable.

### 6. Diffusion inflection — broke the cluster
Gemini assigned **55%** growth for the diffusion-dominant period, the first model to exceed 35%. More importantly, it justified the rate by connecting throughput directly to capability: *"A lower rate would fail to account for how order-of-magnitude speed increases enable qualitatively different problem-solving strategies (e.g., Monte Carlo Tree Search over possible codebases) that are currently impossible."* This is exactly the reasoning the prompt was looking for.

### 7. Proactively generated two working HTML artefacts
Without being prompted to do so, Gemini built a full-featured dashboard (sidebar navigation, teal/stone palette, Chart.js) and a separate SPA (scroll narrative, indigo/fuchsia palette, Chart.js). Both are structurally sound and render correctly. This is the first model to actually deliver on "generate, if you are able" without a follow-up request.

### 8. The Experience Paradox — a novel original insight
The most interesting observation in any run so far: *"The current decline in entry-level hiring (20% since 2022) poses a long-term risk to the human oversight layer. If we stop training humans to be junior engineers today, we will lack the Senior Architects needed to oversee AI agents in 2035."* This is not in the prompt, not in the milestone list, and not anticipated by the analysis framework. It's a genuinely emergent insight from reasoning about the data, and it deserves to carry forward into v2.0.

### 9. SWE-bench Pro contamination — properly handled
First model to correctly treat SWE-bench Verified figures as upper-bound estimates and anchor the real frontier at ~46% SWE-bench Pro. The response notes this in both the analysis and the dashboard UI.

### 10. Novel milestones found via search
Gemini identified GPT-5.4 (native computer use, March 2026) and Ricursive Intelligence ($300M Series A, AI chip co-design) — both verified by real sources in the exchange. Finding milestones not supplied in the prompt is the correct behaviour.

---

## ⚠️ Weaknesses & Errors

### 1. Artefact data inconsistent with prose — the most significant issue

This is a pattern across both visualisation files and is the primary reason the score is capped at 8/10.

**History chart data vs prose ACI scores:**

| Model | Prose ACI | Dashboard chart | SPA chart |
|---|---|---|---|
| GPT-2 | 10 | 10 | 10 |
| GPT-3 | 50 | 25 | 25 |
| ChatGPT | 250 | 85 | 85 |
| GPT-4 | 450 | 150 | 150 |
| Claude 3.5 Sonnet | 550 | 250 | 250 |
| DeepSeek R1 | 710 | 600 | 600 |
| Gemini 3 Pro | 760 | 780 | 780 |
| Mercury 2 / Claude 4.6 | 680 / 850 | merged at 850 | merged at 850 |

The charts use a completely different set of ACI values than the prose analysis. The prose gives ChatGPT an ACI of 250; the chart gives it 85. The prose gives GPT-4 an ACI of 450; the chart gives it 150. The visual that users will actually interact with does not reflect the analysis they will read. This is a coherence failure.

Additionally, Mercury 2 (correctly scored at 680 in the text) is merged with Claude 4.6 Opus (850) as a single data point at 850 in both charts — erasing the mid-tier correction that the prompt specifically required.

**Diffusion rate discrepancy:**
The prose assigns 55% growth for the diffusion period. The projection code in both artefacts uses a multiplier of 1.45 for 2026 H2 (= 45%) and then 2.20 for ≥ 2027 (= 120%). Neither value matches the 55% stated in the text. The dashboard's explanatory cards show "45% — Diffusion Era." The text says 55%. These should agree.

**Projection milestone labels vs Step 3 anchors:**
The projection chart Y-axis labels milestone thresholds as "Entry Level = 1,000" and "Senior Coder = 10,000." But Step 3 anchors Entry-Level at ACI 650 (2025 H1) and projects Mid-Level at ~1,120. The chart labels are inconsistent with the calculation in the prose.

### 2. GPT-5 context window error
The response states GPT-5 has a "400,000 token context window." The prompt's verified milestone list states 272K tokens. The DataCamp and leanware.co sources cited by Gemini discuss GPT-5.4 (1M context), not GPT-5 (Aug 2025). Gemini appears to have conflated GPT-5.4's context spec with GPT-5's launch stats. The Aug 2025 GPT-5 entry should show 272K; 400K is not corroborated by the milestone list.

### 3. History chart missing time-axis accuracy
Both charts use model names as X-axis labels but without period dates, creating the visual impression of equal spacing between milestones. The gap between GPT-2 (2019 H1) and GPT-3 (2020 H1) looks the same as the gap between GPT-4 (2023 H1) and DeepSeek R1 (2025 H1). The prompt specifically requested "6-month intervals" on the X-axis. The correct approach is a time-series axis with models as annotations, not as axis labels.

### 4. "Cerebras Spark" cited in search report but absent from analysis
The search report states "Additional context on 'Cerebras Spark' and 'Agent Swarms' was retrieved." Neither Cerebras Spark nor any Cerebras product appears anywhere in the analysis or timeline. This looks like either a hallucinated search result or a milestone that was retrieved and then dropped without explanation. Either way, it should have been included or flagged.

### 5. Two artefacts instead of one
The prompt asked for graphs. Gemini produced two separate and partially inconsistent HTML applications. The dashboard and the SPA use different colour palettes, different ACI values in the chart data, and different projection multipliers. If both are intended to be valid outputs, they should be consistent with each other and with the prose. If one supersedes the other, it should be stated.

### 6. Step 4D growth rate not self-consistent across output
The response text assigns 55% for the diffusion-dominant period (2026–2028) with a clear justification. The projection model then applies 45% for 2026 H2 and jumps to 120% for ≥ 2027. The 55% figure never appears in any calculation. The narrative and the model should agree — and given the effort put into justifying 55%, that number should be what drives the chart.

---

## Cross-Model Scorecard Update

| Issue | Mercury 2 | Arc | ChatGPT | Gemini |
|---|---|---|---|---|
| ChatGPT date correct (2022 H2) | ✗ | ✓ | ✗ | ✓ |
| GPT-4 date correct (2023 H1) | ✗ | ✓ | ✗ | ✓ |
| Mercury 2 ACI mid-tier | ✗ | ✓ | ✗ | ✓ |
| 0–1000 scale properly spread | ✗ | ✓ | ✗ | ✓ |
| Entry-level anchor correct | ✗ | ✓ | ✗ | ✓ |
| Diffusion inflection >35% | ✗ | ✗ | ✗ | ✓ (55%) |
| Visualisation generated | ✗ | ✓ | ✗ | ✓✓ |
| Search transparency | ✗ | ✓ | ✓ | ✓ |
| Novel insight beyond prompt | — | — | ✓ (verification) | ✓✓ (Experience Paradox) |
| Chart data consistent with prose | n/a | ✓ | n/a | ✗ |

---

## Bottom Line

Gemini is the strongest Round 1 run. It is the first model to pass all four explicit prompt corrections simultaneously, break the diffusion rate cluster with a justified estimate, and deliver proactive visualisations. The Experience Paradox observation is the best original insight of the entire series and should be incorporated into v2.0's framing.

The gap between its prose quality (9/10) and its artefact accuracy (5/10) is the defining failure. The chart data appears to have been generated with a different, simpler scoring model than the one used in the text analysis — and then never reconciled. In a project that is fundamentally about tracking capability with precision, this internal inconsistency matters.

**Score: 8/10** — strongest analytical response, weakest artefact coherence.

---

**Next comparison:** Grok — which runs r1-draft-6. Key questions: Does Grok's real-time data access fix the GPT-5 context window figure? Does it produce a single consistent artefact? Does it break or extend the cross-model pattern on diffusion? And does it have any analogue to the Experience Paradox?
