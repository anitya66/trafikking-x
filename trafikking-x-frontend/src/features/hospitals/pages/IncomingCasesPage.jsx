import {
  Activity,
  Ambulance,
} from "lucide-react";

import { useIncomingPatients } from "../hooks/useIncomingPatients";

import HospitalCaseList from "../components/cases/HospitalCaseList";

export default function IncomingCasesPage() {

  const {
    data: patients = [],
    isLoading,
    isError,
  } = useIncomingPatients();

  if (isError) {

    return (

      <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-8">

        <div className="flex items-center gap-3">

          <Activity className="h-6 w-6 text-red-500" />

          <div>

            <h2 className="text-xl font-bold text-red-500">

              Unable To Load Incoming Cases

            </h2>

            <p className="mt-1 text-sm text-red-400">

              Please refresh the page or try again later.

            </p>

          </div>

        </div>

      </div>

    );

  }

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-primary/10 p-4">

            <Activity className="h-7 w-7 text-primary" />

          </div>

          <div>

            <h1 className="text-3xl font-black tracking-tight lg:text-5xl">

              Incoming Cases

            </h1>

            <p className="mt-2 max-w-2xl text-muted-foreground">

              Review emergency patients assigned to your
              hospital and prepare medical teams before arrival.

            </p>

          </div>

        </div>

        <div className="inline-flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-5 py-3">

          <Ambulance className="h-5 w-5 text-primary" />

          <div>

            <p className="text-xs uppercase tracking-wide text-muted-foreground">

              Waiting Cases

            </p>

            <p className="text-xl font-black">

              {patients.length}

            </p>

          </div>

        </div>

      </div>

      {/* Loading */}

      {isLoading ? (

        <div className="rounded-3xl border border-border bg-card p-12">

          <div className="space-y-5">

            {[1, 2, 3, 4].map((item) => (

              <div
                key={item}
                className="h-24 animate-pulse rounded-2xl bg-muted"
              />

            ))}

          </div>

        </div>

      ) : (

        <HospitalCaseList
          patients={patients}
        />

      )}

    </div>

  );

}