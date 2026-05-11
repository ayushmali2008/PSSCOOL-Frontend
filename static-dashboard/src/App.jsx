import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import './styles/app.css';
import './styles/shared.css';

/* ── Layout components ── */
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Topbar  from './components/Topbar/Topbar.jsx';

/* ── Pages ── */
import Dashboard   from './pages/Dashboard/Dashboard.jsx';
import Students    from './pages/Students/Students.jsx';
import Instructors from './pages/Instructors/Instructors.jsx';
import Institutions from './pages/Institutions/Institutions.jsx';
import Courses     from './pages/Courses/Courses.jsx';
import ComingSoon  from './pages/ComingSoon/ComingSoon.jsx';

/* ════════════════════════════════════════════
   Layout shell — Sidebar + Topbar + <Outlet />
════════════════════════════════════════════ */
function Layout() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-right">
        <Topbar />
        <main className="app-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   Route tree
════════════════════════════════════════════ */
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* All pages share the Layout (Sidebar + Topbar) */}
        <Route element={<Layout />}>

          {/* Dashboard home */}
          <Route path="/"           element={<Dashboard />} />

          {/* User Management */}
          <Route path="/users/students"     element={<Students />} />
          <Route path="/users/instructors"  element={<Instructors />} />
          <Route path="/users/institutions" element={<Institutions />} />

          {/* Courses */}
          <Route path="/courses" element={<Courses />} />

          {/* Placeholder pages */}
          <Route path="/course-verify"
            element={<ComingSoon title="Course Verification"
              description="Review and approve submitted courses before publishing." />} />
          <Route path="/roles"
            element={<ComingSoon title="Role Management"
              description="Define and assign roles and permissions." />} />
          <Route path="/settlements"
            element={<ComingSoon title="Settlements"
              description="Track and process financial settlements." />} />
          <Route path="/revenue"
            element={<ComingSoon title="Revenue"
              description="Monitor platform revenue and financial analytics." />} />
          <Route path="/subscriptions"
            element={<ComingSoon title="Subscription Plans"
              description="Manage subscription tiers and pricing." />} />
          <Route path="/virtual-labs"
            element={<ComingSoon title="Virtual Lab Management"
              description="Configure virtual lab environments for students." />} />
          <Route path="/new-institutes"
            element={<ComingSoon title="New Institute Requests"
              description="Review and approve new institution applications." />} />
          <Route path="/notifications"
            element={<ComingSoon title="Notifications Center"
              description="View and manage all platform notifications." />} />

        </Route>

        {/* Fallback → home */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
