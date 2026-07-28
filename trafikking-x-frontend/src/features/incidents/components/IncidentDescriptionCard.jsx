import { FileText } from "lucide-react";

export default function IncidentDescriptionCard({
  incident,
}) {
  return (
    <div className="rounded-3xl border border-border bg-card/50 p-6">

      <div className="flex items-start gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">

          <FileText className="h-6 w-6 text-primary" />

        </div>

        <div className="flex-1">

          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">

            Incident Description

          </p>

          <p className="mt-3 leading-7 text-muted-foreground">

            {incident.description}

          </p>

        </div>

      </div>

    </div>
  );
}