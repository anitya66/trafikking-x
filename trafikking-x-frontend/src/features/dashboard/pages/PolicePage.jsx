import { Shield, ShieldCheck } from "lucide-react";

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

      <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-12">

        <div className="flex flex-col items-center text-center">

          <div className="mb-6 rounded-3xl bg-red-500/10 p-5">

            <Shield className="h-10 w-10 text-red-500" />

          </div>

          <h3 className="text-2xl font-bold">

            Unable To Load Police Stations

          </h3>

          <p className="mt-3 max-w-md text-muted-foreground">

            Something went wrong while loading the police
            station network.

          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-5 rounded-3xl border border-primary/10 bg-card/60 p-6 backdrop-blur lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-primary/10 p-4">

            <Shield className="h-7 w-7 text-primary" />

          </div>

          <div>

            <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">

              Police Stations

            </h1>

            <p className="mt-2 text-muted-foreground">

              Monitor all registered police stations and
              emergency response units.

            </p>

          </div>

        </div>

        <div className="rounded-2xl bg-primary/5 px-6 py-4 text-center">

          <p className="text-xs uppercase tracking-wider text-muted-foreground">

            Active Stations

          </p>

          <p className="mt-1 text-3xl font-black text-primary">

            {stations.length}

          </p>

        </div>

      </div>

      {/* Content */}

      {isLoading ? (

        <div className="rounded-3xl border bg-card/40 p-12">

          <div className="flex flex-col items-center text-center">

            <ShieldCheck className="mb-5 h-10 w-10 animate-pulse text-primary" />

            <h3 className="text-xl font-semibold">

              Loading Police Stations...

            </h3>

            <p className="mt-2 text-muted-foreground">

              Fetching the latest police network information.

            </p>

          </div>

        </div>

      ) : (

        <PoliceList

          stations={stations}

        />

      )}

    </div>

  );

}