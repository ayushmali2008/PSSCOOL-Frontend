import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ALL_STUDENTS } from "./studentData";
import "./StudentDetails.css";

export default function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const studentData = ALL_STUDENTS.find((s) => s.id === id);

  const [active, setActive] = useState(studentData?.active ?? true);

  if (!studentData) {
    return (
      <div className="sd-not-found">
        <p>Student not found.</p>
        <button type="button" className="sd-btn-cancel" onClick={() => navigate(-1)}>
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    /* ── Full-page overlay ── */
    <div className="sd-overlay" role="dialog" aria-modal="true" aria-label="Student Details">
      <div className="sd-modal">

        {/* ── Top: Profile + Close ── */}
        <div className="sd-top">
          <div className="sd-profile">
            <img
              src={studentData.avatar}
              alt={studentData.name}
              className="sd-profile__img"
            />
            <div className="sd-profile__info">
              <h2 className="sd-profile__name">{studentData.name}</h2>
              <p className="sd-profile__institution">{studentData.institution}</p>
            </div>
          </div>

          <button
            type="button"
            className="sd-close-btn"
            onClick={() => navigate(-1)}
            aria-label="Close student details"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="sd-divider" />

        {/* ── Badges + Enrollment Date ── */}
        <div className="sd-badges-row">
          <div className="sd-badges">
            <span className="sd-badge sd-badge--role">{studentData.role}</span>
            <span className={`sd-badge ${studentData.subscription === "Premium" ? "sd-badge--premium" : "sd-badge--standard"}`}>
              {studentData.subscription}
            </span>
          </div>
          <div className="sd-enrollment">
            <span className="sd-enrollment__label">Enrollment Date</span>
            <span className="sd-enrollment__value">{studentData.enrollmentDate}</span>
          </div>
        </div>

        {/* ── Info Cards: Age Group / Institution / Role Type ── */}
        <div className="sd-info-cards">
          <div className="sd-info-card">
            <p className="sd-info-card__label">Age Group</p>
            <p className="sd-info-card__value">{studentData.age}</p>
          </div>
          <div className="sd-info-card">
            <p className="sd-info-card__label">Institution</p>
            <p className="sd-info-card__value">{studentData.institution}</p>
          </div>
          <div className="sd-info-card">
            <p className="sd-info-card__label">Role Type</p>
            <p className="sd-info-card__value">{studentData.role}</p>
          </div>
        </div>

        {/* ── Contact Row: Mobile / Email / Status ── */}
        <div className="sd-contact-row">
          <div className="sd-contact-item">
            <p className="sd-contact-item__label">Mobile</p>
            <p className="sd-contact-item__value">{studentData.mobile}</p>
          </div>
          <div className="sd-contact-item">
            <p className="sd-contact-item__label">Email</p>
            <p className="sd-contact-item__value">{studentData.email}</p>
          </div>
          <div className="sd-contact-item">
            <p className="sd-contact-item__label">Status</p>
            <label className="sd-toggle" aria-label="Toggle student status">
              <input
                type="checkbox"
                checked={active}
                onChange={() => setActive((v) => !v)}
              />
              <span className="sd-toggle__track" />
            </label>
          </div>
        </div>

        <div className="sd-divider" />

        {/* ── Parent Details ── */}
        <div className="sd-parent-section">
          <h3 className="sd-parent-section__title">Parent Details</h3>
          <div className="sd-contact-row sd-contact-row--parent">
            <div className="sd-contact-item">
              <p className="sd-contact-item__label">Mobile</p>
              <p className="sd-contact-item__value">{studentData.parentMobile}</p>
            </div>
            <div className="sd-contact-item">
              <p className="sd-contact-item__label">Email</p>
              <p className="sd-contact-item__value">{studentData.parentEmail}</p>
            </div>
          </div>
        </div>

        <div className="sd-divider" />

        {/* ── Footer Buttons ── */}
        <div className="sd-footer">
          <button
            type="button"
            className="sd-btn-cancel"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button type="button" className="sd-btn-suspend">
            Suspend
          </button>
        </div>

      </div>
    </div>
  );
}
