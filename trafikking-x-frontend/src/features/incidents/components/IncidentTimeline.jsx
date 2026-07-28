import {
  CheckCircle2,
  Circle,
} from "lucide-react";

const STEPS = [
  {
    title: "Emergency Reported",
    status: "REPORTED",
    description:
      "Citizen successfully submitted the emergency report.",
  },
  {
    title: "Dispatcher Assigned",
    status: "ASSIGNED",
    description:
      "Emergency has been assigned to a dispatcher.",
  },
  {
    title: "Ambulance Assigned",
    status: "AMBULANCE_ASSIGNED",
    description:
      "Nearest ambulance has been selected.",
  },
  {
    title: "Hospital Assigned",
    status: "HOSPITAL_ASSIGNED",
    description:
      "Receiving hospital has been reserved.",
  },
  {
    title: "Emergency Resolved",
    status: "RESOLVED",
    description:
      "Emergency response has been completed.",
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
  const currentStep =
    STATUS_ORDER[incident.status] ?? 0;

  return (
    <div className="rounded-3xl border border-border bg-card/50 p-6">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">

            Live Progress

          </p>

          <h3 className="mt-2 text-2xl font-bold">

            Dispatch Timeline

          </h3>

        </div>

        <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">

          STEP {currentStep + 1} / {STEPS.length}

        </span>

      </div>

      <div className="space-y-8">

        {STEPS.map((step, index) => {

          const stepIndex =
            STATUS_ORDER[step.status];

          const completed =
            stepIndex <= currentStep;

          const active =
            stepIndex === currentStep;

          return (

            <div
              key={step.status}
              className="relative flex gap-5"
            >

              {/* Timeline */}

              <div className="relative flex flex-col items-center">

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                    completed
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : "border-border bg-background"
                  }`}
                >

                  {completed ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground" />
                  )}

                </div>

                {index !== STEPS.length - 1 && (

                  <div
                    className={`mt-2 w-px flex-1 ${
                      completed
                        ? "bg-emerald-500/40"
                        : "bg-border"
                    }`}
                    style={{
                      minHeight: "52px",
                    }}
                  />

                )}

              </div>

              {/* Content */}

              <div
                className={`flex-1 rounded-2xl border p-5 transition-all ${
                  active
                    ? "border-primary bg-primary/5"
                    : "border-border bg-background/40"
                }`}
              >

                <div className="flex items-center justify-between">

                  <h4
                    className={`font-semibold ${
                      completed
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >

                    {step.title}

                  </h4>

                  {active && (

                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">

                      CURRENT

                    </span>

                  )}

                </div>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">

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