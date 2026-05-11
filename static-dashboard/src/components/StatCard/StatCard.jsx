import React from 'react';
import './StatCard.css';

/**
 * StatCard — static metric tile
 * Props: icon, label, value, trend, trendUp, color
 */
function StatCard({ icon, label, value, trend, trendUp, color }) {
  return (
    <div className="stat-card" style={{ '--card-accent': color }}>
      <div className="stat-card__top">
        <div className="stat-card__icon-wrap">
          <span className="stat-card__icon">{icon}</span>
        </div>
        <span className={`stat-card__trend ${trendUp ? 'up' : 'down'}`}>
          {trendUp ? '▲' : '▼'} {trend}
        </span>
      </div>
      <p className="stat-card__value">{value}</p>
      <p className="stat-card__label">{label}</p>
    </div>
  );
}

export default StatCard;
