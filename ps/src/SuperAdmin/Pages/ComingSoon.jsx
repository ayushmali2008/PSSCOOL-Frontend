import React from 'react';
import './ComingSoon.css';

/**
 * Generic placeholder for pages not yet implemented.
 * Usage: <ComingSoon title="Revenue" description="Track platform revenue." />
 */
const ComingSoon = ({ title = 'Coming Soon', description = 'This section is under construction.' }) => (
  <div className="cs-page">
    <div className="cs-card">
      <div className="cs-icon">🚧</div>
      <h2 className="cs-title">{title}</h2>
      <p className="cs-desc">{description}</p>
      <span className="cs-badge">Under Construction</span>
    </div>
  </div>
);

export default ComingSoon;
