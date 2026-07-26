import {
  CheckCircle2,
  Circle,
} from "lucide-react";

const STEPS = [
  "ACCEPTED",
  "PREPARING_TEAM",
  "PATIENT_ARRIVED",
  "TREATMENT_STARTED",
  "TREATMENT_COMPLETED",
  "DISCHARGED",
];

export default function HospitalCaseTimeline({

  status,

}) {

  const current =
    STEPS.indexOf(status);

  return (

    <div className="rounded-2xl border bg-card p-6">

      <h2 className="mb-6 text-lg font-semibold">

        Treatment Timeline

      </h2>

      <div className="space-y-5">

        {STEPS.map((step, index) => {

          const completed =
            index <= current;

          return (

            <div
              key={step}
              className="flex items-center gap-4"
            >

              {completed ? (

                <CheckCircle2 className="h-6 w-6 text-primary" />

              ) : (

                <Circle className="h-6 w-6 text-muted-foreground" />

              )}

              <span
                className={
                  completed
                    ? "font-semibold"
                    : "text-muted-foreground"
                }
              >
                {step.replaceAll("_", " ")}

              </span>

            </div>

          );

        })}

      </div>

    </div>

  );

}