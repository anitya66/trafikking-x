import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import {
  ClipboardList,
  ArrowRight,
  MapPin,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import IncidentDetailsDialog from "@/features/incidents/components/IncidentDetailsDialog";
import { useMyIncidents } from "@/features/incidents/hooks/useMyIncidents";

export default function ActiveIncidentsWidget() {
  const {
    data: incidents = [],
    isLoading,
    isError,
  } = useMyIncidents();

  const [selectedIncident, setSelectedIncident] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Card className="group relative overflow-hidden">

        {/* Hover Glow */}

        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <CardHeader className="relative">

          <CardTitle className="flex items-center gap-3">

            <ClipboardList className="h-5 w-5 text-primary" />

            <span>My Active Emergencies</span>

          </CardTitle>

        </CardHeader>

        <CardContent className="relative">

          {/* Loading */}

          {isLoading && (

            <div className="rounded-2xl border border-dashed p-10 text-center">

              <ClipboardList className="mx-auto mb-4 h-10 w-10 animate-pulse text-primary" />

              <p className="text-muted-foreground">

                Loading your emergency requests...

              </p>

            </div>

          )}

          {/* Error */}

          {isError && (

            <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-8 text-center">

              <h3 className="font-semibold text-red-400">

                Failed to load incidents

              </h3>

              <p className="mt-2 text-sm text-red-300">

                Please refresh the page and try again.

              </p>

            </div>

          )}

          {/* Empty */}

          {!isLoading &&
            !isError &&
            incidents.length === 0 && (

              <div className="rounded-2xl border border-dashed p-10 text-center">

                <ClipboardList className="mx-auto mb-5 h-12 w-12 text-muted-foreground" />

                <h3 className="text-xl font-semibold">

                  No Active Emergencies

                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">

                  You currently don't have any emergency requests.
                  When you report an emergency, it will appear here
                  with live updates.

                </p>

              </div>

            )}

          {/* List */}

          {!isLoading &&
            !isError &&
            incidents.length > 0 && (

              <div className="space-y-5">

                {incidents.map((incident) => (

                  <div
                    key={incident.id}
                    className="group rounded-3xl border border-border bg-card/60 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                  >

                    {/* Header */}

                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

                      <div>

                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">

                          Incident

                        </p>

                        <h3 className="mt-2 text-xl font-bold">

                          {incident.incidentNumber}

                        </h3>

                        <p className="mt-2 text-muted-foreground">

                          {incident.incidentType.replaceAll("_", " ")}

                        </p>

                      </div>

                      <span className="w-fit rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">

                        {incident.status}

                      </span>

                    </div>

                    {/* Location */}

                    <div className="mt-6 rounded-2xl bg-background/40 p-4">

                      <div className="flex items-start gap-3">

                        <MapPin className="mt-0.5 h-5 w-5 text-primary" />

                        <span className="text-sm text-muted-foreground">

                          {incident.address}

                        </span>

                      </div>

                    </div>

                    {/* Footer */}

                    <div className="mt-6 flex flex-col gap-4 border-t border-border pt-5 md:flex-row md:items-center md:justify-between">

                      <span className="text-sm text-muted-foreground">

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
                        className="inline-flex items-center gap-2 font-medium text-primary transition-all duration-300 hover:gap-3"
                      >

                        View Mission

                        <ArrowRight className="h-4 w-4" />

                      </button>

                    </div>

                  </div>

                ))}

              </div>

            )}

        </CardContent>

      </Card>

      <IncidentDetailsDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        incident={selectedIncident}
      />
    </>
  );
}