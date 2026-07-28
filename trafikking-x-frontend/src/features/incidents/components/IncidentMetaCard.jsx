import { formatDistanceToNow } from "date-fns";
import {
  Clock3,
  ShieldAlert,
} from "lucide-react";

export default function IncidentMetaCard({
  incident,
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">

      <div className="rounded-3xl border border-border bg-card/50 p-6">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">

            <ShieldAlert className="h-6 w-6 text-primary" />

          </div>

          <div>

            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">

              Severity

            </p>

            <h3 className="mt-2 text-xl font-bold">

              {incident.severity}

            </h3>

          </div>

        </div>

      </div>

      <div className="rounded-3xl border border-border bg-card/50 p-6">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">

            <Clock3 className="h-6 w-6 text-primary" />

          </div>

          <div>

            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">

              Reported

            </p>

            <h3 className="mt-2 text-lg font-semibold">

              {incident.reportedAt &&
                formatDistanceToNow(
                  new Date(incident.reportedAt),
                  {
                    addSuffix: true,
                  }
                )}

            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}