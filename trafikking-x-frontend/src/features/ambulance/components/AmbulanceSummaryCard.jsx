import {
  Activity,
  Truck,
  User,
  MapPinned,
} from "lucide-react";

import MetricCard from "@/shared/components/MetricCard";

export default function AmbulanceSummaryCard({
  ambulance,
}) {

  const status =
    ambulance?.status ?? "--";

  const statusSubtitle =
    status === "AVAILABLE"
      ? "Ready For Dispatch"
      : status === "BUSY"
      ? "On Emergency Mission"
      : status === "OFFLINE"
      ? "Currently Offline"
      : "Current Status";

  const locationValue =
    ambulance ? "LIVE" : "--";

  const locationSubtitle =
    ambulance
      ? "GPS Connected"
      : "Waiting For Signal";

  return (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <MetricCard
        title="Status"
        value={status}
        subtitle={statusSubtitle}
        icon={Activity}
      />

      <MetricCard
        title="Vehicle"
        value={ambulance?.vehicleNumber ?? "--"}
        subtitle="Emergency Vehicle"
        icon={Truck}
      />

      <MetricCard
        title="Driver"
        value={ambulance?.driverName ?? "--"}
        subtitle="Assigned Paramedic"
        icon={User}
      />

      <MetricCard
        title="Location"
        value={locationValue}
        subtitle={locationSubtitle}
        icon={MapPinned}
      />

    </div>

  );

}