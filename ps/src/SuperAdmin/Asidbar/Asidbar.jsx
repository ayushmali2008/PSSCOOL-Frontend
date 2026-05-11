import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Asidebar.css";

import dashboardIcon from "../../image/dashbord.png";
import userIcon      from "../../image/user-mangment.png";
import coursemaneg   from "../../image/coursemaneg.png";
import varifiction   from "../../image/varifectionrole.png";
import rolemaneg     from "../../image/rolemanage.png";
import setlment      from "../../image/setlment.png";
import renu          from "../../image/renu.png";
import Subscription  from "../../image/subscrips.png";
import virtual       from "../../image/virtul.png";
import Institute     from "../../image/newinstiut.png";
import notificstion  from "../../image/Notification.png";
import switchdsbord  from "../../image/switchdasbord.png";
import singout       from "../../image/singout.png";
import atelment      from "../../image/atelment.png";

const USER_DROPDOWN = [
  { to: "/dashboard/users/students",     label: "Student"     },
  { to: "/dashboard/users/instructors",  label: "Instructor"  },
  { to: "/dashboard/users/institutions", label: "Institution" },
];

const USER_ROUTES = USER_DROPDOWN.map(i => i.to);

const MENU_ITEMS = [
  { to: "/dashboard/courses",        icon: coursemaneg,  label: "Course Management"      },
  { to: "/dashboard/course-verify",  icon: varifiction,  label: "Course Verification"    },
  { to: "/dashboard/roles",          icon: rolemaneg,    label: "Role Management"        },
  { to: "/dashboard/settlements",    icon: setlment,     label: "Settlements"            },
  { to: "/dashboard/verification",   icon: atelment,     label: "Verification Request"   },
  { to: "/dashboard/revenue",        icon: renu,         label: "Revenue"                },
  { to: "/dashboard/subscriptions",  icon: Subscription, label: "Subscription Plan"      },
  { to: "/dashboard/virtual-labs",   icon: virtual,      label: "Virtual Lab Management" },
  { to: "/dashboard/new-institutes", icon: Institute,    label: "New Institute Requests" },
  { to: "/dashboard/notifications",  icon: notificstion, label: "Notifications Center"   },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  const isUserActive = USER_ROUTES.some(r => pathname.startsWith(r));
  const [open, setOpen] = useState(isUserActive);

  return (
    <aside className="sidebar" aria-label="Main navigation">

      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) => `nav-link${isActive ? " nav-link--active" : ""}`}
      >
        <span className="nav-link__icon">
          <img src={dashboardIcon} alt="" />
        </span>
        <span className="nav-link__label">Dashboard</span>
      </NavLink>

      <div className="nav-group">

        <button
          className={`nav-group__trigger${isUserActive || open ? " nav-group__trigger--active" : ""}`}
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-controls="user-mgmt-panel"
        >
          <span className="nav-link__icon">
            <img src={userIcon} alt="" />
          </span>
          <span className="nav-link__label">User Management</span>
          <span className={`nav-group__chevron${open ? " nav-group__chevron--open" : ""}`}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.5 4.5L6.5 8.5L10.5 4.5"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>

        <div
          id="user-mgmt-panel"
          className={`nav-group__panel${open ? " nav-group__panel--open" : ""}`}
        >
          {USER_DROPDOWN.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-sub-item${isActive ? " nav-sub-item--active" : ""}`
              }
            >
              <span className="nav-sub-item__dash">—</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>

      </div>

      {MENU_ITEMS.map(item => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) => `nav-link${isActive ? " nav-link--active" : ""}`}
        >
          <span className="nav-link__icon">
            <img src={item.icon} alt="" />
          </span>
          <span className="nav-link__label">{item.label}</span>
        </NavLink>
      ))}

      <div className="sidebar-footer">
        <button className="sidebar-footer__signout">
          <img src={singout} alt="" />
          <span>Sign Out</span>
        </button>

        <div className="sidebar-footer__switch">
          <div className="sidebar-footer__switch-avatar">
            <img src={switchdsbord} alt="" />
          </div>
          <div className="sidebar-footer__switch-text">
            <p className="sidebar-footer__switch-hint">Switch Dashboard</p>
            <div className="sidebar-footer__switch-row">
              <span className="sidebar-footer__switch-name">pschool</span>
              <span className="sidebar-footer__switch-star">★</span>
            </div>
          </div>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;
