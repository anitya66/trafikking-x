import { Navigate } from "react-router-dom";

import { getCurrentRole } from "@/shared/utils/role";
import { ROLES } from "@/shared/constants/roles";

export default function RoleRedirect() {
  const role = getCurrentRole();

  switch (role) {
    case ROLES.DISPATCHER:
      return <Navigate to="/dashboard" replace />;

    case ROLES.CITIZEN:
      return <Navigate to="/citizen" replace />;

    case ROLES.AMBULANCE:
      return <Navigate to="/ambulance" replace />;

    case ROLES.HOSPITAL:
      return <Navigate to="/hospital" replace />;

    case ROLES.POLICE:
      return <Navigate to="/police" replace />;

    case ROLES.ADMIN:
      return <Navigate to="/admin" replace />;

    default:
    return <Navigate to="/" replace />;
  }
}