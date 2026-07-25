import {
  Activity,
  Building2,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

import MetricCard from "@/shared/components/MetricCard";

import { useMyIncidents } from "@/features/incidents/hooks/useMyIncidents";
import { useEmergencyContacts } from "@/features/emergency-contacts/hooks/useEmergencyContacts";
import { useHospitals } from "@/features/hospitals/hooks/useHospitals";

export default function CitizenSummaryCards() {

  const {
    data: incidents = [],
  } = useMyIncidents();

  const {
    data: contacts = [],
  } = useEmergencyContacts();

  const {
    data: hospitals,
  } = useHospitals({
    page: 0,
    size: 1,
  });

  const activeEmergencies = incidents.filter(
    (incident) =>
      incident.status !== "RESOLVED"
  ).length;

  const totalHospitals =
    hospitals?.totalElements ??
    hospitals?.content?.length ??
    0;

  return (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <MetricCard
        title="Active Emergencies"
        value={activeEmergencies}
        subtitle={
          activeEmergencies === 0
            ? "No active emergency"
            : "Currently active"
        }
        icon={Activity}
      />

      <MetricCard
        title="Hospitals"
        value={totalHospitals}
        subtitle="Registered hospitals"
        icon={Building2}
      />

      <MetricCard
        title="Emergency Contacts"
        value={contacts.length}
        subtitle="Saved contacts"
        icon={HeartHandshake}
      />

      <MetricCard
        title="AI Safety"
        value={
          activeEmergencies === 0
            ? "SAFE"
            : "ALERT"
        }
        subtitle="Current status"
        icon={ShieldCheck}
      />

    </div>

  );

}