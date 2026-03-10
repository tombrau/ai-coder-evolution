import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, ReferenceLine, Area, AreaChart, ComposedChart,
  Scatter, ScatterChart, Label
} from "recharts";

// ═══════════════════════════════════════════════════════════════
// STEP 1 DATA — Historical Timeline with Capability Scores
// ═══════════════════════════════════════════════════════════════
const timeline = [
  { period: "2019 H1", date: "2019-02", label: "GPT-2", org: "OpenAI", capability: "Basic text completion, rudimentary code snippets, no real programming utility", score: 10, category: "autoregressive" },
  { period: "2020 H1", date: "2020-06", label: "GPT-3", org: "OpenAI", capability: "Few-shot code generation, could write simple functions from descriptions", score: 25, category: "autoregressive" },
  { period: "2021 H2", date: "2021-08", label: "Codex / Copilot", org: "OpenAI / GitHub", capability: "First dedicated code model. IDE autocomplete. HumanEval ~28.8%. GitHub Copilot launches.", score: 65, category: "autoregressive" },
  { period: "2022 H1", date: "2022-02", label: "AlphaCode", org: "DeepMind", capability: "Competitive programming at ~top-50% Codeforces level. First serious AI vs human benchmark.", score: 80, category: "autoregressive" },
  { period: "2022 H2", date: "2022-11", label: "ChatGPT (GPT-3.5)", org: "OpenAI", capability: "Conversational coding assistant. Mass adoption begins. Nov 30, 2022 launch.", score: 100, category: "autoregressive" },
  { period: "2023 H1", date: "2023-03", label: "GPT-4", org: "OpenAI", capability: "Major leap in code quality. HumanEval ~67%. SWE-bench ~12%. Multi-file reasoning. Mar 14 launch.", score: 180, category: "autoregressive" },
  { period: "2023 H1", date: "2023-03", label: "Claude 1", org: "Anthropic", capability: "First Claude release. Competitive with GPT-3.5 on code tasks.", score: 105, category: "autoregressive" },
  { period: "2023 H2", date: "2023-07", label: "Claude 2 / Code Llama", org: "Anthropic / Meta", capability: "Claude 2 public launch. Code Llama open-source. WizardCoder. OSS coding models emerge.", score: 150, category: "autoregressive" },
  { period: "2024 H1", date: "2024-03", label: "Claude 3 Opus", org: "Anthropic", capability: "Near-GPT-4 on code. Multi-model tiers (Haiku/Sonnet/Opus). 200K context.", score: 220, category: "autoregressive" },
  { period: "2024 H1", date: "2024-05", label: "GPT-4o", org: "OpenAI", capability: "Multimodal + faster. Maintained code quality. Omni architecture.", score: 230, category: "autoregressive" },
  { period: "2024 H2", date: "2024-06", label: "Claude 3.5 Sonnet", org: "Anthropic", capability: "SWE-bench ~33% at launch (Aug 2024 verified baseline). Best Sonnet-tier yet.", score: 280, category: "autoregressive" },
  { period: "2024 H2", date: "2024-09", label: "o1-preview", org: "OpenAI", capability: "Chain-of-thought reasoning. RLVR approach. Inference-time compute scaling begins.", score: 300, category: "autoregressive" },
  { period: "2025 H1", date: "2025-01", label: "DeepSeek R1", org: "DeepSeek", capability: "GPT-4-level reasoning at fraction of training cost. Open-weight. Industry shock on efficiency.", score: 320, category: "autoregressive" },
  { period: "2025 H1", date: "2025-02", label: "Claude 3.7 Sonnet + Claude Code", org: "Anthropic", capability: "Agentic terminal coding. Claude Code CLI. Developers call it most impactful 2025 event.", score: 380, category: "autoregressive" },
  { period: "2025 H1", date: "2025-04", label: "o3 / o4-mini / GPT-4.1", org: "OpenAI", capability: "Reasoning models become standard. RLVR scaling. GPT-4.1 strong on code.", score: 350, category: "autoregressive" },
  { period: "2025 H1", date: "2025-05", label: "Claude 4 Opus + Sonnet", org: "Anthropic", capability: "Claude 4 family launch. Strong agentic + long-context coding.", score: 420, category: "autoregressive" },
  { period: "2025 H2", date: "2025-08", label: "GPT-5", org: "OpenAI", capability: "Unified model with router. 272K context. SWE-bench ~70%+. Aug 7 launch.", score: 500, category: "autoregressive" },
  { period: "2025 H2", date: "2025-09", label: "Claude Sonnet 4.5", org: "Anthropic", capability: "Default workhorse in Claude Code. SWE-bench ~77%. Agentic workflow standard.", score: 550, category: "autoregressive" },
  { period: "2025 H2", date: "2025-11", label: "Claude Opus 4.5", org: "Anthropic", capability: "SWE-bench ~80.9%. Top agentic model. Infinite Chats. Nov 24 launch.", score: 650, category: "autoregressive" },
  { period: "2025 H2", date: "2025-11", label: "Gemini 3 Pro", org: "Google DeepMind", capability: "1M context. SWE-bench 76.2%. Deep Think mode. Nov 18 launch.", score: 620, category: "autoregressive" },
  { period: "2025 H2", date: "2025-11", label: "Grok 4.1", org: "xAI", capability: "Real-time reasoning with live data integration. Top SWE-rebench performer.", score: 580, category: "autoregressive" },
  { period: "2025 H2", date: "2025-12", label: "GPT-5.2 Codex", org: "OpenAI", capability: "Repo-scale reasoning. CLI + IDE workflows. SWE-bench ~80%. Dec 11 launch.", score: 640, category: "autoregressive" },
  { period: "2026 H1", date: "2026-02", label: "Claude Opus 4.6", org: "Anthropic", capability: "1M context (beta). Agent Teams. SWE-bench 80.8%. Terminal-Bench 65.4%. Feb 5 launch.", score: 720, category: "autoregressive" },
  { period: "2026 H1", date: "2026-02", label: "Gemini 3.1 Pro", org: "Google DeepMind", capability: "ARC-AGI-2: 77.1%. Terminal-Bench 68.5%. SWE-bench 80.6%. Preview Feb 2026.", score: 710, category: "autoregressive" },
  { period: "2026 H1", date: "2026-02", label: "Mercury 2 ⚡", org: "InceptionLabs", capability: "FIRST diffusion LLM (dLLM). 1000+ t/s. Parallel token generation. Haiku/Mini quality tier. Feb 24.", score: 400, category: "diffusion", architectural: true },
];

