import {
  Clock3,
  MapPin,
  TriangleAlert,
  ArrowRight,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import SeverityBadge from "@/shared/components/SeverityBadge";
import StatusBadge from "@/shared/components/StatusBadge";

import { formatRelativeTime } from "@/shared/utils/timeFormatter";

import {
  formatIncidentType,
} from "../utils/incidentFormatter";

export default function IncidentCard({

  incident,

  selected,

  onClick,

}) {

  return (

    <Card
      onClick={onClick}
      className={`group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 ${
        selected
          ? "border-primary ring-2 ring-primary/20"
          : ""
      }`}
    >

      <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500" />

      <CardContent className="p-6">

        {/* Header */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">

              <TriangleAlert className="h-6 w-6 text-primary" />

            </div>

            <div>

              <h3 className="text-lg font-semibold">

                {formatIncidentType(
                  incident.incidentType
                )}

              </h3>

              <p className="mt-1 text-sm text-muted-foreground">

                {incident.incidentNumber}

              </p>

            </div>

          </div>

          <SeverityBadge
            severity={incident.severity}
          />

        </div>

        {/* Description */}

        <p className="mt-5 line-clamp-2 text-sm leading-7 text-muted-foreground">

          {incident.description}

        </p>

        {/* Address */}

        <div className="mt-5 flex items-start gap-2 rounded-xl bg-muted/40 p-3">

          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

          <span className="text-sm text-muted-foreground">

            {incident.address}

          </span>

        </div>

        {/* Footer */}

        <div className="mt-6 flex flex-col gap-4 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">

          <StatusBadge
            status={incident.status}
          />

          <div className="flex items-center justify-between gap-4 sm:justify-end">

            <div className="flex items-center gap-2 text-xs text-muted-foreground">

              <Clock3 className="h-4 w-4" />

              {formatRelativeTime(
                incident.reportedAt
              )}

            </div>

            <div className="flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">

              View

              <ArrowRight className="h-4 w-4" />

            </div>

          </div>

        </div>

      </CardContent>

    </Card>

  );

}