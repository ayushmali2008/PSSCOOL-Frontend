import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./navbar.css";
import logo         from "../../image/nav-logo.jpg";
import profile      from "../../image/nav-profile.png";
import notification from "../../image/Notification.png";
import frame        from "../../image/america.png";

function Navbar() {
  const navigate = useNavigate();
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang]         = useState('English');

  const languages = ['English', 'Hindi', 'French', 'Arabic'];

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">

        {/* ── Logo ── */}
        <Link to="/dashboard" className="nav-logo" aria-label="Go to dashboard">
          <img src={logo} alt="P-School logo" />
        </Link>

        {/* ── Right side ── */}
        <div className="nav-right">

          {/* Language picker */}
          <div className="nav-lang" onClick={() => setLangOpen(o => !o)}>
            <img src={frame} alt="flag" className="flag-img" />
            <span className="lang-label">{lang}</span>
            <svg className={`lang-arrow${langOpen ? ' open' : ''}`}
              width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            {langOpen && (
              <div className="lang-dropdown" role="listbox">
                {languages.map(l => (
                  <div
                    key={l}
                    className={`lang-option${l === lang ? ' selected' : ''}`}
                    role="option"
                    aria-selected={l === lang}
                    onClick={(e) => { e.stopPropagation(); setLang(l); setLangOpen(false); }}
                  >
                    {l}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Notification bell */}
          <Link to="/dashboard/notifications" className="nav-icon-btn" aria-label="Notifications">
            <img src={notification} alt="" />
            <span className="notif-badge" aria-label="4 unread notifications">4</span>
          </Link>

          {/* Profile */}
          <Link to="/dashboard/profile" className="nav-profile-link">
            <img src={profile} alt="Admin avatar" className="nav-avatar" />
            <div className="nav-profile-info">
              <span className="nav-profile-name">Abhay Thakur</span>
              <span className="nav-profile-role">Super Admin</span>
            </div>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="profile-caret">
              <path d="M2 4L6 8L10 4" stroke="#9ca3af" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
