import React from "react";
import "./Create_New_Categories.css";

const Create_New_Categories = () => {
    return (
        <div className="cm-wrapper">
            {/* Header */}
            <div className="cm-topbar">
                <div className="cm-left">
                    <div className="cm-back-btn">←</div>
                    <h2>Create New Categories</h2>
                </div>

                <div className="cm-right">
                    <span>Course Management</span>
                    <span className="arrow">›</span>
                    <span>Add New Course</span>
                </div>
            </div>

            {/* Main Card */}
            <div className="cm-main-card">
                {/* Upload */}
                <div className="cm-upload">
                    <span>+</span>
                    <p>Upload Logo</p>
                </div>

                {/* Form */}
                <div className="cm-form">
                    <label>Categories Name</label>
                    <input type="text" value="Programming" readOnly />

                    <label>Course Description</label>
                    <textarea
                        readOnly
                        value="Your Java Programming quiz is scheduled for tomorrow. Please revise OOP concepts and attempt the quiz within the given time."
                    ></textarea>
                </div>

                {/* Buttons */}
                <div className="cm-actions">
                    <button className="btn light">Cancel</button>
                    <button className="btn light">Save as Draft</button>
                    <button className="btn primary">Publish Course</button>
                </div>
            </div>
        </div>
    );
};

export default Create_New_Categories;