import {
  ArrowRight,
  CheckCircle2,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const WORKFLOW = {

  ACCEPTED: "PREPARING_TEAM",

  PREPARING_TEAM: "PATIENT_ARRIVED",

  PATIENT_ARRIVED: "TREATMENT_STARTED",

  TREATMENT_STARTED: "TREATMENT_COMPLETED",

  TREATMENT_COMPLETED: "DISCHARGED",

};

const LABELS = {

  PREPARING_TEAM: {
    title: "Prepare Medical Team",
    description:
      "Notify doctors and emergency staff.",
  },

  PATIENT_ARRIVED: {
    title: "Confirm Patient Arrival",
    description:
      "Mark when the ambulance reaches the hospital.",
  },

  TREATMENT_STARTED: {
    title: "Start Treatment",
    description:
      "Begin emergency medical treatment.",
  },

  TREATMENT_COMPLETED: {
    title: "Complete Treatment",
    description:
      "Treatment has been successfully completed.",
  },

  DISCHARGED: {
    title: "Discharge Patient",
    description:
      "Patient is ready to leave the hospital.",
  },

};

export default function HospitalCaseActions({

  hospitalCase,

  onUpdate,

  loading,

}) {

  const nextStatus =
    WORKFLOW[hospitalCase.status];

  if (!nextStatus) {

    return (

      <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-emerald-500/10 p-3">

            <CheckCircle2 className="h-6 w-6 text-emerald-500" />

          </div>

          <div>

            <h2 className="text-xl font-bold">

              Workflow Completed

            </h2>

            <p className="mt-1 text-muted-foreground">

              This hospital case has completed its entire
              treatment workflow.

            </p>

          </div>

        </div>

      </div>

    );

  }

  const action =
    LABELS[nextStatus];

  return (

    <div className="rounded-3xl border bg-card p-6">

      <div className="mb-8 flex items-center gap-4">

        <div className="rounded-2xl bg-primary/10 p-3">

          <Workflow className="h-6 w-6 text-primary" />

        </div>

        <div>

          <h2 className="text-xl font-bold">

            Workflow Actions

          </h2>

          <p className="text-sm text-muted-foreground">

            Advance this emergency case to the next stage.

          </p>

        </div>

      </div>

      <div className="rounded-2xl border bg-card/40 p-5">

        <h3 className="text-lg font-semibold">

          {action.title}

        </h3>

        <p className="mt-2 text-sm text-muted-foreground">

          {action.description}

        </p>

        <Button
          size="lg"
          className="mt-6 w-full sm:w-auto"
          disabled={loading}
          onClick={() => onUpdate(nextStatus)}
        >

          {loading
            ? "Updating..."
            : action.title}

          {!loading && (

            <ArrowRight className="ml-2 h-4 w-4" />

          )}

        </Button>

      </div>

    </div>

  );

}