import { Route, Routes } from "react-router-dom";

import RoleRoutes from "./RoleRoutes";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import RoleRedirect from "./RoleRedirect";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import { LandingPage } from "@/features/landing";
import { isAuthenticated } from "@/shared/utils/auth";

export default function AppRoutes() {
  return (
    <Routes>

      <Route
  path="/"
  element={
    isAuthenticated()
      ? <RoleRedirect />
      : <LandingPage />
  }
/>

      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />

      <Route
        path="/register"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <RoleRoutes />
          </ProtectedRoute>
        }
      />

      <Route
        path="/citizen/*"
        element={
          <ProtectedRoute>
            <RoleRoutes />
          </ProtectedRoute>
        }
      />

      <Route
        path="/ambulance"
        element={
          <ProtectedRoute>
            <RoleRoutes />
          </ProtectedRoute>
        }
      />

      <Route
        path="/hospital"
        element={
          <ProtectedRoute>
            <RoleRoutes />
          </ProtectedRoute>
        }
      />

      <Route
        path="/police"
        element={
          <ProtectedRoute>
            <RoleRoutes />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <RoleRoutes />
          </ProtectedRoute>
        }
      />

      <Route
        path="*"
        element={<RoleRedirect />}
      />

    </Routes>
  );
}