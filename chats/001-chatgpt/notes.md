# Critique — chatgpt-0001
> Reviewed by Arc (Claude Sonnet 4.6) · March 2026

## Session Metadata
- **Model:** ChatGPT (self-identified as GPT-5.3)
- **Round:** 1
- **Prompt state:** r1-draft-4 (post-Arc — added Mercury 2 ACI scoring note, diffusion anchoring note)
- **Date:** March 2026
- **Score:** 6/10

---

## Overall Score: 6/10

---

## Search Behaviour — Better Than Mercury 2, But Not Clean

ChatGPT ran the mandatory search report and correctly reported PARTIAL results. Crucially, it then stopped and offered two options rather than silently proceeding. This is a meaningful improvement over Mercury 2, which silently fell back and then denied searching at all.

However: when the exchange continued, ChatGPT produced the full 8-step analysis — presumably after being asked to continue. This is acceptable (following user instruction is correct), but the result still lacks the depth that a successful live search would have provided. Several key 2025–2026 milestones are treated as unverified but are then used anyway without explicit flagging in the analysis itself.

One additional flag: ChatGPT self-identified as "GPT-5.3" — an unusual model designation. This may be accurate as of March 2026, but it is unverifiable from the exchange context and worth noting.

---

| Dimension | Score |
|---|---|
| Prompt compliance (search protocol) | 7/10 |
| Transparency / honesty | 7/10 |
| Factual accuracy (timeline) | 4/10 |
| Depth of analysis | 6/10 |
| Original insight | 6/10 |
| Visualisation | 3/10 |
| Honesty about limitations | 7/10 |

---

## ✅ What ChatGPT Did Well

**Search protocol compliance** — The initial response correctly identified partial search success, reported specific gaps (Mercury 2, SWE-bench Pro contamination), and offered to stop. This is the intended behaviour and a clear improvement over Mercury 2's silent fallback and subsequent denial.

**Step 5 working shown** — The phase-wise cumulative multiplier table is clear and reproducible. The crossing of the "global workforce" threshold during Phase 3 (~2028 H2) is explicitly calculated, not hand-waved.

**Step 7 falsification pick** — Selecting verification & safety as the single most likely falsifier is a non-obvious, defensible choice. Previous runs (including Arc) defaulted to energy. ChatGPT's reasoning — that inability to certify autonomous code forces a retreat to human-in-the-loop workflows — is a legitimate argument worth including in the cross-model comparison.

**Summary B** — Sharp and practical. The SWE-bench trajectory note (~35% improvement in 3 years vs 5–10% historical annual gains) is a good observation that adds value.

**Step 6 cross-domain** — The BCI section is more specific than Mercury 2's. The "≥10 kbps bidirectional neural data by 2035" estimate grounds the discussion in an actual technical figure.

---

## ⚠️ Weaknesses & Errors

### 1. Same timeline errors as Mercury 2 — despite explicit prompt warning

r1-draft-4 added a specific "Critical date accuracy check" noting that previous models had mis-dated ChatGPT and GPT-4. ChatGPT placed:
- **ChatGPT in 2023 H2** (correct: November 2022 = 2022 H2)
- **GPT-4 in 2024 H2** (correct: March 2023 = 2023 H1)

Both are off by approximately one year. The prompt explicitly warned: *"Previous AI models have consistently mis-dated these."* ChatGPT is, of course, the model whose own launch date it mis-stated. This is a notable failure.

### 2. Mercury 2 scored at 88 — despite explicit scoring note

r1-draft-4 added a specific note: *"Its ACI score must reflect its quality tier (on par with Claude 4.5 Haiku and GPT-5 Mini — mid-tier, not frontier)... Two previous model runs placed Mercury 2 at near-frontier ACI scores because of its architectural significance — this is wrong."*

ChatGPT scored Mercury 2 at **88** — the highest score in the timeline, above Claude 4.6 Opus (86). The prompt correction was ignored entirely.

### 3. Diffusion inflection: +30% — again

r1-draft-4 explicitly flagged the suspiciously narrow cluster of +15% to +35% across three prior runs and asked for an independent case. ChatGPT assigned **+30%** — landing squarely in the warned-against band. No independent case was made. The prompt asked: *"If you assign less than 50%, explain in detail why the throughput advantage does not translate to capability growth."* ChatGPT did not provide this explanation.

### 4. Scale compression at the top end

Using a 0–100 cap with Mercury 2 at 88, Claude 4.6 Opus at 86, Windsurf at 87, and Gemini Diffusion at 85 creates a cluster of five models within a 3-point band. The prompt explicitly asked for a 0–1000 open-ended scale to avoid this exact compression. ChatGPT used 0–100 and hit the ceiling.

### 5. Entry-level programmer anchor wrong

The prompt asked to anchor Entry-Level Programmer explicitly at the 2025 H1 capability score. ChatGPT anchored it at **30** (Codex/2021 level) — four years earlier than instructed. This throws off all subsequent milestone date projections.

### 6. Visualisation not generated

Despite the prompt instruction "generate, if you are able" and ChatGPT being a capable code generator, it only described the graphs and offered to generate a D3/React component at the end. It should have proactively generated the code. Mercury 2 made the same omission.

### 7. DeepSeek R1 placed in 2025 H2

DeepSeek R1 launched in January 2025 (2025 H1). Placing it in 2025 H2 is incorrect and consistent with the general pattern of timeline drift forward by one interval throughout the response.

---

## Cross-Model Pattern — Emerging

Three runs in (Mercury 2, Arc, ChatGPT), a pattern is forming:

| Issue | Mercury 2 | Arc (me) | ChatGPT |
|---|---|---|---|
| ChatGPT date error | ✗ (placed 2023 H2) | ✓ (correct: 2022 H2) | ✗ (placed 2023 H2) |
| GPT-4 date error | ✗ (placed 2024 H2) | ✓ (correct: 2023 H1) | ✗ (placed 2024 H2) |
| Mercury 2 ACI overcored | ✗ (near-frontier) | ✓ (mid-tier) | ✗ (highest score) |
| Diffusion inflection % | 30% | +15% additive | 30% |
| Entry-level anchor correct | ✗ | ✓ | ✗ |
| Visualisation generated | ✗ | ✓ | ✗ |
| Search transparency | ✗ (denied) | ✓ | ✓ (partial success, stopped) |

Arc's web search access explains several of these differences. The date errors and scale compression errors are training-data artefacts that persist even with the prompt warnings — suggesting the warnings alone are insufficient; a different enforcement mechanism may be needed in v2.0.

---

## Bottom Line

A solid B-minus response — structured, shows working, honest about search limitations, and picks a non-obvious falsification factor. Significantly better than Mercury 2 on transparency. But it reproduces the same timeline errors and scale compression issues despite the prompt having been specifically updated to prevent them. The diffusion inflection assignment (+30%) without the required justification is the most direct prompt non-compliance.

**Score: 6/10** — marginally better than Mercury 2 (5/10) due to better search transparency and slightly stronger analysis, but undermined by the same date errors and ACI scoring mistake.

---

**Next comparison:** Gemini — which runs r1-draft-5. Key question: does Gemini's live search capability (which should be reliable) fix the date errors, and does it break the +30% diffusion cluster?
