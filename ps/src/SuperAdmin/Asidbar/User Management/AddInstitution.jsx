import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./AddForms.css";

const INITIAL = {
  name: "", email: "", phone: "", country: "", city: "",
  address: "", plan: "Monthly", adminName: "", adminEmail: "", logo: null,
};

export default function AddInstitution() {
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

  const pickLogo = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setForm(p => ({ ...p, logo: f }));
    setPreview(URL.createObjectURL(f));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())       e.name       = "Institution name is required";
    if (!form.email.trim())      e.email      = "Email is required";
    if (!form.adminName.trim())  e.adminName  = "Admin name is required";
    if (!form.adminEmail.trim()) e.adminEmail = "Admin email is required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setToast(true);
    setTimeout(() => { setToast(false); navigate("/dashboard/users/institutions"); }, 2200);
  };

  const reset = () => { setForm(INITIAL); setPreview(null); setErrors({}); };

  return (
    <div className="af-page">

      {toast && (
        <div className="af-toast af-toast--success" role="alert">
          <span className="af-toast__icon">✓</span>
          Institution added successfully!
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
          <h1>Add New Institution</h1>
          <p>Register a new institution on the platform</p>
        </div>
        <nav className="af-breadcrumb" aria-label="breadcrumb">
          <span>User Management</span>
          <span className="af-breadcrumb__sep">›</span>
          <span className="af-breadcrumb__current">Add Institution</span>
        </nav>
      </div>

      <form className="af-form" onSubmit={handleSubmit} noValidate>

        {/* ── Logo upload ── */}
        <div className="af-card af-photo-card">
          <p className="af-card__title">Institution Logo <span className="af-optional">(optional)</span></p>
          <div className="af-photo-row">
            <button type="button" className="af-photo-btn af-photo-btn--square"
              onClick={() => fileRef.current.click()} aria-label="Upload logo">
              {preview
                ? <img src={preview} alt="Logo preview" className="af-photo-preview af-photo-preview--square" />
                : (
                  <div className="af-photo-empty">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                      stroke="#09a2db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span>Upload Logo</span>
                  </div>
                )
              }
            </button>
            <input ref={fileRef} type="file" accept="image/*"
              onChange={pickLogo} className="af-hidden" />
            <div className="af-photo-info">
              <p className="af-photo-info__title">Institution Logo</p>
              <p className="af-photo-info__sub">JPG, PNG or SVG · Max 2 MB</p>
              <button type="button" className="af-photo-change"
                onClick={() => fileRef.current.click()}>
                {preview ? "Change Logo" : "Choose File"}
              </button>
            </div>
          </div>
        </div>

        {/* ── Institution details ── */}
        <div className="af-card">
          <p className="af-card__title">Institution Details</p>
          <div className="af-grid">

            <div className={`af-field${errors.name ? " af-field--error" : ""}`}>
              <label htmlFor="inst-name">Institution Name <span className="af-req">*</span></label>
              <input id="inst-name" name="name" type="text"
                placeholder="e.g. Starwood Academy"
                value={form.name} onChange={set} />
              {errors.name && <span className="af-error-msg">{errors.name}</span>}
            </div>

            <div className={`af-field${errors.email ? " af-field--error" : ""}`}>
              <label htmlFor="inst-email">Official Email <span className="af-req">*</span></label>
              <input id="inst-email" name="email" type="email"
                placeholder="info@institution.com"
                value={form.email} onChange={set} />
              {errors.email && <span className="af-error-msg">{errors.email}</span>}
            </div>

            <div className="af-field">
              <label htmlFor="inst-phone">Phone Number</label>
              <input id="inst-phone" name="phone" type="tel"
                placeholder="+91 98765 43210"
                value={form.phone} onChange={set} />
            </div>

            <div className="af-field">
              <label htmlFor="inst-plan">Subscription Plan</label>
              <select id="inst-plan" name="plan" value={form.plan} onChange={set}>
                <option>Monthly</option>
                <option>Annual</option>
                <option>Lifetime</option>
                <option>30-day trial</option>
              </select>
            </div>

            <div className="af-field">
              <label htmlFor="inst-country">Country</label>
              <input id="inst-country" name="country" type="text"
                placeholder="e.g. India"
                value={form.country} onChange={set} />
            </div>

            <div className="af-field">
              <label htmlFor="inst-city">City</label>
              <input id="inst-city" name="city" type="text"
                placeholder="e.g. Mumbai"
                value={form.city} onChange={set} />
            </div>

            <div className="af-field af-field--full">
              <label htmlFor="inst-addr">Address</label>
              <textarea id="inst-addr" name="address" rows={2}
                placeholder="Full address of the institution…"
                value={form.address} onChange={set} />
            </div>

          </div>
        </div>

        {/* ── Admin contact ── */}
        <div className="af-card">
          <p className="af-card__title">Primary Admin Contact</p>
          <div className="af-grid">

            <div className={`af-field${errors.adminName ? " af-field--error" : ""}`}>
              <label htmlFor="inst-aname">Admin Full Name <span className="af-req">*</span></label>
              <input id="inst-aname" name="adminName" type="text"
                placeholder="e.g. Priya Sharma"
                value={form.adminName} onChange={set} />
              {errors.adminName && <span className="af-error-msg">{errors.adminName}</span>}
            </div>

            <div className={`af-field${errors.adminEmail ? " af-field--error" : ""}`}>
              <label htmlFor="inst-aemail">Admin Email <span className="af-req">*</span></label>
              <input id="inst-aemail" name="adminEmail" type="email"
                placeholder="admin@institution.com"
                value={form.adminEmail} onChange={set} />
              {errors.adminEmail && <span className="af-error-msg">{errors.adminEmail}</span>}
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
            Save Institution
          </button>
        </div>

      </form>
    </div>
  );
}
