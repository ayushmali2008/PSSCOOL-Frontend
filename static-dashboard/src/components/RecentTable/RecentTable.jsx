import React from 'react';
import './RecentTable.css';

const ROWS = [
  { id: 'STU001', name: 'Aarav Patel',   email: 'aarav@example.com',   plan: 'Premium',  status: 'Active',   avatar: 'AP' },
  { id: 'STU002', name: 'Priya Sharma',  email: 'priya@example.com',   plan: 'Standard', status: 'Active',   avatar: 'PS' },
  { id: 'STU003', name: 'Rohan Mehta',   email: 'rohan@example.com',   plan: 'Standard', status: 'Inactive', avatar: 'RM' },
  { id: 'STU004', name: 'Sneha Gupta',   email: 'sneha@example.com',   plan: 'Premium',  status: 'Active',   avatar: 'SG' },
  { id: 'STU005', name: 'Vikram Singh',  email: 'vikram@example.com',  plan: 'Standard', status: 'Active',   avatar: 'VS' },
  { id: 'STU006', name: 'Ananya Rao',    email: 'ananya@example.com',  plan: 'Premium',  status: 'Active',   avatar: 'AR' },
];

const AVATAR_COLORS = ['#4f46e5','#06b6d4','#f59e0b','#10b981','#ef4444','#8b5cf6'];

function RecentTable() {
  return (
    <div className="recent-table-card">
      <div className="recent-table-card__header">
        <div>
          <h3 className="recent-table-card__title">Recent Students</h3>
          <p className="recent-table-card__sub">Latest registrations on the platform</p>
        </div>
        <button className="recent-table-card__view-all">View All →</button>
      </div>

      <div className="recent-table-scroll">
        <table className="recent-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>ID</th>
              <th>Email</th>
              <th>Plan</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr key={row.id}>
                <td>
                  <div className="rt-name-cell">
                    <div className="rt-avatar"
                      style={{ background: AVATAR_COLORS[i % AVATAR_COLORS.length] }}>
                      {row.avatar}
                    </div>
                    <span className="rt-name">{row.name}</span>
                  </div>
                </td>
                <td className="rt-id">{row.id}</td>
                <td className="rt-muted">{row.email}</td>
                <td>
                  <span className={`rt-badge rt-badge--${row.plan.toLowerCase()}`}>
                    {row.plan}
                  </span>
                </td>
                <td>
                  <span className={`rt-status rt-status--${row.status.toLowerCase()}`}>
                    {row.status}
                  </span>
                </td>
                <td>
                  <button className="rt-action-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentTable;
