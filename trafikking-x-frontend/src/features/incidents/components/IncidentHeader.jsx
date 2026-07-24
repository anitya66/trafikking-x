import StatusBadge from "@/shared/components/StatusBadge";

export default function IncidentHeader({ incident }) {

  if (!incident) return null;

  return (
    <div className="flex items-center justify-between">

      <div>

        <p className="text-sm text-muted-foreground">
          Incident Number
        </p>

        <h2 className="text-2xl font-bold">
          {incident.incidentNumber}
        </h2>

      </div>

      <StatusBadge status={incident.status} />

    </div>
  );
}