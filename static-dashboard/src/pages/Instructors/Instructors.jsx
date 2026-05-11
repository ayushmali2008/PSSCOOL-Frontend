import React, { useState } from 'react';

const ALL = Array.from({ length: 10 }, (_, i) => ({
  id: `INS${String(i + 1).padStart(3, '0')}`,
  name: ['Dr. Kwame Mensah','Prof. Anita Roy','Mr. Ravi Kumar','Dr. Fatima Al-Hassan',
         'Ms. Priya Nair','Mr. John Osei','Dr. Meera Pillai','Prof. Arjun Das',
         'Ms. Zara Ahmed','Mr. Sanjay Gupta'][i],
  state: i === 3 || i === 7 ? 'Suspended' : 'Verified',
  country: ['India','Ghana','India','UAE','India','Ghana','India','India','UAE','India'][i],
  courses: [8,5,12,3,7,9,6,4,11,8][i],
  rating: [4.6,4.8,4.2,3.9,4.7,4.5,4.9,4.1,4.6,4.3][i],
  active: i !== 3 && i !== 7,
  avatar: `https://i.pravatar.cc/32?img=${i + 10}`,
}));

export default function Instructors() {
  const [search, setSearch] = useState('');
  const filtered = ALL.filter(i =>
    i.name.toLowerCase().includes(search.toLowerCase()) ||
    i.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Instructors</h2>
          <p>Manage all registered instructors on the platform.</p>
        </div>
        <span className="breadcrumb">User Management › Instructors</span>
      </div>

      <div className="table-card">
        <div className="table-toolbar">
          <h3>Instructors List <span className="badge">{filtered.length}</span></h3>
          <div className="toolbar-right">
            <div className="search-box">
              <span>🔍</span>
              <input placeholder="Search instructors…" value={search}
                onChange={e => setSearch(e.target.value)} />
            </div>
            <button className="btn-outline">⚙ Filters</button>
            <button className="btn-primary">+ Add Instructor</button>
          </div>
        </div>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>ID</th><th>Name</th><th>State</th><th>Country</th>
                <th>Courses</th><th>Rating</th><th>Status</th><th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0
                ? <tr><td colSpan={8} className="empty">No instructors found.</td></tr>
                : filtered.map(ins => (
                  <tr key={ins.id}>
                    <td className="mono">{ins.id}</td>
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
                    <td style={{ textAlign: 'center' }}>{ins.courses}</td>
                    <td>⭐ {ins.rating}</td>
                    <td>
                      <label className="toggle">
                        <input type="checkbox" defaultChecked={ins.active} />
                        <span className="toggle-track" />
                      </label>
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
