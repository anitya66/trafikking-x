import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";

export default function App() {
  return (
    <DashboardLayout>
      <DashboardPage />
    </DashboardLayout>
  );
}