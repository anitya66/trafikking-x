import {
  Truck,
  MapPinned,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import ETAChip from "./ETAChip";
import DispatchTimeline from "./DispatchTimeline";

import { useTracking } from "../hooks/useTracking";

export default function TrackingPanel({
  dispatchId,
}) {

  const {
    data,
    isLoading,
    isError,
  } = useTracking(dispatchId);

  if (!dispatchId) {

    return (

      <Card>

        <CardContent className="flex h-[220px] items-center justify-center">

          Select a dispatch to view tracking.

        </CardContent>

      </Card>

    );

  }

  if (isLoading) {

    return (

      <Card>

        <CardContent className="flex h-[220px] items-center justify-center">

          Loading tracking...

        </CardContent>

      </Card>

    );

  }

  if (isError) {

    return (

      <Card>

        <CardContent className="flex h-[220px] items-center justify-center text-red-500">

          Failed to load tracking.

        </CardContent>

      </Card>

    );

  }

  return (

    <Card>

      <CardContent className="space-y-6 p-6">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="flex items-center gap-2 text-xl font-bold">

              <Truck className="h-6 w-6 text-primary" />

              Live Dispatch Tracking

            </h2>

            <p className="text-sm text-muted-foreground">

              Current dispatch progress

            </p>

          </div>

          <ETAChip
            eta={data.etaMinutes}
          />

        </div>

        <div className="flex items-center gap-2 text-sm">

          <MapPinned className="h-4 w-4 text-primary" />

          Remaining Distance:

          <strong>

            {data.remainingDistanceKm?.toFixed(2)} km

          </strong>

        </div>

        <div>

          <p className="mb-3 text-sm font-semibold">

            Current Status

          </p>

          <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">

            {data.currentStatus}

          </div>

        </div>

        <div>

          <h3 className="mb-4 font-semibold">

            Timeline

          </h3>

          <DispatchTimeline
            timeline={data.timeline}
          />

        </div>

      </CardContent>

    </Card>

  );

}