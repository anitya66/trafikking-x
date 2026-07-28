import {
  CheckCircle2,
  Circle,
  ShieldCheck,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const STEPS = [
  "CASE_CREATED",
  "ACCEPTED",
  "RESPONDING",
  "ON_SCENE",
  "COMPLETED",
];

const LABELS = {
  CASE_CREATED: "Case Created",
  ACCEPTED: "Case Accepted",
  RESPONDING: "Responding",
  ON_SCENE: "On Scene",
  COMPLETED: "Completed",
};

export default function PoliceCaseTimeline({

  status,

}) {

  const current = (() => {

    switch (status) {

      case "ACCEPTED":
        return 1;

      case "RESPONDING":
        return 2;

      case "ON_SCENE":
        return 3;

      case "COMPLETED":
        return 4;

      default:
        return 0;

    }

  })();

  return (

    <Card className="rounded-3xl">

      <CardHeader>

        <CardTitle className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">

            <ShieldCheck className="h-5 w-5 text-primary" />

          </div>

          <div>

            <h2 className="text-xl font-semibold">

              Police Workflow

            </h2>

            <p className="text-sm font-normal text-muted-foreground">

              Live response progress

            </p>

          </div>

        </CardTitle>

      </CardHeader>

      <CardContent>

        <div className="space-y-5">

          {STEPS.map((step, index) => {

            const completed = index <= current;

            const currentStep =
              index === current;

            return (

              <div
                key={step}
                className={`flex flex-col gap-4 rounded-2xl border p-5 transition-all sm:flex-row sm:items-center sm:justify-between ${
                  completed
                    ? "border-primary/20 bg-primary/5"
                    : ""
                }`}
              >

                <div className="flex items-center gap-4">

                  {completed ? (

                    <CheckCircle2 className="h-7 w-7 text-primary" />

                  ) : (

                    <Circle className="h-7 w-7 text-muted-foreground" />

                  )}

                  <div>

                    <h3
                      className={`font-semibold ${
                        completed
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >

                      {LABELS[step]}

                    </h3>

                    <p className="text-sm text-muted-foreground">

                      {completed

                        ? "Completed"

                        : "Waiting"}

                    </p>

                  </div>

                </div>

                <span
                  className={`w-fit rounded-full px-4 py-2 text-sm font-semibold ${
                    completed
                      ? currentStep
                        ? "bg-primary text-primary-foreground"
                        : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      : "bg-muted text-muted-foreground"
                  }`}
                >

                  {completed

                    ? currentStep
                      ? "Current"
                      : "Done"

                    : "Pending"}

                </span>

              </div>

            );

          })}

        </div>

      </CardContent>

    </Card>

  );

}