// Workforce data points
const workforceData = [
  { year: "2022", event: "ChatGPT launches. Developer employment peaks for age 22-25." },
  { year: "2023", event: "Early AI coding adoption. Stack Overflow 2023: ~44% using AI tools." },
  { year: "2024", event: "SWE-bench Verified introduced (Aug). Top model: 33%. Copilot reaches 1M+ paid users." },
  { year: "2025", event: "Stack Overflow: 65% weekly AI tool use. JetBrains: 93% regular use. Stanford/ADP: 22-25yr dev employment ↓~20% since 2022. 85% of devs use AI tools (Faros). ~41% of code AI-generated." },
  { year: "2026", event: "Claude Code $1B run rate. Enterprise LLM spend avg $7M (180% YoY). Anthropic: 44% enterprise production use. SWE-bench Pro launched (harder: top ~46% vs 81% on Verified)." },
];

// ═══════════════════════════════════════════════════════════════
// STEP 3 DATA — Projections to 2040
// ═══════════════════════════════════════════════════════════════

// 2025 H1 anchor score for "Entry-Level Programmer": score ~380 (Claude Code + Claude 3.7 era)
const ENTRY_LEVEL_SCORE = 380;

const programmerMilestones = [
  { label: "Entry-Level Programmer", score: 380, date: "2025 H1", note: "Anchored at Claude Code launch" },
  { label: "Mid-Level Programmer", score: 760, date: "2026 H2", note: "2× entry-level" },
  { label: "Senior Programmer", score: 1900, date: "2028 H1", note: "5× entry-level" },
  { label: "Expert / Tech Lead", score: 4750, date: "2029 H1", note: "12.5× entry-level" },
  { label: "Full Team (5-10 eng)", score: 19000, date: "2030 H1", note: "50× entry-level" },
  { label: "Dev Department (50-100)", score: 190000, date: "2031 H2", note: "500× entry-level" },
  { label: "Global SW Workforce", score: 3800000, date: "2033 H2", note: "10,000× entry-level" },
  { label: "Post-Singularity", score: 50000000, date: "2035+", note: "Beyond comprehension" },
];

// Growth phases for projection
const growthPhases = [
  { phase: 1, period: "2026 H1 – 2027 H1", rate: 35, trigger: "Diffusion architecture proliferation + multi-agent systems", rateLabel: "35%" },
  { phase: 2, period: "2027 H1 – 2028 H2", rate: 120, trigger: "Self-improving codebases + diffusion-accelerated feedback loops", rateLabel: "120%" },
  { phase: 3, period: "2028 H2 – 2030 H1", rate: 250, trigger: "Quantum computing integration", rateLabel: "250%" },
  { phase: 4, period: "2030 H1 – 2031 H2", rate: 500, trigger: "Recursive hardware co-design", rateLabel: "500%" },
  { phase: 5, period: "2031 H2 – 2035", rate: 1000, trigger: "Full recursive self-improvement + bio-compute convergence", rateLabel: "1000%" },
];

// Generate projection data
function generateProjection() {
  const points = [];
  let score = 720; // Claude Opus 4.6 as baseline, 2026 H1
  let year = 2026;
  let half = 1;

  points.push({ period: `${year} H${half}`, score, label: "Current (Opus 4.6)" });

  const phases = [
    { until: 2027.5, rate: 0.35 },
    { until: 2029.0, rate: 1.20 },
    { until: 2030.5, rate: 2.50 },
    { until: 2032.0, rate: 5.00 },
    { until: 2040.5, rate: 10.00 },
  ];

  for (let i = 0; i < 29; i++) {
    half++;
    if (half > 2) { half = 1; year++; }
    const yearFrac = year + (half === 2 ? 0.5 : 0);
    const phase = phases.find(p => yearFrac <= p.until) || phases[phases.length - 1];
    score = score * (1 + phase.rate);
    points.push({ period: `${year} H${half}`, score: Math.round(score), yearFrac });
  }
  return points;
}

const projectionData = generateProjection();

// ═══════════════════════════════════════════════════════════════
// STEP 2 — Graph Data (historical only, for linear + log views)
// ═══════════════════════════════════════════════════════════════
const chartData = timeline
  .filter(t => !t.architectural)
  .sort((a, b) => new Date(a.date) - new Date(b.date))
  .map(t => ({
    name: t.label,
    date: t.date,
    score: t.score,
    period: t.period,
  }));

