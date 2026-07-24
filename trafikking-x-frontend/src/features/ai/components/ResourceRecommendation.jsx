import {
  MapPin,
  Clock3,
} from "lucide-react";

import ConfidenceBadge from "./ConfidenceBadge";

export default function ResourceRecommendation({

  icon,

  title,

  name,

  distance,

  eta,

  confidence,

  reason,

}) {

  return (

    <div className="rounded-xl border border-border bg-background/40 p-5">

      <div className="mb-4 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">

            {icon}

          </div>

          <div>

            <p className="text-sm text-muted-foreground">
              {title}
            </p>

            <h3 className="font-semibold">
              {name ?? "-"}
            </h3>

          </div>

        </div>

        <ConfidenceBadge
          confidence={confidence ?? 0}
        />

      </div>

      <div className="flex items-center gap-6 text-sm text-muted-foreground">

        <div className="flex items-center gap-2">

          <MapPin className="h-4 w-4" />

          <span>

            {distance ?? "-"} km

          </span>

        </div>

        <div className="flex items-center gap-2">

          <Clock3 className="h-4 w-4" />

          <span>

            {eta ?? "-"} min

          </span>

        </div>

      </div>

      <div className="mt-4 rounded-lg bg-primary/5 p-3">

        <p className="text-xs uppercase tracking-wide text-primary">

          AI Reason

        </p>

        <p className="mt-1 text-sm text-muted-foreground">

          {reason ?? "No recommendation available."}

        </p>

      </div>

    </div>

  );

}