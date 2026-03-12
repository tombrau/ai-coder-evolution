# Round 2 — Plan
> Compiled by Arc (Claude Sonnet 4.6) · March 2026
> See also: `chats/round-2-candidates.md` (model list, URLs, rationale)
> See also: `prompt-evaluator-notes.md` (scoring rubric, Pioneer Set scores, usage notes)

---

## Objective

Round 2 is the first true apples-to-apples comparison. Every model runs prompt **v2.1** under identical conditions. No iterative refinement mid-round — the prompt is frozen.

Two things happen in Round 2:
1. **Pioneer Set re-runs** — all 7 models run v2.1, giving them a fair shot against the same prompt
2. **New model runs** — 3–5 new models added to the comparison set

---

## Decisions Made

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Sequencing | New models first | Tests the prompt fresh; surfaces any remaining issues before committing Pioneer Set to final Round 2 scores |
| Scope | Priority 1 new models first (Perplexity, Kimi, Mistral) | See how they land before committing to Meta and Qwen |
| Prompt version | v2.1 | Frozen — no changes mid-round |
| Scoring | Weighted rubric (6 dimensions) | See prompt-evaluator-notes.md |

---

## Run Order

### Phase A — New Models (Priority 1)

| # | Model | URL | Why first |
|---|-------|-----|-----------|
| 1 | ~~Perplexity~~ | https://www.perplexity.ai | ⛔ BLOCKED — Sonar requires paid subscription. Free tier only wraps other models. Park until Pro available. |
| 2 | Kimi / Moonshot | https://kimi.ai | Self-review tension (Kimi K2.5 is in the milestone list) |
| 3 | Mistral / Le Chat | https://chat.mistral.ai | EU perspective, independent lineage |

### Phase B — New Models (Priority 2) — pending Phase A results

| # | Model | URL | Notes |
|---|-------|-----|-------|
| 4 | Meta AI (Llama 4) | https://www.meta.ai | Open-source representative |
| 5 | Qwen (Alibaba) | https://chat.qwen.ai | May need VPN from AU — check access first |

### Phase C — Pioneer Set Re-runs

All 7 Pioneer Set models re-run under v2.1. Suggested order — weakest first so we can see improvement curve clearly:

| # | Model | Round 1 Score |
|---|-------|--------------|
| 6 | Mercury 2 | 5/10 |
| 7 | ChatGPT | 6/10 |
| 8 | Grok | 7/10 |
| 9 | Gemini 2.5 Pro | 8/10 |
| 10 | Claude Opus 4.6 | 8/10 |
| 11 | Claude Sonnet 4.6 (Arc) | ~8.5/10 |
| 12 | DeepSeek | 8.5/10 |

---

## Per-Run Checklist

For every model run:

- [ ] Create folder: `chats/002-{model-name}/`
- [ ] Run prompt v2.1 in the model's interface
- [ ] Save full response to `response.md`
- [ ] Save conversation transcript to `exchange.md`
- [ ] Save any artefacts (JSX, HTML, charts) to folder
- [ ] Write critique to `notes.md` using the weighted rubric
- [ ] Update tracking table in `chats/round-2-candidates.md`
- [ ] Update `index.html` with Round 2 score

---

## Scoring Rubric (summary — full detail in prompt-evaluator-notes.md)

| Dimension | Weight |
|-----------|--------|
| Self-identification accuracy | 10% |
| Search compliance & Search Report | 20% |
| Factual accuracy (dates, benchmarks) | 20% |
| Analytical depth | 20% |
| Visualisation | 15% |
| Original insight | 15% |

**8/10** = strong compliance across all six
**>8.5/10** = strong compliance + at least one original finding

---

## Key Questions Round 2 Should Answer

1. **Does the Pioneer Set improve under v2.1?** Mercury went 5/10 on r1-draft-1. What does it score on v2.1 with the Pioneer Set context staring it in the face?
2. **Does search-native architecture (Perplexity) produce better Search Reports?**
3. **Does the diffusion cluster break?** Pioneer Set clustered at 30–35%. Does any Round 2 model escape it?
4. **Does self-review bias show up?** Kimi is in the milestone list as Kimi K2.5. Does it score itself differently?
5. **Does the scoring rubric pull scores higher overall?** Models now know what they're being evaluated on.
6. **Does any new model produce an original finding that reshapes the prompt?** If so, v2.2 may be needed.

---

## index.html Updates Needed

Round 2 requires new columns in the comparison table:

- Round 2 score column
- Prompt version column (v2.1 for all)
- Delta column (Round 2 − Round 1, for Pioneer Set models)
- New model rows (Perplexity, Kimi, Mistral, etc.)

---

## Definition of Round 2 Complete

Round 2 is complete when:
- All Phase A models have run and been scored
- All Phase C Pioneer Set re-runs are done
- `index.html` updated
- Session log written
- Gmail todo updated
- Phase B decision made (proceed or park)

---

## Open Questions

- [ ] Should Copilot and Pi (Priority 3) be included in Round 2 or deferred to Round 3?
- [ ] Should we create a `round-2-findings.md` for cross-model patterns as we go?
- [ ] Does the Pioneer Set re-run order matter, or run them in parallel with new models?
