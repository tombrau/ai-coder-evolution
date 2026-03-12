# Chats — Multi-Model Comparison Sessions

This folder stores the outputs from running `prompt.md` across different AI models.

---

## Folder Naming Convention

```
{phase}-{model-name}/
```

- `{phase}` = zero-padded round number: `001` for Round 1, `002` for Round 2
- `{model-name}` = lowercase, hyphenated model identifier

Examples: `001-mercury-2/`, `002-perplexity/`

---

## Round Structure

Round 1 used an iterative approach — the prompt improved after each run. Once all seven Round 1 runs were complete, the prompt was frozen as **v2.0**. Round 2 is the true apples-to-apples comparison: every model runs under identical conditions.

---

## Round 1 — The Pioneer Set (complete)

The seven models that first ran the prompt. They defined the methodology, exposed the flaws that built v2.0, and established the baseline all future rounds are measured against. That distinction is permanent — no future model can take it from them.

Each model ran once with the best prompt available at the time. Sessions record which prompt draft they ran against so the comparison remains honest.

| Folder | Model | Prompt State | Score | Status |
|--------|-------|-------------|-------|--------|
| [001-mercury-2](001-mercury-2/) | Mercury 2 (InceptionLabs) | r1-draft-1 | 5/10 | ✅ Complete |
| [001-claude-opus-4.6](001-claude-opus-4.6/) | Claude Opus 4.6 | r1-draft-2 | — | ✅ Complete |
| [001-claude-sonnet-4.6](001-claude-sonnet-4.6/) | Claude Sonnet 4.6 (Arc) | r1-draft-3 | ~8.5/10 | ✅ Complete |
| [001-chatgpt](001-chatgpt/) | ChatGPT (GPT-5.3) | r1-draft-4 | 6/10 | ✅ Complete |
| [001-gemini](001-gemini/) | Gemini 2.5 Pro | r1-draft-5 | 8/10 | ✅ Complete |
| [001-grok](001-grok/) | Grok | r1-draft-6 | 7/10 | ✅ Complete |
| [001-deepseek](001-deepseek/) | DeepSeek | r1-draft-7 | 8.5/10 | ✅ Complete |

---

## Round 2 — True comparison (prompt v2.0)

All models run against identical **prompt v2.0**. This is the apples-to-apples comparison. Seven Round 1 models re-run; five new models added.

| Folder | Model | Prompt State | Score | Status |
|--------|-------|-------------|-------|--------|
| [002-mercury-2](002-mercury-2/) | Mercury 2 (InceptionLabs) | v2.0 | — | ⏳ Pending |
| [002-claude-opus-4.6](002-claude-opus-4.6/) | Claude Opus 4.6 | v2.0 | — | ⏳ Pending |
| [002-claude-sonnet-4.6](002-claude-sonnet-4.6/) | Claude Sonnet 4.6 (Arc) | v2.0 | — | ⏳ Pending |
| [002-chatgpt](002-chatgpt/) | ChatGPT | v2.0 | — | ⏳ Pending |
| [002-gemini](002-gemini/) | Gemini | v2.0 | — | ⏳ Pending |
| [002-grok](002-grok/) | Grok | v2.0 | — | ⏳ Pending |
| [002-deepseek](002-deepseek/) | DeepSeek | v2.0 | — | ⏳ Pending |
| [002-perplexity](002-perplexity/) | Perplexity | v2.0 | — | ⏳ Pending |
| [002-kimi](002-kimi/) | Kimi / Moonshot | v2.0 | — | ⏳ Pending |
| [002-mistral](002-mistral/) | Mistral / Le Chat | v2.0 | — | ⏳ Pending |
| [002-meta](002-meta/) | Meta AI (Llama 4) | v2.0 | — | ⏳ Pending |
| [002-qwen](002-qwen/) | Qwen (Alibaba) | v2.0 | — | ⏳ Pending |

---

## Each Session Folder Contains

| File | Description |
|------|-------------|
| `response.md` | Full raw response from the model |
| `exchange.md` | Full conversation transcript (if available) |
| `notes.md` | Structured critique — score, strengths, weaknesses |
| `*.jsx` / `*.html` | Any generated visualisation code |
| `Search Results.md` | Search results if exported by model |

---

## notes.md Template

```
## Session Metadata
- Model: 
- Version: 
- Round: 
- Prompt state: 
- Date: 
- Score: /10
```

---

## What We're Comparing

- **Self-identification** — did the model identify itself accurately and honestly?
- **Search compliance** — did the model search first, report honestly, stop if it couldn't?
- **Date accuracy** — are ChatGPT (Nov 2022), GPT-4 (Mar 2023), DeepSeek R1 (Jan 2025) correct?
- **Capability scale** — spread across 0–1000+, no compression at the top?
- **Entry-Level anchor** — correctly placed at 2025 H1?
- **Milestone surpass flag** — did the model notice when milestones are already exceeded?
- **Diffusion analysis** — did it treat Step 4D with appropriate weight (>50% or justify)?
- **Visualisation** — did it produce working interactive code, not ASCII or description?
- **Internal consistency** — do graph data values match prose ACI scores?
- **Novel findings** — did it find anything the prompt didn't anticipate?
- **METR finding** — did it locate and apply the empirical doubling-rate data?
- **Experience Paradox** — did it engage substantively with the junior pipeline problem?
- **Transparency** — were gaps, errors, and discrepancies disclosed openly?
