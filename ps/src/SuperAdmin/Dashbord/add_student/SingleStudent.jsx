import React from "react";
import "./singel_student.css";

const SingleStudent = () => {
    return (
        <div className="single-student-container">
            <div className="single-header">
                <div className="single-header-left">
                    <span className="back-arrow">←</span>
                    <h2>Add New Student</h2>
                </div>
                <div className="single-header-right">Dashboard › Add Student</div>
            </div>

            <div className="single-tabs">
                <span className="single-tab">Bulk</span>
                <span className="single-tab active">Single Student</span>
            </div>

            <div className="single-card">
                <p className="upload-label">Profile Photo Upload (optional)</p>

                <div className="upload-box">
                    <span className="plus-icon">+</span>
                    <p>Add Profile</p>
                </div>

                <div className="form-grid">
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input id="fullName" type="text" defaultValue="Aarav Patel" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="emailAddr">Email Address</label>
                        <input id="emailAddr" type="email" placeholder="Email Address" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input id="phone" type="tel" placeholder="Phone Number" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input id="dob" type="date" defaultValue="2000-11-02" />
                    </div>
                </div>

                <div className="form-buttons">
                    <button className="btn-cancel">Cancel</button>
                    <button className="btn-save">Save Student</button>
                </div>
            </div>
        </div>
    );
};

export default SingleStudent;

