import { Card, CardContent } from "@/components/ui/card";
import StatusBadge from "@/shared/components/StatusBadge";

export default function DispatchCard({ dispatch }) {
  return (
    <Card>
      <CardContent className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">
            Dispatch #{dispatch.id}
          </h3>

          <StatusBadge status={dispatch.status} />
        </div>

        <div className="space-y-1 text-sm text-muted-foreground">
          <p>Incident: #{dispatch.incidentId}</p>

          <p>Hospital: {dispatch.hospitalId ?? "-"}</p>

          <p>Ambulance: {dispatch.ambulanceId ?? "-"}</p>

          <p>Police: {dispatch.policeStationId ?? "-"}</p>
        </div>
      </CardContent>
    </Card>
  );
}