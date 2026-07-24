import {
  CheckCircle2,
  Circle,
} from "lucide-react";

const STEPS = [
  {
    title: "Reported",
    status: "REPORTED",
    description: "Emergency reported successfully.",
  },
  {
    title: "Dispatcher Assigned",
    status: "ASSIGNED",
    description: "Waiting for dispatcher assignment.",
  },
  {
    title: "Ambulance Assigned",
    status: "AMBULANCE_ASSIGNED",
    description: "Nearest ambulance will be assigned.",
  },
  {
    title: "Hospital Assigned",
    status: "HOSPITAL_ASSIGNED",
    description: "Receiving hospital will be selected.",
  },
  {
    title: "Resolved",
    status: "RESOLVED",
    description: "Emergency has been resolved.",
  },
];

const STATUS_ORDER = {
  REPORTED: 0,
  ASSIGNED: 1,
  AMBULANCE_ASSIGNED: 2,
  HOSPITAL_ASSIGNED: 3,
  RESOLVED: 4,
};

export default function IncidentTimeline({
  incident,
}) {

  return (

    <div className="rounded-xl border p-5">

      <h3 className="mb-6 text-lg font-semibold">

        Incident Timeline

      </h3>

      <div className="space-y-5">

        {STEPS.map((step, index) => {

          const currentStep =
  STATUS_ORDER[incident.status] ?? 0;

const stepIndex =
  STATUS_ORDER[step.status];

const completed =
  stepIndex <= currentStep;

          return (
<div
  key={step.status}
  className="relative flex items-start gap-4"
>

             {completed ? (

                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" />

              ) : (

                <Circle className="mt-0.5 h-5 w-5 text-muted-foreground" />

              )}
              
              {index !== STEPS.length - 1 && (
  <div className="absolute left-[9px] top-6 h-10 w-px bg-border" />
)}

             <div className="flex-1">

  <p
    className={
      completed
        ? "font-semibold"
        : "text-muted-foreground"
    }
  >
    {step.title}
  </p>

  <p className="mt-1 text-xs text-muted-foreground">
    {step.description}
  </p>

</div>

            </div>

          );

        })}

      </div>

    </div>

  );

}