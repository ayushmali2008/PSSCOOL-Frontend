import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Institutions.css";

const ALL_INSTITUTIONS = [
  { id: "INS001", name: "Starwood Academy",     country: "India", plan: "Monthly",      renewal: "28 Feb 2026", active: true  },
  { id: "INS002", name: "Bright Future School", country: "India", plan: "Annual",       renewal: "28 Feb 2026", active: true  },
  { id: "INS003", name: "Tech Horizon Inst.",   country: "Ghana", plan: "Lifetime",     renewal: "—",           active: true  },
  { id: "INS004", name: "Global Learn Hub",     country: "UAE",   plan: "Lifetime",     renewal: "—",           active: false },
  { id: "INS005", name: "Sunrise Academy",      country: "India", plan: "30-day trial", renewal: "15 May 2026", active: true  },
  { id: "INS006", name: "Pioneer Institute",    country: "India", plan: "Monthly",      renewal: "10 Jun 2026", active: false },
  { id: "INS007", name: "Apex Learning",        country: "Ghana", plan: "Annual",       renewal: "01 Jan 2027", active: true  },
  { id: "INS008", name: "Nova Education",       country: "UAE",   plan: "30-day trial", renewal: "20 May 2026", active: false },
];

const planColors = {
  "Monthly":      { bg: "#e0f2fe", color: "#0284c7" },
  "Annual":       { bg: "#d1fae5", color: "#065f46" },
  "Lifetime":     { bg: "#ede9fe", color: "#6d28d9" },
  "30-day trial": { bg: "#fef3c7", color: "#92400e" },
};

export default function Institution() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [institutions, setInstitutions] = useState(ALL_INSTITUTIONS);

  const filtered = institutions.filter(inst =>
    inst.name.toLowerCase().includes(search.toLowerCase()) ||
    inst.id.toLowerCase().includes(search.toLowerCase())
  );

  const toggleStatus = (id) => {
    setInstitutions(prev =>
      prev.map(inst => inst.id === id ? { ...inst, active: !inst.active } : inst)
    );
  };

  return (
    <div className="institutions-page">

      {/* Header */}
      <div className="institutions-header">
        <div>
          <h2>Institutions</h2>
          <p>Manage all registered institutions on the platform.</p>
        </div>
        <span className="breadcrumb">User Management › Institutions</span>
      </div>

      {/* Table card */}
      <div className="institutions-table-card">
        <div className="table-toolbar">
          <h3>Institutions List <span className="count-badge">{filtered.length}</span></h3>
          <div className="toolbar-right">
            <div className="search-box">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                placeholder="Search institutions…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Search institutions"
              />
            </div>
            <button className="btn-outline">⚙ Filters</button>
            <button className="btn-primary" onClick={() => navigate('/dashboard/add-institution')}>
              + Add Institution
            </button>
          </div>
        </div>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Institution Name</th>
                <th>Country</th>
                <th>Subscription Plan</th>
                <th>Renewal Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={7} className="empty-row">No institutions found.</td></tr>
              ) : filtered.map((inst) => {
                const planStyle = planColors[inst.plan] || { bg: "#e5e7eb", color: "#374151" };
                return (
                  <tr key={inst.id}>
                    <td className="id-cell">{inst.id}</td>
                    <td>
                      <div className="inst-name-cell">
                        <div className="inst-avatar">
                          {inst.name.charAt(0)}
                        </div>
                        <span>{inst.name}</span>
                      </div>
                    </td>
                    <td>{inst.country}</td>
                    <td>
                      <span className="plan-badge"
                        style={{ background: planStyle.bg, color: planStyle.color }}>
                        {inst.plan}
                      </span>
                    </td>
                    <td className="text-muted">{inst.renewal}</td>
                    <td>
                      <button
                        className={`status-btn ${inst.active ? 'active' : 'inactive'}`}
                        onClick={() => toggleStatus(inst.id)}
                      >
                        <span className="status-dot-indicator" />
                        {inst.active ? 'Active' : 'Inactive'}
                      </button>
                    </td>
                    <td>
                      <button className="view-btn">👁 View</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <span className="pagination-info">Showing {filtered.length} of {institutions.length} institutions</span>
          <div className="pagination-pages">
            <button className="page-btn">← Prev</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">Next →</button>
          </div>
        </div>
      </div>

    </div>
  );
}
