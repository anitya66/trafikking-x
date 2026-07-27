import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import MissionStatusBadge from "@/features/ambulance/history/components/MissionStatusBadge";

export default function MissionDetailsCard({

  assignment,

}) {

  return (

    <Card>

      <CardHeader>

        <CardTitle>

          Mission Details

        </CardTitle>

      </CardHeader>

      <CardContent className="grid gap-6 md:grid-cols-2">

        <div>

          <p className="text-sm text-muted-foreground">

            Incident Number

          </p>

          <h3 className="font-semibold">

            {assignment.incidentNumber}

          </h3>

        </div>

        <div>

          <p className="text-sm text-muted-foreground">

            Emergency Type

          </p>

          <h3 className="font-semibold">

            {assignment.emergencyType?.replaceAll("_", " ")}

          </h3>

        </div>

        <div>

          <p className="text-sm text-muted-foreground">

            Citizen

          </p>

          <h3 className="font-semibold">

            {assignment.citizenName}

          </h3>

        </div>

        <div>

          <p className="text-sm text-muted-foreground">

            Vehicle

          </p>

          <h3 className="font-semibold">

            {assignment.vehicleNumber}

          </h3>

        </div>

        <div>

          <p className="text-sm text-muted-foreground">

            Assigned At

          </p>

          <h3 className="font-semibold">

            {assignment.assignedAt
              ? new Date(
                  assignment.assignedAt
                ).toLocaleString()
              : "--"}

          </h3>

        </div>

        <div>

          <p className="text-sm text-muted-foreground">

            Status

          </p>

          <div className="mt-2">

            <MissionStatusBadge
              status={assignment.status}
            />

          </div>

        </div>

        <div className="md:col-span-2">

          <p className="text-sm text-muted-foreground">

            Remarks

          </p>

          <p className="mt-2">

            {assignment.remarks || "No remarks"}

          </p>

        </div>

      </CardContent>

    </Card>

  );

}