import { Shield } from "lucide-react";

import PoliceCard from "./PoliceCard";

export default function PoliceList({

  stations,

}) {

  if (!stations.length) {

    return (

      <div className="rounded-3xl border border-dashed border-border bg-card/40 p-12">

        <div className="flex flex-col items-center text-center">

          <div className="mb-6 rounded-3xl bg-primary/10 p-6">

            <Shield className="h-12 w-12 text-primary" />

          </div>

          <h3 className="text-2xl font-bold">

            No Police Stations

          </h3>

          <p className="mt-3 max-w-md text-muted-foreground">

            There are currently no registered police
            stations available in the system.

          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="grid gap-6 xl:grid-cols-2">

      {stations.map((station) => (

        <PoliceCard

          key={station.id}

          station={station}

        />

      ))}

    </div>

  );

}