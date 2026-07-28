import StatusBadge from "@/shared/components/StatusBadge";

export default function IncidentHeader({
  incident,
}) {

  if (!incident) return null;

  return (

    <div className="rounded-3xl border border-border bg-card/50 p-6">

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">

            Incident Number

          </p>

          <h2 className="mt-2 text-3xl font-black">

            {incident.incidentNumber}

          </h2>

        </div>

        <StatusBadge status={incident.status} />

      </div>

    </div>

  );

}