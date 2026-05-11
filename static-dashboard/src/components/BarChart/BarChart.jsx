import React from 'react';
import './BarChart.css';

/* Static bar data */
const BARS = [
  { month: 'Jan', pct: 45 },
  { month: 'Feb', pct: 62 },
  { month: 'Mar', pct: 38 },
  { month: 'Apr', pct: 75 },
  { month: 'May', pct: 55 },
  { month: 'Jun', pct: 88 },
  { month: 'Jul', pct: 67 },
  { month: 'Aug', pct: 50 },
  { month: 'Sep', pct: 72 },
  { month: 'Oct', pct: 40 },
  { month: 'Nov', pct: 83 },
  { month: 'Dec', pct: 60 },
];

function BarChart() {
  return (
    <div className="bar-chart-card">
      <div className="bar-chart-card__header">
        <div>
          <h3 className="bar-chart-card__title">User Activity</h3>
          <p className="bar-chart-card__sub">Monthly active users — 2024</p>
        </div>
        <div className="bar-chart-card__filter">
          <span className="bar-chart-card__filter-btn active">Monthly</span>
          <span className="bar-chart-card__filter-btn">Weekly</span>
          <span className="bar-chart-card__filter-btn">Yearly</span>
        </div>
      </div>

      <div className="bar-chart">
        {BARS.map((bar) => (
          <div key={bar.month} className="bar-chart__col">
            <div
              className="bar-chart__bar"
              style={{ height: `${bar.pct}%` }}
              title={`${bar.month}: ${bar.pct * 14} users`}
            />
            <span className="bar-chart__label">{bar.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BarChart;
