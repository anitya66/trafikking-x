import DashboardPage from "@/features/dashboard/pages/DashboardPage";

import CitizenDashboard from "@/dashboards/citizen/CitizenDashboard";
import AmbulanceDashboard from "@/dashboards/ambulance/AmbulanceDashboard";
import HospitalDashboard from "@/dashboards/hospital/HospitalDashboard";
import PoliceDashboard from "@/dashboards/police/PoliceDashboard";
import AdminDashboard from "@/dashboards/admin/AdminDashboard";

import { getCurrentRole } from "@/shared/utils/role";
import { ROLES } from "@/shared/constants/roles";

export default function RoleDashboard() {

  const role = getCurrentRole();

  switch (role) {

    case ROLES.DISPATCHER:
      return <DashboardPage />;

    case ROLES.CITIZEN:
      return <CitizenDashboard />;

    case ROLES.AMBULANCE:
      return <AmbulanceDashboard />;

    case ROLES.HOSPITAL:
      return <HospitalDashboard />;

    case ROLES.POLICE:
      return <PoliceDashboard />;

    case ROLES.ADMIN:
      return <AdminDashboard />;

    default:
      return null;
  }

}