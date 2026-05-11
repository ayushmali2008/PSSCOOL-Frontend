import React from "react";
import "./Course_Management.css";
import { Outlet, useNavigate } from "react-router-dom";

function Course_Management() {
  const navigate = useNavigate();

  return (
    <div className="cm-container">
      <div className="cm-header">
        <h2 className="cm-title">Course Management</h2>
        <span className="cm-breadcrumb">Course Management</span>
      </div>

      <div className="cm-topbar">
        <h3 className="cm-subtitle">Course Categories List</h3>

        <div className="cm-actions">
          <input
            type="text"
            placeholder="Search courses by name or category"
            className="cm-search"
          />

          <button type="button" className="cm-btn cm-filter-btn">
            Filters
          </button>

          <button
            type="button"
            className="cm-btn cm-add-btn"
            onClick={() => navigate("create-category")}
          >
            + Add New Categories
          </button>
        </div>
      </div>

      <p className="cm-note">
        This category is system-defined and cannot be edited or deleted.
      </p>

      <div className="cm-grid">
        <div className="cm-card">
          <div className="cm-card-header">
            <div className="cm-icon-box">⚙️</div>
            <div className="cm-status">
              <span>Status</span>
              <div className="cm-toggle active"></div>
            </div>
          </div>

          <h4 className="cm-card-title">Mechanics</h4>

          <div className="cm-stats">
            <div>
              <p>Courses</p>
              <h5>24</h5>
            </div>
            <div>
              <p>Institutions</p>
              <h5>16</h5>
            </div>
            <div>
              <p>Instructor</p>
              <h5>10</h5>
            </div>
          </div>

          <div className="cm-card-footer">
            <button className="cm-view-btn">View Details</button>
          </div>
        </div>

        <div className="cm-card">
          <div className="cm-card-header">
            <div className="cm-icon-box">🤖</div>
            <div className="cm-status">
              <span>Status</span>
              <div className="cm-toggle active"></div>
            </div>
          </div>

          <h4 className="cm-card-title">Robotics</h4>

          <div className="cm-stats">
            <div>
              <p>Courses</p>
              <h5>24</h5>
            </div>
            <div>
              <p>Institutions</p>
              <h5>16</h5>
            </div>
            <div>
              <p>Instructor</p>
              <h5>10</h5>
            </div>
          </div>

          <div className="cm-card-footer">
            <button className="cm-view-btn">View Details</button>
          </div>
        </div>

        <div className="cm-card">
          <div className="cm-card-header">
            <div className="cm-icon-box">{"</>"}</div>
            <div className="cm-status">
              <span>Status</span>
              <div className="cm-toggle active"></div>
            </div>
          </div>

          <h4 className="cm-card-title">Coding</h4>

          <div className="cm-stats">
            <div>
              <p>Courses</p>
              <h5>24</h5>
            </div>
            <div>
              <p>Institutions</p>
              <h5>16</h5>
            </div>
            <div>
              <p>Instructor</p>
              <h5>10</h5>
            </div>
          </div>

          <div className="cm-card-footer">
            <button className="cm-view-btn">View Details</button>
          </div>
        </div>

        <div className="cm-card">
          <div className="cm-card-header">
            <div className="cm-icon-box">🔌</div>
            <div className="cm-status">
              <span>Status</span>
              <div className="cm-toggle active"></div>
            </div>
          </div>

          <h4 className="cm-card-title">Electronics</h4>

          <div className="cm-stats">
            <div>
              <p>Courses</p>
              <h5>24</h5>
            </div>
            <div>
              <p>Institutions</p>
              <h5>16</h5>
            </div>
            <div>
              <p>Instructor</p>
              <h5>10</h5>
            </div>
          </div>

          <div className="cm-card-footer">
            <button className="cm-view-btn">View Details</button>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Course_Management;