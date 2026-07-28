import {
  Building2,
  TriangleAlert,
} from "lucide-react";

import { useHospitals } from "../hooks/useHospitals";

import HospitalList
  from "../components/hospitals/HospitalList";

export default function HospitalsPage() {

  const {

    data: hospitals = [],

    isLoading,

    isError,

  } = useHospitals();

  if (isLoading) {

    return (

      <div className="rounded-3xl border bg-card/40 p-12">

        <div className="flex flex-col items-center text-center">

          <Building2 className="mb-5 h-10 w-10 animate-pulse text-primary" />

          <h3 className="text-xl font-semibold">

            Loading Hospitals...

          </h3>

          <p className="mt-2 text-muted-foreground">

            Fetching registered hospitals from the network.

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

            Unable To Load Hospitals

          </h3>

          <p className="mt-3 max-w-md text-muted-foreground">

            Something went wrong while loading the
            registered hospitals.

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

            <Building2 className="h-7 w-7 text-primary" />

          </div>

          <div>

            <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">

              Hospitals

            </h1>

            <p className="mt-2 text-muted-foreground">

              Monitor registered hospitals, emergency
              facilities and live resource availability.

            </p>

          </div>

        </div>

        <div className="rounded-2xl bg-primary/5 px-6 py-4 text-center">

          <p className="text-xs uppercase tracking-wider text-muted-foreground">

            Registered

          </p>

          <p className="mt-1 text-3xl font-black text-primary">

            {hospitals.length}

          </p>

        </div>

      </div>

      <HospitalList

        hospitals={hospitals}

      />

    </div>

  );

}