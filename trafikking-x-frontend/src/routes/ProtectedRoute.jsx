import { Navigate, useLocation } from "react-router-dom";

import { isAuthenticated } from "@/shared/utils/auth";
import { hasRole } from "@/shared/utils/role";

export default function ProtectedRoute({
  children,
  allowedRoles = [],
}) {
  const location = useLocation();

  if (!isAuthenticated()) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  if (
    allowedRoles.length > 0 &&
    !hasRole(allowedRoles)
  ) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  return children;
}