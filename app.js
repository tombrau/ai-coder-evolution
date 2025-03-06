// Ensure React and Recharts are properly loaded
const { useState } = React;
const { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} = Recharts;

// Sample data for AI Coding Capability Projection
const aiCapabilityData = [
  { year: 2019, capability: 10 },
  { year: 2020, capability: 20 },
  { year: 2021, capability: 35 },
  { year: 2022, capability: 50 },
  { year: 2023, capability: 70 },
  { year: 2024, capability: 85 },
  { year: 2025, capability: 95 },
  { year: 2026, capability: 110 },
  { year: 2027, capability: 130 },
  { year: 2028, capability: 150 },
  { year: 2029, capability: 180 },
  { year: 2030, capability: 220 },
  { year: 2031, capability: 270 },
  { year: 2032, capability: 330 },
  { year: 2033, capability: 400 },
  { year: 2034, capability: 480 },
  { year: 2035, capability: 580 }
];

// Main App Component
function AICapabilityChart() {
  return (
    <div className="w-full h-96">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Projected AI Coding Capability Evolution
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={aiCapabilityData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis 
            label={{ 
              value: 'Capability Index', 
              angle: -90, 
              position: 'insideLeft' 
            }} 
          />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="capability" 
            stroke="#8884d8" 
            activeDot={{ r: 8 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// Render the component
function App() {
  return (
    <div className="p-4">
      <AICapabilityChart />
    </div>
  );
}

// Render the app when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
  );
});