import {
  Clock3,
  MapPin,
  TriangleAlert,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import SeverityBadge from "@/shared/components/SeverityBadge";
import StatusBadge from "@/shared/components/StatusBadge";
import { formatRelativeTime } from "@/shared/utils/timeFormatter";

import {
  formatIncidentType,
} from "../utils/incidentFormatter";

export default function IncidentCard({ incident }) {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-primary/20">

      <CardContent className="space-y-5 p-6">

        {/* Header */}

        <div className="flex items-start justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">

              <TriangleAlert className="h-5 w-5" />

            </div>

            <div>

              <h3 className="font-semibold tracking-tight">

                {formatIncidentType(incident.incidentType)}

              </h3>

              <p className="text-sm text-muted-foreground">

                {incident.incidentNumber}

              </p>

            </div>

          </div>

          <SeverityBadge severity={incident.severity} />

        </div>

        {/* Description */}

        <p className="line-clamp-2 text-sm text-muted-foreground">

          {incident.description}

        </p>

        {/* Address */}

        <div className="flex items-center gap-2 text-sm text-muted-foreground">

          <MapPin className="h-4 w-4" />

          <span>{incident.address}</span>

        </div>

        {/* Footer */}

        <div className="flex items-center justify-between">

          <StatusBadge status={incident.status} />

          <div className="flex items-center gap-2 text-xs text-muted-foreground">

            <Clock3 className="h-4 w-4" />

            <span>
              {formatRelativeTime(incident.reportedAt)}
            </span>

          </div>

        </div>

      </CardContent>

    </Card>
  );
}