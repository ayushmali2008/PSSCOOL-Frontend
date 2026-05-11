import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./AddForms.css";

const INITIAL = {
  fullName: "", email: "", phone: "", dob: "",
  gender: "", country: "", ageGroup: "", subscription: "Standard",
  institution: "", photo: null,
};  

export default function AddStudent() {
  const navigate = useNavigate();
  const [form, setForm]       = useState(INITIAL);
  const [preview, setPreview] = useState(null);
  const [toast, setToast]     = useState(false);
  const [errors, setErrors]   = useState({});
  const fileRef               = useRef();

  const set = (e) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: "" }));
  };

  const pickPhoto = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setForm(p => ({ ...p, photo: f }));
    setPreview(URL.createObjectURL(f));
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim())    e.email    = "Email is required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setToast(true);
    setTimeout(() => { setToast(false); navigate("/dashboard/users/students"); }, 2200);
  };

  const reset = () => { setForm(INITIAL); setPreview(null); setErrors({}); };

  return (
    <div className="af-page">

      {/* ── Toast ── */}
      {toast && (
        <div className="af-toast af-toast--success" role="alert">
          <span className="af-toast__icon">✓</span>
          Student added successfully!
        </div>
      )}

      {/* ── Header ── */}
      <div className="af-header">
        <button className="af-back" onClick={() => navigate(-1)} aria-label="Go back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <div className="af-header__text">
          <h1>Add New Student</h1>
          <p>Register a new student on the platform</p>
        </div>
        <nav className="af-breadcrumb" aria-label="breadcrumb">
          <span>User Management</span>
          <span className="af-breadcrumb__sep">›</span>
          <span className="af-breadcrumb__current">Add Student</span>
        </nav>
      </div>

      <form className="af-form" onSubmit={handleSubmit} noValidate>

        {/* ── Photo upload ── */}
        <div className="af-card af-photo-card">
          <p className="af-card__title">Profile Photo <span className="af-optional">(optional)</span></p>
          <div className="af-photo-row">
            <button
              type="button"
              className="af-photo-btn"
              onClick={() => fileRef.current.click()}
              aria-label="Upload profile photo"
            >
              {preview
                ? <img src={preview} alt="Preview" className="af-photo-preview" />
                : (
                  <div className="af-photo-empty">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                      stroke="#09a2db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21 15 16 10 5 21"/>
                    </svg>
                    <span>Upload Photo</span>
                  </div>
                )
              }
            </button>
            <input ref={fileRef} type="file" accept="image/*"
              onChange={pickPhoto} className="af-hidden" />
            <div className="af-photo-info">
              <p className="af-photo-info__title">Profile Picture</p>
              <p className="af-photo-info__sub">JPG, PNG or GIF · Max 2 MB</p>
              <button type="button" className="af-photo-change"
                onClick={() => fileRef.current.click()}>
                {preview ? "Change Photo" : "Choose File"}
              </button>
            </div>
          </div>
        </div>

        {/* ── Personal details ── */}
        <div className="af-card">
          <p className="af-card__title">Personal Information</p>
          <div className="af-grid">

            <div className={`af-field${errors.fullName ? " af-field--error" : ""}`}>
              <label htmlFor="s-name">Full Name <span className="af-req">*</span></label>
              <input id="s-name" name="fullName" type="text"
                placeholder="e.g. Aarav Patel"
                value={form.fullName} onChange={set} />
              {errors.fullName && <span className="af-error-msg">{errors.fullName}</span>}
            </div>

            <div className={`af-field${errors.email ? " af-field--error" : ""}`}>
              <label htmlFor="s-email">Email Address <span className="af-req">*</span></label>
              <input id="s-email" name="email" type="email"
                placeholder="student@example.com"
                value={form.email} onChange={set} />
              {errors.email && <span className="af-error-msg">{errors.email}</span>}
            </div>

            <div className="af-field">
              <label htmlFor="s-phone">Phone Number</label>
              <input id="s-phone" name="phone" type="tel"
                placeholder="+91 98765 43210"
                value={form.phone} onChange={set} />
            </div>

            <div className="af-field">
              <label htmlFor="s-dob">Date of Birth</label>
              <input id="s-dob" name="dob" type="date"
                value={form.dob} onChange={set} />
            </div>

            <div className="af-field">
              <label htmlFor="s-gender">Gender</label>
              <select id="s-gender" name="gender" value={form.gender} onChange={set}>
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </div>

            <div className="af-field">
              <label htmlFor="s-country">Country</label>
              <input id="s-country" name="country" type="text"
                placeholder="e.g. India"
                value={form.country} onChange={set} />
            </div>

          </div>
        </div>

        {/* ── Academic details ── */}
        <div className="af-card">
          <p className="af-card__title">Academic Details</p>
          <div className="af-grid">

            <div className="af-field">
              <label htmlFor="s-age">Age Group</label>
              <select id="s-age" name="ageGroup" value={form.ageGroup} onChange={set}>
                <option value="">Select age group</option>
                <option>8–12</option>
                <option>13–15</option>
                <option>16–19</option>
                <option>20+</option>
              </select>
            </div>

            <div className="af-field">
              <label htmlFor="s-plan">Subscription Plan</label>
              <select id="s-plan" name="subscription" value={form.subscription} onChange={set}>
                <option>Standard</option>
                <option>Premium</option>
              </select>
            </div>

            <div className="af-field af-field--full">
              <label htmlFor="s-inst">Institution <span className="af-optional">(if applicable)</span></label>
              <input id="s-inst" name="institution" type="text"
                placeholder="e.g. Tech Academy Accra"
                value={form.institution} onChange={set} />
            </div>

          </div>
        </div>

        {/* ── Actions ── */}
        <div className="af-actions">
          <button type="button" className="af-btn af-btn--ghost" onClick={reset}>
            Reset Form
          </button>
          <button type="button" className="af-btn af-btn--outline"
            onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button type="submit" className="af-btn af-btn--primary">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Save Student
          </button>
        </div>

      </form>
    </div>
  );
}
