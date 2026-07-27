import CurrentAssignmentCard
from "../components/CurrentAssignmentCard";

import {
  useCurrentAssignment,
} from "@/features/assignment/hooks/useCurrentAssignment";

import AssignmentSkeleton
from "../components/AssignmentSkeleton";

export default function CurrentMissionPage() {

  const {

    data,

    isLoading,

    isError,

  } = useCurrentAssignment();

  if (isLoading) {

    return <AssignmentSkeleton />;

  }

  if (isError) {

    return (

      <div className="rounded-3xl border p-8">

        Failed to load assignment.

      </div>

    );

  }

  return (

    <CurrentAssignmentCard

      assignment={data}

    />

  );

}