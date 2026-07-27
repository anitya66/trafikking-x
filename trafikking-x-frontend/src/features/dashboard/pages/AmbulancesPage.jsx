import { Ambulance } from "lucide-react";

import { useAmbulances } from "../hooks/useAmbulances";

import AmbulanceList
  from "../components/ambulances/AmbulanceList";

export default function AmbulancesPage() {

  const {

    data: ambulances = [],

    isLoading,

    isError,

  } = useAmbulances();

  if (isError) {

    return (

      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-red-400">

        Failed to load ambulances.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-primary/10 p-3">

          <Ambulance className="h-6 w-6 text-primary" />

        </div>

        <div>

          <h1 className="text-4xl font-bold tracking-tight">

            Ambulances

          </h1>

          <p className="text-muted-foreground">

            Monitor all registered ambulances.

          </p>

        </div>

      </div>

      {isLoading ? (

        <div className="rounded-xl border p-12 text-center">

          Loading ambulances...

        </div>

      ) : (

        <AmbulanceList

          ambulances={ambulances}

        />

      )}

    </div>

  );

}