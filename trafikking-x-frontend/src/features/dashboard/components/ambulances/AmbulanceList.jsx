import {
  Ambulance,
} from "lucide-react";

import AmbulanceCard from "./AmbulanceCard";

export default function AmbulanceList({

  ambulances,

}) {

  if (!ambulances.length) {

    return (

      <div className="rounded-3xl border border-dashed border-border bg-card/40 p-16">

        <div className="flex flex-col items-center text-center">

          <div className="mb-6 rounded-3xl bg-primary/10 p-6">

            <Ambulance className="h-12 w-12 text-primary" />

          </div>

          <h3 className="text-2xl font-bold">

            No Ambulances Available

          </h3>

          <p className="mt-3 max-w-md text-muted-foreground">

            There are currently no registered ambulance
            units in the emergency response network.

          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="grid gap-6 xl:grid-cols-2">

      {ambulances.map((ambulance) => (

        <AmbulanceCard

          key={ambulance.id}

          ambulance={ambulance}

        />

      ))}

    </div>

  );

}