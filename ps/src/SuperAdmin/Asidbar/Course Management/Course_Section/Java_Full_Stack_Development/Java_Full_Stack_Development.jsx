import React from "react";
import "./Java_Full_Stack_Development.css";

function Java_Full_Stack_Development() {
    return (
        <div className="details-container">

            {/* Header */}
            <div className="details-header">
                <div className="left">
                    <span className="back">←</span>
                    <h2>Java Full Stack Development</h2>
                </div>

                <div className="right">
                    <span>Course Management</span>
                </div>
            </div>

            {/* Top Section */}
            <div className="details-top">
                <h3>Browse subjects included in this course</h3>

                <div className="actions">
                    <input type="text" placeholder="Search" />

                    <button className="btn">Filters</button>
                    <button className="btn">Switch hierarchy</button>
                    <button className="add-btn">+ Add Subject</button>
                </div>
            </div>

            {/* Empty State */}
            <div className="empty">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                    alt="empty"
                />
                <h2>No Content Yet</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            </div>

        </div>
    );
}

export default Java_Full_Stack_Development;