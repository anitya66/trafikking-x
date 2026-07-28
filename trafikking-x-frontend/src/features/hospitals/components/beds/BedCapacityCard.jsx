import {
  BedDouble,
  HeartPulse,
} from "lucide-react";

import OccupancyProgress from "./OccupancyProgress";

export default function BedCapacityCard({

  bedOccupancy,

  icuOccupancy,

}) {

  return (

    <div className="space-y-8">

      {/* Summary */}

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm uppercase tracking-wider text-muted-foreground">

                Hospital Beds

              </p>

              <h2 className="mt-2 text-4xl font-black">

                {bedOccupancy.availableBeds}

              </h2>

              <p className="mt-1 text-muted-foreground">

                Beds Available

              </p>

            </div>

            <div className="rounded-2xl bg-primary/10 p-4">

              <BedDouble className="h-8 w-8 text-primary" />

            </div>

          </div>

        </div>

        <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm uppercase tracking-wider text-muted-foreground">

                ICU Beds

              </p>

              <h2 className="mt-2 text-4xl font-black">

                {icuOccupancy.availableBeds}

              </h2>

              <p className="mt-1 text-muted-foreground">

                ICU Available

              </p>

            </div>

            <div className="rounded-2xl bg-red-500/10 p-4">

              <HeartPulse className="h-8 w-8 text-red-500" />

            </div>

          </div>

        </div>

      </div>

      {/* Occupancy */}

      <div className="grid gap-6 xl:grid-cols-2">

        <OccupancyProgress
          title="Hospital Beds"
          total={bedOccupancy.totalBeds}
          occupied={bedOccupancy.occupiedBeds}
          available={bedOccupancy.availableBeds}
          percentage={bedOccupancy.occupancyPercentage}
        />

        <OccupancyProgress
          title="ICU Beds"
          total={icuOccupancy.totalBeds}
          occupied={icuOccupancy.occupiedBeds}
          available={icuOccupancy.availableBeds}
          percentage={icuOccupancy.occupancyPercentage}
        />

      </div>

    </div>

  );

}