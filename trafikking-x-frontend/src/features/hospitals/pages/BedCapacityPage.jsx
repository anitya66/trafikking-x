import {
  BedDouble,
  AlertTriangle,
  Loader2,
} from "lucide-react";

import BedCapacityCard
  from "../components/beds/BedCapacityCard";

import AIRecommendationCard
  from "../components/dashboard/AIRecommendationCard";

import { useHospitalDashboard }
  from "../hooks/useHospitalDashboard";

export default function BedCapacityPage() {

  const {
    data,
    isLoading,
    isError,
  } = useHospitalDashboard();

  if (isLoading) {

    return (

      <div className="flex justify-center">

        <div className="w-full rounded-3xl border bg-card p-20">

          <div className="text-center">

            <Loader2 className="mx-auto h-10 w-10 animate-spin text-primary" />

            <h2 className="mt-6 text-2xl font-bold">

              Loading Bed Capacity

            </h2>

            <p className="mt-2 text-muted-foreground">

              Fetching live hospital occupancy...

            </p>

          </div>

        </div>

      </div>

    );

  }

  if (isError) {

    return (

      <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-10">

        <div className="flex items-start gap-4">

          <div className="rounded-2xl bg-red-500/10 p-3">

            <AlertTriangle className="h-7 w-7 text-red-500" />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-red-500">

              Failed To Load Bed Capacity

            </h2>

            <p className="mt-2 text-muted-foreground">

              Unable to retrieve current bed occupancy.
              Please refresh and try again.

            </p>

          </div>

        </div>

      </div>

    );

  }

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-primary/10 p-4">

            <BedDouble className="h-7 w-7 text-primary" />

          </div>

          <div>

            <h1 className="text-3xl font-black tracking-tight lg:text-5xl">

              Bed Capacity

            </h1>

            <p className="mt-2 max-w-2xl text-muted-foreground">

              Monitor live hospital bed availability,
              ICU utilization and AI capacity recommendations.

            </p>

          </div>

        </div>

        <div className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-4 text-center">

          <p className="text-xs uppercase tracking-widest text-muted-foreground">

            Live Monitoring

          </p>

          <h2 className="mt-1 text-3xl font-black text-primary">

            24×7

          </h2>

        </div>

      </div>

      {/* Capacity */}

      <BedCapacityCard
        bedOccupancy={data?.bedOccupancy}
        icuOccupancy={data?.icuOccupancy}
      />

      {/* AI */}

      <AIRecommendationCard
        recommendation={data?.aiRecommendation}
      />

    </div>

  );

}