import { Button } from "@/components/ui/button";

const WORKFLOW = {

  ACCEPTED: "PREPARING_TEAM",

  PREPARING_TEAM: "PATIENT_ARRIVED",

  PATIENT_ARRIVED: "TREATMENT_STARTED",

  TREATMENT_STARTED: "TREATMENT_COMPLETED",

  TREATMENT_COMPLETED: "DISCHARGED",

};

export default function HospitalCaseActions({

  hospitalCase,

  onUpdate,

  loading,

}) {

  const nextStatus =
    WORKFLOW[hospitalCase.status];

  if (!nextStatus) {

    return null;

  }

  return (

    <div className="rounded-2xl border bg-card p-6">

      <h2 className="mb-6 text-lg font-semibold">

        Workflow Actions

      </h2>

      <Button

        disabled={loading}

        onClick={() =>
          onUpdate(nextStatus)
        }

      >

        {nextStatus.replaceAll("_", " ")}

      </Button>

    </div>

  );

}