import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import DispatcherDashboard from "@/pages/dispatcher/DispatcherDashboard";

import { ROUTES } from "@/config/routes";

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={ROUTES.LOGIN} replace />}
      />

      <Route
        path={ROUTES.LOGIN}
        element={<LoginPage />}
      />

      <Route
        path={ROUTES.REGISTER}
        element={<RegisterPage />}
      />

      <Route
        path={ROUTES.DISPATCHER}
        element={<DispatcherDashboard />}
      />
    </Routes>
  );
}

export default AppRouter;