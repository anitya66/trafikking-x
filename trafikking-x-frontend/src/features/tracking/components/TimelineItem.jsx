import { CheckCircle2 } from "lucide-react";

export default function TimelineItem({
  title,
  description,
  timestamp,
  isLast = false,
}) {

  return (

    <div className="flex gap-4">

      <div className="flex flex-col items-center">

        <CheckCircle2 className="h-5 w-5 text-primary" />

        {!isLast && (

          <div className="mt-1 h-full w-px bg-border" />

        )}

      </div>

      <div className="pb-6">

        <h4 className="font-medium">

          {title}

        </h4>

        <p className="text-sm text-muted-foreground">

          {description}

        </p>

        <p className="mt-1 text-xs text-muted-foreground">

          {timestamp
            ? new Date(timestamp).toLocaleString()
            : "-"}

        </p>

      </div>

    </div>

  );

}