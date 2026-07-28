import {
  Siren,
} from "lucide-react";

import IncidentCard from "./IncidentCard";

export default function IncidentList({

  incidents,

}) {

  if (!incidents.length) {

    return (

      <div className="rounded-3xl border border-dashed border-border bg-card/40 p-16">

        <div className="flex flex-col items-center text-center">

          <div className="mb-6 rounded-3xl bg-primary/10 p-6">

            <Siren className="h-12 w-12 text-primary" />

          </div>

          <h3 className="text-2xl font-bold">

            No Active Incidents

          </h3>

          <p className="mt-3 max-w-md text-muted-foreground">

            Great news! There are currently no
            emergency incidents requiring attention.

          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="grid gap-6 xl:grid-cols-2">

      {incidents.map((incident) => (

        <IncidentCard

          key={incident.id}

          incident={incident}

        />

      ))}

    </div>

  );

}