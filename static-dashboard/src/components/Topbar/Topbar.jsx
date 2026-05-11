import React from 'react';
import { useLocation } from 'react-router-dom';
import { NAV } from '../../routes/navConfig.js';
import './Topbar.css';

/* Flatten NAV into a path → label map */
const PATH_LABELS = {};
NAV.forEach(item => {
  if (item.path) PATH_LABELS[item.path] = item.label;
  if (item.children) {
    item.children.forEach(c => { PATH_LABELS[c.path] = c.label; });
  }
});

function Topbar() {
  const { pathname } = useLocation();

  /* Find best matching label */
  const label = PATH_LABELS[pathname] || 'Dashboard';

  /* Build breadcrumb: parent label if child route */
  let parentLabel = null;
  NAV.forEach(item => {
    if (item.children && item.children.some(c => c.path === pathname)) {
      parentLabel = item.label;
    }
  });

  return (
    <header className="topbar">

      {/* Left — dynamic page title */}
      <div className="topbar__left">
        <h1 className="topbar__title">{label}</h1>
        <nav className="topbar__breadcrumb" aria-label="breadcrumb">
          <span>Home</span>
          <span className="topbar__sep">›</span>
          {parentLabel && (
            <>
              <span>{parentLabel}</span>
              <span className="topbar__sep">›</span>
            </>
          )}
          <span className="topbar__crumb-active">{label}</span>
        </nav>
      </div>

      {/* Right — actions */}
      <div className="topbar__right">

        {/* Search */}
        <div className="topbar__search">
          <span className="topbar__search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search anything…"
            className="topbar__search-input"
            readOnly
          />
        </div>

        {/* Language */}
        <div className="topbar__lang">
          <span>🌐</span>
          <span>EN</span>
          <span className="topbar__caret">▾</span>
        </div>

        {/* Notification bell */}
        <div className="topbar__icon-btn">
          <span>🔔</span>
          <span className="topbar__badge">4</span>
        </div>

        {/* Profile */}
        <div className="topbar__profile">
          <div className="topbar__avatar">A</div>
          <div className="topbar__profile-info">
            <p className="topbar__profile-name">Abhay Thakur</p>
            <p className="topbar__profile-role">Super Admin</p>
          </div>
          <span className="topbar__caret">▾</span>
        </div>

      </div>
    </header>
  );
}

export default Topbar;
