import { Route, Routes } from "react-router-dom";

import { LandingPage } from "@/features/landing";

import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import HospitalCaseDetailsPage from "@/features/hospitals/pages/HospitalCaseDetailsPage";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import RoleRedirect from "./RoleRedirect";
import RoleDashboard from "./RoleDashboard";

import DashboardLayout from "@/layouts/DashboardLayout";

import { ProfilePage } from "@/features/account";

import { isAuthenticated } from "@/shared/utils/auth";
import BedCapacityPage from "@/features/hospitals/pages/BedCapacityPage";
import CaseHistoryPage from "@/features/hospitals/pages/CaseHistoryPage";

import MyIncidentsPage from "@/features/incidents/pages/MyIncidentsPage";
import ReportEmergencyPage from "@/features/incidents/pages/ReportEmergencyPage";
import EmergencyContactsPage from "@/features/emergency-contacts/pages/EmergencyContactsPage";
import HospitalsPage from "@/features/hospitals/pages/HospitalsPage";
import IncomingCasesPage from "@/features/hospitals/pages/IncomingCasesPage";
import SettingsPage from "@/features/settings/pages/SettingsPage";
import ActiveCasesPage from "@/features/police/pages/ActiveCasesPage";
import PoliceCaseDetailsPage from "@/features/police/pages/PoliceCaseDetailsPage";
import PoliceHistoryPage from "@/features/police/pages/PoliceHistoryPage";
import IncidentsPage from "@/features/dashboard/pages/IncidentsPage";
import DispatchPage from "@/features/dashboard/pages/DispatchPage";
import AmbulancesPage from "@/features/dashboard/pages/AmbulancesPage";
import HospitalPage from "@/features/dashboard/pages/HospitalPages";
import PolicePage from "@/features/dashboard/pages/PolicePage";
import CitizensPage from "@/features/dashboard/pages/CitizensPage";
import AICommandPage from "@/features/ai/pages/AICommandPage";
import NotificationsPage from "@/features/dashboard/pages/NotificationsPage";


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

        {/* Role Dashboards */}

        <Route
          path="/dashboard"
          element={<RoleDashboard />}
        />

        <Route
          path="/citizen"
          element={<RoleDashboard />}
        />

        {/* Dispatcher */}

<Route
  path="/dispatcher/incidents"
  element={<IncidentsPage />}
/>

<Route
  path="/dispatcher/dispatch"
  element={<DispatchPage />}
/>

<Route
  path="/dispatcher/ambulances"
  element={<AmbulancesPage />}
/>

<Route
  path="/dispatcher/hospitals"
  element={<HospitalsPage />}
/>

<Route
  path="/dispatcher/police"
  element={<PolicePage />}
/>

<Route
  path="/dispatcher/citizens"
  element={<CitizensPage />}
/>

<Route
  path="/dispatcher/ai-command"
  element={<AICommandPage />}
/>

<Route
  path="/dispatcher/notifications"
  element={<NotificationsPage />}
/>

<Route
  path="/dispatcher/settings"
  element={<SettingsPage />}
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

        {/* Account */}

        <Route
          path="/account/profile"
          element={<ProfilePage />}
        />

        <Route
          path="/account/settings"
          element={<ProfilePage />}
        />

        

        {/* Citizen */}

        <Route
          path="/citizen/incidents"
          element={<MyIncidentsPage />}
        />

        <Route
          path="/citizen/contacts"
          element={<EmergencyContactsPage />}
        />

        <Route
          path="/citizen/profile"
          element={<ProfilePage />}
        />

        <Route
          path="/citizen/hospitals"
          element={<HospitalsPage />}
        />

        <Route
          path="/citizen/report"
          element={<ReportEmergencyPage />}
        />

        <Route
          path="/citizen/settings"
          element={<SettingsPage />}
        />

        {/* Hospital */}

        <Route
          path="/hospital/cases"
          element={<IncomingCasesPage />}
        />

        <Route
          path="/hospital/beds"
          element={<BedCapacityPage />}
        />

        <Route
          path="/hospital/staff"
          element={
            <div className="text-2xl font-bold">
              Medical Staff
            </div>
          }
        />

        <Route
  path="/hospital/history"
  element={<CaseHistoryPage />}
/>

<Route
  path="/hospital/cases/:id"
  element={<HospitalCaseDetailsPage />}
/>

        <Route
          path="/hospital/profile"
          element={<ProfilePage />}
        />

        <Route
          path="/hospital/settings"
          element={<SettingsPage />}
        />

        <Route
  path="/police/cases"
  element={<ActiveCasesPage />}
/>

<Route
  path="/police/cases/:id"
  element={<PoliceCaseDetailsPage />}
/>

<Route
  path="/police/case-history"
  element={<PoliceHistoryPage />}
/>

<Route
  path="/police/profile"
  element={<ProfilePage />}
/>

<Route
  path="/police/settings"
  element={<SettingsPage />}
/>


        

      </Route>
      

      <Route
        path="*"
        element={<RoleRedirect />}
      />

    </Routes>

  );

}