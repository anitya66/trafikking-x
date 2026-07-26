import {
  Activity,
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

export default function HospitalCaseCard({

  patient,

  onAccept,

}) {

  return (

    <Card className="group transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">

      <CardContent className="p-6">

        <div className="flex items-start justify-between">

          <div className="space-y-3">

            <div className="flex items-center gap-3">

              <UserRound className="h-5 w-5 text-primary" />

              <h3 className="font-semibold text-lg">

                {patient.patientName}

              </h3>

            </div>

            <p className="text-sm text-muted-foreground">

              {patient.incidentNumber}

            </p>

            <div className="flex items-center gap-2">

              <Activity className="h-4 w-4 text-red-500" />

              <span>

                {patient.incidentType}

              </span>

            </div>

            <div className="flex items-center gap-2">

              <Clock3 className="h-4 w-4 text-cyan-500" />

              ETA

              <span className="font-semibold">

                {patient.etaMinutes} min

              </span>

            </div>

          </div>

          <div className="flex flex-col items-end gap-4">

            <HospitalCaseStatusBadge
              status={patient.status}
            />

            <Button
              onClick={() => onAccept(patient)}
            >
              Accept Patient
            </Button>

          </div>

        </div>

      </CardContent>

    </Card>

  );

}