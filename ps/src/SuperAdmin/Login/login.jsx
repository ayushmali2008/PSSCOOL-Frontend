import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import loginImage from "../../image/login_img.png";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe]     = useState(false);
  const [email, setEmail]               = useState('admin@pschool.com');
  const [password, setPassword]         = useState('');
  const [loading, setLoading]           = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate auth delay — replace with real API call
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 800);
  };

  return (
    <div className="login-page">

      {/* ════ Left panel — form ════ */}
      <div className="login-left">
        <div className="login-form-wrapper">

          <div className="welcome-admin">
            <div className="login-logo-mark">🎓 P-School Admin</div>
            <h2 className="login-title">Welcome Back, Admin 👋</h2>
            <p className="login-subtitle">
              Sign in to manage your platform with full control and visibility.
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>

            <div className="field-group">
              <label htmlFor="login-email">Email Address</label>
              <input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@pschool.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="field-group">
              <label htmlFor="login-password">Password</label>
              <div className="password-wrapper">
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(v => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember Me</span>
              </label>
              <a
                href="/forget"
                className="forgot-link"
                onClick={(e) => { e.preventDefault(); navigate('/forget'); }}
              >
                Forgot password?
              </a>
            </div>

            <button type="submit" className="sign-in-btn" disabled={loading}>
              {loading ? 'Signing in…' : 'Sign In'}
            </button>

            <p className="login-notice">
              🔒 Authorized access only. All activities are monitored and logged.
            </p>

          </form>
        </div>
      </div>

      {/* ════ Right panel — branding ════ */}
      <div className="login-right">
        <div className="right-content">
          <div className="right-badge">🚀 Admin Portal</div>
          <h1>
            Built for <span>Modern</span><br />
            Education Management
          </h1>
          <p>
            P-School enables scalable learning operations with role-based access,
            quality control, and performance tracking across individuals and institutions.
          </p>

          <div className="right-features">
            <div className="right-feature">
              <span className="right-feature-icon">👥</span>
              <span>Manage students, instructors & institutions</span>
            </div>
            <div className="right-feature">
              <span className="right-feature-icon">📊</span>
              <span>Real-time analytics and performance tracking</span>
            </div>
            <div className="right-feature">
              <span className="right-feature-icon">🔐</span>
              <span>Role-based access control & security</span>
            </div>
          </div>
        </div>

        <img src={loginImage} alt="Platform illustration" className="hero-image" />

        <div className="right-footer">
          <span className="check-icon">✅</span>
          <span>A unified ecosystem designed to manage learning, operations, and governance at scale.</span>
        </div>
      </div>

    </div>
  );
}
