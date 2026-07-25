import { Route, Routes } from "react-router-dom";

import { LandingPage } from "@/features/landing";

import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";

import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import RoleRedirect from "./RoleRedirect";
import RoleDashboard from "./RoleDashboard";
import MyIncidentsPage from "@/features/incidents/pages/MyIncidentsPage";

import DashboardLayout from "@/layouts/DashboardLayout";

import { ProfilePage } from "@/features/account";

import { isAuthenticated } from "@/shared/utils/auth";

export default function AppRoutes() {

  return (

    <Routes>

      {/* Landing */}

      <Route
        path="/"
        element={
          isAuthenticated()
            ? <RoleRedirect />
            : <LandingPage />
        }
      />

      {/* Public */}

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

      {/* Protected */}

      <Route
        element={
          <ProtectedRoute>

            <DashboardLayout />

          </ProtectedRoute>
        }
      >

        <Route
          path="/dashboard"
          element={<RoleDashboard />}
        />

        <Route
          path="/citizen"
          element={<RoleDashboard />}
        />

        <Route
          path="/ambulance"
          element={<RoleDashboard />}
        />

        <Route
          path="/hospital"
          element={<RoleDashboard />}
        />

        <Route
          path="/police"
          element={<RoleDashboard />}
        />

        <Route
          path="/admin"
          element={<RoleDashboard />}
        />

        <Route
          path="/account/profile"
          element={<ProfilePage />}
        />

        <Route
  path="/citizen/incidents"
  element={<MyIncidentsPage />}
/>

      </Route>

      <Route
        path="*"
        element={<RoleRedirect />}
      />

    </Routes>

  );

}