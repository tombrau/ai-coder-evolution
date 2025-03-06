// Use destructuring to access Recharts components from the global Recharts object
const {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, Label, ReferenceLine
} = Recharts;

// Define the historical timeline data (2019-2025)
const historicalData = [
  { period: "2019 H1", capability: 10, label: "GPT-2", milestone: "Basic code completion" },
  { period: "2019 H2", capability: 15, label: "", milestone: "" },
  { period: "2020 H1", capability: 35, label: "GPT-3", milestone: "Multi-language code generation" },
  { period: "2020 H2", capability: 40, label: "", milestone: "" },
  { period: "2021 H1", capability: 45, label: "", milestone: "" },
  { period: "2021 H2", capability: 70, label: "GitHub Copilot Preview", milestone: "Context-aware code suggestions" },
  { period: "2022 H1", capability: 90, label: "AlphaCode, Copilot GA", milestone: "Competitive programming solutions" },
  { period: "2022 H2", capability: 110, label: "ChatGPT", milestone: "Conversational programming assistance" },
  { period: "2023 H1", capability: 150, label: "GPT-4", milestone: "Complex algorithm implementation" },
  { period: "2023 H2", capability: 180, label: "CodeLlama", milestone: "Specialized code models" },
  { period: "2024 H1", capability: 220, label: "", milestone: "Refactoring capabilities" },
  { period: "2024 H2", capability: 280, label: "Architecture-aware systems", milestone: "System design understanding" },
  { period: "2025 H1", capability: 350, label: "Autonomous code generators", milestone: "ENTRY LEVEL PROGRAMMER EQUIVALENT" }
];

