import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import AmbulanceStatusBadge from "./AmbulanceStatusBadge";

export default function AmbulanceInfoCard({
  ambulance,
}) {

  return (

    <Card>

      <CardHeader>

        <CardTitle>

          Ambulance Information

        </CardTitle>

      </CardHeader>

      <CardContent className="grid gap-6 md:grid-cols-2">

        <div>

          <p className="text-sm text-muted-foreground">

            Vehicle Number

          </p>

          <h3 className="font-semibold">

            {ambulance?.vehicleNumber}

          </h3>

        </div>

        <div>

          <p className="text-sm text-muted-foreground">

            Driver

          </p>

          <h3 className="font-semibold">

            {ambulance?.driverName}

          </h3>

        </div>

        <div>

          <p className="text-sm text-muted-foreground">

            Vehicle Type

          </p>

          <h3 className="font-semibold">

            {ambulance?.vehicleType}

          </h3>

        </div>

        <div>

          <p className="text-sm text-muted-foreground">

            Driver Phone

          </p>

          <h3 className="font-semibold">

            {ambulance?.driverPhone}

          </h3>

        </div>

        <div>

  <p className="text-sm text-muted-foreground">

    Current Status

  </p>

  <div className="mt-2">

    <AmbulanceStatusBadge
      status={ambulance?.status}
    />

  </div>

</div>

      </CardContent>

    </Card>

  );

}