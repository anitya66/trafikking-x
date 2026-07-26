import {
  Clock3,
  UserRound,
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
      return "bg-red-500/10 text-red-500 border-red-500/20";

    case "HIGH":
      return "bg-orange-500/10 text-orange-500 border-orange-500/20";

    case "MEDIUM":
      return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";

    default:
      return "bg-green-500/10 text-green-500 border-green-500/20";

  }

}

export default function IncomingPatientsCard({

  patients = [],

}) {

  return (

    <Card>

      <CardHeader className="pb-4">

        <CardTitle className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <UserRound className="h-5 w-5 text-primary" />

            <span>Incoming Patients</span>

          </div>

          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">

            {patients.length}

          </span>

        </CardTitle>

      </CardHeader>

      <CardContent>

        {patients.length === 0 ? (

          <div className="flex h-40 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">

            No incoming patients.

          </div>

        ) : (

          <div className="space-y-4">

            {patients.map((patient, index) => (

              <div
                key={patient.incidentNumber ?? index}
                className="rounded-xl border p-4 transition-all hover:border-primary/40 hover:bg-primary/5"
              >

                <div className="flex items-start justify-between gap-4">

                  <div className="min-w-0 flex-1">

                    <h3 className="font-semibold">

                      {patient.patientName}

                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">

                      {patient.incidentType?.replaceAll("_", " ")}

                    </p>

                  </div>

                  <span
                    className={`rounded-full border px-2 py-1 text-xs font-medium ${priorityColor(
                      patient.severity
                    )}`}
                  >

                    {patient.severity}

                  </span>

                </div>

                <div className="mt-4 flex items-center justify-between">

                  <div className="text-xs text-muted-foreground">

                    {patient.incidentNumber}

                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold">

                    <Clock3 className="h-4 w-4 text-primary" />

                    {patient.etaMinutes} min

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