// Define projected future timeline data with multiple acceleration points
const projectedData = [
  // 20% growth for first periods
  { period: "2025 H2", capability: Math.round(350 * 1.2), label: "", milestone: "Framework-specific optimization" },
  { period: "2026 H1", capability: Math.round(350 * 1.2 * 1.2), label: "Full-stack AI", milestone: "End-to-end application generation" },
  { period: "2026 H2", capability: Math.round(350 * Math.pow(1.2, 3)), label: "", milestone: "" },
  { period: "2027 H1", capability: Math.round(350 * Math.pow(1.2, 4)), label: "Code evolution systems", milestone: "SELF-IMPROVING CODEBASES BEGIN" },
  
  // After self-improvement (2027 H1), extreme acceleration begins
  // Using a 120% growth rate per period (versus previous 20%)
  { period: "2027 H2", capability: Math.round(350 * Math.pow(1.2, 4) * 2.2), label: "", milestone: "MID-LEVEL PROGRAMMER EQUIVALENT" },
  { period: "2028 H1", capability: Math.round(350 * Math.pow(1.2, 4) * Math.pow(2.2, 2)), label: "Domain-specific supermodels", milestone: "SENIOR PROGRAMMER EQUIVALENT" },
  { period: "2028 H2", capability: Math.round(350 * Math.pow(1.2, 4) * Math.pow(2.2, 3)), label: "Quantum-assisted AI", milestone: "EXPERT PROGRAMMER EQUIVALENT" },
  
  // Quantum computing acceleration (late 2028)
  // Using a 350% growth rate (from 120% to 350%) due to quantum advantage
  { period: "2029 H1", capability: Math.round(350 * Math.pow(1.2, 4) * Math.pow(2.2, 3) * 4.5), label: "AI code architects", milestone: "PROGRAMMING TEAM EQUIVALENT + QUANTUM ACCELERATION" },
  { period: "2029 H2", capability: Math.round(350 * Math.pow(1.2, 4) * Math.pow(2.2, 3) * Math.pow(4.5, 2)), label: "", milestone: "Full development department equivalent" },
  { period: "2030 H1", capability: Math.round(350 * Math.pow(1.2, 4) * Math.pow(2.2, 3) * Math.pow(4.5, 3)), label: "Autonomous dev teams", milestone: "Recursive self-improvement accelerates" },
  { period: "2030 H2", capability: Math.round(350 * Math.pow(1.2, 4) * Math.pow(2.2, 3) * Math.pow(4.5, 4)), label: "", milestone: "Full software industry capabilities" },
  
  // Continued quantum-powered growth - beyond human comprehension by this point
  { period: "2031 H1", capability: Math.round(350 * Math.pow(1.2, 4) * Math.pow(2.2, 3) * Math.pow(4.5, 5)), label: "Self-evolving systems", milestone: "Software research lab equivalent" },
  { period: "2031 H2", capability: Math.round(350 * Math.pow(1.2, 4) * Math.pow(2.2, 3) * Math.pow(4.5, 6)), label: "", milestone: "All human software expertise surpassed" },
  { period: "2032 H1", capability: Math.round(350 * Math.pow(1.2, 4) * Math.pow(2.2, 3) * Math.pow(4.5, 7)), label: "Hardware-software co-design", milestone: "Theoretical computer science breakthroughs" },
  { period: "2032 H2", capability: Math.round(350 * Math.pow(1.2, 4) * Math.pow(2.2, 3) * Math.pow(4.5, 8)), label: "", milestone: "Computing resource limitations become primary constraint" },
  { period: "2033 H1", capability: Math.round(350 * Math.pow(1.2, 4) * Math.pow(2.2, 3) * Math.pow(4.5, 9)), label: "Novel computing paradigms", milestone: "Creation of post-von Neumann architectures" },
  { period: "2033 H2", capability: Math.round(350 * Math.pow(1.2, 4) * Math.pow(2.2, 3) * Math.pow(4.5, 10)), label: "", milestone: "" },
  { period: "2034 H1", capability: Math.round(350 * Math.pow(1.2, 4) * Math.pow(2.2, 3) * Math.pow(4.5, 11)), label: "Scientific breakthrough systems", milestone: "Novel algorithm discovery" },
  { period: "2034 H2", capability: Math.round(350 * Math.pow(1.2, 4) * Math.pow(2.2, 3) * Math.pow(4.5, 12)), label: "", milestone: "" },
  { period: "2035 H1", capability: Math.round(350 * Math.pow(1.2, 4) * Math.pow(2.2, 3) * Math.pow(4.5, 13)), label: "General AI developers", milestone: "Superhuman innovation capabilities" },
  { period: "2035 H2", capability: Math.round(350 * Math.pow(1.2, 4) * Math.pow(2.2, 3) * Math.pow(4.5, 14)), label: "", milestone: "" }
];

// Combine historical and projected data
const timelineData = [...historicalData, ...projectedData];

// Calculate logarithmic values (base 10) for the second graph
const logData = timelineData.map(item => ({
  ...item,
  logCapability: Math.log10(item.capability).toFixed(2)
}));

// Update programmer levels based on the dramatically accelerated growth projection
const programmerLevels = [
  { year: "2025 H1", level: "Entry-Level Programmer", capability: 350 },
  { year: "2027 H2", level: "Mid-Level Programmer", capability: Math.round(350 * Math.pow(1.2, 4) * 2.2) },
  { year: "2028 H1", level: "Senior Programmer", capability: Math.round(350 * Math.pow(1.2, 4) * Math.pow(2.2, 2)) },
  { year: "2028 H2", level: "Expert Programmer", capability: Math.round(350 * Math.pow(1.2, 4) * Math.pow(2.2, 3)) },
  { year: "2029 H1", level: "Programming Team", capability: Math.round(350 * Math.pow(1.2, 4) * Math.pow(2.2, 3) * 4.5) }
];

// Create tooltips that show model names and milestones when available
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 border border-gray-200 rounded shadow-md">
        <p className="font-bold">{data.period}</p>
        <p>Capability: {data.capability}</p>
        {data.label && <p><strong>Model:</strong> {data.label}</p>}
        {data.milestone && <p><strong>Milestone:</strong> {data.milestone}</p>}
      </div>
    );
  }
  return null;
};

