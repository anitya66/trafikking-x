import CitizenSummaryCards from "@/features/citizens/dashboard/CitizenSummaryCards";
import QuickEmergencyCard from "@/features/citizens/dashboard/QuickEmergencyCard";
import ActiveIncidentsWidget from "@/features/citizens/dashboard/ActiveIncidentsWidget";
import NearbyHospitalsWidget from "@/features/citizens/dashboard/NearbyHospitalsWidget";
import EmergencyContactsWidget from "@/features/citizens/dashboard/EmergencyContactsWidget";
import AIEmergencyAssistantCard from "@/features/citizens/components/AIEmergencyAssistantCard";
import CitizenLiveTrackingCard from "@/features/citizens/tracking/components/CitizenLiveTrackingCard";

export default function CitizenDashboard() {
  return (
    <div className="space-y-6 lg:space-y-8">

      {/* Summary Cards */}
      <CitizenSummaryCards />

      {/* Main Layout */}
      <div className="grid grid-cols-1 gap-6 2xl:grid-cols-12">

        {/* Main Content */}

        <div className="space-y-6 2xl:col-span-8">

          <QuickEmergencyCard />

          <ActiveIncidentsWidget />

          <CitizenLiveTrackingCard />

          <AIEmergencyAssistantCard />

        </div>

        {/* Right Sidebar */}

        <div className="space-y-6 2xl:col-span-4">

          <NearbyHospitalsWidget />

          <EmergencyContactsWidget />

        </div>

      </div>

    </div>
  );
}