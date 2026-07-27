import {
  Activity,
  Truck,
  User,
  Satellite,
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
      ? "Responding To Emergency"
      : status === "OFFLINE"
      ? "Vehicle Offline"
      : "Current Status";

  const gpsValue =
    ambulance?.active
      ? "CONNECTED"
      : "OFFLINE";

  const gpsSubtitle =
    ambulance?.lastLocationUpdatedAt
      ? `Updated ${new Date(
          ambulance.lastLocationUpdatedAt
        ).toLocaleTimeString()}`
      : "Waiting For GPS";

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
        value={
          ambulance?.vehicleNumber ?? "--"
        }
        subtitle={
          ambulance?.vehicleType ??
          "Emergency Vehicle"
        }
        icon={Truck}
      />

      <MetricCard
        title="Driver"
        value={
          ambulance?.driverName ?? "--"
        }
        subtitle={
          ambulance?.driverPhone ??
          "No Contact"
        }
        icon={User}
      />

      <MetricCard
        title="GPS"
        value={gpsValue}
        subtitle={gpsSubtitle}
        icon={Satellite}
      />

    </div>

  );

}