import AmbulanceSummaryCard from "../components/AmbulanceSummaryCard";
import AmbulanceInfoCard from "../components/AmbulanceInfoCard";
import AmbulanceLocationCard from "../components/AmbulanceLocationCard";
import CurrentAssignmentCard from "../components/CurrentAssignmentCard";

import { useAmbulance } from "../hooks/useAmbulance";
import { useCurrentAssignment } from "@/features/assignment/hooks/useCurrentAssignment";
import { useLiveLocation } from "../hooks/useLiveLocation";

import AmbulanceDashboardSkeleton
from "../components/AmbulanceDashboardSkeleton";

import MissionPreviewCard
from "../components/MissionPreviewCard";

export default function DashboardPage() {

    useLiveLocation();

  const {
    data,
    isLoading,
    isError,
  } = useAmbulance();

  const {
    data: assignment,
    isLoading: assignmentLoading,
  } = useCurrentAssignment();

  const ambulance = data;

 if (isLoading || assignmentLoading) {

  return <AmbulanceDashboardSkeleton />;

}

  if (isError) {
    return (
      <div className="text-red-500">
        Failed to load ambulance.
      </div>
    );
  }

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">

          Ambulance Dashboard

        </h1>

        <p className="mt-2 text-muted-foreground">

          Real-time ambulance monitoring.

        </p>

      </div>

      <MissionPreviewCard
    assignment={assignment}
/>

      <AmbulanceSummaryCard
        ambulance={ambulance}
      />

      <div className="grid gap-6 xl:grid-cols-2">

        <AmbulanceInfoCard
          ambulance={ambulance}
        />

        <AmbulanceLocationCard
          ambulance={ambulance}
        />

      </div>

    </div>

  );

}