import {
  Ambulance,
  CalendarClock,
  CheckCircle2,
  User,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import MissionStatusBadge from "./MissionStatusBadge";

export default function MissionHistoryCard({
  assignment,
}) {

  return (

    <Card className="transition-all duration-300 hover:border-primary hover:shadow-lg">

      <CardContent className="space-y-6 p-6">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <p className="text-xs uppercase tracking-widest text-primary">

              Incident Number

            </p>

            <h2 className="mt-1 text-xl font-bold">

              {assignment.incidentNumber}

            </h2>

          </div>

          <MissionStatusBadge
            status={assignment.status}
          />

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="flex items-center gap-3">

            <AlertTriangle className="h-5 w-5 text-primary" />

            <div>

              <p className="text-xs text-muted-foreground">

                Emergency

              </p>

              <p className="font-medium">

                {assignment.emergencyType?.replaceAll("_", " ")}

              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <User className="h-5 w-5 text-primary" />

            <div>

              <p className="text-xs text-muted-foreground">

                Citizen

              </p>

              <p className="font-medium">

                {assignment.citizenName}

              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <Ambulance className="h-5 w-5 text-primary" />

            <div>

              <p className="text-xs text-muted-foreground">

                Vehicle

              </p>

              <p className="font-medium">

                {assignment.vehicleNumber}

              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <CalendarClock className="h-5 w-5 text-primary" />

            <div>

              <p className="text-xs text-muted-foreground">

                Assigned

              </p>

              <p className="font-medium">

                {assignment.assignedAt
                  ? new Date(
                      assignment.assignedAt
                    ).toLocaleString()
                  : "--"}

              </p>

            </div>

          </div>

        </div>

        <div className="rounded-xl border bg-muted/30 p-4">

          <p className="text-xs uppercase text-muted-foreground">

            Remarks

          </p>

          <p className="mt-2 text-sm">

            {assignment.remarks ?? "No remarks available."}

          </p>

        </div>

        <div className="flex justify-end">

          <Button variant="outline" disable>

            View Details

            <ArrowRight className="ml-2 h-4 w-4" />

          </Button>

        </div>

      </CardContent>

    </Card>

  );

}