import {
  Truck,
  MapPinned,
  Activity,
  Route,
} from "lucide-react";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import ETAChip from "./ETAChip";
import DispatchTimeline from "./DispatchTimeline";

import { useTracking } from "../hooks/useTracking";
import { useLiveEta } from "../hooks/useLiveEta";

export default function TrackingPanel({

  dispatchId,

}) {

  const {

    data,

    isLoading,

    isError,

  } = useTracking(dispatchId);

  const [liveEta, setLiveEta] =
    useState(null);

  useEffect(() => {

    if (data) {

      setLiveEta(data);

    }

  }, [data]);

  const handleEtaUpdate =
    useCallback((event) => {

      if (event.dispatchId !== dispatchId) {

        return;

      }

      setLiveEta((previous) => ({

        ...previous,

        etaMinutes:
          event.etaMinutes,

        remainingDistanceKm:
          event.remainingDistanceKm,

      }));

    }, [dispatchId]);

  useLiveEta(handleEtaUpdate);

  if (!dispatchId) {

    return (

      <Card className="rounded-3xl">

        <CardContent className="flex min-h-[260px] flex-col items-center justify-center p-8 text-center">

          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10">

            <Truck className="h-10 w-10 text-primary" />

          </div>

          <h3 className="text-xl font-semibold">

            No Dispatch Selected

          </h3>

          <p className="mt-2 max-w-sm text-muted-foreground">

            Select a dispatch from the queue to
            monitor its live progress.

          </p>

        </CardContent>

      </Card>

    );

  }

  if (isLoading) {

    return (

      <Card className="rounded-3xl">

        <CardContent className="flex min-h-[260px] items-center justify-center">

          Loading live tracking...

        </CardContent>

      </Card>

    );

  }

  if (isError) {

    return (

      <Card className="rounded-3xl">

        <CardContent className="flex min-h-[260px] items-center justify-center text-red-500">

          Failed to load tracking information.

        </CardContent>

      </Card>

    );

  }

  return (

    <Card className="rounded-3xl">

      <CardContent className="space-y-8 p-6 lg:p-8">

        {/* Header */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10">

              <Truck className="h-8 w-8 text-primary" />

            </div>

            <div>

              <h2 className="text-2xl font-bold">

                Live Dispatch Tracking

              </h2>

              <p className="mt-1 text-muted-foreground">

                Monitor ambulance movement in real time.

              </p>

            </div>

          </div>

          <ETAChip
            eta={liveEta?.etaMinutes}
          />

        </div>

        {/* Live Stats */}

        <div className="grid gap-4 md:grid-cols-2">

          <div className="rounded-2xl border p-5">

            <div className="mb-3 flex items-center gap-2">

              <MapPinned className="h-5 w-5 text-primary" />

              <span className="text-sm text-muted-foreground">

                Remaining Distance

              </span>

            </div>

            <p className="text-2xl font-bold">

              {liveEta?.remainingDistanceKm?.toFixed(2) ??
                "--"}

              <span className="ml-2 text-base font-normal text-muted-foreground">

                km

              </span>

            </p>

          </div>

          <div className="rounded-2xl border p-5">

            <div className="mb-3 flex items-center gap-2">

              <Activity className="h-5 w-5 text-primary" />

              <span className="text-sm text-muted-foreground">

                Current Status

              </span>

            </div>

            <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

              {data.currentStatus}

            </div>

          </div>

        </div>

        {/* Timeline */}

        <div className="space-y-5">

          <div className="flex items-center gap-3">

            <Route className="h-6 w-6 text-primary" />

            <div>

              <h3 className="text-xl font-semibold">

                Dispatch Timeline

              </h3>

              <p className="text-sm text-muted-foreground">

                Chronological tracking events.

              </p>

            </div>

          </div>

          <DispatchTimeline
            timeline={data.timeline}
          />

        </div>

      </CardContent>

    </Card>

  );

}