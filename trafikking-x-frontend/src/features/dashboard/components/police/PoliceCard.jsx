import { Card, CardContent } from "@/components/ui/card";

import PoliceStatusBadge
  from "./PoliceStatusBadge";

export default function PoliceCard({

  station,

}) {

  return (

    <Card>

      <CardContent className="space-y-4 p-6">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-semibold">

              {station.stationName}

            </h3>

            <p className="text-sm text-muted-foreground">

              {station.stationType}

            </p>

          </div>

          <PoliceStatusBadge

            active={station.active}

          />

        </div>

        <div className="grid gap-2 text-sm">

          <p>

            Code:

            {" "}

            {station.stationCode}

          </p>

          <p>

            City:

            {" "}

            {station.city}

          </p>

          <p>

            Contact:

            {" "}

            {station.contactNumber}

          </p>

          <p>

            Email:

            {" "}

            {station.email}

          </p>

        </div>

      </CardContent>

    </Card>

  );

}