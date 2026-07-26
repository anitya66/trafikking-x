import BedCapacityCard from "../components/beds/BedCapacityCard";
import AIRecommendationCard from "../components/dashboard/AIRecommendationCard";

import { useHospitalDashboard } from "../hooks/useHospitalDashboard";

export default function BedCapacityPage() {

  const {

    data,

    isLoading,

    isError,

  } = useHospitalDashboard();

  if (isLoading) {

    return (

      <div className="flex h-60 items-center justify-center">

        Loading...

      </div>

    );

  }

  if (isError) {

    return (

      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-red-400">

        Failed to load bed capacity.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold">

          Bed Capacity

        </h1>

        <p className="mt-2 text-muted-foreground">

          Live hospital and ICU bed occupancy.

        </p>

      </div>

      <BedCapacityCard

        bedOccupancy={data.bedOccupancy}

        icuOccupancy={data.icuOccupancy}

      />

      <AIRecommendationCard />

    </div>

  );

}