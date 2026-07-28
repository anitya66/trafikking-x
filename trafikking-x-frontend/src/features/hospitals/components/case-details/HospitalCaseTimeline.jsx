import {
  CheckCircle2,
  Circle,
  Clock3,
  Stethoscope,
  UserCheck,
  Users,
} from "lucide-react";

const STEPS = [
  {
    status: "ACCEPTED",
    title: "Case Accepted",
    description:
      "Hospital has accepted the incoming emergency case.",
    icon: CheckCircle2,
  },
  {
    status: "PREPARING_TEAM",
    title: "Preparing Medical Team",
    description:
      "Doctors and emergency staff are getting ready.",
    icon: Users,
  },
  {
    status: "PATIENT_ARRIVED",
    title: "Patient Arrived",
    description:
      "Patient has reached the hospital.",
    icon: Clock3,
  },
  {
    status: "TREATMENT_STARTED",
    title: "Treatment Started",
    description:
      "Emergency treatment is currently in progress.",
    icon: Stethoscope,
  },
  {
    status: "TREATMENT_COMPLETED",
    title: "Treatment Completed",
    description:
      "Primary medical treatment has been completed.",
    icon: UserCheck,
  },
  {
    status: "DISCHARGED",
    title: "Patient Discharged",
    description:
      "Patient has been discharged successfully.",
    icon: CheckCircle2,
  },
];

export default function HospitalCaseTimeline({
  status,
}) {

  const currentStep =
    STEPS.findIndex(
      (step) => step.status === status
    );

  return (

    <div className="rounded-3xl border bg-card p-6">

      <div className="mb-8">

        <h2 className="text-xl font-bold">

          Treatment Timeline

        </h2>

        <p className="mt-1 text-sm text-muted-foreground">

          Live progress of the patient's hospital journey.

        </p>

      </div>

      <div className="space-y-6">

        {STEPS.map((step, index) => {

          const completed =
            index <= currentStep;

          const Icon =
            step.icon;

          return (

            <div
              key={step.status}
              className="relative flex gap-5"
            >

              {/* Vertical Line */}

              {index !== STEPS.length - 1 && (

                <div
                  className={`absolute left-5 top-12 h-12 w-0.5 ${
                    completed
                      ? "bg-primary"
                      : "bg-border"
                  }`}
                />

              )}

              {/* Icon */}

              <div
                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border ${
                  completed
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground"
                }`}
              >

                {completed ? (

                  <CheckCircle2 className="h-5 w-5" />

                ) : (

                  <Icon className="h-5 w-5" />

                )}

              </div>

              {/* Content */}

              <div className="flex-1 pb-4">

                <h3
                  className={`font-semibold ${
                    completed
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >

                  {step.title}

                </h3>

                <p className="mt-1 text-sm text-muted-foreground">

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