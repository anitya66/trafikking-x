import SeverityBadge from "@/shared/components/SeverityBadge";
import StatusBadge from "@/shared/components/StatusBadge";

export default function MapPopup({ incident }) {
  return (
    <div className="min-w-[260px] space-y-4">

      <div>
        <h3 className="text-lg font-bold">
          🚨 {incident.title.replaceAll("_", " ")}
        </h3>

        <p className="text-xs text-muted-foreground">
          Incident ID: {incident.id}
        </p>
      </div>

      <div className="flex gap-2">
        <SeverityBadge severity={incident.severity} />
        <StatusBadge status={incident.status} />
      </div>

      <div className="space-y-2 text-sm">

        <div className="flex justify-between">
          <span>Latitude</span>
          <span>{incident.latitude}</span>
        </div>

        <div className="flex justify-between">
          <span>Longitude</span>
          <span>{incident.longitude}</span>
        </div>

        <div className="flex justify-between">
          <span>Type</span>
          <span>{incident.type}</span>
        </div>

      </div>
    </div>
  );
}