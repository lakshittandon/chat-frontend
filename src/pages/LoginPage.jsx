import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, MessageSquare } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form);
  };

  return (
    <main className="login-wrap">
      <div className="login-card">
        {/* logo / name */}
        <div className="login-logo">
          <MessageSquare size={24} />
          <h1>QuickChat</h1>
        </div>

        <h2 className="login-headline">Welcome Back</h2>
        <p className="login-sub">Sign in to your account</p>

        <form onSubmit={handleSubmit} className="login-form">
          {/* email */}
          <label>
            Email
            <div className="login-field">
              <Mail size={16} />
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
          </label>

          {/* password */}
          <label>
            Password
            <div className="login-field">
              <Lock size={16} />
              <input
                type={showPass ? "text" : "password"}
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="eye-btn"
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </label>

          <button type="submit" disabled={isLoggingIn}>
            {isLoggingIn ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="login-foot">
          Don’t have an account? <Link to="/signup">Create account</Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;