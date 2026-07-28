import {
  Map,
  TriangleAlert,
} from "lucide-react";

import EmergencyMap from "./EmergencyMap";

import { useMapOverview }
  from "../hooks/useMapOverview";

export default function DispatcherEmergencyMap() {

  const {

    data,

    isLoading,

    isError,

  } = useMapOverview();

  if (isLoading) {

    return (

      <div className="flex h-[650px] items-center justify-center rounded-3xl border bg-card">

        <div className="text-center">

          <Map className="mx-auto mb-4 h-10 w-10 animate-pulse text-primary" />

          <h3 className="text-lg font-semibold">

            Loading Emergency Map...

          </h3>

          <p className="mt-2 text-muted-foreground">

            Fetching live emergency resources.

          </p>

        </div>

      </div>

    );

  }

  if (isError) {

    return (

      <div className="flex h-[650px] items-center justify-center rounded-3xl border border-red-500/20 bg-red-500/5">

        <div className="text-center">

          <TriangleAlert className="mx-auto mb-4 h-10 w-10 text-red-500" />

          <h3 className="text-xl font-bold">

            Unable To Load Map

          </h3>

          <p className="mt-2 text-muted-foreground">

            Please refresh the page and try again.

          </p>

        </div>

      </div>

    );

  }

  return (

    <EmergencyMap

      overview={data}

      loading={false}

      error={false}

    />

  );

}