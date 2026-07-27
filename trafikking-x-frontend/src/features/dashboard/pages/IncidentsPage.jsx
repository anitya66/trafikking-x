import { Siren } from "lucide-react";

import { useActiveIncidents } from "../hooks/useActiveIncidents";

import IncidentList from "../components/incidents/IncidentList";

export default function IncidentsPage() {

  const {

    data: incidents = [],

    isLoading,

    isError,

  } = useActiveIncidents();

  if (isError) {

    return (

      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-red-400">

        Failed to load incidents.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-primary/10 p-3">

          <Siren className="h-6 w-6 text-primary" />

        </div>

        <div>

          <h1 className="text-4xl font-bold tracking-tight">

            Active Incidents

          </h1>

          <p className="text-muted-foreground">

            Monitor all active emergency incidents.

          </p>

        </div>

      </div>

      {isLoading ? (

        <div className="rounded-xl border p-12 text-center">

          Loading active incidents...

        </div>

      ) : (

        <IncidentList

          incidents={incidents}

        />

      )}

    </div>

  );

}