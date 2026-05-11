import React, { useState } from 'react';
import './Students.css';

const ALL = Array.from({ length: 12 }, (_, i) => ({
  id: `STU${String(i + 1).padStart(3, '0')}`,
  name: ['Aarav Patel','Priya Sharma','Rohan Mehta','Sneha Gupta',
         'Vikram Singh','Ananya Rao','Karan Joshi','Divya Nair',
         'Arjun Kumar','Pooja Verma','Rahul Das','Meera Iyer'][i],
  age:  ['8–12','13–15','16–19','20+'][i % 4],
  plan: i % 3 === 0 ? 'Premium' : 'Standard',
  country: 'India',
  active: i % 4 !== 2,
  avatar: `https://i.pravatar.cc/32?img=${i + 1}`,
}));

const STATS = [
  { icon: '🎓', label: 'Total Students',      value: '2,000' },
  { icon: '🏫', label: 'Institute Students',  value: '400'   },
  { icon: '👤', label: 'Individual Students', value: '400'   },
  { icon: '💳', label: 'Subscriptions',       value: '600'   },
];

export default function Students() {
  const [search, setSearch] = useState('');

  const filtered = ALL.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Students</h2>
          <p>Manage all registered students on the platform.</p>
        </div>
        <span className="breadcrumb">User Management › Students</span>
      </div>

      <div className="stats-grid">
        {STATS.map(s => (
          <div className="stat-mini" key={s.label}>
            <span className="stat-mini__icon">{s.icon}</span>
            <div>
              <p className="stat-mini__val">{s.value}</p>
              <p className="stat-mini__lbl">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="table-card">
        <div className="table-toolbar">
          <h3>Student List <span className="badge">{filtered.length}</span></h3>
          <div className="toolbar-right">
            <div className="search-box">
              <span>🔍</span>
              <input
                placeholder="Search students…"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <button className="btn-outline">⚙ Filters</button>
            <button className="btn-primary">+ Add Student</button>
          </div>
        </div>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>ID</th><th>Name</th><th>Age</th>
                <th>Country</th><th>Status</th><th>Plan</th><th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0
                ? <tr><td colSpan={7} className="empty">No students found.</td></tr>
                : filtered.map(s => (
                  <tr key={s.id}>
                    <td className="mono">{s.id}</td>
                    <td>
                      <div className="name-cell">
                        <img src={s.avatar} alt={s.name} />
                        <span>{s.name}</span>
                      </div>
                    </td>
                    <td>{s.age}</td>
                    <td className="muted">{s.country}</td>
                    <td>
                      <span className={`dot-status ${s.active ? 'active' : 'inactive'}`}>
                        {s.active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td>
                      <span className={`plan-badge ${s.plan === 'Premium' ? 'premium' : 'standard'}`}>
                        {s.plan}
                      </span>
                    </td>
                    <td><button className="view-btn">👁 View</button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <span className="muted">Showing {filtered.length} of {ALL.length}</span>
          <div className="pages">
            <button className="pg-btn">← Prev</button>
            <button className="pg-btn active">1</button>
            <button className="pg-btn">2</button>
            <button className="pg-btn">Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
