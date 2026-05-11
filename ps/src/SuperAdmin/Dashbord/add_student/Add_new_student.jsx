import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Add_new_student.css";
import SingleStudent from "./singel_student";

const AddNewStudent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("bulk");
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => setDragOver(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) setUploadedFile(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setUploadedFile(file);
  };

  const handleCancel = () => {
    setUploadedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    navigate(-1);
  };

  return (
    <div className="ans-page">

      {/* ── Header ── */}
      <div className="ans-header">
        <h2 className="ans-title">Add New Student</h2>
        <span className="ans-breadcrumb">Dashboard › Add Student</span>
      </div>

      {/* ── Tabs ── */}
      <div className="ans-tabs-bar">
        <button
          type="button"
          className={`ans-tab${activeTab === "bulk" ? " ans-tab--active" : ""}`}
          onClick={() => setActiveTab("bulk")}
        >
          Bulk
        </button>
        <button
          type="button"
          className={`ans-tab${activeTab === "single" ? " ans-tab--active" : ""}`}
          onClick={() => setActiveTab("single")}
        >
          Single Student
        </button>
      </div>

      {/* ── Bulk Tab ── */}
      {activeTab === "bulk" && (
        <div className="ans-bulk-content">

          {/* Upload Card */}
          <div className="ans-upload-card">
            <p className="ans-upload-card-title">Upload CSV File</p>
            <p className="ans-upload-card-sub">
              Import multiple students at once using a CSV file.
            </p>

            {/* Drop Zone */}
            <div
              className={[
                "ans-dropzone",
                dragOver ? "ans-dropzone--over" : "",
                uploadedFile ? "ans-dropzone--filled" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && fileInputRef.current?.click()}
              aria-label="Upload CSV file"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv"
                className="ans-file-input"
                onChange={handleFileChange}
              />

              {uploadedFile ? (
                /* ── File selected state ── */
                <div className="ans-file-preview">
                  <div className="ans-file-icon-wrap">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                      <rect width="44" height="44" rx="10" fill="#d1fae5" />
                      <path d="M13 22l7 7 11-13" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="ans-file-name">{uploadedFile.name}</p>
                  <p className="ans-file-size">
                    {(uploadedFile.size / 1024).toFixed(1)} KB · Click to change
                  </p>
                </div>
              ) : (
                /* ── Empty state ── */
                <div className="ans-dropzone-inner">
                  <div className="ans-upload-icon-wrap" aria-hidden="true">
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                      <rect width="52" height="52" rx="14" fill="#e0f2fe" />
                      <path
                        d="M26 33V21M26 21l-5 5M26 21l5 5"
                        stroke="#09a2db"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M16 37h20" stroke="#09a2db" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="ans-dz-primary">
                    <span className="ans-dz-link">Click to upload</span> or drag and drop
                  </p>
                  <p className="ans-dz-hint">CSV files only · Max 10 MB</p>
                </div>
              )}
            </div>

            <p className="ans-template-hint">
              Need a template?{" "}
              <button type="button" className="ans-template-link">
                Download sample CSV
              </button>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="ans-actions">
            <button type="button" className="ans-btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button
              type="button"
              className="ans-btn-save"
              disabled={!uploadedFile}
            >
              Save Student
            </button>
          </div>
        </div>
      )}

      {/* ── Single Student Tab ── */}
      {activeTab === "single" && <SingleStudent />}
    </div>
  );
};

export default AddNewStudent;
