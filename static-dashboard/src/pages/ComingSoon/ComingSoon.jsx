import React from 'react';

export default function ComingSoon({ title = 'Coming Soon', description = 'This section is under construction.' }) {
  return (
    <div className="coming-soon">
      <div className="coming-soon__card">
        <div className="coming-soon__icon">🚧</div>
        <h2 className="coming-soon__title">{title}</h2>
        <p className="coming-soon__desc">{description}</p>
        <span className="coming-soon__badge">Under Construction</span>
      </div>
    </div>
  );
}
