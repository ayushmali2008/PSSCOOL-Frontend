import React, { useState } from "react";
import "./Create_New_Course.css";

const steps = [
  "Basic Information",
  "Content Setup",
  "Media & Language",
  "Pricing & Certificate",
];

export default function Create_New_Course() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="cnc-wrapper">
      {/* Header */}
      <div className="cnc-header">
        <div className="cnc-header-left">
          <button className="cnc-back-btn">
            <span className="cnc-back-arrow">&#8592;</span>
            <span className="cnc-header-title">Create New Course</span>
          </button>
        </div>
        <div className="cnc-header-right">Course Management</div>
      </div>

      {/* Body */}
      <div className="cnc-body">
        {/* Stepper Sidebar */}
        <div className="cnc-stepper">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`cnc-step ${activeStep === index ? "cnc-step-active" : ""}`}
              onClick={() => setActiveStep(index)}
            >
              <div className="cnc-step-indicator">
                {activeStep === index ? (
                  <span className="cnc-step-dot-active"></span>
                ) : (
                  <span className="cnc-step-dot"></span>
                )}
              </div>
              <span className="cnc-step-label">{step}</span>
            </div>
          ))}
        </div>

        {/* Form Panel */}
        <div className="cnc-form-panel">
          {/* Course Details */}
          <div className="cnc-section">
            <h2 className="cnc-section-title">Course Details</h2>

            <div className="cnc-field">
              <label className="cnc-label">Title</label>
              <input
                type="text"
                className="cnc-input"
                placeholder="Enter course title"
              />
            </div>

            <div className="cnc-field">
              <label className="cnc-label">Short Description</label>
              <textarea
                className="cnc-textarea"
                placeholder="Enter short description"
                rows={4}
              />
            </div>
          </div>

          {/* Classification */}
          <div className="cnc-section">
            <h2 className="cnc-section-title">Classification</h2>

            <div className="cnc-field">
              <label className="cnc-label">Discipline / Category</label>
              <div className="cnc-select-wrapper">
                <select className="cnc-select">
                  <option value="">Select category</option>
                  <option value="programming">Programming</option>
                  <option value="design">Design</option>
                  <option value="business">Business</option>
                </select>
                <span className="cnc-select-arrow">&#8964;</span>
              </div>
            </div>

            <div className="cnc-field">
              <label className="cnc-label">Course hierarchy</label>
              <div className="cnc-select-wrapper">
                <select className="cnc-select">
                  <option value="">Select hierarchy</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
                <span className="cnc-select-arrow">&#8964;</span>
              </div>
            </div>

            <div className="cnc-field">
              <label className="cnc-label">Age Group</label>
              <div className="cnc-select-wrapper">
                <select className="cnc-select">
                  <option value="">Select age group</option>
                  <option value="kids">Kids (6-12)</option>
                  <option value="teens">Teens (13-17)</option>
                  <option value="adults">Adults (18+)</option>
                </select>
                <span className="cnc-select-arrow">&#8964;</span>
              </div>
            </div>

            <div className="cnc-field">
              <label className="cnc-label">Difficulty Level</label>
              <div className="cnc-select-wrapper">
                <select className="cnc-select">
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
                <span className="cnc-select-arrow">&#8964;</span>
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="cnc-footer">
            <button className="cnc-btn-back">Back</button>
            <button className="cnc-btn-next">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
