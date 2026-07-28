import {
  MapPin,
  Navigation,
  TriangleAlert,
} from "lucide-react";

import SeverityBadge from "@/shared/components/SeverityBadge";
import StatusBadge from "@/shared/components/StatusBadge";

export default function MapPopup({

  incident,

}) {

  return (

    <div className="min-w-[280px] space-y-5">

      {/* Header */}

      <div className="flex items-start gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10">

          <TriangleAlert className="h-6 w-6 text-red-500" />

        </div>

        <div className="flex-1">

          <h3 className="text-lg font-bold">

            {incident.title?.replaceAll("_", " ")}

          </h3>

          <p className="mt-1 text-xs text-muted-foreground">

            Incident #{incident.id}

          </p>

        </div>

      </div>

      {/* Status */}

      <div className="flex flex-wrap gap-2">

        <SeverityBadge

          severity={incident.severity}

        />

        <StatusBadge

          status={incident.status}

        />

      </div>

      {/* Information */}

      <div className="space-y-3 rounded-2xl bg-muted/40 p-4">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <TriangleAlert className="h-4 w-4 text-primary" />

            <span className="text-sm text-muted-foreground">

              Type

            </span>

          </div>

          <span className="text-sm font-medium">

            {incident.type?.replaceAll("_", " ")}

          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <MapPin className="h-4 w-4 text-primary" />

            <span className="text-sm text-muted-foreground">

              Latitude

            </span>

          </div>

          <span className="font-medium">

            {Number(incident.latitude).toFixed(5)}

          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <Navigation className="h-4 w-4 text-primary" />

            <span className="text-sm text-muted-foreground">

              Longitude

            </span>

          </div>

          <span className="font-medium">

            {Number(incident.longitude).toFixed(5)}

          </span>

        </div>

      </div>

      {/* Footer */}

      <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">

        <p className="text-center text-xs font-medium text-primary">

          Live Incident Monitoring

        </p>

      </div>

    </div>

  );

}