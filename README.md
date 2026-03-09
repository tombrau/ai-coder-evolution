# AI Coder Evolution

> Visualizing the exponential growth of AI coding capabilities — from GPT-2 (2019) to projected futures out to 2040.

This project models the trajectory of AI coding capability growth, incorporating historical milestones, inflection point analysis, and projections through 2040. It was developed through a live exploratory conversation between a human and an AI assistant named **Sage**, and has been updated to reflect the dramatic acceleration observed in 2025–2026.

---

## 📁 Files in this Repository

| File | Description |
|------|-------------|
| `index.html` | Main webpage — hosts the interactive capability timeline visualisation |
| `app.tsx` / `app.js` | React component: interactive linear + logarithmic graphs (2019–2040) |
| `conversation.md` | Full transcript of the original Sage conversation (Markdown) |
| `conversation.html` | Full transcript styled as a futuristic dark-theme webpage |
| `prompt.md` | **Reusable structured prompt** — drop this into any AI to reproduce and extend the analysis |
| `graphs.JPG` | Static snapshot of the original graphs |

---

## 🔑 Key Findings

The analysis models three growth phases (updated March 2026):

| Phase | Period | Growth Rate / 6 months | Key Trigger |
|-------|--------|------------------------|-------------|
| Baseline | 2025–2027 H1 | 20% | Human-guided AI improvement |
| Self-Improvement | 2027 H1–2028 H2 | 120% | Self-modifying codebases & agentic loops |
| Quantum Acceleration | 2028 H2 onward | 350% | Practical quantum + hardware co-design |

**Programmer equivalence milestones (projected):**
- 🟢 **2025 H1** — Entry-level programmer (historical anchor)
- 🟡 **2027 H2** — Mid-level programmer
- 🟠 **2028 H1** — Senior programmer
- 🔴 **2029 H1** — Programming team equivalent
- 🔴 **2030+** — Beyond human comprehension

---

## ⚡ March 2026 Update — Mercury 2 Architectural Wildcard

The original model assumed all future improvements would occur within the **autoregressive paradigm** (better training, more parameters, longer context). The arrival of [InceptionLabs Mercury 2](https://www.inceptionlabs.ai) (Feb/Mar 2026) introduces a variable the original model did not account for: a **fundamentally different generation architecture**.

Mercury 2 is the first commercially available **diffusion-based reasoning LLM (dLLM)**, generating tokens in parallel rather than sequentially. It achieves ~1,000 tokens/second on standard NVIDIA GPUs — **5–10× faster** than equivalent autoregressive models at competitive cost. In agentic coding loops where latency compounds across dozens of inference calls, this throughput advantage could push all subsequent inflection points **12–18 months earlier** than the original model projected.

---

## 🚀 Live Demo

Hosted via GitHub Pages: **[https://tombrau.github.io/ai-coder-evolution/](https://tombrau.github.io/ai-coder-evolution/)**

---

## 🤖 Using the Prompt

`prompt.md` is a fully self-contained structured prompt designed to be dropped into any capable AI assistant (Claude, ChatGPT, Gemini, etc.). It instructs the AI to:

1. Run a live web search to update its knowledge
2. Reproduce the historical timeline (2019–2026) with verified milestones
3. Generate linear + logarithmic visualisations
4. Project capability growth out to 2040
5. Analyse inflection points including self-improvement, quantum computing, diffusion architecture proliferation, and recursive hardware co-design
6. Produce plain-English summaries for both non-technical and developer audiences

---

## 💬 Origin

> *"Mind-boggling trajectory is an understatement."* — Human participant, March 2025
>
> *By March 2026, the trajectory had already exceeded the original model's projections for 2027.*

This project began as a conversation exploring the arc from [ELIZA](https://web.njit.edu/~ronkowit/eliza.html) (1966) to autonomous coding agents — and what comes next.

---

## 📄 Licence

MIT
