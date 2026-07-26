import {

  Activity,

  Building2,

  UserRound,

  FileText,

} from "lucide-react";

import {

  Card,

  CardContent,

  CardHeader,

  CardTitle,

} from "@/components/ui/card";

export default function HospitalCaseInfoCard({

  hospitalCase,

}) {

  return (

    <Card>

      <CardHeader>

        <CardTitle>

          Patient Information

        </CardTitle>

      </CardHeader>

      <CardContent className="grid gap-6 md:grid-cols-2">

        <div className="flex items-center gap-3">

          <UserRound className="h-5 w-5 text-primary" />

          <div>

            <p className="text-sm text-muted-foreground">

              Patient

            </p>

            <p className="font-semibold">

              {hospitalCase.patientName}

            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <Activity className="h-5 w-5 text-red-500" />

          <div>

            <p className="text-sm text-muted-foreground">

              Incident

            </p>

            <p className="font-semibold">

              {hospitalCase.incidentType}

            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <Building2 className="h-5 w-5 text-cyan-500" />

          <div>

            <p className="text-sm text-muted-foreground">

              Hospital

            </p>

            <p className="font-semibold">

              {hospitalCase.hospitalName}

            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <FileText className="h-5 w-5 text-amber-500" />

          <div>

            <p className="text-sm text-muted-foreground">

              Notes

            </p>

            <p className="font-semibold">

              {hospitalCase.notes || "No notes"}

            </p>

          </div>

        </div>

      </CardContent>

    </Card>

  );

}