import { formatDistanceToNow } from "date-fns";

import {
  Clock3,
  ShieldAlert,
} from "lucide-react";

export default function IncidentMetaCard({
  incident,
}) {

  return (
    <div className="grid gap-4 md:grid-cols-2">

      <div className="rounded-xl border p-5">

        <div className="flex items-center gap-3">

          <ShieldAlert className="h-5 w-5 text-primary" />

          <div>

            <p className="text-sm text-muted-foreground">
              Severity
            </p>

            <p className="mt-1 font-semibold">
              {incident.severity}
            </p>

          </div>

        </div>

      </div>

      <div className="rounded-xl border p-5">

        <div className="flex items-center gap-3">

          <Clock3 className="h-5 w-5 text-primary" />

          <div>

            <p className="text-sm text-muted-foreground">
              Reported
            </p>

            <p className="mt-1">

              {incident.reportedAt &&
                formatDistanceToNow(
                  new Date(incident.reportedAt),
                  {
                    addSuffix: true,
                  }
                )}

            </p>

          </div>

        </div>

      </div>

    </div>
  );

}