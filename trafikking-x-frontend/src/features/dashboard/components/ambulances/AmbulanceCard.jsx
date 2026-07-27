import { Card, CardContent } from "@/components/ui/card";

import AmbulanceStatusBadge
  from "./AmbulanceStatusBadge";

export default function AmbulanceCard({

  ambulance,

}) {

  return (

    <Card>

      <CardContent className="space-y-4 p-6">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-semibold">

              {ambulance.vehicleNumber}

            </h3>

            <p className="text-sm text-muted-foreground">

              {ambulance.vehicleType}

            </p>

          </div>

          <AmbulanceStatusBadge

            status={ambulance.status}

          />

        </div>

        <div className="grid gap-2 text-sm">

          <p>

            Driver:

            {" "}

            {ambulance.driverName}

          </p>

          <p>

            Phone:

            {" "}

            {ambulance.driverPhone}

          </p>

          <p>

            Active:

            {" "}

            {ambulance.active ? "Yes" : "No"}

          </p>

        </div>

      </CardContent>

    </Card>

  );

}