import { ClipboardList } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useState } from "react";

import IncidentDetailsDialog from "@/features/incidents/components/IncidentDetailsDialog";

import { useMyIncidents } from "@/features/incidents/hooks/useMyIncidents";
import { formatDistanceToNow } from "date-fns";
import { ArrowRight, MapPin } from "lucide-react";

export default function ActiveIncidentsWidget() {

  const {
    data: incidents = [],
    isLoading,
    isError,
  } = useMyIncidents();

  const [selectedIncident, setSelectedIncident] =
  useState(null);

const [dialogOpen, setDialogOpen] =
  useState(false);

  return (
    <Card className="group relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardHeader className="relative">

        <CardTitle className="flex items-center gap-2">

          <ClipboardList className="h-5 w-5 text-primary" />

          My Active Emergencies

        </CardTitle>

      </CardHeader>

      <CardContent className="relative">

        {isLoading && (

          <div className="rounded-xl border border-dashed p-8 text-center">

            Loading...

          </div>

        )}

        {isError && (

          <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-8 text-center text-red-400">

            Failed to load incidents.

          </div>

        )}

        {!isLoading &&
          !isError &&
          incidents.length === 0 && (

            <div className="rounded-xl border border-dashed p-8 text-center">

              <ClipboardList className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />

              <h3 className="text-lg font-semibold">

                No Active Incidents

              </h3>

              <p className="mt-2 text-sm text-muted-foreground">

                You don't have any active emergency requests at the moment.

              </p>

            </div>

          )}

        {!isLoading &&
          !isError &&
          incidents.length > 0 && (

            <div className="space-y-4">

              {incidents.map((incident) => (

                <div
  key={incident.id}
  className="rounded-2xl border border-border bg-card/50 p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
>

  <div className="flex items-start justify-between">

    <div>

      <h3 className="text-lg font-semibold">
        {incident.incidentNumber}
      </h3>

      <p className="mt-2 font-medium">
        {incident.incidentType.replaceAll("_", " ")}
      </p>

    </div>

    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
      {incident.status}
    </span>

  </div>

  <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">

    <MapPin className="mt-0.5 h-4 w-4" />

    <span>{incident.address}</span>

  </div>

  <div className="mt-5 flex items-center justify-between">

    <span className="text-xs text-muted-foreground">

      {formatDistanceToNow(
        new Date(incident.reportedAt),
        {
          addSuffix: true,
        }
      )}

    </span>

    <button
  onClick={() => {
    setSelectedIncident(incident);
    setDialogOpen(true);
  }}
  className="flex items-center gap-2 text-sm font-medium text-primary transition hover:gap-3"
>

  View Details

  <ArrowRight className="h-4 w-4" />

</button>

  </div>

</div>

              ))}

            </div>

          )}

      </CardContent>

      <IncidentDetailsDialog
  open={dialogOpen}
  onOpenChange={setDialogOpen}
  incident={selectedIncident}
/>

    </Card>
  );
}