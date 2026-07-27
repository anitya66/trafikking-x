import { Building2 } from "lucide-react";

import { useHospitals } from "../hooks/useHospitals";

import HospitalList
  from "../components/hospitals/HospitalList";

export default function HospitalsPage() {

  const {

    data: hospitals = [],

    isLoading,

    isError,

  } = useHospitals();

  if (isError) {

    return (

      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-red-400">

        Failed to load hospitals.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-primary/10 p-3">

          <Building2 className="h-6 w-6 text-primary" />

        </div>

        <div>

          <h1 className="text-4xl font-bold tracking-tight">

            Hospitals

          </h1>

          <p className="text-muted-foreground">

            Monitor all registered hospitals.

          </p>

        </div>

      </div>

      {isLoading ? (

        <div className="rounded-xl border p-12 text-center">

          Loading hospitals...

        </div>

      ) : (

        <HospitalList

          hospitals={hospitals}

        />

      )}

    </div>

  );

}