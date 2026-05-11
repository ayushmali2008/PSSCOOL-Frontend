import React from "react";
import "./Coding.css";

function Coding() {
    return (
        <div className="course-container">

            {/* Header */}
            <div className="course-header">
                <h2>Courses Management</h2>
                <span>Course Management</span>
            </div>

            {/* Tabs Top */}
            <div className="top-tabs">
                <span className="active">Coding</span>
                <span>Electronics</span>
                <span>Mechanics</span>
                <span>Robotics</span>
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

            {/* Sub Tabs */}
            <div className="sub-tabs">
                <button>Platform Courses</button>
                <button>My Courses</button>
                <button className="active">Drafts</button>
            </div>

            {/* Cards */}
            <div className="card-grid">

                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div className="card" key={index}>

                        <img
                            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
                            alt="course"
                        />

                        <h4>Java Full Stack Development</h4>
                        <p>Master backend and frontend using Java technologies</p>

                        <div className="card-info">
                            <span>Subjects : 8</span>

                            <span className={`level ${index === 0 ? "beginner" :
                                    index === 1 ? "intermediate" :
                                        "advanced"
                                }`}>
                                {index === 0 ? "Beginner" :
                                    index === 1 ? "Intermediate" :
                                        "Advanced"}
                            </span>
                        </div>

                        <button className="view-btn">
                            View All Subject →
                        </button>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default Coding;