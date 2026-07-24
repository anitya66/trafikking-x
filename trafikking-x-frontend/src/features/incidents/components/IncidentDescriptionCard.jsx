import { FileText } from "lucide-react";

export default function IncidentDescriptionCard({
  incident,
}) {

  return (
    <div className="rounded-xl border p-5">

      <div className="flex items-center gap-3">

        <FileText className="h-5 w-5 text-primary" />

        <div>

          <p className="text-sm text-muted-foreground">
            Description
          </p>

          <p className="mt-1">
            {incident.description}
          </p>

        </div>

      </div>

    </div>
  );

}