// Custom dot component to highlight major milestones
const CustomizedDot = (props) => {
  const { cx, cy, payload } = props;
  
  // Check if this data point has a notable label or is a programmer level equivalent
  const isNotable = payload.label || payload.milestone.includes("PROGRAMMER");
  
  if (isNotable) {
    return (
      <circle cx={cx} cy={cy} r={4} stroke="red" strokeWidth={1} fill="red" />
    );
  }
  
  return (
    <circle cx={cx} cy={cy} r={2} stroke="none" fill="#8884d8" />
  );
};

// Main component
const AICodeTimeline = () => {
  // A more extreme value for Y-axis to accommodate the quantum acceleration
  const linearYAxisDomain = [0, 50000000000];
  
  return (
    <div className="flex flex-col space-y-12">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">AI Coding Capability Timeline (2019-2035) - Linear Scale</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={timelineData}
              margin={{ top: 20, right: 30, left: 30, bottom: 70 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="period" 
                angle={-45} 
                textAnchor="end" 
                height={80}
                interval={1}
              >
                <Label value="Time Period (6-month intervals)" position="insideBottom" offset={-60} />
              </XAxis>
              <YAxis domain={linearYAxisDomain}>
                <Label value="Capability (arbitrary units)" angle={-90} position="insideLeft" />
              </YAxis>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              
              {/* Historical data line */}
              <Line 
                data={historicalData}
                type="monotone" 
                dataKey="capability" 
                name="Historical AI Coding Capability" 
                stroke="#8884d8" 
                strokeWidth={3}
                dot={<CustomizedDot />}
              />
              
              {/* Projected data line */}
              <Line 
                data={projectedData}
                type="monotone" 
                dataKey="capability" 
                name="Projected AI Coding Capability" 
                stroke="#8884d8" 
                strokeWidth={3}
                strokeDasharray="5 5"
                dot={<CustomizedDot />}
              />
              
              {/* Add reference line for where projections start */}
              <ReferenceLine x={historicalData[historicalData.length-1].period} stroke="red" strokeDasharray="3 3" label={{ value: 'Projections Start', position: 'insideTopRight', fill: 'red' }} />
              
              {/* Add reference line for self-improving AI */}
              <ReferenceLine 
                x="2027 H1" 
                stroke="#FF8C00" 
                strokeWidth={2}
                strokeDasharray="3 3" 
                label={{ 
                  value: 'Self-Improvement Begins', 
                  position: 'top', 
                  fill: '#FF8C00',
                  fontSize: 12 
                }} 
              />

              {/* Add reference line for quantum computing */}
              <ReferenceLine 
                x="2028 H2" 
                stroke="#6A0DAD" 
                strokeWidth={2}
                strokeDasharray="3 3" 
                label={{ 
                  value: 'Quantum Computing Acceleration', 
                  position: 'insideBottomRight', 
                  fill: '#6A0DAD',
                  fontSize: 12 
                }} 
              />
              
              {/* Add programmer level reference lines */}
              {programmerLevels.map(level => (
                <ReferenceLine 
                  key={level.level}
                  y={level.capability} 
                  stroke="green" 
                  strokeDasharray="3 3" 
                  label={{ 
                    value: level.level, 
                    position: 'right', 
                    fill: 'green',
                    fontSize: 12
                  }} 
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">AI Coding Capability Timeline (2019-2035) - Logarithmic Scale</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={logData}
              margin={{ top: 20, right: 30, left: 30, bottom: 70 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="period" 
                angle={-45} 
                textAnchor="end" 
                height={80}
                interval={1}
              >
                <Label value="Time Period (6-month intervals)" position="insideBottom" offset={-60} />
              </XAxis>
              <YAxis>
                <Label value="Log₁₀(Capability)" angle={-90} position="insideLeft" />
              </YAxis>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              
              {/* Combine into a single continuous line for better display */}
              <Line 
                type="monotone" 
                dataKey="logCapability" 
                name="Historical (Log Scale)" 
                stroke="#82ca9d" 
                strokeWidth={3}
                dot={<CustomizedDot />}
                connectNulls={true}
              />
              
              {/* Add reference line for where projections start */}
              <ReferenceLine x={historicalData[historicalData.length-1].period} stroke="red" strokeDasharray="3 3" label={{ value: 'Projections Start', position: 'insideTopRight', fill: 'red' }} />
              
              {/* Add reference line for self-improving AI */}
              <ReferenceLine 
                x="2027 H1" 
                stroke="#FF8C00" 
                strokeWidth={2}
                strokeDasharray="3 3" 
                label={{ 
                  value: 'Self-Improvement Begins', 
                  position: 'top', 
                  fill: '#FF8C00',
                  fontSize: 12 
                }} 
              />
              
              {/* Add reference line for quantum computing */}
              <ReferenceLine 
                x="2028 H2" 
                stroke="#6A0DAD" 
                strokeWidth={2}
                strokeDasharray="3 3" 
                label={{ 
                  value: 'Quantum Computing Acceleration', 
                  position: 'insideBottomRight', 
                  fill: '#6A0DAD',
                  fontSize: 12 
                }} 
              />
              
              {/* Add programmer level reference lines (converted to log scale) */}
              {programmerLevels.map(level => (
                <ReferenceLine 
                  key={level.level}
                  y={Math.log10(level.capability).toFixed(2)} 
                  stroke="green" 
                  strokeDasharray="3 3" 
                  label={{ 
                    value: level.level, 
                    position: 'right', 
                    fill: 'green',
                    fontSize: 12
                  }} 
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-2">About this visualization:</h3>
        <p className="mb-2">The graphs show both historical progression (2019-2025) and projected future capabilities (2025-2035) of AI coding systems.</p>
        <p className="mb-2">Red dots indicate major milestones or releases. Green reference lines show equivalence to human programmer skill levels.</p>
        <p className="mb-2">The vertical red line marks where historical data ends and projections begin (early 2025).</p>
        <p className="mb-2">The projection shows three distinct phases: <span className="font-semibold">1)</span> A 20% growth rate from 2025-2027, <span className="font-semibold">2)</span> An accelerated 120% growth rate after self-improving codebases emerge in early 2027, and <span className="font-semibold">3)</span> A dramatic 350% growth rate after quantum computing integration in late 2028.</p>
        <p className="mb-2"><strong>Key Projected Milestones:</strong></p>
        <ul className="list-disc pl-6 mb-2">
          <li>2025: AI systems reach entry-level programmer equivalence</li>
          <li>2027 H2: Mid-level programmer equivalence</li>
          <li>2028 H1: Senior programmer equivalence (just 6 months later)</li>
          <li>2028 H2: Expert programmer equivalence + Quantum computing integration</li>
          <li>2029 H1: Programming team equivalence with quantum acceleration</li>
          <li>2029 H2: Entire development department capabilities</li>
          <li>2030 H2: Full software industry capabilities (all human software expertise combined)</li>
          <li>2032 H1: Theoretical computer science breakthroughs beyond human comprehension</li>
          <li>2033 H1: Creation of post-von Neumann computing architectures</li>
        </ul>
        <p className="mt-4 text-sm italic">Note: This projection incorporates two major acceleration points: 1) Self-improving AI systems emerging in 2027 H1, increasing growth from 20% to 120% per period, and 2) Quantum computing integration in 2028 H2, further increasing growth to 350% per period. With these compound accelerations, AI reaches programming team equivalence by early 2029 and surpasses all combined human software development capability by 2030 H2. By 2033, the systems would be developing entirely new computing paradigms beyond current theoretical understanding. The numbers become so large by 2035 that they likely exceed any meaningful comparison to human capabilities.</p>
      </div>
    </div>
  );
};

// Render the component
ReactDOM.render(<AICodeTimeline />, document.getElementById('root'));