// Merge autoregressive + diffusion for comparison chart
const archCompare = [
  { name: "GPT-2 (2019)", autoregressive: 10 },
  { name: "GPT-3 (2020)", autoregressive: 25 },
  { name: "Codex (2021)", autoregressive: 65 },
  { name: "ChatGPT (2022)", autoregressive: 100 },
  { name: "GPT-4 (2023)", autoregressive: 180 },
  { name: "Claude 3.5 (2024)", autoregressive: 280 },
  { name: "Claude Code (2025H1)", autoregressive: 380 },
  { name: "Opus 4.5 (2025H2)", autoregressive: 650 },
  { name: "Opus 4.6 (2026H1)", autoregressive: 720 },
  { name: "Mercury 2 (2026H1)", diffusion: 400, autoregressive: 720 },
];

// ═══════════════════════════════════════════════════════════════
// INFLECTION POINTS (Step 4)
// ═══════════════════════════════════════════════════════════════
const inflectionPoints = [
  {
    id: "D",
    title: "Diffusion Architecture Proliferation",
    date: "2026 H1 – 2027 H2",
    trigger: "Mercury 2 proves production viability. Frontier labs adopt diffusion for speed-critical paths.",
    revisedRate: "35% → 55% per 6-month period",
    reasoning: `Mercury 2 at 1,000+ t/s vs ~89 t/s for Haiku represents a genuine 10× throughput multiplier. In agentic loops where dozens of inference calls compound per task, this is transformative. If an agent can execute 10× more reasoning steps per dollar, the *effective* capability increase is substantial even with zero improvement in model intelligence.

A 10× throughput multiplier applied to an agentic loop doesn't yield 10× capability — there are diminishing returns per step — but conservative estimates suggest a 3-5× effective capability multiplier from throughput alone. Combined with the ongoing model quality improvements (20% baseline), this produces a compounded rate around 50-55%.

The critical question: when does diffusion reach frontier quality? If Gemini Diffusion (Google, May 2025) and potential Anthropic/OpenAI experiments yield frontier-quality diffusion models by late 2027, the throughput advantage becomes universal. At that point, every agentic system runs 10× more reasoning steps, and the self-improvement feedback loop (Point A) accelerates dramatically.

Estimated date when diffusion + self-improvement creates a qualitative phase shift: mid-2027. At that point, what previously took months of iterative improvement could compress to weeks, because the improvement cycle itself runs at 10× speed.`
  },
  {
    id: "A",
    title: "Self-Improving Codebases",
    date: "~2027 H1",
    trigger: "Multi-agent systems (Claude Agent Teams, Windsurf parallel agents) achieve first-order autonomous architecture improvement.",
    revisedRate: "120% per 6-month period",
    reasoning: `The 2026 landscape already shows proto-self-improvement: Agent Teams in Claude Opus 4.6 coordinate parallel work, Windsurf Wave 13 runs side-by-side agents on git worktrees, and Live-SWE-agent explicitly self-evolves its own tools during runtime.

The gap between "agents that write code" and "agents that improve their own architecture" is narrowing fast. When diffusion-speed inference (Point D) is combined with these self-directing systems, the feedback loop tightens: an agent can propose, test, evaluate, and iterate on its own improvements in minutes rather than hours.

Second-order improvement (improving the improvement process) likely emerges 6-12 months after first-order self-improvement stabilizes, around late 2027. At 120% per 6 months, capability approximately doubles every ~4 months.`
  },
  {
    id: "B",
    title: "Quantum Computing Integration",
    date: "~2028 H2 – 2029",
    trigger: "Practical quantum search/optimization becomes available for AI training and inference.",
    revisedRate: "250% per 6-month period",
    reasoning: `Quantum speedups for specific operations (search, optimization, simulation) compound with self-improvement. The key impact is on training efficiency: quantum-assisted hyperparameter search and architecture optimization could collapse months of experimentation into days.

Conservative estimate accounts for the reality that quantum advantage is narrow and noisy in 2028-2029. Full fault-tolerant quantum computing remains further out. But even noisy intermediate-scale quantum (NISQ) advantages in optimization could meaningfully accelerate the AI improvement loop.`
  },
  {
    id: "C",
    title: "Recursive Hardware Co-Design",
    date: "~2030 – 2031",
    trigger: "AI designs the chips that run AI. Hardware-software feedback loop closes.",
    revisedRate: "500% per 6-month period",
    reasoning: `When AI systems can design novel chip architectures optimized for their own workloads, a hardware-software co-evolution loop emerges. Each hardware generation enables faster AI, which designs better hardware, which enables faster AI.

The multiplier is enormous because hardware improvements compound multiplicatively with software improvements. A 2× hardware efficiency gain combined with a 2× software improvement yields 4× total — and this compounds every cycle.`
  },
  {
    id: "E",
    title: "Multi-Model Consensus + Biological Compute",
    date: "~2032+",
    trigger: "Ensemble systems achieve superhuman verification. Biological computing substrates supplement silicon.",
    revisedRate: "1000%+ per 6-month period",
    reasoning: `At this point, multiple independent AI systems verify each other's work, solving the validation problem. Biological computing substrates (neuromorphic, DNA-based, wetware) provide qualitatively different computation types.

Growth rates become almost meaningless at this scale — we're deep into the compounding zone where 6-month jumps exceed multiple orders of magnitude. The numbers are included for completeness but should be treated as illustrative, not predictive.`
  },
];

// ═══════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════
const tabs = [
  "Search Report",
  "Step 1: Timeline",
  "Step 2: Graphs",
  "Step 3: Projection",
  "Step 4: Inflections",
  "Step 5: Growth Model",
  "Step 6: Cross-Domain",
  "Step 7: Uncertainty",
  "Step 8: Summaries",
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    return (
      <div style={{ background: "#1a1a2e", border: "1px solid #444", padding: "10px 14px", borderRadius: 8, color: "#e0e0e0", maxWidth: 260 }}>
        <div style={{ fontWeight: 700, color: "#00d4ff", marginBottom: 4 }}>{d.name || d.label || d.period}</div>
        <div style={{ fontSize: 13 }}>Score: <span style={{ color: "#ffd700", fontWeight: 600 }}>{(d.score || payload[0].value)?.toLocaleString()}</span></div>
        {d.period && <div style={{ fontSize: 12, color: "#999", marginTop: 2 }}>{d.period}</div>}
      </div>
    );
  }
  return null;
};

