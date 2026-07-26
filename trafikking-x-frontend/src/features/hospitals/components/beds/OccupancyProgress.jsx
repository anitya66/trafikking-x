export default function OccupancyProgress({

  title,

  occupied,

  available,

  total,

  percentage,

}) {

  return (

    <div className="space-y-4 rounded-2xl border bg-card p-6">

      <div className="flex items-center justify-between">

        <h3 className="text-lg font-semibold">

          {title}

        </h3>

        <span className="text-2xl font-bold text-primary">

          {percentage}%

        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-muted">

        <div
          className="h-full rounded-full bg-primary transition-all duration-700"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <div className="grid grid-cols-3 gap-4">

        <div>

          <p className="text-sm text-muted-foreground">

            Total

          </p>

          <p className="text-xl font-bold">

            {total}

          </p>

        </div>

        <div>

          <p className="text-sm text-muted-foreground">

            Occupied

          </p>

          <p className="text-xl font-bold text-red-500">

            {occupied}

          </p>

        </div>

        <div>

          <p className="text-sm text-muted-foreground">

            Available

          </p>

          <p className="text-xl font-bold text-emerald-500">

            {available}

          </p>

        </div>

      </div>

    </div>

  );

}