# Round 2 — Candidate Models

> Compiled by Arc (Claude Sonnet 4.6) · March 2026
>
> All Round 1 models will re-run under identical prompt v2.0 once it is declared.
> This file tracks additional candidates for Round 2 expansion, with URLs, access notes, and rationale.

---

## Round 1 — The Pioneer Set (re-runs required for v2.0 comparison)

These seven models were the first to run the prompt. Round 2 re-runs them under identical v2.0 conditions for a true apples-to-apples comparison.

| Model | URL | Notes |
|-------|-----|-------|
| Mercury 2 (InceptionLabs) | https://chat.inceptionlabs.ai | Re-run required — ran r1-draft-1, earliest and weakest prompt state |
| Claude Opus 4.6 | https://claude.ai | Re-run required |
| Claude Sonnet 4.6 (Arc) | https://claude.ai | Re-run required |
| ChatGPT (GPT-5.x) | https://chatgpt.com | Re-run required |
| Gemini 2.5 Pro | https://gemini.google.com | Re-run required |
| Grok | https://grok.com | Re-run required |
| DeepSeek | https://chat.deepseek.com | Re-run required — ran r1-draft-7, scored 8.5/10 |

---

## Round 2 — New Candidates

### Priority 1 — High value, distinct perspective

| Model | URL | Rationale | Access |
|-------|-----|-----------|--------|
| **Perplexity** | https://www.perplexity.ai | Search-native architecture — search is the design, not a tool call. Likely cleanest search report of any model. Unknown whether it can sustain 8-step analytical depth. | Free tier available |
| **Kimi / Moonshot** | https://kimi.ai | In the milestone list *as a subject* (Kimi K2.5, Feb 2026) — same meta-tension as Mercury 2 and DeepSeek reviewing themselves. Chinese frontier lab perspective on a trajectory partly driven by Chinese labs. | May require phone number for signup |
| **Mistral / Le Chat** | https://chat.mistral.ai | European frontier model. Different regulatory context (EU AI Act). Lighter RLHF philosophy, independent training lineage. Adds geographic and philosophical diversity to the set. | Free tier available |

### Priority 2 — Strong case, slightly less urgent

| Model | URL | Rationale | Access |
|-------|-----|-----------|--------|
| **Meta AI (Llama 4)** | https://www.meta.ai | Only major model with public weights. Open-source frontier representative. Meaningful question: does open vs closed training affect prompt compliance or analytical depth? | Free |
| **Qwen (Alibaba)** | https://chat.qwen.ai | Specifically strong on coding benchmarks. Most direct coding-specialist comparison in the set. Second Chinese frontier lab. | Regional access issues possible from AU — may need VPN |

### Priority 3 — Interesting outliers

| Model | URL | Rationale | Access |
|-------|-----|-----------|--------|
| **Microsoft Copilot** | https://copilot.microsoft.com | GPT underneath but with different enterprise guardrails. May expose prompt-compliance differences vs raw ChatGPT on the same base model. | Free |
| **Pi (Inflection AI)** | https://pi.ai | Conversational-first design philosophy. Very different posture — almost certainly the most distinctive stylistic outlier in the set. Unknown whether it can do structured 8-step analysis at all. | Free |
| **HuggingChat** | https://huggingface.co/chat | Open-source model aggregator. Can run Llama, Mistral, Qwen through one interface. Useful for testing multiple open-source models efficiently. | Free |
| **Cohere Command** | https://coral.cohere.com | Enterprise-focused, strong on RAG and search, different training philosophy. Less consumer-facing but interesting for the search compliance dimension. | Free tier available |

---

## Tracking

| Model | Round 1 Status | Round 2 Status | Prompt Draft | Score |
|-------|---------------|----------------|--------------|-------|
| Mercury 2 | ✅ Complete | ⏳ Pending v2.0 | r1-draft-1 | 5/10 |
| ChatGPT | ✅ Complete | ⏳ Pending v2.0 | r1-draft-4 | 6/10 |
| Grok | ✅ Complete | ⏳ Pending v2.0 | r1-draft-6 | 7/10 |
| Gemini 2.5 Pro | ✅ Complete | ⏳ Pending v2.0 | r1-draft-5 | 8/10 |
| Claude Opus 4.6 | ✅ Complete | ⏳ Pending v2.0 | r1-draft-2 | 8/10 |
| Claude Sonnet 4.6 (Arc) | ✅ Complete | ⏳ Pending v2.0 | r1-draft-3 | ~8.5/10 |
| DeepSeek | ✅ Complete | ⏳ Pending v2.0 | r1-draft-7 | 8.5/10 |
| Perplexity | ⏳ Not started | ⏳ Pending v2.1 | v2.1 | — |
| Kimi / Moonshot | ⏳ Not started | ⏳ Pending v2.1 | v2.1 | — |
| Mistral / Le Chat | ⏳ Not started | ⏳ Pending v2.1 | v2.1 | — |
| Meta AI (Llama 4) | ⏳ Not started | ⏳ Pending v2.1 | v2.1 | — |
| Qwen (Alibaba) | ⏳ Not started | ⏳ Pending v2.1 | v2.1 | — |
| Microsoft Copilot | ⏳ Not started | ⏳ Pending v2.0 | v2.0 | — |
| Pi (Inflection AI) | ⏳ Not started | ⏳ Pending v2.0 | v2.0 | — |

---

## Key Questions for New Candidates

These are the open questions Round 2 should answer for each new model:

1. **Search architecture** — does search-native design (Perplexity) produce better data quality than search-as-tool?
2. **Self-review bias** — do Kimi and DeepSeek score themselves differently in the milestone section?
3. **Regulatory posture** — does Mistral's EU AI Act context affect how it handles uncertainty or limiting factors?
4. **Open vs closed** — does Meta AI's open-source lineage correlate with any measurable difference in compliance or depth?
5. **Visualisation gap** — only Gemini produced unprompted visualisations in Round 1. Does v2.0's harder ask change that?
6. **Diffusion cluster** — does the cluster converge again at ~30% or does the updated prompt break it more consistently?
