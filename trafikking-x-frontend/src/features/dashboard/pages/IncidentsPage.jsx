import {
  Siren,
  TriangleAlert,
} from "lucide-react";

import { useActiveIncidents } from "../hooks/useActiveIncidents";

import IncidentList from "../components/incidents/IncidentList";

export default function IncidentsPage() {

  const {

    data: incidents = [],

    isLoading,

    isError,

  } = useActiveIncidents();

  if (isLoading) {

    return (

      <div className="rounded-3xl border bg-card/40 p-12">

        <div className="flex flex-col items-center text-center">

          <Siren className="mb-5 h-10 w-10 animate-pulse text-primary" />

          <h3 className="text-xl font-semibold">

            Loading Active Incidents...

          </h3>

          <p className="mt-2 text-muted-foreground">

            Fetching the latest emergency incidents.

          </p>

        </div>

      </div>

    );

  }

  if (isError) {

    return (

      <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-12">

        <div className="flex flex-col items-center text-center">

          <TriangleAlert className="mb-5 h-10 w-10 text-red-500" />

          <h3 className="text-2xl font-bold text-red-500">

            Unable To Load Incidents

          </h3>

          <p className="mt-3 max-w-md text-muted-foreground">

            Something went wrong while loading the
            emergency incident feed.

          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-6 rounded-3xl border border-primary/10 bg-card/60 p-6 backdrop-blur lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-primary/10 p-4">

            <Siren className="h-7 w-7 text-primary" />

          </div>

          <div>

            <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">

              Active Incidents

            </h1>

            <p className="mt-2 text-muted-foreground">

              Monitor all active emergency incidents
              across the command center.

            </p>

          </div>

        </div>

        <div className="rounded-2xl bg-primary/5 px-6 py-4 text-center">

          <p className="text-xs uppercase tracking-wider text-muted-foreground">

            Active Cases

          </p>

          <p className="mt-1 text-3xl font-black text-primary">

            {incidents.length}

          </p>

        </div>

      </div>

      <IncidentList

        incidents={incidents}

      />

    </div>

  );

}