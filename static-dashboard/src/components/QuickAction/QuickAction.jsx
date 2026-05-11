import React from 'react';
import './QuickAction.css';

/**
 * QuickAction — static action tile
 * Props: icon, label, description, color, accent
 */
function QuickAction({ icon, label, description, color, accent }) {
  return (
    <div className="qa-tile" style={{ '--qa-bg': color, '--qa-accent': accent }}>
      <div className="qa-tile__icon-wrap">
        <span className="qa-tile__icon">{icon}</span>
      </div>
      <div className="qa-tile__text">
        <p className="qa-tile__label">{label}</p>
        <p className="qa-tile__desc">{description}</p>
      </div>
      <span className="qa-tile__arrow">→</span>
    </div>
  );
}

export default QuickAction;
