import { useState, useRef } from "react";
import "./singel_student.css";

const SingleStudent = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
  });
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (ev) => setProfileImage(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setProfileImage(null);
    setFormData({ fullName: "", email: "", phone: "", dob: "" });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="ss-wrapper">
      <div className="ss-card">

        {/* ── Profile Upload ── */}
        <div className="ss-profile-section">
          <p className="ss-profile-label">Profile Photo (Optional)</p>
          <div
            className="ss-upload-box"
            onClick={() => fileInputRef.current?.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && fileInputRef.current?.click()}
            aria-label="Upload profile photo"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="ss-file-input"
              onChange={handleImageChange}
            />
            {profileImage ? (
              <img src={profileImage} alt="Profile preview" className="ss-profile-preview" />
            ) : (
              <div className="ss-upload-placeholder">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path d="M14 6v16M6 14h16" stroke="#09a2db" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <p className="ss-upload-text">Add Photo</p>
              </div>
            )}
          </div>
        </div>

        {/* ── Form Fields ── */}
        <div className="ss-form-grid">
          <div className="ss-form-group">
            <label htmlFor="ss-fullName" className="ss-label">
              Full Name <span className="ss-required">*</span>
            </label>
            <input
              id="ss-fullName"
              name="fullName"
              type="text"
              className="ss-input"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="ss-form-group">
            <label htmlFor="ss-email" className="ss-label">
              Email Address <span className="ss-required">*</span>
            </label>
            <input
              id="ss-email"
              name="email"
              type="email"
              className="ss-input"
              placeholder="student@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="ss-form-group">
            <label htmlFor="ss-phone" className="ss-label">
              Phone Number <span className="ss-required">*</span>
            </label>
            <input
              id="ss-phone"
              name="phone"
              type="tel"
              className="ss-input"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="ss-form-group">
            <label htmlFor="ss-dob" className="ss-label">
              Date of Birth <span className="ss-required">*</span>
            </label>
            <input
              id="ss-dob"
              name="dob"
              type="date"
              className="ss-input"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* ── Buttons ── */}
        <div className="ss-actions">
          <button type="button" className="ss-btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button type="button" className="ss-btn-save">
            Save Student
          </button>
        </div>

      </div>
    </div>
  );
};

export default SingleStudent;
