import React from 'react';
import './Dashboard.css';

import StatCard    from '../../components/StatCard/StatCard.jsx';
import QuickAction from '../../components/QuickAction/QuickAction.jsx';
import BarChart    from '../../components/BarChart/BarChart.jsx';
import DonutChart  from '../../components/DonutChart/DonutChart.jsx';
import RecentTable from '../../components/RecentTable/RecentTable.jsx';

/* ── Static data ── */
const STATS = [
  { icon: '👥', label: 'Total Users',          value: '90,000', trend: '+12%', trendUp: true,  color: '#4f46e5' },
  { icon: '🎓', label: 'Total Students',        value: '82,910', trend: '+8%',  trendUp: true,  color: '#06b6d4' },
  { icon: '📘', label: 'Total Instructors',     value: '1,284',  trend: '+3%',  trendUp: true,  color: '#f59e0b' },
  { icon: '🏫', label: 'Total Institutions',    value: '1,182',  trend: '-1%',  trendUp: false, color: '#ef4444' },
  { icon: '💳', label: 'Active Subscriptions',  value: '3,540',  trend: '+5%',  trendUp: true,  color: '#10b981' },
];

const ACTIONS = [
  { icon: '🎓', label: 'Add Student',     description: 'Register a new student',     color: '#eef2ff', accent: '#4f46e5' },
  { icon: '📘', label: 'Add Instructor',  description: 'Onboard a new instructor',   color: '#fef3c7', accent: '#f59e0b' },
  { icon: '🏫', label: 'Add Institution', description: 'Register an institution',    color: '#d1fae5', accent: '#10b981' },
  { icon: '📦', label: 'Create Plan',     description: 'Set up a subscription plan', color: '#ede9fe', accent: '#8b5cf6' },
];

const NOTICES = [
  { icon: '🏢', text: 'Bright Future Academy submitted a new course for review.',   time: '2 hrs ago',  type: 'info'    },
  { icon: '⚠️', text: 'Instructor Dr. Kwame Mensah account flagged for review.',    time: '5 hrs ago',  type: 'warning' },
  { icon: '✅', text: 'Subscription plan "Premium Annual" was updated successfully.', time: '1 day ago', type: 'success' },
  { icon: '🔔', text: 'New institute request from Apex Learning is pending approval.', time: '2 days ago', type: 'info'  },
];

function Dashboard() {
  return (
    <div className="dash-page">

      {/* ── Welcome banner ── */}
      <div className="dash-banner">
        <div className="dash-banner__text">
          <h2 className="dash-banner__title">Welcome back, Abhay 👋</h2>
          <p className="dash-banner__sub">
            Here's what's happening on your platform today. Stay on top of your metrics.
          </p>
        </div>
        <div className="dash-banner__date">
          <span className="dash-banner__date-label">Today</span>
          <span className="dash-banner__date-val">Tuesday, May 5, 2026</span>
        </div>
      </div>

      {/* ── Stat cards ── */}
      <div className="dash-stats">
        {STATS.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* ── Quick actions ── */}
      <section className="dash-section">
        <div className="dash-section__header">
          <h3 className="dash-section__title">Quick Actions</h3>
          <span className="dash-section__link">View all →</span>
        </div>
        <div className="dash-actions">
          {ACTIONS.map((a) => (
            <QuickAction key={a.label} {...a} />
          ))}
        </div>
      </section>

      {/* ── Charts row ── */}
      <section className="dash-section">
        <div className="dash-section__header">
          <h3 className="dash-section__title">Analytics Overview</h3>
        </div>
        <div className="dash-charts">
          <BarChart />
          <DonutChart />
        </div>
      </section>

      {/* ── Recent students ── */}
      <section className="dash-section">
        <RecentTable />
      </section>

      {/* ── Notices ── */}
      <section className="dash-section">
        <div className="dash-section__header">
          <h3 className="dash-section__title">Recent Notifications</h3>
          <span className="dash-section__link">Clear all</span>
        </div>
        <div className="dash-notices">
          {NOTICES.map((n, i) => (
            <div key={i} className={`dash-notice dash-notice--${n.type}`}>
              <div className="dash-notice__icon">{n.icon}</div>
              <div className="dash-notice__body">
                <p className="dash-notice__text">{n.text}</p>
                <span className="dash-notice__time">{n.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Dashboard;
