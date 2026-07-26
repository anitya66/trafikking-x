import { Activity } from "lucide-react";

import { useIncomingPatients } from "../hooks/useIncomingPatients";

import HospitalCaseList
  from "../components/cases/HospitalCaseList";

export default function IncomingCasesPage() {

  const {

    data: patients = [],

    isLoading,

    isError,

  } = useIncomingPatients();

  if (isError) {

    return (

      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-red-400">

        Failed to load incoming patients.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-primary/10 p-3">

          <Activity className="h-6 w-6 text-primary" />

        </div>

        <div>

          <h1 className="text-4xl font-bold tracking-tight">

            Incoming Cases

          </h1>

          <p className="text-muted-foreground">

            Review emergency cases assigned to your hospital.

          </p>

        </div>

      </div>

      {isLoading ? (

        <div className="rounded-xl border p-12 text-center">

          Loading incoming patients...

        </div>

      ) : (

        <HospitalCaseList

          patients={patients}

        />

      )}

    </div>

  );

}