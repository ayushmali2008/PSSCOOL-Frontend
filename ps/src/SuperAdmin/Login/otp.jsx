import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";

/**
 * Forget / Send-OTP screen.
 * Navigates to /verify after submitting the email.
 */
export default function Forget() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('admin@pschool.com');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call API to send OTP to email
    navigate('/verify');
  };

  return (
    <div className="login-page">

      {/* ── Left panel ── */}
      <div className="login-left">
        <div className="login-form-wrapper">
          <h2 className="login-title">Reset Your Password</h2>
          <p className="login-subtitle">
            Enter your registered email address to receive a one-time password.
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="field-group">
              <label htmlFor="reset-email">Email Address</label>
              <input
                id="reset-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@pschool.com"
                required
              />
            </div>

            <button type="submit" className="sign-in-btn">Send OTP</button>

            <p className="login-notice">
              Need help?{' '}
              <a href="#" className="forgot-link">Contact Support</a>
            </p>
          </form>
        </div>
      </div>

      {/* ── Right panel ── */}
      <div className="login-right">
        <div className="right-content">
          <h1>Built for Modern<br />Education Management</h1>
          <p>
            P-School enables scalable learning operations with role-based access,
            quality control, and performance tracking across individuals and institutions.
          </p>
        </div>
        <div className="right-footer">
          <span className="check-icon">✅</span>
          <span>A unified ecosystem designed to manage learning, operations, and governance at scale.</span>
        </div>
      </div>

    </div>
  );
}
