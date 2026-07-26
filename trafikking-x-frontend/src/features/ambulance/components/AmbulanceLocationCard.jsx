import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import {
  MapPin,
  Clock,
} from "lucide-react";

export default function AmbulanceLocationCard({
  ambulance,
}) {

  return (

    <Card>

      <CardHeader>

        <CardTitle>

          Live Location

        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-5">

        <div className="flex items-center gap-3">

          <MapPin className="h-5 w-5 text-primary" />

          <div>

            <p className="text-sm text-muted-foreground">

              Latitude

            </p>

            <h3 className="font-semibold">

              {ambulance?.currentLatitude}

            </h3>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <MapPin className="h-5 w-5 text-primary" />

          <div>

            <p className="text-sm text-muted-foreground">

              Longitude

            </p>

            <h3 className="font-semibold">

              {ambulance?.currentLongitude}

            </h3>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <Clock className="h-5 w-5 text-primary" />

          <div>

            <p className="text-sm text-muted-foreground">

              Last Updated

            </p>

            <h3 className="font-semibold">

              {ambulance?.lastLocationUpdatedAt
                ? new Date(
                    ambulance.lastLocationUpdatedAt
                  ).toLocaleString()
                : "--"}

            </h3>

          </div>

        </div>

      </CardContent>

    </Card>

  );

}