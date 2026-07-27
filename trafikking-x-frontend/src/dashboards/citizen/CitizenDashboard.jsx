import CitizenSummaryCards from "@/features/citizens/dashboard/CitizenSummaryCards";
import QuickEmergencyCard from "@/features/citizens/dashboard/QuickEmergencyCard";
import ActiveIncidentsWidget from "@/features/citizens/dashboard/ActiveIncidentsWidget";
import NearbyHospitalsWidget from "@/features/citizens/dashboard/NearbyHospitalsWidget";
import EmergencyContactsWidget from "@/features/citizens/dashboard/EmergencyContactsWidget";
import AIEmergencyAssistantCard from "@/features/citizens/components/AIEmergencyAssistantCard";
import CitizenLiveTrackingCard from "@/features/citizens/tracking/components/CitizenLiveTrackingCard";

export default function CitizenDashboard() {
  return (
    <div className="space-y-6">
      <CitizenSummaryCards />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <QuickEmergencyCard />
          <ActiveIncidentsWidget />
          <CitizenLiveTrackingCard />
          <AIEmergencyAssistantCard />
        </div>

        <div className="space-y-6">
          <NearbyHospitalsWidget />
          <EmergencyContactsWidget />
        </div>
      </div>
    </div>
  );
}