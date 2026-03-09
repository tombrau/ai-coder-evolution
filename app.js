// Import React and ReactDOM from CDN
import React from 'https://unpkg.com/react@18/es/react.js';
import ReactDOM from 'https://unpkg.com/react-dom@18/es/react-dom.js';

// Import Recharts types to help with type checking - change
import PropTypes from 'https://unpkg.com/prop-types@15.8.1/prop-types.js';

// Import Recharts from CDN
import * as Recharts from 'https://unpkg.com/recharts@2.9.0/es/index.js';

// Destructure Recharts components
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

// Main Chart Component
function AICapabilityChart() {
    return React.createElement(
        'div', 
        { className: 'w-full h-96' },
        React.createElement(
            'h2', 
            { className: 'text-2xl font-bold mb-4 text-center' }, 
            'Projected AI Coding Capability Evolution'
        ),
        React.createElement(
            ResponsiveContainer, 
            { width: '100%', height: '100%' },
            React.createElement(
                LineChart, 
                { 
                    data: aiCapabilityData,
                    margin: { top: 5, right: 30, left: 20, bottom: 5 }
                },
                React.createElement(CartesianGrid, { strokeDasharray: '3 3' }),
                React.createElement(XAxis, { dataKey: 'year' }),
                React.createElement(
                    YAxis, 
                    { 
                        label: { 
                            value: 'Capability Index', 
                            angle: -90, 
                            position: 'insideLeft' 
                        }
                    }
                ),
                React.createElement(Tooltip),
                React.createElement(Legend),
                React.createElement(
                    Line, 
                    { 
                        type: 'monotone', 
                        dataKey: 'capability', 
                        stroke: '#8884d8', 
                        activeDot: { r: 8 } 
                    }
                )
            )
        )
    );
}

// Main App Component
function App() {
    return React.createElement(
        'div', 
        { className: 'p-4' },
        React.createElement(AICapabilityChart)
    );
}

// Render the app
function renderApp() {
    try {
        ReactDOM.render(
            React.createElement(App),
            document.getElementById('root')
        );
    } catch (error) {
        console.error('Rendering failed:', error);
    }
}

// Ensure DOM is fully loaded before rendering
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApp);
} else {
    renderApp();
}

// Optional: Add PropTypes validation if needed
AICapabilityChart.propTypes = {};