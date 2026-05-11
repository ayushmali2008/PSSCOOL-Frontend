import React from 'react';
import './Notification.css'; /* shared styles */

const Profile = () => {
  return (
    <div className="notification-container">
      <h2>Profile</h2>

      <div className="profile-card">
        <div className="profile-avatar">👤</div>

        <div className="profile-name">
          <h3>Abhay Thakur</h3>
          <p>Admin</p>
        </div>

        <div className="profile-row">
          <label>Email:</label>
          <span>abhay.thakur@pschool.com</span>
        </div>
        <div className="profile-row">
          <label>Phone:</label>
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="profile-row">
          <label>Role:</label>
          <span>Super Admin</span>
        </div>
        <div className="profile-row">
          <label>Status:</label>
          <span className="active-status">Active</span>
        </div>

        <div className="profile-actions">
          <button className="btn-edit-profile">Edit Profile</button>
          <button className="btn-change-password">Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
