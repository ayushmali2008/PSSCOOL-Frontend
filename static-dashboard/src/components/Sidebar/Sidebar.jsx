import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV } from '../../routes/navConfig.js';
import './Sidebar.css';

function Sidebar() {
  const { pathname } = useLocation();

  /* Track which parent dropdowns are open.
     Key = item label, value = boolean.
     Auto-open if a child route is currently active. */
  const initialOpen = {};
  NAV.forEach(item => {
    if (item.children) {
      initialOpen[item.label] = item.children.some(c => pathname.startsWith(c.path));
    }
  });
  const [openMap, setOpenMap] = useState(initialOpen);

  const toggleDropdown = (label) => {
    setOpenMap(prev => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className="sidebar">

      {/* ── Logo ── */}
      <div className="sidebar__logo">
        <div className="sidebar__logo-mark">E</div>
        <span className="sidebar__logo-text">EduAdmin</span>
      </div>

      {/* ── Nav ── */}
      <nav className="sidebar__nav">
        {NAV.map(item => {

          /* ── Parent with children (dropdown) ── */
          if (item.children) {
            const isAnyChildActive = item.children.some(c => pathname.startsWith(c.path));
            const isOpen = openMap[item.label];

            return (
              <div key={item.label} className="sidebar__group">

                {/* Trigger button */}
                <button
                  className={`sidebar__item sidebar__item--btn${isAnyChildActive ? ' sidebar__item--active' : ''}`}
                  onClick={() => toggleDropdown(item.label)}
                  aria-expanded={isOpen}
                >
                  <span className="sidebar__item-icon">{item.icon}</span>
                  <span className="sidebar__item-label">{item.label}</span>
                  <span className={`sidebar__chevron${isOpen ? ' sidebar__chevron--open' : ''}`}>
                    ▾
                  </span>
                </button>

                {/* Animated dropdown panel */}
                <div className={`sidebar__sub${isOpen ? ' sidebar__sub--open' : ''}`}>
                  {item.children.map(child => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      className={({ isActive }) =>
                        `sidebar__sub-item${isActive ? ' sidebar__sub-item--active' : ''}`
                      }
                    >
                      <span className="sidebar__sub-dash">—</span>
                      <span>{child.label}</span>
                    </NavLink>
                  ))}
                </div>

              </div>
            );
          }

          /* ── Regular nav link ── */
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `sidebar__item${isActive ? ' sidebar__item--active' : ''}`
              }
            >
              <span className="sidebar__item-icon">{item.icon}</span>
              <span className="sidebar__item-label">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* ── Footer ── */}
      <div className="sidebar__footer">
        <div className="sidebar__footer-avatar">A</div>
        <div className="sidebar__footer-info">
          <p className="sidebar__footer-name">Abhay Thakur</p>
          <p className="sidebar__footer-role">Super Admin</p>
        </div>
        <span className="sidebar__footer-signout" title="Sign out">⏻</span>
      </div>

    </aside>
  );
}

export default Sidebar;
