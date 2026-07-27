import { Shield } from "lucide-react";

import { usePoliceStations } from "../hooks/usePoliceStations";

import PoliceList
  from "../components/police/PoliceList";

export default function PolicePage() {

  const {

    data: stations = [],

    isLoading,

    isError,

  } = usePoliceStations();

  if (isError) {

    return (

      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-red-400">

        Failed to load police stations.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-primary/10 p-3">

          <Shield className="h-6 w-6 text-primary" />

        </div>

        <div>

          <h1 className="text-4xl font-bold tracking-tight">

            Police Stations

          </h1>

          <p className="text-muted-foreground">

            Monitor all registered police stations.

          </p>

        </div>

      </div>

      {isLoading ? (

        <div className="rounded-xl border p-12 text-center">

          Loading police stations...

        </div>

      ) : (

        <PoliceList

          stations={stations}

        />

      )}

    </div>

  );

}