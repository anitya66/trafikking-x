import {
  Truck,
  MapPinned,
} from "lucide-react";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { Card, CardContent } from "@/components/ui/card";

import ETAChip from "@/features/tracking/components/ETAChip";
import DispatchTimeline from "@/features/tracking/components/DispatchTimeline";
import { useLiveEta } from "@/features/tracking/hooks/useLiveEta";

import { useCitizenTracking } from "../hooks/useCitizenTracking";

export default function CitizenLiveTrackingCard() {

  const {
    data,
    isLoading,
    isError,
  } = useCitizenTracking();

  const [tracking, setTracking] = useState(null);

  useEffect(() => {

    if (data) {

      setTracking(data);

    }

  }, [data]);

  const handleEtaUpdate =
  useCallback((event) => {

    setTracking((previous) => {

      if (!previous) {
        return previous;
      }

      if (event.dispatchId !== previous.dispatchId) {
        return previous;
      }

      return {

        ...previous,

        etaMinutes:
          event.etaMinutes,

        remainingDistanceKm:
          event.remainingDistanceKm,

      };

    });

  }, []);

  useLiveEta(handleEtaUpdate);

  if (isLoading) {

    return (

      <Card>

        <CardContent className="flex h-60 items-center justify-center">

          Loading live tracking...

        </CardContent>

      </Card>

    );

  }

  if (isError || !tracking) {

    return (

      <Card>

        <CardContent className="flex h-60 items-center justify-center">

          No active emergency.

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

              Live Emergency Tracking

            </h2>

            <p className="text-sm text-muted-foreground">

              Your ambulance is on the way.

            </p>

          </div>

          <ETAChip
            eta={tracking.etaMinutes}
          />

        </div>

        <div className="flex items-center gap-2 text-sm">

          <MapPinned className="h-4 w-4 text-primary" />

          Remaining Distance

          <strong>

            {tracking.remainingDistanceKm?.toFixed(2)} km

          </strong>

        </div>

        <div>

          <p className="mb-3 text-sm font-semibold">

            Current Status

          </p>

          <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">

            {tracking.status}

          </div>

        </div>

        <div>

          <h3 className="mb-4 font-semibold">

            Timeline

          </h3>

          <DispatchTimeline
            timeline={tracking.timeline}
          />

        </div>

      </CardContent>

    </Card>

  );

}