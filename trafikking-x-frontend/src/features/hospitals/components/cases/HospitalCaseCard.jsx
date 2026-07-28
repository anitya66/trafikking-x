import {
  Activity,
  Ambulance,
  ArrowRight,
  Clock3,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import HospitalCaseStatusBadge
  from "./HospitalCaseStatusBadge";

function severityColor(severity) {

  switch ((severity || "").toUpperCase()) {

    case "CRITICAL":
      return "border-red-500/20 bg-red-500/10 text-red-500";

    case "HIGH":
      return "border-orange-500/20 bg-orange-500/10 text-orange-500";

    case "MEDIUM":
      return "border-yellow-500/20 bg-yellow-500/10 text-yellow-500";

    default:
      return "border-emerald-500/20 bg-emerald-500/10 text-emerald-500";

  }

}

export default function HospitalCaseCard({

  patient,

  onAccept,

}) {

  return (

    <Card className="group overflow-hidden border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">

      <CardContent className="p-6">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}

          <div className="flex flex-1 gap-5">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">

              <UserRound className="h-7 w-7 text-primary" />

            </div>

            <div className="flex-1 space-y-4">

              <div>

                <h2 className="text-xl font-bold">

                  {patient.patientName}

                </h2>

                <p className="mt-1 text-sm text-muted-foreground">

                  {patient.incidentNumber}

                </p>

              </div>

              <div className="flex flex-wrap gap-3">

                <div
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${severityColor(
                    patient.severity
                  )}`}
                >

                  {patient.severity ?? "UNKNOWN"}

                </div>

                <HospitalCaseStatusBadge
                  status={patient.status}
                />

              </div>

              <div className="grid gap-3 md:grid-cols-3">

                <div className="flex items-center gap-2 rounded-xl border bg-card/40 p-3">

                  <Activity className="h-4 w-4 text-red-500" />

                  <div>

                    <p className="text-xs text-muted-foreground">

                      Incident

                    </p>

                    <p className="font-medium">

                      {patient.incidentType?.replaceAll("_", " ")}

                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-2 rounded-xl border bg-card/40 p-3">

                  <Clock3 className="h-4 w-4 text-cyan-500" />

                  <div>

                    <p className="text-xs text-muted-foreground">

                      ETA

                    </p>

                    <p className="font-semibold">

                      {patient.etaMinutes} min

                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-2 rounded-xl border bg-card/40 p-3">

                  <Ambulance className="h-4 w-4 text-primary" />

                  <div>

                    <p className="text-xs text-muted-foreground">

                      Ambulance

                    </p>

                    <p className="font-medium">

                      {patient.ambulanceNumber ?? "Assigned"}

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex flex-col gap-4 lg:w-52">

            <Button
              size="lg"
              className="w-full"
              onClick={() => onAccept(patient)}
            >

              Accept Patient

              <ArrowRight className="ml-2 h-4 w-4" />

            </Button>

          </div>

        </div>

      </CardContent>

    </Card>

  );

}