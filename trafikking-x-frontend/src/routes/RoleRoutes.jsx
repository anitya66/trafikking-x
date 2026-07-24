import DashboardLayout from "@/layouts/DashboardLayout";

import DashboardPage from "@/features/dashboard/pages/DashboardPage";

import CitizenDashboard from "@/dashboards/citizen/CitizenDashboard";
import AmbulanceDashboard from "@/dashboards/ambulance/AmbulanceDashboard";
import HospitalDashboard from "@/dashboards/hospital/HospitalDashboard";
import PoliceDashboard from "@/dashboards/police/PoliceDashboard";
import AdminDashboard from "@/dashboards/admin/AdminDashboard";

import { getCurrentRole } from "@/shared/utils/role";
import { ROLES } from "@/shared/constants/roles";

export default function RoleRoutes() {
  const role = getCurrentRole();

  let dashboard = null;

  switch (role) {
    case ROLES.DISPATCHER:
      dashboard = <DashboardPage />;
      break;

    case ROLES.CITIZEN:
      dashboard = <CitizenDashboard />;
      break;

    case ROLES.AMBULANCE:
      dashboard = <AmbulanceDashboard />;
      break;

    case ROLES.HOSPITAL:
      dashboard = <HospitalDashboard />;
      break;

    case ROLES.POLICE:
      dashboard = <PoliceDashboard />;
      break;

    case ROLES.ADMIN:
      dashboard = <AdminDashboard />;
      break;

    default:
      return null;
  }

  return (
    <DashboardLayout>
      {dashboard}
    </DashboardLayout>
  );
}