import React from "react";
import "./Course.css";

function Course() {
  return (
    <div className="Coding">

      {/* Header */}
      <div className="header">
        <div className="left">
          <span className="back">←</span>
          <h2>Coding</h2>
        </div>

        <div className="right">
          <span>Course Management</span>
          <span className="arrow">›</span>
          <span className="view">View Details</span>
        </div>
      </div>

      {/* Top Section */}
      <div className="top-section">
        <h3>All Courses</h3>

        <div className="actions">
          <input type="text" placeholder="Search" />

          <button className="filter-btn">Filters</button>
          <button className="add-btn">+ Add Course</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className="tab">Published Courses</button>
        <button className="tab active">Drafts</button>
      </div>

      {/* Empty State */}
      <div className="empty">
        <img
          src="https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpghttps://images.openai.com/static-rsc-4/A3ZvbkTyxWy4vT3Rlb-DTvCiKOKor2jZ40GzZ1jsgRZdHJUOeYteTjx-RMeH83BDwTUV_I0juVqf20L1h0on_7-NUM0Nq9ev4bmOYnsA0xUiIcFSxa7NOZF12Nh5pLMDk28a5KxFe4V6ss3BI7PBclYGUopxYuPMBGY9Ksr8IHaM8siPGvLLRQRB6mV3QHfC"
          alt="course"
        />
        <h2>No Content Yet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
      </div>
    </div>
  );
}

export default Course;