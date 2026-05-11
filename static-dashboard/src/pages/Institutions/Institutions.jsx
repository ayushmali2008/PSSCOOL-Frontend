import React, { useState } from 'react';

const ALL = [
  { id:'INS001', name:'Starwood Academy',     country:'India', plan:'Monthly',      renewal:'28 Feb 2026', active:true  },
  { id:'INS002', name:'Bright Future School', country:'India', plan:'Annual',       renewal:'28 Feb 2026', active:true  },
  { id:'INS003', name:'Tech Horizon Inst.',   country:'Ghana', plan:'Lifetime',     renewal:'—',           active:true  },
  { id:'INS004', name:'Global Learn Hub',     country:'UAE',   plan:'Lifetime',     renewal:'—',           active:false },
  { id:'INS005', name:'Sunrise Academy',      country:'India', plan:'30-day trial', renewal:'15 May 2026', active:true  },
  { id:'INS006', name:'Pioneer Institute',    country:'India', plan:'Monthly',      renewal:'10 Jun 2026', active:false },
  { id:'INS007', name:'Apex Learning',        country:'Ghana', plan:'Annual',       renewal:'01 Jan 2027', active:true  },
  { id:'INS008', name:'Nova Education',       country:'UAE',   plan:'30-day trial', renewal:'20 May 2026', active:false },
];

const PLAN_COLORS = {
  'Monthly':      { bg:'#e0f2fe', color:'#0284c7' },
  'Annual':       { bg:'#d1fae5', color:'#065f46' },
  'Lifetime':     { bg:'#ede9fe', color:'#6d28d9' },
  '30-day trial': { bg:'#fef3c7', color:'#92400e' },
};

export default function Institutions() {
  const [search, setSearch] = useState('');
  const filtered = ALL.filter(i =>
    i.name.toLowerCase().includes(search.toLowerCase()) ||
    i.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Institutions</h2>
          <p>Manage all registered institutions on the platform.</p>
        </div>
        <span className="breadcrumb">User Management › Institutions</span>
      </div>

      <div className="table-card">
        <div className="table-toolbar">
          <h3>Institutions List <span className="badge">{filtered.length}</span></h3>
          <div className="toolbar-right">
            <div className="search-box">
              <span>🔍</span>
              <input placeholder="Search institutions…" value={search}
                onChange={e => setSearch(e.target.value)} />
            </div>
            <button className="btn-outline">⚙ Filters</button>
            <button className="btn-primary">+ Add Institution</button>
          </div>
        </div>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>ID</th><th>Institution</th><th>Country</th>
                <th>Plan</th><th>Renewal</th><th>Status</th><th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0
                ? <tr><td colSpan={7} className="empty">No institutions found.</td></tr>
                : filtered.map(inst => {
                  const ps = PLAN_COLORS[inst.plan] || { bg:'#e5e7eb', color:'#374151' };
                  return (
                    <tr key={inst.id}>
                      <td className="mono">{inst.id}</td>
                      <td>
                        <div className="name-cell">
                          <div style={{
                            width:32, height:32, borderRadius:8, flexShrink:0,
                            background:'linear-gradient(135deg,#4f46e5,#06b6d4)',
                            color:'#fff', fontWeight:700, fontSize:14,
                            display:'flex', alignItems:'center', justifyContent:'center'
                          }}>{inst.name.charAt(0)}</div>
                          <span>{inst.name}</span>
                        </div>
                      </td>
                      <td>{inst.country}</td>
                      <td>
                        <span className="plan-badge"
                          style={{ background: ps.bg, color: ps.color }}>
                          {inst.plan}
                        </span>
                      </td>
                      <td className="muted">{inst.renewal}</td>
                      <td>
                        <span className={`dot-status ${inst.active ? 'active' : 'inactive'}`}>
                          {inst.active ? 'Active' : 'Inactive'}
                        </span>
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
