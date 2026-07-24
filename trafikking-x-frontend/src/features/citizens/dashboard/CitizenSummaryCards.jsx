import {
  Activity,
  Building2,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

import MetricCard from "@/shared/components/MetricCard";

export default function CitizenSummaryCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <MetricCard
        title="Active Emergencies"
        value="0"
        subtitle="No active emergency"
        icon={Activity}
      />

      <MetricCard
        title="Nearby Hospitals"
        value="0"
        subtitle="Within 10 km"
        icon={Building2}
      />

      <MetricCard
        title="Emergency Contacts"
        value="0"
        subtitle="Saved contacts"
        icon={HeartHandshake}
      />

      <MetricCard
        title="AI Safety"
        value="SAFE"
        subtitle="Current status"
        icon={ShieldCheck}
      />

    </div>
  );
}