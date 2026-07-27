import IncidentCard from "./IncidentCard";

export default function IncidentList({
  incidents,
}) {
  if (!incidents.length) {
    return (
      <div className="rounded-xl border border-dashed p-12 text-center text-muted-foreground">
        No active incidents.
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {incidents.map((incident) => (
        <IncidentCard
          key={incident.id}
          incident={incident}
        />
      ))}
    </div>
  );
}