import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import "./App.css";

import Navbar from "./SuperAdmin/Navbar/Navbar.jsx";
import Asidbar from "./SuperAdmin/Asidbar/Asidbar.jsx";

import Login from "./SuperAdmin/Login/login.jsx";
import Forget from "./SuperAdmin/Login/otp.jsx";
import Verify from "./SuperAdmin/Login/reset.jsx";

import Dashbord from "./SuperAdmin/Dashbord/Dashbord.jsx";

import Notification from "./SuperAdmin/Navbar/Notificastion.jsx";
import Profile from "./SuperAdmin/Navbar/Profile.jsx";

import AddNewStudent from "./SuperAdmin/Dashbord/add_student/Add_new_student.jsx";
import Student from './SuperAdmin/Asidbar/User Management/Student.jsx';
import StudentDetails from './SuperAdmin/Asidbar/User Management/StudentDetails.jsx';




import Instructors from './SuperAdmin/Asidbar/User Management/Instructors.jsx';
import Institution from './SuperAdmin/Asidbar/User Management/Institutions.jsx';

import AddInstructor from './SuperAdmin/Asidbar/User Management/AddInstructor.jsx';
import AddInstitution from './SuperAdmin/Asidbar/User Management/AddInstitution.jsx';

import Course_Management from './SuperAdmin/Asidbar/Course Management/Course_Management.jsx';
import ComingSoon from './SuperAdmin/Pages/ComingSoon.jsx';


import Create_New_Categories from './SuperAdmin/Asidbar/Course Management/Create_New_Categories.jsx';
import Create_New_Course from './SuperAdmin/Asidbar/Course Management/Create New Course/Create_New_Course.jsx';



const Layout = () => (
  <>
    <Navbar />
    <div className="app-body">
      <Asidbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  </>
);


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/verify" element={<Verify />} />

        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/dashboard/add-instructor" element={<AddInstructor />} />
        <Route path="/dashboard/add-institution" element={<AddInstitution />} />

        <Route path="/dashboard" element={<Layout />}>

          <Route index element={<Dashbord />} />

          <Route path="notifications" element={<Notification />} />
          <Route path="profile" element={<Profile />} />

          {/* student/add MUST come before student/:id to avoid "add" being treated as an id */}
          <Route path="student/add" element={<AddNewStudent />} />
          <Route path="student/:id" element={<StudentDetails />} />

          <Route path="users/students" element={<Student />} />
          <Route path="users/instructors" element={<Instructors />} />
          <Route path="users/institutions" element={<Institution />} />

          <Route path="courses" element={<Course_Management />} />
          <Route path="courses/create-category" element={<Create_New_Categories />} />
          <Route path="courses/create-new" element={<Create_New_Course />} />






          <Route path="course-verify"
            element={<ComingSoon title="Course Verification"
              description="Review and approve submitted courses before publishing." />} />

          <Route path="roles"
            element={<ComingSoon title="Role Management"
              description="Define and assign roles and permissions across the platform." />} />

          <Route path="settlements"
            element={<ComingSoon title="Settlements"
              description="Track and process financial settlements for instructors and institutions." />} />

          <Route path="verification"
            element={<ComingSoon title="Verification Requests"
              description="Review identity and document verification requests." />} />

          <Route path="revenue"
            element={<ComingSoon title="Revenue"
              description="Monitor platform revenue, payouts, and financial analytics." />} />

          <Route path="subscriptions"
            element={<ComingSoon title="Subscription Plans"
              description="Manage subscription tiers, pricing, and plan assignments." />} />

          <Route path="virtual-labs"
            element={<ComingSoon title="Virtual Lab Management"
              description="Configure and manage virtual lab environments for students." />} />

          <Route path="new-institutes"
            element={<ComingSoon title="New Institute Requests"
              description="Review and approve applications from new institutions." />} />

        </Route>

        <Route path="*" element={<Navigate to="/dashboard" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
//----------------------------------------------------------------------------------------------
