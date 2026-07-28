import {
  Clock3,
  UserRound,
  Siren,
  Activity,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function priorityColor(priority) {
  switch ((priority || "").toUpperCase()) {
    case "CRITICAL":
      return "border-red-500/20 bg-red-500/10 text-red-500";

    case "HIGH":
      return "border-orange-500/20 bg-orange-500/10 text-orange-500";

    case "MEDIUM":
      return "border-yellow-500/20 bg-yellow-500/10 text-yellow-500";

    default:
      return "border-green-500/20 bg-green-500/10 text-green-500";
  }
}

export default function IncomingPatientsCard({
  patients = [],
}) {
  return (
    <Card className="group relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardHeader className="relative pb-5">

        <CardTitle className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-primary/10 p-2">

              <UserRound className="h-5 w-5 text-primary" />

            </div>

            <div>

              <h2 className="text-lg font-bold">

                Incoming Patients

              </h2>

              <p className="text-sm font-normal text-muted-foreground">

                Patients currently heading to your hospital

              </p>

            </div>

          </div>

          <div className="rounded-full bg-primary/10 px-4 py-1 text-sm font-bold text-primary">

            {patients.length}

          </div>

        </CardTitle>

      </CardHeader>

      <CardContent className="relative">

        {patients.length === 0 ? (

          <div className="flex h-56 flex-col items-center justify-center rounded-2xl border border-dashed">

            <Activity className="mb-4 h-12 w-12 text-muted-foreground" />

            <h3 className="text-lg font-semibold">

              No Incoming Patients

            </h3>

            <p className="mt-2 text-center text-sm text-muted-foreground">

              New emergency patients assigned to your
              hospital will appear here.

            </p>

          </div>

        ) : (

          <div className="space-y-5">

            {patients.map((patient, index) => (

              <div
                key={patient.incidentNumber ?? index}
                className="rounded-2xl border border-border bg-card/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
              >

                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

                  <div className="min-w-0 flex-1">

                    <div className="flex items-center gap-2">

                      <Siren className="h-4 w-4 text-red-500" />

                      <h3 className="truncate text-lg font-semibold">

                        {patient.patientName}

                      </h3>

                    </div>

                    <p className="mt-2 text-sm text-muted-foreground">

                      {patient.incidentType?.replaceAll("_", " ")}

                    </p>

                  </div>

                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${priorityColor(
                      patient.severity
                    )}`}
                  >
                    {patient.severity}
                  </span>

                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div>

                    <p className="text-xs uppercase tracking-wide text-muted-foreground">

                      Incident Number

                    </p>

                    <p className="mt-1 font-semibold">

                      {patient.incidentNumber}

                    </p>

                  </div>

                  <div className="sm:text-right">

                    <p className="text-xs uppercase tracking-wide text-muted-foreground">

                      Estimated Arrival

                    </p>

                    <div className="mt-1 inline-flex items-center gap-2 font-semibold text-primary">

                      <Clock3 className="h-4 w-4" />

                      {patient.etaMinutes} min

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </CardContent>

    </Card>
  );
}