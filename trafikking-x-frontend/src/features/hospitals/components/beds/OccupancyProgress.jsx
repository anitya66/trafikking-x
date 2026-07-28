import {
  BedDouble,
  HeartPulse,
  TrendingUp,
} from "lucide-react";

export default function OccupancyProgress({

  title,

  occupied,

  available,

  total,

  percentage,

}) {

  const progressColor =
    percentage >= 90
      ? "from-red-500 to-rose-400"
      : percentage >= 70
      ? "from-amber-500 to-orange-400"
      : "from-emerald-500 to-green-400";

  const Icon =
    title.toLowerCase().includes("icu")
      ? HeartPulse
      : BedDouble;

  return (

    <div className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">

      {/* Top Accent */}

      <div className="h-1 bg-gradient-to-r from-primary via-cyan-400 to-blue-500" />

      <div className="p-7">

        {/* Header */}

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">

              <Icon className="h-7 w-7 text-primary" />

            </div>

            <div>

              <h2 className="text-xl font-bold">

                {title}

              </h2>

              <p className="text-sm text-muted-foreground">

                Live occupancy monitoring

              </p>

            </div>

          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 px-5 py-3 text-center">

            <p className="text-xs uppercase tracking-wider text-muted-foreground">

              Occupancy

            </p>

            <h3 className="mt-1 text-3xl font-black text-primary">

              {percentage}%

            </h3>

          </div>

        </div>

        {/* Progress */}

        <div className="mt-8">

          <div className="mb-3 flex items-center justify-between">

            <span className="text-sm font-medium">

              Capacity Usage

            </span>

            <div className="flex items-center gap-2 text-sm font-semibold">

              <TrendingUp className="h-4 w-4 text-primary" />

              {occupied} / {total}

            </div>

          </div>

          <div className="h-4 overflow-hidden rounded-full bg-muted">

            <div
              className={`h-full rounded-full bg-gradient-to-r ${progressColor} transition-all duration-700`}
              style={{
                width: `${percentage}%`,
              }}
            />

          </div>

        </div>

        {/* Stats */}

        <div className="mt-8 grid grid-cols-3 gap-4">

          <div className="rounded-2xl border bg-background/40 p-4 text-center">

            <p className="text-xs uppercase tracking-wide text-muted-foreground">

              Total

            </p>

            <h4 className="mt-2 text-3xl font-black">

              {total}

            </h4>

          </div>

          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-4 text-center">

            <p className="text-xs uppercase tracking-wide text-muted-foreground">

              Occupied

            </p>

            <h4 className="mt-2 text-3xl font-black text-red-500">

              {occupied}

            </h4>

          </div>

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-center">

            <p className="text-xs uppercase tracking-wide text-muted-foreground">

              Available

            </p>

            <h4 className="mt-2 text-3xl font-black text-emerald-500">

              {available}

            </h4>

          </div>

        </div>

      </div>

    </div>

  );

}