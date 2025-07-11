// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <div className="navbar__logo">
         
           
            <h1 className="navbar__title">Quickchat</h1>
          
        </div>

        {/* Actions */}
        <div className="navbar__actions">
          {authUser && (
            <button className="navbar__logout" onClick={logout}>
              <LogOut className="navbar__icon" />
              <span className="navbar__label">Logout</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;