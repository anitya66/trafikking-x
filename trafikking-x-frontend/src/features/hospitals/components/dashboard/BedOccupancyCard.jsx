import {
  BedDouble,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BedOccupancyCard({
  occupancy,
}) {
  const percentage =
    occupancy?.occupancyPercentage ?? 0;

  return (
    <Card className="group relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <CardHeader className="relative pb-5">

        <CardTitle className="flex items-center gap-3">

          <div className="rounded-xl bg-blue-500/10 p-2">

            <BedDouble className="h-5 w-5 text-blue-500" />

          </div>

          <div>

            <h2 className="text-lg font-bold">

              Bed Occupancy

            </h2>

            <p className="text-sm font-normal text-muted-foreground">

              Live hospital capacity

            </p>

          </div>

        </CardTitle>

      </CardHeader>

      <CardContent className="relative space-y-6">

        {/* Percentage */}

        <div>

          <div className="mb-3 flex items-center justify-between">

            <span className="text-sm text-muted-foreground">

              Occupancy

            </span>

            <span className="text-xl font-black text-primary">

              {percentage}%

            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-muted">

            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700"
              style={{
                width: `${percentage}%`,
              }}
            />

          </div>

        </div>

        {/* Statistics */}

        <div className="grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border bg-card/40 p-4">

            <p className="text-xs uppercase tracking-wide text-muted-foreground">

              Total

            </p>

            <h3 className="mt-2 text-2xl font-bold">

              {occupancy?.totalBeds ?? 0}

            </h3>

          </div>

          <div className="rounded-2xl border bg-card/40 p-4">

            <p className="text-xs uppercase tracking-wide text-muted-foreground">

              Occupied

            </p>

            <h3 className="mt-2 text-2xl font-bold text-orange-500">

              {occupancy?.occupiedBeds ?? 0}

            </h3>

          </div>

          <div className="rounded-2xl border bg-card/40 p-4">

            <p className="text-xs uppercase tracking-wide text-muted-foreground">

              Available

            </p>

            <h3 className="mt-2 text-2xl font-bold text-emerald-500">

              {occupancy?.availableBeds ?? 0}

            </h3>

          </div>

        </div>

        {/* Capacity Status */}

        <div
          className={`rounded-2xl border p-4 ${
            percentage >= 85
              ? "border-red-500/20 bg-red-500/5"
              : "border-emerald-500/20 bg-emerald-500/5"
          }`}
        >

          <div className="flex items-center gap-3">

            {percentage >= 85 ? (

              <AlertTriangle className="h-5 w-5 text-red-500" />

            ) : (

              <CheckCircle2 className="h-5 w-5 text-emerald-500" />

            )}

            <div>

              <p className="font-semibold">

                {percentage >= 85
                  ? "High Occupancy"
                  : "Healthy Capacity"}

              </p>

              <p className="text-sm text-muted-foreground">

                {percentage >= 85
                  ? "Hospital is nearing full capacity."
                  : "Beds are available for incoming emergencies."}

              </p>

            </div>

          </div>

        </div>

      </CardContent>

    </Card>
  );
}