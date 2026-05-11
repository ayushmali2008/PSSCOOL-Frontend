import React, { useState } from 'react';

const ALL = Array.from({ length: 10 }, (_, i) => ({
  id: `CRS${String(i + 1).padStart(3, '0')}`,
  title: ['Introduction to Robotics','Python for Beginners','Electronics Fundamentals',
          'Advanced Coding Bootcamp','Mechanics & Engineering','AI & Machine Learning',
          'Web Development 101','Data Science Essentials','3D Printing Workshop','IoT with Arduino'][i],
  instructor: ['Dr. Kwame Mensah','Prof. Anita Roy','Mr. Ravi Kumar','Dr. Fatima Al-Hassan',
               'Ms. Priya Nair','Mr. John Osei','Dr. Meera Pillai','Prof. Arjun Das',
               'Ms. Zara Ahmed','Mr. Sanjay Gupta'][i],
  category: ['Robotics','Coding','Electronics','Coding','Mechanics',
             'Coding','Coding','Coding','Robotics','Electronics'][i],
  students: [120,340,89,210,67,180,295,155,44,98][i],
  status: i % 4 === 3 ? 'Draft' : 'Published',
}));

const CAT_COLORS = {
  Robotics:    { bg:'#ede9fe', color:'#6d28d9' },
  Coding:      { bg:'#e0f2fe', color:'#0284c7' },
  Electronics: { bg:'#fef3c7', color:'#92400e' },
  Mechanics:   { bg:'#d1fae5', color:'#065f46' },
};

export default function Courses() {
  const [search, setSearch] = useState('');
  const filtered = ALL.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Course Management</h2>
          <p>Create, edit, and manage all courses on the platform.</p>
        </div>
        <span className="breadcrumb">Dashboard › Courses</span>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14 }}>
        {[
          { icon:'📚', label:'Total Courses',     val: ALL.length },
          { icon:'✅', label:'Published',         val: ALL.filter(c=>c.status==='Published').length },
          { icon:'📝', label:'Draft',             val: ALL.filter(c=>c.status==='Draft').length },
          { icon:'🎓', label:'Total Enrollments', val: ALL.reduce((s,c)=>s+c.students,0) },
        ].map(s => (
          <div key={s.label} style={{
            background:'#fff', borderRadius:10, padding:'14px 16px',
            display:'flex', alignItems:'center', gap:12,
            boxShadow:'0 1px 4px rgba(0,0,0,.07)'
          }}>
            <span style={{ fontSize:22 }}>{s.icon}</span>
            <div>
              <p style={{ fontSize:20, fontWeight:800, color:'#111827', margin:'0 0 2px' }}>{s.val.toLocaleString()}</p>
              <p style={{ fontSize:11, color:'#6b7280', margin:0 }}>{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="table-card">
        <div className="table-toolbar">
          <h3>Course List <span className="badge">{filtered.length}</span></h3>
          <div className="toolbar-right">
            <div className="search-box">
              <span>🔍</span>
              <input placeholder="Search courses…" value={search}
                onChange={e => setSearch(e.target.value)} />
            </div>
            <button className="btn-outline">⚙ Filters</button>
            <button className="btn-primary">+ Add Course</button>
          </div>
        </div>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>ID</th><th>Title</th><th>Instructor</th>
                <th>Category</th><th>Students</th><th>Status</th><th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0
                ? <tr><td colSpan={7} className="empty">No courses found.</td></tr>
                : filtered.map(c => {
                  const cat = CAT_COLORS[c.category] || { bg:'#e5e7eb', color:'#374151' };
                  return (
                    <tr key={c.id}>
                      <td className="mono">{c.id}</td>
                      <td style={{ fontWeight:600, color:'#111827' }}>{c.title}</td>
                      <td className="muted">{c.instructor}</td>
                      <td>
                        <span className="plan-badge" style={{ background:cat.bg, color:cat.color }}>
                          {c.category}
                        </span>
                      </td>
                      <td style={{ textAlign:'center' }}>{c.students.toLocaleString()}</td>
                      <td>
                        <span style={{
                          padding:'3px 10px', borderRadius:20, fontSize:11, fontWeight:600,
                          background: c.status==='Published' ? '#d1fae5' : '#f3f4f6',
                          color:       c.status==='Published' ? '#065f46' : '#6b7280',
                        }}>{c.status}</span>
                      </td>
                      <td><button className="view-btn">👁 View</button></td>
                    </tr>
                  );
                })
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
