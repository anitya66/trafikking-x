import HospitalCaseCard
  from "./HospitalCaseCard";

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

      <div className="rounded-xl border border-dashed p-12 text-center text-muted-foreground">

        No incoming patients.

      </div>

    );

  }

  return (

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

          onAccept={
            handleAccept
          }

        />

      ))}

    </div>

  );

}