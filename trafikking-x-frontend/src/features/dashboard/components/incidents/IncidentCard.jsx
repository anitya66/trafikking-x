import {
  MapPin,
  Siren,
  TriangleAlert,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import IncidentStatusBadge from "./IncidentStatusBadge";
import IncidentSeverityBadge from "./IncidentSeverityBadge";

export default function IncidentCard({

  incident,

}) {

  return (

    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">

      <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500" />

      <CardContent className="space-y-5 p-6">

        {/* Header */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">

              <Siren className="h-7 w-7 text-primary" />

            </div>

            <div>

              <h3 className="text-lg font-semibold">

                {incident.incidentNumber}

              </h3>

              <p className="mt-1 text-sm text-muted-foreground">

                {incident.incidentType?.replaceAll("_", " ")}

              </p>

            </div>

          </div>

          <IncidentSeverityBadge

            severity={incident.severity}

          />

        </div>

        {/* Description */}

        <div className="rounded-2xl bg-muted/40 p-4">

          <div className="mb-2 flex items-center gap-2">

            <TriangleAlert className="h-4 w-4 text-primary" />

            <span className="font-medium">

              Incident Description

            </span>

          </div>

          <p className="text-sm leading-6 text-muted-foreground">

            {incident.description}

          </p>

        </div>

        {/* Footer */}

        <div className="flex flex-col gap-4 border-t pt-4 sm:flex-row sm:items-center sm:justify-between">

          <IncidentStatusBadge

            status={incident.status}

          />

          <div className="flex items-center gap-2 text-sm text-muted-foreground">

            <MapPin className="h-4 w-4 text-primary" />

            <span className="truncate">

              {incident.address}

            </span>

          </div>

        </div>

      </CardContent>

    </Card>

  );

}