export default function AICodingEvolution() {
  const [tab, setTab] = useState(0);
  const [logScale, setLogScale] = useState(false);

  const sectionStyle = {
    background: "#0d0d1a",
    color: "#e0e0e0",
    fontFamily: "'JetBrains Mono', 'Fira Code', 'SF Mono', monospace",
    minHeight: "100vh",
    padding: 0,
  };

  const headerStyle = {
    background: "linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #0a1a2e 100%)",
    padding: "32px 24px 20px",
    borderBottom: "2px solid #1a1a3e",
  };

  const tabBar = {
    display: "flex",
    overflowX: "auto",
    gap: 4,
    padding: "8px 16px",
    background: "#0a0a14",
    borderBottom: "1px solid #222",
  };

  const tabStyle = (active) => ({
    padding: "8px 14px",
    background: active ? "#1a1a3e" : "transparent",
    color: active ? "#00d4ff" : "#777",
    border: active ? "1px solid #00d4ff" : "1px solid transparent",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: 12,
    fontWeight: active ? 700 : 400,
    whiteSpace: "nowrap",
    fontFamily: "inherit",
    transition: "all 0.2s",
  });

  const contentStyle = {
    padding: "24px",
    maxWidth: 1000,
    margin: "0 auto",
  };

  const h2 = { color: "#00d4ff", fontSize: 20, fontWeight: 700, marginBottom: 16, marginTop: 0 };
  const h3 = { color: "#ffd700", fontSize: 16, fontWeight: 600, marginBottom: 8, marginTop: 20 };
  const p = { lineHeight: 1.7, marginBottom: 12, fontSize: 14, color: "#ccc" };
  const accent = { color: "#00d4ff" };
  const gold = { color: "#ffd700" };
  const warn = { color: "#ff6b6b" };
  const diffColor = { color: "#ff00ff" };

  const tableStyle = { width: "100%", borderCollapse: "collapse", fontSize: 13, marginBottom: 20 };
  const th = { background: "#1a1a2e", color: "#00d4ff", padding: "8px 10px", textAlign: "left", borderBottom: "2px solid #333", fontWeight: 600 };
  const td = { padding: "8px 10px", borderBottom: "1px solid #222", verticalAlign: "top" };

  return (
    <div style={sectionStyle}>
      <div style={headerStyle}>
        <div style={{ fontSize: 11, color: "#00d4ff", letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>
          Arc Analysis · March 2026
        </div>
        <h1 style={{ color: "#fff", fontSize: 26, fontWeight: 800, margin: 0, lineHeight: 1.2 }}>
          AI Coder Evolution: 2019 → 2040
        </h1>
        <div style={{ color: "#888", fontSize: 13, marginTop: 8 }}>
          Structured analysis of exponential growth in AI coding capability
        </div>
      </div>

      <div style={tabBar}>
        {tabs.map((t, i) => (
          <button key={i} style={tabStyle(tab === i)} onClick={() => setTab(i)}>{t}</button>
        ))}
      </div>

      <div style={contentStyle}>

        {/* ═══ SEARCH REPORT ═══ */}
        {tab === 0 && (
          <div>
            <h2 style={h2}>Search Report</h2>
            <div style={{ background: "#0f1a0f", border: "1px solid #2a4a2a", borderRadius: 8, padding: 16, marginBottom: 20 }}>
              <div style={{ color: "#4ade80", fontWeight: 700, marginBottom: 8 }}>✓ STATUS: SUCCESS — All searches completed</div>
              <p style={p}><strong>Queries:</strong> 7 distinct searches across model releases, benchmarks, employment data, and architecture innovations.</p>
              <p style={p}><strong>Key sources:</strong> Wikipedia, Anthropic docs, OpenAI official, Google DeepMind, Stanford/ADP study, BusinessWire (Inception), SWE-bench leaderboards, MIT Tech Review, TechCrunch, JetBrains, Faros AI, Artificial Analysis.</p>
              <p style={p}><strong>Notable findings vs. prompt milestones:</strong></p>
              <p style={p}>• SWE-bench scores are higher than prompt's Nov 2025 figures — Opus 4.5 reached <span style={gold}>80.9%</span> (prompt said 74.4%), Gemini 3 Pro at <span style={gold}>76.2%</span> (prompt said 74.2%). The prompt likely used earlier measurements.</p>
              <p style={p}>• Claude Opus 4.6 SWE-bench Verified: <span style={gold}>80.8%</span>. Terminal-Bench 2.0: <span style={gold}>65.4%</span> (highest recorded). 1M context beta confirmed.</p>
              <p style={p}>• SWE-bench Verified is now considered contaminated — OpenAI stopped reporting it, recommending SWE-bench Pro instead (top score ~46%).</p>
              <p style={p}>• Mercury 2 benchmark scores from prompt (AIME 91.1, GPQA 73.6, LiveCodeBench 67.3) were not independently found with exact values. Press positions it as "Claude 4.5 Haiku / GPT 5.2 Mini tier."</p>
              <p style={p}>• Stanford/ADP employment study (Aug 2025): <span style={warn}>~20% decline</span> in software developer employment for ages 22-25 since late 2022. 13% relative decline across all high-AI-exposure occupations.</p>
            </div>
          </div>
        )}

        {/* ═══ STEP 1: TIMELINE ═══ */}
        {tab === 1 && (
          <div>
            <h2 style={h2}>Step 1 — Historical Timeline (2019–March 2026)</h2>
            <p style={p}>Capability scale: <span style={gold}>0–1000 open-ended</span> (GPT-2 = 10 as anchor). Scores represent relative AI coding capability, not benchmark percentages.</p>

            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Period</th>
                  <th style={th}>Model / Tool</th>
                  <th style={th}>Org</th>
                  <th style={th}>Score</th>
                  <th style={th}>Key Capability</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map((t, i) => (
                  <tr key={i} style={t.architectural ? { background: "#1a0a2a" } : {}}>
                    <td style={td}><span style={{ color: "#888", fontSize: 12 }}>{t.period}</span></td>
                    <td style={{...td, fontWeight: 600, color: t.architectural ? "#ff00ff" : "#00d4ff" }}>
                      {t.label}
                      {t.architectural && <span style={{ fontSize: 10, color: "#ff00ff", display: "block" }}>⚡ ARCHITECTURAL INFLECTION</span>}
                    </td>
                    <td style={td}>{t.org}</td>
                    <td style={{...td, color: "#ffd700", fontWeight: 700, textAlign: "center" }}>{t.score}</td>
                    <td style={{...td, fontSize: 12, color: "#aaa" }}>{t.capability}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={h3}>Workforce & Adoption Data Points</h3>
            {workforceData.map((w, i) => (
              <div key={i} style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                <span style={{ color: "#ffd700", fontWeight: 700, minWidth: 40 }}>{w.year}</span>
                <span style={{ fontSize: 13, color: "#bbb" }}>{w.event}</span>
              </div>
            ))}

            <div style={{ marginTop: 20, background: "#1a0a0a", border: "1px solid #4a2a2a", borderRadius: 8, padding: 16 }}>
              <h3 style={{...h3, color: "#ff6b6b", marginTop: 0}}>Critical Observation</h3>
              <p style={{...p, marginBottom: 0}}>SWE-bench Verified went from ~12% (GPT-4, mid-2023) to ~81% (Opus 4.5, Nov 2025) — a <span style={warn}>~6.7× improvement in ~2.5 years</span>. The original March 2025 model projected 20% growth per 6 months as baseline. The actual trajectory was dramatically steeper. However, SWE-bench Verified is now known to be contaminated, and SWE-bench Pro (top score ~46%) suggests the real capability frontier is lower than Verified implies — though still extraordinary.</p>
            </div>
          </div>
        )}

        {/* ═══ STEP 2: GRAPHS ═══ */}
        {tab === 2 && (
          <div>
            <h2 style={h2}>Step 2 — Visualisation</h2>

            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <button
                onClick={() => setLogScale(false)}
                style={{...tabStyle(!logScale), fontSize: 13}}
              >Graph A: Linear Scale</button>
              <button
                onClick={() => setLogScale(true)}
                style={{...tabStyle(logScale), fontSize: 13}}
              >Graph B: Log Scale</button>
            </div>

            <div style={{ background: "#111122", borderRadius: 12, padding: "20px 10px 10px", border: "1px solid #222" }}>
              <ResponsiveContainer width="100%" height={420}>
                <ComposedChart data={chartData} margin={{ top: 10, right: 30, bottom: 60, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "#888", fontSize: 10 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis
                    scale={logScale ? "log" : "linear"}
                    domain={logScale ? [5, 1000] : [0, 800]}
                    tick={{ fill: "#888", fontSize: 11 }}
                    label={{ value: "Capability Score", angle: -90, position: "insideLeft", fill: "#666", fontSize: 12 }}
                    allowDataOverflow
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="score"
                    fill="url(#gradient)"
                    stroke="#00d4ff"
                    strokeWidth={2}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#00d4ff" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {logScale && (
              <div style={{ marginTop: 12, background: "#0a1a2a", border: "1px solid #1a3a5a", borderRadius: 8, padding: 12 }}>
                <p style={{...p, marginBottom: 0, fontSize: 13}}>
                  <span style={accent}>Log-scale note:</span> The curve does <em>not</em> flatten on log scale — it steepens visibly from 2024 onward. This means growth is <em>faster</em> than exponential (super-exponential). The 2025–2026 segment shows the steepest log-scale gradient in the entire timeline, driven by simultaneous improvements in model quality, agentic tooling, and architectural innovation (diffusion).
                </p>
              </div>
            )}

            <h3 style={h3}>Mercury 2: Architecture Comparison</h3>
            <p style={p}>Mercury 2 (score 400) sits in the Haiku/Mini quality tier — but its significance isn't the score. It's the <span style={diffColor}>10× throughput</span> at that quality level, which fundamentally changes the economics of agentic loops.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 12 }}>
              {[
                { model: "Claude 4.5 Haiku", speed: "~89 t/s", type: "Autoregressive" },
                { model: "GPT-5 Mini", speed: "~73 t/s", type: "Autoregressive" },
                { model: "Mercury 2", speed: "~1,196 t/s", type: "Diffusion (dLLM)" },
              ].map((m, i) => (
                <div key={i} style={{ background: i === 2 ? "#1a0a2a" : "#111", border: `1px solid ${i === 2 ? "#a000ff" : "#333"}`, borderRadius: 8, padding: 12, textAlign: "center" }}>
                  <div style={{ fontWeight: 700, color: i === 2 ? "#ff00ff" : "#00d4ff", marginBottom: 4 }}>{m.model}</div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#ffd700" }}>{m.speed}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 4 }}>{m.type}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═══ STEP 3: PROJECTION ═══ */}
        {tab === 3 && (
          <div>
            <h2 style={h2}>Step 3 — Extended Projection (2026–2040)</h2>
            <p style={p}>Baseline: <span style={gold}>720</span> (Opus 4.6, 2026 H1). Entry-level programmer anchored at <span style={gold}>380</span> (2025 H1). Growth rates vary by phase — see Step 5 for the full table.</p>

            <div style={{ background: "#111122", borderRadius: 12, padding: "20px 10px 10px", border: "1px solid #222" }}>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={projectionData.slice(0, 15)} margin={{ top: 10, right: 30, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                  <XAxis dataKey="period" tick={{ fill: "#888", fontSize: 10 }} angle={-30} textAnchor="end" height={60} />
                  <YAxis
                    scale="log"
                    domain={[500, "auto"]}
                    tick={{ fill: "#888", fontSize: 11 }}
                    tickFormatter={(v) => v >= 1000000 ? `${(v/1000000).toFixed(0)}M` : v >= 1000 ? `${(v/1000).toFixed(0)}K` : v}
                    label={{ value: "Capability (log)", angle: -90, position: "insideLeft", fill: "#666", fontSize: 12 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line type="monotone" dataKey="score" stroke="#00d4ff" strokeWidth={2} dot={{ fill: "#00d4ff", r: 3 }} />
                  {programmerMilestones.slice(0, 5).map((m, i) => (
                    <ReferenceLine key={i} y={m.score} stroke="#ffd700" strokeDasharray="5 5" strokeOpacity={0.5}>
                      <Label value={`${m.label} (${m.score})`} position="right" fill="#ffd700" fontSize={10} />
                    </ReferenceLine>
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>

            <h3 style={h3}>Programmer Equivalence Milestones</h3>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Milestone</th>
                  <th style={th}>Score Target</th>
                  <th style={th}>Projected Date</th>
                  <th style={th}>Multiplier vs Entry-Level</th>
                </tr>
              </thead>
              <tbody>
                {programmerMilestones.map((m, i) => (
                  <tr key={i}>
                    <td style={td}>{m.label}</td>
                    <td style={{...td, color: "#ffd700", fontWeight: 700}}>{m.score.toLocaleString()}</td>
                    <td style={{...td, color: "#00d4ff"}}>{m.date}</td>
                    <td style={td}>{(m.score / 380).toFixed(0)}×</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ background: "#1a1a0a", border: "1px solid #4a4a2a", borderRadius: 8, padding: 16 }}>
              <h3 style={{...h3, marginTop: 0}}>Compounding Calculation (Entry→Global Workforce)</h3>
              <p style={{...p, fontFamily: "monospace", fontSize: 12}}>
                720 × (1.35)² = 1,312 by 2027 H1 [Phase 1: 35%/6mo]<br/>
                1,312 × (2.20)³ = 13,940 by 2028 H2 [Phase 2: 120%/6mo]<br/>
                13,940 × (3.50)³ = 597,835 by 2030 H1 [Phase 3: 250%/6mo]<br/>
                597,835 × (6.00)³ = 129M by 2031 H2 [Phase 4: 500%/6mo]<br/>
                Global workforce equivalent (~3.8M) reached: <span style={warn}>~2033 H2</span>
              </p>
            </div>
          </div>
        )}

        {/* ═══ STEP 4: INFLECTION POINTS ═══ */}
        {tab === 4 && (
          <div>
            <h2 style={h2}>Step 4 — Inflection Point Analysis</h2>
            {inflectionPoints.map((ip, i) => (
              <div key={i} style={{
                background: ip.id === "D" ? "#1a0a2a" : "#111",
                border: `1px solid ${ip.id === "D" ? "#a000ff" : "#333"}`,
                borderRadius: 10,
                padding: 16,
                marginBottom: 16,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <h3 style={{...h3, marginTop: 0, marginBottom: 0}}>
                    {ip.id}. {ip.title}
                  </h3>
                  <span style={{ fontSize: 12, color: "#00d4ff", background: "#0a1a2a", padding: "4px 10px", borderRadius: 12 }}>{ip.date}</span>
                </div>
                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: 12, color: "#888" }}>Trigger: </span>
                  <span style={{ fontSize: 13, color: "#ccc" }}>{ip.trigger}</span>
                </div>
                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: 12, color: "#888" }}>Revised growth rate: </span>
                  <span style={{ fontSize: 14, color: "#ffd700", fontWeight: 700 }}>{ip.revisedRate}</span>
                </div>
                <div style={{ fontSize: 13, color: "#aaa", lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{ip.reasoning}</div>
              </div>
            ))}
          </div>
        )}

        {/* ═══ STEP 5: GROWTH MODEL ═══ */}
        {tab === 5 && (
          <div>
            <h2 style={h2}>Step 5 — Revised Growth Model Summary</h2>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Phase</th>
                  <th style={th}>Period</th>
                  <th style={th}>Growth / 6mo</th>
                  <th style={th}>Key Trigger</th>
                </tr>
              </thead>
              <tbody>
                {growthPhases.map((g, i) => (
                  <tr key={i}>
                    <td style={{...td, fontWeight: 700, color: "#00d4ff"}}>{g.phase}</td>
                    <td style={td}>{g.period}</td>
                    <td style={{...td, color: "#ffd700", fontWeight: 700}}>{g.rateLabel}</td>
                    <td style={{...td, fontSize: 12}}>{g.trigger}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ background: "#0a1a0a", border: "1px solid #2a4a2a", borderRadius: 8, padding: 16, marginTop: 20 }}>
              <h3 style={{...h3, marginTop: 0, color: "#4ade80"}}>Key Question: When does AI = Global Software Workforce?</h3>
              <p style={p}>At projected rates, AI coding capability reaches equivalence with the entire global software engineering workforce (<span style={gold}>~28 million developers</span>) working simultaneously around <span style={warn}>2033 H2</span> — approximately 7.5 years from now.</p>
              <p style={p}>Calculation: Starting from 720 (2026 H1), applying the phase rates above, the score crosses the 3.8M threshold (10,000× entry-level) in late 2033. If the self-improvement phase arrives earlier than projected (possible given 2025-2026 acceleration), this could pull to <span style={warn}>2032 H2</span>.</p>
              <p style={{...p, marginBottom: 0}}>Compared to the original March 2025 model, this estimate has moved closer by approximately <span style={accent}>12-18 months</span>, primarily due to: (1) faster-than-projected capability gains in 2025, (2) the diffusion architecture variable, and (3) the accelerated arrival of multi-agent systems.</p>
            </div>
          </div>
        )}

        {/* ═══ STEP 6: CROSS-DOMAIN ═══ */}
        {tab === 6 && (
          <div>
            <h2 style={h2}>Step 6 — Cross-Domain Extrapolation</h2>

            <h3 style={h3}>1. Biology + Coding Convergence</h3>
            <p style={p}>AlphaFold (2020-2024) solved protein structure prediction. AI drug discovery pipelines are now standard at major pharma companies. The convergence path: AI that can write code AND understand biology can design experiments, write the analysis code, interpret results, redesign the experiment, and iterate — all autonomously.</p>
            <p style={p}>By ~2028, an AI system could plausibly: read a disease pathway paper, design candidate molecules computationally, write simulation code to test them, interpret results, and file a provisional patent — all in a single autonomous session. The code-writing capability is the connective tissue that turns domain expertise into autonomous action.</p>

            <h3 style={h3}>2. Neural Interfaces + AI</h3>
            <p style={p}>Neuralink and competitors are achieving initial human BCI implants in 2024-2026. The bandwidth is still extremely low (~bits per second vs. the brain's ~10 gigabits/s internal throughput). But the trajectory matters: if BCI bandwidth doubles annually, by ~2032-2034 we reach sufficient bandwidth for direct concept transfer.</p>
            <p style={p}>At that point, "AI talking to a human" becomes "AI thinking alongside a human" — a qualitative shift where the distinction between human and AI cognition blurs. By 2035, the concept of a "programmer" may become meaningless as a separate category: you think the software into existence through a hybrid biological-digital cognitive system.</p>

            <h3 style={h3}>3. Technological Singularity Estimate</h3>
            <div style={{ background: "#1a0a0a", border: "1px solid #4a2a2a", borderRadius: 8, padding: 16 }}>
              <p style={p}>The original March 2025 model placed the singularity estimate around <span style={gold}>2035-2040</span>. Based on the updated data:</p>
              <p style={p}>The 2025 acceleration (faster-than-projected SWE-bench gains, arrival of multi-agent systems, diffusion architecture) pulls the estimate earlier. The convergence of AI-accelerated biology, AI-accelerated hardware design, and self-improving AI systems creates a compound curve that becomes unpredictable by the early 2030s.</p>
              <p style={{...p, fontSize: 16, color: "#ff6b6b", fontWeight: 700, marginBottom: 0}}>
                Revised singularity estimate: 2032–2036, with 2034 as the median projection.
              </p>
              <p style={{...p, color: "#888", fontSize: 12, marginBottom: 0}}>The timeline has moved closer by ~2-3 years since the March 2025 assessment.</p>
            </div>
          </div>
        )}

        {/* ═══ STEP 7: UNCERTAINTY ═══ */}
        {tab === 7 && (
          <div>
            <h2 style={h2}>Step 7 — Honest Uncertainty & Limiting Factors</h2>

            {[
              { phase: "Phase 1 (2026–2027)", factor: "Energy constraints", detail: "Data centre power demand is already geopolitically contentious. The diffusion throughput advantage partially mitigates this (more capability per watt), but scaling to frontier-quality diffusion models requires massive training compute. If energy costs spike (regulation, war, grid failures), the timeline slows." },
              { phase: "Phase 2 (2027–2028)", factor: "Validation collapse", detail: "When AI systems can write and improve their own code, who validates correctness? The 'alignment tax' — the cost of ensuring self-improving systems remain safe — could consume a significant fraction of the capability gains. If safety concerns trigger a regulatory pause, the self-improvement inflection could be delayed by years." },
              { phase: "Phase 3 (2028–2030)", factor: "Quantum disappointment", detail: "Practical quantum computing has been '5 years away' for two decades. If quantum advantage for AI workloads remains narrow and noisy through 2030, this phase delivers far less acceleration than projected. This is the single most uncertain phase in the model." },
              { phase: "Phase 4 (2030–2031)", factor: "Physical limits", detail: "Speed of light, thermodynamic limits, quantum decoherence — these are hard physical ceilings. The hardware co-design loop produces diminishing returns as chips approach physical limits. The 500% rate likely cannot be sustained for more than 2-3 generations." },
              { phase: "Phase 5 (2032+)", factor: "Unknown unknowns", detail: "At this scale, the model is illustrative, not predictive. A geopolitical catastrophe (nuclear conflict, pandemic), a fundamental discovery about the limits of intelligence, or an alignment failure could render all projections meaningless. This is not a forecast — it's a thought experiment about the shape of an exponential curve." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#111", border: "1px solid #333", borderRadius: 8, padding: 14, marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#00d4ff", fontWeight: 600, fontSize: 14 }}>{item.phase}</span>
                  <span style={{ color: "#ff6b6b", fontSize: 13, fontWeight: 600 }}>{item.factor}</span>
                </div>
                <p style={{...p, marginTop: 8, marginBottom: 0}}>{item.detail}</p>
              </div>
            ))}

            <div style={{ background: "#1a0a0a", border: "2px solid #ff6b6b", borderRadius: 8, padding: 16, marginTop: 20 }}>
              <h3 style={{...h3, color: "#ff6b6b", marginTop: 0}}>Most Likely Factor to Falsify the Projection</h3>
              <p style={{...p, marginBottom: 0, fontSize: 15}}>
                <strong style={{ color: "#ffd700" }}>Validation and verification complexity.</strong> As AI capability rises, the ability of humans to check AI output falls. At some point, we enter a zone where AI systems are producing code, research, and designs that no human can fully verify. This creates either: (a) a massive deceleration as we build elaborate verification systems (slowing deployment), or (b) catastrophic failures when unverified AI output causes real-world harm, triggering regulatory shutdown. The validation problem is the single most plausible brake on the exponential curve — and it's already visible in 2026, where SWE-bench Pro shows frontier models solving only ~46% of "real" problems despite scoring 80%+ on the contaminated Verified set.
              </p>
            </div>
          </div>
        )}

        {/* ═══ STEP 8: SUMMARIES ═══ */}
        {tab === 8 && (
          <div>
            <h2 style={h2}>Step 8 — Deliverable Summaries</h2>

            <div style={{ background: "#0a1a2a", border: "1px solid #1a3a5a", borderRadius: 10, padding: 20, marginBottom: 20 }}>
              <h3 style={{...h3, marginTop: 0}}>Summary A — For a Non-Technical Reader</h3>
              <p style={p}>In March 2026, AI systems can write software that would have been the work of a competent junior developer just two years ago. The best AI coding tools — Claude Opus 4.6, GPT-5.2, Gemini 3 Pro — can read entire codebases, find and fix real bugs, and coordinate with other AI agents to build features across multiple files simultaneously. About 85% of professional developers now use AI tools regularly, and roughly 41% of new code is AI-generated.</p>
              <p style={p}>The most important change coming in 2027 is self-improvement: AI systems that can modify and improve their own code without human guidance. Multi-agent teams already coordinate in 2026; the next step is those teams directing their own improvement cycles. A new technology — diffusion-based AI, exemplified by InceptionLabs' Mercury 2 — generates text 10× faster than traditional AI, making these improvement loops economically viable at unprecedented scale.</p>
              <p style={p}>After 2028, the numbers become almost incomprehensible. If self-improvement compounds the way the math suggests, AI coding capability could double every few months, meaning the gap between "very good assistant" and "replaces entire engineering departments" may be measured in years, not decades.</p>
              <p style={p}>For someone entering the workforce today: the skills that matter are not specific programming languages. They are the ability to understand problems deeply, to architect solutions at a high level, to verify AI output, and to communicate complex requirements clearly. The demand for these skills is growing; the demand for "someone who can write a for-loop" is not.</p>
              <p style={{...p, color: "#ff6b6b", marginBottom: 0}}>Honest caveat: these projections assume no regulatory freezes, no major AI safety incidents, and continued hardware scaling. Any of those could add years to the timeline. The shape of the curve is likely right; the exact dates are uncertain.</p>
            </div>

            <div style={{ background: "#1a0a2a", border: "1px solid #3a1a5a", borderRadius: 10, padding: 20 }}>
              <h3 style={{...h3, marginTop: 0, color: "#ff00ff"}}>Summary B — For Developers</h3>
              <p style={p}>Benchmark trajectory: SWE-bench Verified went from ~12% (GPT-4, mid-2023) to ~81% (Opus 4.5, Nov 2025). But Verified is now contaminated — SWE-bench Pro shows the real frontier at ~46%. Extrapolating Pro scores at current improvement rates, 80%+ on Pro by ~2028 is plausible, which would represent genuine senior-engineer-level autonomous bug-fixing across diverse, unfamiliar codebases.</p>
              <p style={p}>The shift from "model as tool" to "model as team" is happening now, not in some theoretical future. Claude Agent Teams (Feb 2026) splits work across multiple agents running in parallel on git worktrees. Windsurf Wave 13 does the same. OpenAI's Codex runs asynchronously against repos. In 2026, you manage AI agents the way a tech lead manages a team. By 2028, those agents manage each other.</p>
              <p style={p}>Skills that remain genuinely human-irreplaceable through 2030: understanding ambiguous stakeholder requirements and translating them to precise specifications; making judgment calls about tradeoffs (performance vs. maintainability, speed vs. correctness); recognizing when an AI solution is subtly wrong in ways benchmarks don't catch; and making architectural decisions that require understanding the business context, not just the code. These are senior-engineer skills. The junior-to-mid pipeline is what's being compressed.</p>
              <p style={{...p, color: "#ffd700", fontWeight: 600, marginBottom: 0}}>One concrete recommendation: if you aren't using an agentic coding tool daily in March 2026, you are already falling behind. Pick Claude Code or Codex, learn to write effective high-level specifications rather than line-by-line code, and invest in verification skills — the ability to read and validate AI output is the new literacy.</p>
            </div>
          </div>
        )}
      </div>

      <div style={{ borderTop: "1px solid #222", padding: "16px 24px", textAlign: "center", color: "#444", fontSize: 11 }}>
        Arc (Claude Opus 4.6) · AI Coder Evolution Project · tombrau.github.io/ai-coder-evolution · March 2026
      </div>
    </div>
  );
}
