import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ALL_STUDENTS } from "./studentData";   //data a rha he  
import "./Student.css";

const STAT_ITEMS = [
  { label: "Total Student", value: 2000 },
  { label: "Institute Students", value: 400 },
  { label: "Individual Students", value: 400 },
  { label: "Subscription", value: 600 },
  { label: "Age 8-12", value: 600 },
  { label: "Age 13-15", value: 600 },
  { label: "Age 16-19", value: 600 },
  { label: "Age 20+", value: 600 },
];

const PAGES = [1, 2, 3, "...", 8, 9, 10];

export default function Student() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState(ALL_STUDENTS);
  const [activePage, setActivePage] = useState(1);

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase())
  );

  const toggleStatus = (id) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, active: !s.active } : s))
    );
  };

  const handleRowClick = (student) => {
    navigate(`/dashboard/student/${student.id}`);
  };

  return (
    <div className="sp-page">

      {/* ── Header ── */}
      <div className="sp-header">
        <h2 className="sp-header__title">Student</h2>
        <span className="sp-header__breadcrumb">User Management &nbsp;›&nbsp; Student</span>
      </div>

      {/* ── Stats card ── */}
      <div className="sp-stats-card">
        <div className="sp-stats-grid">
          {STAT_ITEMS.map((item, i) => (
            <div className="sp-stat" key={i}>
              <p className="sp-stat__label">{item.label}</p>
              <p className="sp-stat__value">{item.value.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Table card ── */}
      <div className="sp-table-card">

        {/* Toolbar */}
        <div className="sp-toolbar">
          <h3 className="sp-toolbar__title">Student List</h3>
          <div className="sp-toolbar__right">

            <div className="sp-search">
              <svg className="sp-search__icon" width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="#9ca3af" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                className="sp-search__input"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search students"
              />
            </div>

            <button type="button" className="sp-btn-filter">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              Filters
            </button>

            <button
              type="button"
              className="sp-btn-add"
              onClick={() => navigate("/dashboard/student/add")}
            >
              <span className="sp-btn-add__plus">+</span>
              Add New Student
            </button>

          </div>
        </div>

        {/* Table */}
        <div className="sp-table-scroll">
          <table className="sp-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Institution</th>
                <th>Country</th>
                <th>Age Group</th>
                <th>Status</th>
                <th>Subscription</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={9} className="sp-empty">No students found.</td>
                </tr>
              ) : (
                filtered.map((s) => (
                  <tr
                    key={s.id}
                    className="sp-row--clickable"
                    onClick={() => handleRowClick(s)}
                    title={`View ${s.name}'s profile`}
                  >
                    <td className="sp-td-id">{s.id}</td>
                    <td>
                      <div className="sp-name-cell">
                        <img src={s.avatar} alt={s.name} className="sp-avatar" />
                        <span className="sp-name">{s.name}</span>
                      </div>
                    </td>
                    <td>{s.role}</td>
                    <td>{s.institution}</td>
                    <td>{s.country}</td>
                    <td>{s.age}</td>
                    <td
                      onClick={(e) => e.stopPropagation()}
                    >
                      <label
                        className="sp-toggle"
                        aria-label={`Toggle status for ${s.name}`}
                      >
                        <input
                          type="checkbox"
                          checked={s.active}
                          onChange={() => toggleStatus(s.id)}
                        />
                        <span className="sp-toggle__track" />
                      </label>
                    </td>
                    <td>
                      <span className={`sp-badge ${s.subscription === "Premium" ? "sp-badge--premium" : "sp-badge--standard"}`}>
                        {s.subscription}
                      </span>
                    </td>
                    <td onClick={(e) => e.stopPropagation()}>
                      <button
                        type="button"
                        className="sp-action-btn"
                        aria-label={`Settings for ${s.name}`}
                        onClick={() => handleRowClick(s)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="3" />
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="sp-pagination">
          <button type="button" className="sp-page-btn sp-page-btn--nav">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Previous
          </button>

          <div className="sp-page-numbers">
            {PAGES.map((p, i) => (
              <button
                key={i}
                type="button"
                className={`sp-page-num${p === activePage ? " sp-page-num--active" : ""}${p === "..." ? " sp-page-num--dots" : ""}`}
                onClick={() => typeof p === "number" && setActivePage(p)}
                disabled={p === "..."}
              >
                {p}
              </button>
            ))}
          </div>

          <button type="button" className="sp-page-btn sp-page-btn--nav">
            Next
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
