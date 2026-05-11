import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";

/**
 * OTP verification screen.
 * After successful verification, navigates to /dashboard.
 */
export default function Verify() {
  const navigate = useNavigate();

  const [otp, setOtp]           = useState(['', '', '', '', '', '']);
  const [timer, setTimer]       = useState(30);
  const [canResend, setCanResend] = useState(false);
  const inputs = useRef([]);

  /* Countdown timer */
  useEffect(() => {
    if (timer === 0) { setCanResend(true); return; }
    const t = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(t);
  }, [timer]);

  const handleChange = (val, idx) => {
    if (!/^\d?$/.test(val)) return;
    const updated = [...otp];
    updated[idx] = val;
    setOtp(updated);
    if (val && idx < 5) inputs.current[idx + 1]?.focus();
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      inputs.current[idx - 1]?.focus();
    }
  };

  const handleResend = () => {
    setTimer(30);
    setCanResend(false);
    setOtp(['', '', '', '', '', '']);
    inputs.current[0]?.focus();
    // TODO: call API to resend OTP
  };

  const handleVerify = () => {
    const code = otp.join('');
    if (code.length < 6) return;
    // TODO: call API to verify OTP
    navigate('/dashboard');
  };

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div className="login-page">

      {/* ── Left panel ── */}
      <div className="login-left">
        <div className="login-form-wrapper">
          <div className="verify-box">
            <h2 className="login-title">Verify Your Email</h2>
            <p className="login-subtitle">
              Enter the 6-digit one-time password sent to your registered email address.
            </p>

            <div className="otp-inputs">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => (inputs.current[idx] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  aria-label={`OTP digit ${idx + 1}`}
                />
              ))}
            </div>

            <button className="sign-in-btn" onClick={handleVerify}>
              Verify
            </button>

            <p className="otp-resend-row">
              Didn't receive OTP?{' '}
              {canResend ? (
                <a
                  href="#"
                  className="forgot-link"
                  onClick={(e) => { e.preventDefault(); handleResend(); }}
                >
                  Resend
                </a>
              ) : (
                <span className="forgot-link">
                  Resend in 00:{pad(timer)}
                </span>
              )}
            </p>
          </div>
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
