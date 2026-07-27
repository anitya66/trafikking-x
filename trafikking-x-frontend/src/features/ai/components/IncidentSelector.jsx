import {
  AlertTriangle,
  Clock3,
  MapPin,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import SeverityBadge from "@/shared/components/SeverityBadge";

export default function IncidentSelector({

  incidents,

  selectedIncident,

  onSelect,

}) {

  return (

    <Card>

      <CardContent className="p-6">

        <div className="mb-6">

          <h2 className="text-2xl font-bold">

            Emergency Queue

          </h2>

          <p className="text-sm text-muted-foreground">

            Select an incident for AI analysis.

          </p>

        </div>

        <div className="space-y-4">

          {incidents.map((incident) => (

            <button

              key={incident.id}

              onClick={() => onSelect(incident)}

              className={`group w-full rounded-2xl border p-5 text-left transition-all duration-300

              ${
                selectedIncident?.id === incident.id
                  ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                  : "border-border hover:border-primary/40 hover:bg-muted/40"
              }`}

            >

              <div className="flex items-start justify-between">

                <div>

                  <p className="font-bold">

                    {incident.incidentNumber}

                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">

                    {incident.incidentType
  ?.toLowerCase()
  .replaceAll("_", " ")
  .replace(/\b\w/g, (c) => c.toUpperCase())}

                  </p>

                </div>

                <SeverityBadge

                  severity={incident.severity}

                />

              </div>

              <div className="mt-5 space-y-2 text-sm text-muted-foreground">

                <div className="flex items-center gap-2">

                  <MapPin className="h-4 w-4" />

                  {incident.address}

                </div>

                <div className="flex items-center gap-2">

                  <Clock3 className="h-4 w-4" />

                  {new Date(
                    incident.reportedAt
                  ).toLocaleString()}

                </div>

              </div>

            </button>

          ))}

        </div>

      </CardContent>

    </Card>

  );

}