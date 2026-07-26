import { BedDouble } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BedOccupancyCard({

  occupancy,

}) {

  return (

    <Card>

      <CardHeader>

        <CardTitle className="flex items-center gap-2">

          <BedDouble className="h-5 w-5 text-primary" />

          Bed Occupancy

        </CardTitle>

      </CardHeader>

      <CardContent>

        <div>

          <div className="mb-2 flex justify-between">

            <span className="text-sm">

              Occupied

            </span>

            <span className="font-semibold">

              {occupancy?.occupancyPercentage ?? 0}%

            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-muted">

            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{
                width: `${occupancy?.occupancyPercentage ?? 0}%`,
              }}
            />

          </div>

        </div>

        <div className="mt-5 space-y-2 text-sm">

          <div className="flex justify-between">

            <span className="text-muted-foreground">

              Total Beds

            </span>

            <span>

              {occupancy?.totalBeds ?? 0}

            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-muted-foreground">

              Occupied

            </span>

            <span>

              {occupancy?.occupiedBeds ?? 0}

            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-muted-foreground">

              Available

            </span>

            <span className="font-semibold">

              {occupancy?.availableBeds ?? 0}

            </span>

          </div>

        </div>

      </CardContent>

    </Card>

  );

}