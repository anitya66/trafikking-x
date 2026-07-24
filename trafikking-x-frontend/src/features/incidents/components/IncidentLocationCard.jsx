import { MapPin } from "lucide-react";

export default function IncidentLocationCard({
  incident,
}) {

  return (
    <div className="rounded-xl border p-5">

      <div className="flex items-center gap-3">

        <MapPin className="h-5 w-5 text-primary" />

        <div>

          <p className="text-sm text-muted-foreground">
            Address
          </p>

          <p className="mt-1">
            {incident.address}
          </p>

        </div>

      </div>

    </div>
  );

}