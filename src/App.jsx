// src/App.jsx
import { useEffect, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

import { useAuthStore } from "./store/useAuthStore";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  /* run once on mount */
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  /* full-screen spinner while first auth check runs */
  if (isCheckingAuth && !authUser) {
    return (
      <div className="app-spinner-overlay">
        <Loader className="app-spinner" />
      </div>
    );
  }

  return (
    <div>
      {/* Suspense prevents crashes from lazy components and router while loading */}
      <Suspense
        fallback={<Loader className="app-spinner app-spinner--mt" />}
      >
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              authUser
                ? <HomePage />
                : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/signup"
            element={
              !authUser
                ? <SignUpPage />
                : <Navigate to="/" replace />
            }
          />
          <Route
            path="/login"
            element={
              !authUser
                ? <LoginPage />
                : <Navigate to="/" replace />
            }
          />
        </Routes>
      </Suspense>

      <Toaster />
    </div>
  );
};

export default App;