import {
  ClipboardList,
  Activity,
} from "lucide-react";

import HospitalCaseCard from "./HospitalCaseCard";

import { useAcceptPatient }
  from "../../hooks/useAcceptPatient";

export default function HospitalCaseList({
  patients,
}) {

  const mutation =
    useAcceptPatient();

  function handleAccept(patient) {

    mutation.mutate({

      dispatchId: patient.dispatchId,

      payload: {

        notes:
          "Emergency team notified.",

      },

    });

  }

  if (!patients.length) {

    return (

      <div className="rounded-3xl border border-dashed bg-card/40 p-16">

        <div className="flex flex-col items-center text-center">

          <div className="mb-6 rounded-2xl bg-primary/10 p-5">

            <ClipboardList className="h-10 w-10 text-primary" />

          </div>

          <h2 className="text-2xl font-bold">

            No Incoming Cases

          </h2>

          <p className="mt-3 max-w-md text-muted-foreground">

            New emergency patients assigned to your
            hospital will automatically appear here for
            review and acceptance.

          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="space-y-6">

      {/* Summary */}

      <div className="flex flex-col gap-4 rounded-3xl border border-primary/10 bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-primary/10 p-3">

            <Activity className="h-6 w-6 text-primary" />

          </div>

          <div>

            <h2 className="text-xl font-bold">

              Active Incoming Cases

            </h2>

            <p className="text-sm text-muted-foreground">

              Review each patient before arrival.

            </p>

          </div>

        </div>

        <div className="rounded-2xl bg-background px-6 py-4 text-center shadow-sm">

          <p className="text-xs uppercase tracking-wide text-muted-foreground">

            Total Cases

          </p>

          <h3 className="mt-1 text-3xl font-black text-primary">

            {patients.length}

          </h3>

        </div>

      </div>

      {/* Case Cards */}

      <div className="space-y-5">

        {patients.map((patient) => (

          <HospitalCaseCard

            key={patient.dispatchId}

            patient={{

              ...patient,

              status:
                patient.status ??
                "ACCEPTED",

            }}

            onAccept={handleAccept}

          />

        ))}

      </div>

    </div>

  );

}