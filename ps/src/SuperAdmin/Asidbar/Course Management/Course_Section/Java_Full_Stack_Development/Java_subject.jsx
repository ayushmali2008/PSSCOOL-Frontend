import React from "react";
import "./Java_subject.css";

function Java_subject() {
    return (
        <div className="subjects-container">

            {/* Header */}
            <div className="subjects-header">
                <div className="left">
                    <span className="back">←</span>
                    <h2>Java Full Stack Development</h2>
                </div>
                <div className="right">Course Management</div>
            </div>

            {/* Top Section */}
            <div className="subjects-top">
                <h3>Browse subjects included in this course</h3>

                <div className="actions">
                    <input type="text" placeholder="Search" />
                    <button className="btn">Filters</button>
                    <button className="btn">Switch hierarchy</button>
                    <button className="add-btn">+ Add Subject</button>
                </div>
            </div>

            {/* Cards */}
            <div className="card-grid">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                    <div className="card" key={index}>

                        <div className="card-top">
                            <div className="line"></div>
                            <div>
                                <h4>Core Java</h4>
                                <p>Chapters : 12</p>
                            </div>
                        </div>

                        <button className="view-btn">
                            View All Chapter →
                        </button>

                    </div>
                ))}
            </div>

        </div>
    );
}

export default Java_subject;