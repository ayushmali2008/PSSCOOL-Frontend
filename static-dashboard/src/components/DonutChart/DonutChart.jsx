import React from 'react';
import './DonutChart.css';

const SEGMENTS = [
  { label: 'Coding',      pct: 38, color: '#4f46e5' },
  { label: 'Electronics', pct: 27, color: '#06b6d4' },
  { label: 'Robotics',    pct: 20, color: '#f59e0b' },
  { label: 'Mechanics',   pct: 15, color: '#10b981' },
];

function DonutChart() {
  return (
    <div className="donut-card">
      <div className="donut-card__header">
        <h3 className="donut-card__title">Course Usage</h3>
        <p className="donut-card__sub">By category</p>
      </div>

      {/* SVG donut */}
      <div className="donut-wrap">
        <svg viewBox="0 0 36 36" className="donut-svg">
          {/* Background circle */}
          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f3f4f6" strokeWidth="3.5" />
          {/* Coding 38% */}
          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#4f46e5" strokeWidth="3.5"
            strokeDasharray="38 62" strokeDashoffset="25" strokeLinecap="round" />
          {/* Electronics 27% */}
          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#06b6d4" strokeWidth="3.5"
            strokeDasharray="27 73" strokeDashoffset="-13" strokeLinecap="round" />
          {/* Robotics 20% */}
          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f59e0b" strokeWidth="3.5"
            strokeDasharray="20 80" strokeDashoffset="-40" strokeLinecap="round" />
          {/* Mechanics 15% */}
          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#10b981" strokeWidth="3.5"
            strokeDasharray="15 85" strokeDashoffset="-60" strokeLinecap="round" />
          {/* Center text */}
          <text x="18" y="17.5" textAnchor="middle" className="donut-center-val">100%</text>
          <text x="18" y="21.5" textAnchor="middle" className="donut-center-lbl">Total</text>
        </svg>
      </div>

      {/* Legend */}
      <div className="donut-legend">
        {SEGMENTS.map((seg) => (
          <div key={seg.label} className="donut-legend__item">
            <span className="donut-legend__dot" style={{ background: seg.color }} />
            <span className="donut-legend__label">{seg.label}</span>
            <div className="donut-legend__bar-wrap">
              <div className="donut-legend__bar"
                style={{ width: `${seg.pct}%`, background: seg.color }} />
            </div>
            <span className="donut-legend__pct">{seg.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DonutChart;
