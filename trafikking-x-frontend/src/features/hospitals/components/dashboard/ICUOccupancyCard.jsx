import {
  HeartPulse,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ICUOccupancyCard({
  occupancy,
}) {

  const percentage =
    occupancy?.occupancyPercentage ?? 0;

  return (

    <Card className="group relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <CardHeader className="relative pb-5">

        <CardTitle className="flex items-center gap-3">

          <div className="rounded-xl bg-red-500/10 p-2">

            <HeartPulse className="h-5 w-5 text-red-500" />

          </div>

          <div>

            <h2 className="text-lg font-bold">

              ICU Occupancy

            </h2>

            <p className="text-sm font-normal text-muted-foreground">

              Critical care capacity

            </p>

          </div>

        </CardTitle>

      </CardHeader>

      <CardContent className="relative space-y-6">

        {/* Progress */}

        <div>

          <div className="mb-3 flex items-center justify-between">

            <span className="text-sm text-muted-foreground">

              Occupancy

            </span>

            <span className="text-xl font-black text-red-500">

              {percentage}%

            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-muted">

            <div
              className="h-full rounded-full bg-gradient-to-r from-red-500 to-rose-400 transition-all duration-700"
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

            <h3 className="mt-2 text-2xl font-bold text-red-500">

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

        {/* Status */}

        <div
          className={`rounded-2xl border p-4 ${
            percentage >= 90
              ? "border-red-500/20 bg-red-500/5"
              : "border-emerald-500/20 bg-emerald-500/5"
          }`}
        >

          <div className="flex items-center gap-3">

            {percentage >= 90 ? (

              <AlertTriangle className="h-5 w-5 text-red-500" />

            ) : (

              <CheckCircle2 className="h-5 w-5 text-emerald-500" />

            )}

            <div>

              <p className="font-semibold">

                {percentage >= 90
                  ? "Critical ICU Load"
                  : "ICU Capacity Available"}

              </p>

              <p className="text-sm text-muted-foreground">

                {percentage >= 90
                  ? "ICU occupancy is critically high. Consider redirecting severe cases."
                  : "ICU has sufficient capacity for critical emergencies."}

              </p>

            </div>

          </div>

        </div>

      </CardContent>

    </Card>

  );

}