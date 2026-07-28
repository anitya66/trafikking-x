import {
  Truck,
  MapPinned,
  Activity,
  Navigation,
} from "lucide-react";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

  const handleEtaUpdate = useCallback((event) => {
    setTracking((previous) => {
      if (!previous) return previous;

      if (event.dispatchId !== previous.dispatchId) {
        return previous;
      }

      return {
        ...previous,
        etaMinutes: event.etaMinutes,
        remainingDistanceKm:
          event.remainingDistanceKm,
      };
    });
  }, []);

  useLiveEta(handleEtaUpdate);

  if (isLoading) {
    return (
      <Card className="group relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

        <CardContent className="flex h-72 flex-col items-center justify-center gap-4">

          <Truck className="h-12 w-12 animate-pulse text-primary" />

          <div className="text-center">

            <h3 className="text-lg font-semibold">
              Connecting To Live Tracking
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Fetching the latest responder location...
            </p>

          </div>

        </CardContent>

      </Card>
    );
  }

  if (isError || !tracking) {
    return (
      <Card>

        <CardContent className="flex h-72 flex-col items-center justify-center gap-4">

          <Truck className="h-12 w-12 text-muted-foreground" />

          <div className="text-center">

            <h3 className="text-lg font-semibold">
              No Active Emergency
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Live tracking will appear here once an emergency
              has been dispatched.
            </p>

          </div>

        </CardContent>

      </Card>
    );
  }

  return (
    <Card className="group relative overflow-hidden">

      {/* Hover Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardHeader className="relative border-b border-border">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <CardTitle className="flex items-center gap-3">

              <Truck className="h-6 w-6 text-primary" />

              Live Emergency Tracking

            </CardTitle>

            <p className="mt-2 text-sm text-muted-foreground">
              Your emergency response is being tracked in real time.
            </p>

          </div>

          <ETAChip eta={tracking.etaMinutes} />

        </div>

      </CardHeader>

      <CardContent className="space-y-8 p-6">

        {/* Status Grid */}

        <div className="grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-border bg-card/50 p-5">

            <div className="flex items-center gap-3">

              <Navigation className="h-5 w-5 text-primary" />

              <span className="text-sm font-medium text-muted-foreground">

                Remaining Distance

              </span>

            </div>

            <h3 className="mt-4 text-3xl font-black">

              {tracking.remainingDistanceKm?.toFixed(2)} km

            </h3>

          </div>

          <div className="rounded-2xl border border-border bg-card/50 p-5">

            <div className="flex items-center gap-3">

              <Activity className="h-5 w-5 text-primary" />

              <span className="text-sm font-medium text-muted-foreground">

                Current Status

              </span>

            </div>

            <div className="mt-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

              {tracking.status}

            </div>

          </div>

        </div>

        {/* Map Placeholder */}

        <div className="overflow-hidden rounded-3xl border border-border bg-card/40">

          <div className="flex items-center justify-between border-b border-border px-5 py-4">

            <div className="flex items-center gap-2">

              <MapPinned className="h-5 w-5 text-primary" />

              <span className="font-semibold">
                Live Route
              </span>

            </div>

            <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-500">

              LIVE

            </span>

          </div>

          <div className="flex h-48 items-center justify-center bg-[radial-gradient(circle_at_center,rgba(59,130,246,.15),transparent_70%)]">

            <Truck className="h-16 w-16 text-primary/60" />

          </div>

        </div>

        {/* Timeline */}

        <div>

          <h3 className="mb-5 text-lg font-semibold">

            Dispatch Timeline

          </h3>

          <DispatchTimeline
            timeline={tracking.timeline}
          />

        </div>

      </CardContent>

    </Card>
  );
}