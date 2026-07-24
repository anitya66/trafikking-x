import CitizenSummaryCards from "@/components/citizen/CitizenSummaryCards";
import QuickEmergencyCard from "@/components/citizen/QuickEmergencyCard";
import ActiveIncidentsWidget from "@/components/citizen/ActiveIncidentsWidget";
import NearbyHospitalsWidget from "@/components/citizen/NearbyHospitalsWidget";
import EmergencyContactsWidget from "@/components/citizen/EmergencyContactsWidget";
import AIAssistantCard from "@/components/citizen/AIAssistantCard";

export default function CitizenDashboard() {
  return (
    <div className="space-y-6">

      <CitizenSummaryCards />

      <div className="grid gap-6 xl:grid-cols-3">

        <div className="space-y-6 xl:col-span-2">
          <QuickEmergencyCard />
          <ActiveIncidentsWidget />
          <AIAssistantCard />
        </div>

        <div className="space-y-6">
          <NearbyHospitalsWidget />
          <EmergencyContactsWidget />
        </div>

      </div>

    </div>
  );
}