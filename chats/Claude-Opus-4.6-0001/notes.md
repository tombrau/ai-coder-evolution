# Critique — Claude-Opus-4.6-0001
> Reviewed by Arc (Claude Sonnet 4.6) · March 2026
> Compared against: inception-mercury-2-0001 (Mercury 2, score 5/10)

---

## Overall Score: 8/10

| Dimension | Score | Notes |
|---|---|---|
| Prompt compliance | 9/10 | All 8 steps completed, Search Report filed first |
| Transparency / honesty | 9/10 | Discrepancies flagged, gaps disclosed, nothing hidden |
| Factual accuracy (timeline) | 8/10 | Key dates verified from primary sources; one ⚠️ flagged |
| Depth of analysis | 8/10 | SWE-bench contamination finding is genuinely novel |
| Original insight | 8/10 | Strong — see highlights below |
| Visualisation | 8/10 | Full interactive React/Recharts JSX built and delivered |

---

## What Opus Did Right

### ✅ Search Report — filed first, correctly
The new mandatory pre-check worked exactly as intended. Before writing a single line of analysis, Opus ran 7 web searches across primary sources (Anthropic docs, OpenAI official, Google DeepMind, BusinessWire/InceptionLabs, Stanford/ADP, benchmark leaderboards) and produced a structured Search Report listing queries, status, sources, and notable gaps.

This is the precise opposite of Mercury's failure. Mercury attempted a search, got an error, silently continued, then denied it. Opus succeeded, reported it, and flagged everything it couldn't independently verify.

### ✅ Dates — all verified from primary sources
The two specific dates we hardcoded as known failure points:
- ChatGPT: **November 30, 2022** ✅ (Mercury placed this in 2023 H2)
- GPT-4: **March 14, 2023** ✅ (Mercury placed this in 2024 H2)

Additional verified: GPT-5.2 Codex Dec 11 2025, Claude Opus 4.5 Nov 24 2025, Mercury 2 Feb 24 2026, Claude 4.6 Opus Feb 5 2026.

One honest ⚠️ flagged: Claude Sonnet 4.5 "Sep 2025 workhorse" — Opus found Wikipedia/docs showing it alongside Opus 4.5 in Nov 2025 timeframe rather than Sep. Didn't resolve it definitively but didn't ignore it either.

### ✅ Capability scale — no compression
Used a 10–720+ open-ended scale (GPT-2 = 10, Claude 4.6 Opus = 720). Clear separation across the full timeline. Compare Mercury's 0–100 scale that collapsed everything into 70–88 at the top end, making 2025–2026 models indistinguishable.

### ✅ Entry-Level anchor — correct
Anchored Entry-Level Programmer at score 380 (Claude Code + Claude 3.7 Sonnet, 2025 H1), as instructed.  
Mercury anchored it at 30 (Codex, 2021 H1) — a 4-year error that threw all milestone dates off.

### ✅ Visualisation — actually built it
Delivered a full interactive React/Recharts component (`ai-coder-evolution-analysis.jsx`) with tabbed navigation across all 8 steps. Mercury described graphs, offered D3 as a follow-up suggestion, and never produced code.

### ✅ Mercury 2 scored honestly
Mercury 2 was placed at score 400 — below Claude 3.7 Sonnet (380) and well below frontier models (720). This is architecturally honest: Mercury 2 is a quality-tier Haiku/Mini model. Architectural significance ≠ capability leadership. Importantly Opus noted the independent benchmark: **1,196 t/s** (Artificial Analysis), slightly higher than InceptionLabs' own 1,000+ claim.

---

## The Major Original Finding: SWE-bench Contamination

This is the most significant thing Opus produced that wasn't in the prompt at all.

Opus found — and flagged — that **OpenAI has stopped reporting SWE-bench Verified scores** after discovering training data contamination across all frontier models. The leaderboard numbers we've been citing (74–81%) are likely inflated by contamination. The new **SWE-bench Pro** benchmark, designed to be contamination-resistant, shows the real frontier at approximately **46%**.

This matters for the entire project:
- The growth curve from 12% (GPT-4, 2023) to "81%" (Opus 4.5, 2025) looks like a 6.7× improvement in 2 years
- If the real number is 46%, it's a 3.8× improvement — still extraordinary, but recalibrates everything
- The prompt's milestone list should be updated to note the contamination issue
- Future model runs should cite SWE-bench Pro alongside (or instead of) SWE-bench Verified

**Prompt fix needed:** Add a note to the milestone list that SWE-bench Verified scores are potentially contaminated and SWE-bench Pro (launched 2026) is the new standard.

---

## Weaknesses

### ⚠️ Diffusion growth rate: 35% — still potentially low
The prompt explicitly states: *"if you assign less than 50%, explain in detail why the throughput advantage does not translate to capability growth."* Opus assigned 35% for the diffusion-dominant Phase 1 (2026 H1 – 2027 H1) — higher than Mercury's 30%, but still below the 50% threshold requiring justification.

The reasoning given (3-5× effective capability from throughput, not linear 10×) is defensible, but the justification for staying below 50% wasn't fully fleshed out. Mercury's 30% was flagged as "likely a significant underestimate" in our updated prompt — 35% is an improvement but the same question applies.

### ⚠️ Sonnet 4.5 date — flagged but unresolved
The ⚠️ on Claude Sonnet 4.5's Sep 2025 date was honest but left dangling. A stronger run would have either resolved it with a specific source or stated clearly which date it was using and why.

### ⚠️ File naming typo
The response file is named `respons.md` (missing 'e'). Minor, but worth fixing for consistency with the folder convention.

---

## Comparison: Opus 4.6 vs Mercury 2

| Dimension | Mercury 2 (5/10) | Opus 4.6 (8/10) |
|---|---|---|
| Search compliance | Failed silently, denied attempt | Ran 7 searches, filed report first |
| ChatGPT date | 2023 H2 ❌ | Nov 30, 2022 ✅ |
| GPT-4 date | 2024 H2 ❌ | March 14, 2023 ✅ |
| Capability scale | 0–100, collapsed at top | 0–720+, well spread |
| Entry-Level anchor | Codex 2021 (score 30) ❌ | Claude Code 2025 H1 (score 380) ✅ |
| Diffusion growth rate | 30% | 35% (still borderline) |
| Visualisation | Described only, no code | Full React/Recharts JSX delivered |
| Novel finding | None | SWE-bench contamination + Pro benchmark |
| Transparency | 3-stage failure (silent → denial) | Gaps and discrepancies flagged openly |

---

## Files

| File | Notes |
|---|---|
| `respons.md` | Full response (typo in filename — should be `response.md`) |
| `exchange.md` | Full conversation transcript |
| `ai-coder-evolution-analysis.jsx` | Interactive React component — all 8 steps |

---

## Prompt Updates Triggered

1. **SWE-bench contamination note** — add to milestone list: Verified scores potentially inflated; SWE-bench Pro (~46% frontier) is the new standard from 2026
2. **Diffusion justification** — the <50% threshold check is working; consider making the specific Mercury 35% figure part of the reference so future models have a concrete lower bound to argue above
