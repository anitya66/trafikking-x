import CurrentMissionHeader from "../components/CurrentMissionHeader";
import MissionDetailsCard from "../components/MissionDetailsCard";
import MissionQuickActions from "../components/MissionQuickActions";

import CurrentAssignmentCard from "@/features/ambulance/components/CurrentAssignmentCard";
import AmbulanceDashboardSkeleton from "@/features/ambulance/components/AmbulanceDashboardSkeleton";

import { useCurrentAssignment } from "@/features/assignment/hooks/useCurrentAssignment";

export default function CurrentMissionPage() {

  const {

    data: assignment,

    isLoading,

    isError,

  } = useCurrentAssignment();

  if (isLoading) {

  return <AmbulanceDashboardSkeleton />;

}
  if (isError) {

    return (

      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-10 text-center">

        Failed to load current mission.

      </div>

    );

  }

  if (!assignment) {

    return (

      <div className="space-y-8">

        <CurrentMissionHeader />

        <div className="rounded-2xl border border-dashed p-16 text-center">

          <h2 className="text-2xl font-bold">

            No Active Mission

          </h2>

          <p className="mt-2 text-muted-foreground">

            You don't have any active emergency assignment.

          </p>

        </div>

        <MissionQuickActions />

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <CurrentMissionHeader />

      <MissionDetailsCard
        assignment={assignment}
      />

      <CurrentAssignmentCard
        assignment={assignment}
      />

      <MissionQuickActions />

    </div>

  );

}