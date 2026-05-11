import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Instructors.css";

const ALL_INSTRUCTORS = Array.from({ length: 10 }, (_, i) => ({
  id: `INS${String(i + 1).padStart(3, '0')}`,
  name: ["Dr. Kwame Mensah", "Prof. Anita Roy", "Mr. Ravi Kumar", "Dr. Fatima Al-Hassan",
         "Ms. Priya Nair", "Mr. John Osei", "Dr. Meera Pillai", "Prof. Arjun Das",
         "Ms. Zara Ahmed", "Mr. Sanjay Gupta"][i],
  state: i === 3 || i === 7 ? "Suspended" : "Verified",
  country: ["India", "Ghana", "India", "UAE", "India", "Ghana", "India", "India", "UAE", "India"][i],
  courses: [8, 5, 12, 3, 7, 9, 6, 4, 11, 8][i],
  rating: [4.6, 4.8, 4.2, 3.9, 4.7, 4.5, 4.9, 4.1, 4.6, 4.3][i],
  revenue: "1,240,000 FCFA",
  active: i !== 3 && i !== 7,
  avatar: `https://i.pravatar.cc/32?img=${i + 10}`,
}));

export default function Instructors() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [instructors, setInstructors] = useState(ALL_INSTRUCTORS);

  const filtered = instructors.filter(ins =>
    ins.name.toLowerCase().includes(search.toLowerCase()) ||
    ins.id.toLowerCase().includes(search.toLowerCase())
  );

  const toggleStatus = (id) => {
    setInstructors(prev =>
      prev.map(ins => ins.id === id ? { ...ins, active: !ins.active } : ins)
    );
  };

  return (
    <div className="instructors-page">

      {/* Header */}
      <div className="instructors-header">
        <div>
          <h2>Instructors</h2>
          <p>Manage all registered instructors on the platform.</p>
        </div>
        <span className="breadcrumb">User Management › Instructors</span>
      </div>

      {/* Table card */}
      <div className="instructors-table-card">
        <div className="table-toolbar">
          <h3>Instructors List <span className="count-badge">{filtered.length}</span></h3>
          <div className="toolbar-right">
            <div className="search-box">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                placeholder="Search instructors…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Search instructors"
              />
            </div>
            <button className="btn-outline">⚙ Filters</button>
            <button className="btn-primary" onClick={() => navigate('/dashboard/add-instructor')}>
              + Add Instructor
            </button>
          </div>
        </div>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>State</th>
                <th>Country</th>
                <th>Courses</th>
                <th>Rating</th>
                <th>Revenue (YTD)</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={9} className="empty-row">No instructors found.</td></tr>
              ) : filtered.map((ins) => (
                <tr key={ins.id}>
                  <td className="id-cell">{ins.id}</td>
                  <td>
                    <div className="name-cell">
                      <img src={ins.avatar} alt={ins.name} />
                      <span>{ins.name}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`state-badge ${ins.state === 'Suspended' ? 'suspended' : 'verified'}`}>
                      {ins.state}
                    </span>
                  </td>
                  <td>{ins.country}</td>
                  <td className="center-cell">{ins.courses}</td>
                  <td>
                    <span className="rating">⭐ {ins.rating}</span>
                  </td>
                  <td className="text-muted">{ins.revenue}</td>
                  <td>
                    <label className="toggle-switch" aria-label={`Toggle status for ${ins.name}`}>
                      <input
                        type="checkbox"
                        checked={ins.active}
                        onChange={() => toggleStatus(ins.id)}
                      />
                      <span className="toggle-track" />
                    </label>
                  </td>
                  <td>
                    <button className="view-btn" aria-label={`View ${ins.name}`}>👁 View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <span className="pagination-info">Showing {filtered.length} of {instructors.length} instructors</span>
          <div className="pagination-pages">
            <button className="page-btn">← Prev</button>
            {[1, 2, 3, '…', 8].map((p, i) => (
              <button key={i} className={`page-btn${p === 1 ? ' active' : ''}`}>{p}</button>
            ))}
            <button className="page-btn">Next →</button>
          </div>
        </div>
      </div>

    </div>
  );
}
