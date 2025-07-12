import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";

import "./SignUpPage.css";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm() === true) signup(formData);
  };

  return (
    <div className="signup-page">
      {/* Left side: form */}
      <div className="signup-page__left">
        <div className="signup-page__form-container">
          {/* Logo / heading */}
          <div className="signup-page__logo-section">
            <div className="signup-logo-group">
              <div className="signup-logo-group__icon">
                <MessageSquare />
              </div>
              <h1 className="signup-logo-group__title">Create Account</h1>
              <p className="signup-logo-group__subtitle">
                Get started with your free account
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="signup-form">
            {/* Full Name */}
            <div className="form-field">
              <label className="form-label">
                <span>Full Name</span>
              </label>
              <div className="input-wrapper">
                <div className="input-icon">
                  <User />
                </div>
                <input
                  type="text"
                  className="input input--icon-left"
                 
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-field">
              <label className="form-label">
                <span>Email</span>
              </label>
              <div className="input-wrapper">
                <div className="input-icon">
                  <Mail />
                </div>
                <input
                  type="email"
                  className="input input--icon-left"
                 
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-field">
              <label className="form-label">
                <span>Password</span>
              </label>
              <div className="input-wrapper">
                <div className="input-icon">
                  <Lock />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input--icon-left"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <>
                  <Loader2 className="loader" />
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Link to login */}
          <div className="signup-link">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="signup-link__anchor">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side: image/pattern */}
      <div className="signup-page__right">
        <AuthImagePattern
          title="Join our community"
          subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
        />
      </div>
    </div>
  );
};

export default SignUpPage;