import {
  Activity,
  Ambulance,
  Building2,
  Shield,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import StatusBadge from "@/shared/components/StatusBadge";

export default function DispatchCard({ dispatch }) {
  return (
    <Card className="transition-all duration-300 hover:border-primary/30 hover:shadow-lg">

      <CardContent className="space-y-5 p-5">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>
            <h3 className="text-base font-semibold">
              Dispatch #{dispatch.id}
            </h3>

            <p className="text-xs text-muted-foreground">
              Incident #{dispatch.incidentId}
            </p>
          </div>

          <StatusBadge status={dispatch.status} />

        </div>

        {/* Priority */}

        <div className="flex items-center justify-between rounded-lg bg-muted/40 px-3 py-2">

          <span className="text-sm text-muted-foreground">
            Priority
          </span>

          <span className="font-medium">
            {dispatch.priority}
          </span>

        </div>

        {/* Resources */}

        <div className="space-y-3">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

              <Building2 className="h-4 w-4 text-primary" />

              <span className="text-sm">
                Hospital
              </span>

            </div>

            <span className="font-medium">
              {dispatch.hospitalId ?? "-"}
            </span>

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

              <Ambulance className="h-4 w-4 text-primary" />

              <span className="text-sm">
                Ambulance
              </span>

            </div>

            <span className="font-medium">
              {dispatch.ambulanceId ?? "-"}
            </span>

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

              <Shield className="h-4 w-4 text-primary" />

              <span className="text-sm">
                Police
              </span>

            </div>

            <span className="font-medium">
              {dispatch.policeStationId ?? "-"}
            </span>

          </div>

        </div>

        {/* Footer */}

        <div className="flex items-center gap-2 border-t pt-3 text-xs text-muted-foreground">

          <Activity className="h-4 w-4 text-green-500" />

          Live Dispatch

        </div>

      </CardContent>

    </Card>
  );
}