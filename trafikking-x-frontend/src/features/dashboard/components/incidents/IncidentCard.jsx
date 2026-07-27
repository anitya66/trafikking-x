import { Card, CardContent } from "@/components/ui/card";

import IncidentStatusBadge from "./IncidentStatusBadge";
import IncidentSeverityBadge from "./IncidentSeverityBadge";

export default function IncidentCard({
  incident,
}) {
  return (
    <Card>

      <CardContent className="space-y-4 p-6">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-semibold">

              {incident.incidentNumber}

            </h3>

            <p className="text-sm text-muted-foreground">

              {incident.incidentType}

            </p>

          </div>

          <IncidentSeverityBadge
            severity={incident.severity}
          />

        </div>

        <p className="text-sm">

          {incident.description}

        </p>

        <div className="flex items-center justify-between">

          <IncidentStatusBadge
            status={incident.status}
          />

          <span className="text-sm text-muted-foreground">

            {incident.address}

          </span>

        </div>

      </CardContent>

    </Card>
  );
}