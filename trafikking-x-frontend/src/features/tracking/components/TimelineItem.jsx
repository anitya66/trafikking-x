import {
  CheckCircle2,
  Clock3,
} from "lucide-react";

export default function TimelineItem({

  title,

  description,

  timestamp,

  isLast = false,

}) {

  return (

    <div className="flex gap-4">

      {/* Timeline Indicator */}

      <div className="flex flex-col items-center">

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">

          <CheckCircle2 className="h-5 w-5 text-primary" />

        </div>

        {!isLast && (

          <div className="mt-2 h-full w-px bg-border" />

        )}

      </div>

      {/* Content */}

      <div className="flex-1 rounded-2xl border bg-card/50 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5">

        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

          <div className="space-y-1">

            <h4 className="font-semibold">

              {title}

            </h4>

            <p className="text-sm leading-6 text-muted-foreground">

              {description || "No additional details available."}

            </p>

          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground whitespace-nowrap">

            <Clock3 className="h-3.5 w-3.5" />

            {timestamp
              ? new Date(timestamp).toLocaleString()
              : "-"}

          </div>

        </div>

      </div>

    </div>

  );

}