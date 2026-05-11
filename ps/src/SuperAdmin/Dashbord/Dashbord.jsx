import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Dashbord.css";
import dashbordBg from "../../image/dasbord_background_img.png";

const scoreCards = [
  { label: "Total Users", value: "90,000", trend: "+12%", up: true, icon: "👥" },
  { label: "Total Students", value: "82,910", trend: "+8%", up: true, icon: "🎓" },
  { label: "Total Instructors", value: "1,284", trend: "+3%", up: true, icon: "📘" },
  { label: "Total Institutions", value: "1,182", trend: "-1%", up: false, icon: "🏫" },
  { label: "Active Subscriptions", value: "1,182", trend: "+5%", up: true, icon: "💳" },
];

const quickActions = [
  { icon: "🎓", label: "Add Student", to: "/dashboard/student/SingleStudent",color: "#e0f2fe", accent: "#09a2db" },
  { icon: "📘", label: "Add Instructor", to: "/dashboard/users/instructors", color: "#fef3c7", accent: "#f59e0b" },
  { icon: "🏫", label: "Add Institution", to: "/dashboard/users/institutions", color: "#d1fae5", accent: "#10b981" },
  { icon: "📦", label: "Create Plan", to: "/dashboard/subscriptions", color: "#ede9fe", accent: "#8b5cf6" },
];

const chartBars = [
  { height: 55, month: "Mar" },
  { height: 40, month: "Apr" },
  { height: 70, month: "May" },
  { height: 30, month: "Jun" },
  { height: 85, month: "Jul" },
  { height: 50, month: "Aug" },
  { height: 42, month: "Sep" },
  { height: 65, month: "Oct" },
];

const courseItems = [
  { label: "Coding", pct: 38, cls: "coding", color: "#09a2db" },
  { label: "Electronics", pct: 27, cls: "electronics", color: "#ff8d28" },
  { label: "Robotics", pct: 20, cls: "robotics", color: "#394a9e" },
  { label: "Mechanics", pct: 15, cls: "mechanics", color: "#cb30e0" },
];

const recentStudents = [
  { name: "Aarav Patel", email: "aarav@example.com", plan: "Premium", status: "Active", avatar: "https://i.pravatar.cc/32?img=1" },
  { name: "Priya Sharma", email: "priya@example.com", plan: "Standard", status: "Active", avatar: "https://i.pravatar.cc/32?img=5" },
  { name: "Rohan Mehta", email: "rohan@example.com", plan: "Standard", status: "Inactive", avatar: "https://i.pravatar.cc/32?img=3" },
  { name: "Sneha Gupta", email: "sneha@example.com", plan: "Premium", status: "Active", avatar: "https://i.pravatar.cc/32?img=9" },
  { name: "Vikram Singh", email: "vikram@example.com", plan: "Standard", status: "Active", avatar: "https://i.pravatar.cc/32?img=7" },
];

const maxBarHeight = 85;

const Dashboard = () => {
  const navigate = useNavigate();
  const [period, setPeriod] = useState('Monthly');

  return (
    <div className="dashboard-page">

      <div className="dash-heading">
        <div>
          <h2 className="dash-title">Dashboard</h2>
        </div>
        <span className="dash-breadcrumb">Home › Dashboard</span>
      </div>

      <div className="score-strip" style={{ backgroundImage: `url(${dashbordBg})` }}>
        {scoreCards.map((card, i) => (
          <div className="score-card" key={i}>
            <div className="score-card-top">
              <span className="score-icon">{card.icon}</span>
              <span className={`score-trend ${card.up ? 'up' : 'down'}`}>
                {card.up ? '▲' : '▼'} {card.trend}
              </span>
            </div>
            <p className="score-value">{card.value}</p>
            <p className="score-label">{card.label}</p>
          </div>
        ))}
      </div>

      <section className="section">
        <h3 className="section-title">Quick Actions</h3>
        <div className="qa-grid">
          {quickActions.map((action, i) => (
            <button
              key={i}
              className="qa-card"
              style={{ '--qa-bg': action.color, '--qa-accent': action.accent }}
              onClick={() => navigate(action.to)}
              aria-label={action.label}
            >
              <span className="qa-icon-wrap">
                <span className="qa-icon">{action.icon}</span>
              </span>
              <span className="qa-label">{action.label}</span>
              <span className="qa-arrow">+</span>
            </button>
          ))}
        </div>
      </section>

      <div className="charts-row">

        <div className="chart-card user-activity-card">
          <div className="chart-card-header">
            <h3>User Activity</h3>
            <select
              value={period}
              onChange={e => setPeriod(e.target.value)}
              aria-label="Select period"
            >
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>

          <div className="bar-chart-wrap">
            <div className="y-labels">
              {["1400", "1200", "1000", "800", "600", "400", "200", "0"].map(v => (
                <span key={v}>{v}</span>
              ))}
            </div>
            <div className="bar-chart">
              {chartBars.map((bar, i) => (
                <div className="bar-col" key={i}>
                  <div
                    className="bar"
                    style={{ height: `${bar.height}%` }}
                    title={`${bar.month}: ${bar.height * 16} users`}
                  />
                  <span className="bar-label">{bar.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="chart-card course-usage-card">
          <div className="chart-card-header">
            <h3>Course Usage</h3>
          </div>
          <div className="donut-wrap">
            <div className="donut" aria-label="Course usage donut chart">
              <span className="donut-center-text">100%</span>
            </div>
          </div>
          <div className="cu-list">
            {courseItems.map((item, i) => (
              <div className="cu-item" key={i}>
                <span className="cu-dot" style={{ background: item.color }} />
                <span className="cu-name">{item.label}</span>
                <div className="cu-bar-wrap">
                  <div className="cu-bar" style={{ width: `${item.pct}%`, background: item.color }} />
                </div>
                <span className="cu-pct">{item.pct}%</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <section className="section">
        <div className="section-header">
          <h3 className="section-title" style={{ margin: 0 }}>Recent Students</h3>
          <button className="view-all-btn" onClick={() => navigate('/dashboard/users/students')}>
            View All →
          </button>
        </div>
        <div className="recent-table-wrap">
          <table className="recent-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Email</th>
                <th>Plan</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentStudents.map((s, i) => (
                <tr key={i}>
                  <td>
                    <div className="student-cell">
                      <img src={s.avatar} alt={s.name} />
                      <span>{s.name}</span>
                    </div>
                  </td>
                  <td className="text-muted">{s.email}</td>
                  <td>
                    <span className={`plan-badge ${s.plan === 'Premium' ? 'premium' : 'standard'}`}>
                      {s.plan}
                    </span>
                  </td>
                  <td>
                    <span className={`status-dot ${s.status === 'Active' ? 'active' : 'inactive'}`}>
                      {s.status}
                    </span>
                  </td>
                  <td>
                    <button className="action-btn">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};

export default Dashboard;
