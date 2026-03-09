import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
// Try alternative import method
import * as Recharts from 'recharts';

// Destructure components after import
const { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Label,
  ReferenceLine
} = Recharts;

// Simplified component to test Recharts rendering
const TestChart: React.FC = () => {
  // Sample data for testing
  const data = [
    { name: '2019', value: 10 },
    { name: '2020', value: 20 },
    { name: '2021', value: 35 },
    { name: '2022', value: 50 }
  ];

  return (
    <div style={{ width: '100%', height: 300 }}>
      <Recharts.ResponsiveContainer width="100%" height="100%">
        <Recharts.LineChart data={data}>
          <Recharts.CartesianGrid strokeDasharray="3 3" />
          <Recharts.XAxis dataKey="name" />
          <Recharts.YAxis />
          <Recharts.Tooltip />
          <Recharts.Legend />
          <Recharts.Line type="monotone" dataKey="value" stroke="#8884d8" />
        </Recharts.LineChart>
      </Recharts.ResponsiveContainer>
    </div>
  );
};

// Main rendering
const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<TestChart />);