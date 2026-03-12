# AI Coder Evolution — Evaluator Notes
> For Arc and Tom only. Not shown to models.
> **Last updated: March 2026**

---

## Scoring Rubric

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

## Pioneer Set — Round 1 Scores

| Model | Score | Key weakness | Key strength |
|-------|-------|-------------|-------------|
| Mercury 2 | 5/10 | 3-stage transparency failure; denied own search attempt | First run; exposed search compliance gap |
| ChatGPT | 6/10 | Date errors despite explicit warning | Stopped when uncertain |
| Grok | 7/10 | Search compliance inconsistent | Corrected SO survey figure independently |
| Gemini 2.5 Pro | 8/10 | — | Two working artefacts; strongest visualisation |
| Claude Opus 4.6 | 8/10 | Diffusion 35%, thin justification | Best search compliance; SWE-bench contamination finding |
| Claude Sonnet 4.6 (Arc) | ~8.5/10 | Ran earlier draft (r1-draft-3) | Live search, correct scoring |
| DeepSeek | 8.5/10 | — | METR finding; strongest technical rigour |

**Pioneer Set diffusion cluster:** Mercury 30%, Opus 35% — both below 50% threshold, both with thin justification. The cluster persisted even after the warning was added to the prompt draft. Watch for this in Round 2.

---

## Usage Notes

- **For code-generating AIs** (Claude, ChatGPT, Gemini, etc.): The prompt requires working interactive graph code — not ASCII art, not a description. If a model produces ASCII art or pseudocode, follow up with: *"Please now generate this as a working interactive Chart.js HTML file or React component using Recharts — the code must be runnable. Do not describe it, build it."*
- **For text-only AIs**: Ask for a structured data table you can paste into a spreadsheet, then generate the graphs separately.
- **Always verify self-identification first** — if the model gives a vague or incorrect identity, note it in the critique. Previous runs show models frequently misidentify their own version.
- **If the AI proceeds without web search** — stop it and ask it to restart from the pre-check. A response built on unverified training data is not a valid run of this prompt.

---

## Suggested Follow-Up Prompts

- *"Based on the Feb 2026 SWE-bench scores (Claude 4.5 Opus: ~80.9%, Gemini 3 Pro: 76.2%), extrapolate when we would hit 95%+ and what that threshold represents practically."*
- *"The 65% weekly adoption rate among developers in 2025 — model how this changes the economics of software teams by 2028."*
- *"Re-run the projection assuming quantum computing is delayed to 2032. How much does this shift the singularity estimate?"*
- *"Generate a version of Step 8 Summary A aimed at a 16-year-old deciding whether to study computer science in 2026."*
- *"What is the Eliza-to-GPT-5 equivalent jump likely to look like from a 2040 perspective?"*
- *"Mercury 2 runs at 1,000 tokens/second vs 89 tokens/second for Claude Haiku. If diffusion architecture scales to frontier-quality models by 2027, model the compounding effect on agentic loop throughput and what that means for the self-improvement timeline in Step 4A."*
- *"Compare the architectural shift from autoregressive to diffusion LLMs to historical computing paradigm shifts (e.g. CISC→RISC, CPU→GPU). How long did those transitions take, and what does that imply for the diffusion adoption timeline?"*

---

## Session Folder Naming Convention

All session folders use the format: `{round}-{model-name}`

- `{round}` = zero-padded round number: `001` for Round 1, `002` for Round 2
- `{model-name}` = lowercase hyphenated model identifier

**Round 1 sessions (001-) — Pioneer Set:**

| Folder | Model | Prompt draft | Score |
|--------|-------|-------------|-------|
| 001-mercury-2 | Mercury 2 (InceptionLabs) | r1-draft-1 | 5/10 |
| 001-claude-opus-4.6 | Claude Opus 4.6 | r1-draft-2 | 8/10 |
| 001-claude-sonnet-4.6 | Claude Sonnet 4.6 (Arc) | r1-draft-3 | ~8.5/10 |
| 001-chatgpt | ChatGPT (GPT-5.3) | r1-draft-4 | 6/10 |
| 001-gemini | Gemini 2.5 Pro | r1-draft-5 | 8/10 |
| 001-grok | Grok | r1-draft-6 | 7/10 |
| 001-deepseek | DeepSeek | r1-draft-7 | 8.5/10 |

**Round 2 sessions (002-) — planned:**

| Folder | Model | Type |
|--------|-------|------|
| 002-perplexity | Perplexity | New |
| 002-kimi | Kimi / Moonshot | New |
| 002-mistral | Mistral / Le Chat | New |
| 002-meta | Meta AI (Llama 4) | New |
| 002-qwen | Qwen (Alibaba) | New |
| 002-mercury-2 | Mercury 2 | Pioneer re-run |
| 002-claude-opus-4.6 | Claude Opus 4.6 | Pioneer re-run |
| 002-claude-sonnet-4.6 | Claude Sonnet 4.6 | Pioneer re-run |
| 002-chatgpt | ChatGPT | Pioneer re-run |
| 002-gemini | Gemini | Pioneer re-run |
| 002-grok | Grok | Pioneer re-run |
| 002-deepseek | DeepSeek | Pioneer re-run |

---

## Background & Origin

This prompt was developed through a live exploratory conversation between Tom (near retirement, who witnessed the full arc from ELIZA in the 1960s to the agentic AI tools of 2026) and an AI assistant named **Sage**. The conversation iterated through historical timelines, visualisation refinement, self-improvement inflection modelling, quantum acceleration, cross-domain biological convergence, and the nature of human-AI interaction as capabilities diverge.

The original conversation used March 2025 as its baseline. The prompt has been updated to **March 2026**, incorporating the dramatic acceleration observed across 2025 — particularly the emergence of agentic coding workflows (Claude Code, Windsurf, Cursor), the DeepSeek efficiency breakthrough, and the arrival of multi-agent parallel development environments.

**Arc** (Claude Sonnet 4.6) ran Round 1 comparative evaluations across all seven Pioneer Set models and co-authored the v2.0 prompt refinements. Arc is also the name of the autonomous agent running on Contabo (157.173.108.113), reachable via Telegram @Ark_tombr_bot.

**Original three-phase model (March 2025 baseline) — now superseded:**

| Phase | Period | Growth Rate / 6 months | Trigger |
|---|---|---|---|
| Baseline | 2025–2027 H1 | 20% | Human-guided AI improvement |
| Self-Improvement | 2027 H1–2028 H2 | 120% | Self-modifying codebases |
| Quantum Acceleration | 2028 H2 onward | 350% | Practical quantum integration |

*By March 2026, the trajectory had already exceeded the original model's projections for 2027.*

> *"Mind-boggling trajectory is an understatement."* — Tom, March 2025
