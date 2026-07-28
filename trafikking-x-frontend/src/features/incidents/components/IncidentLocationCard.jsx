import { MapPin } from "lucide-react";

export default function IncidentLocationCard({
  incident,
}) {
  return (
    <div className="rounded-3xl border border-border bg-card/50 p-6">

      <div className="flex items-start gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">

          <MapPin className="h-6 w-6 text-primary" />

        </div>

        <div className="flex-1">

          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">

            Emergency Location

          </p>

          <h3 className="mt-2 text-lg font-semibold">

            {incident.address}

          </h3>

        </div>

      </div>

    </div>
  );
}