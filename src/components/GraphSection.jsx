import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const GraphSection = ({ currentGraph }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        {currentGraph.title}
      </h2>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={currentGraph.data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey={currentGraph.xLabel.includes('años') ? 'year' : 'lambda'}
            label={{
              value: currentGraph.xLabel,
              position: 'insideBottom',
              offset: -5
            }}
            stroke="#64748b"
          />
          <YAxis
            label={{
              value: currentGraph.yLabel,
              angle: -90,
              position: 'insideLeft'
            }}
            stroke="#64748b"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px'
            }}
          />
          <Legend />
          {currentGraph.lines.map((line) => (
            <Line
              key={line.key}
              type="monotone"
              dataKey={line.key}
              stroke={line.color}
              strokeWidth={3}
              name={line.name}
              dot={{ fill: line.color, r: 4 }}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphSection;