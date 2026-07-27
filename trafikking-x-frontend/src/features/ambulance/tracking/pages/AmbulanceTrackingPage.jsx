import EmergencyMap from "@/features/map/components/EmergencyMap";
import TrackingPanel from "@/features/tracking/components/TrackingPanel";

import { useCurrentAssignment } from "@/features/assignment/hooks/useCurrentAssignment";
import { useLiveLocation } from "@/features/ambulance/hooks/useLiveLocation";

export default function AmbulanceTrackingPage() {

  useLiveLocation();

  const {

    data: assignment,

    isLoading,

    isError,

  } = useCurrentAssignment();

  if (isLoading) {

    return (

      <div className="flex h-[500px] items-center justify-center">

        Loading live tracking...

      </div>

    );

  }

 if (isError) {

  return (

    <div className="flex h-[500px] items-center justify-center text-red-500">

      Unable to load tracking information.

    </div>

  );

}

if (!assignment) {

  return (

    <div className="flex h-[500px] flex-col items-center justify-center">

      <h2 className="text-2xl font-bold">

        No Active Mission

      </h2>

      <p className="mt-2 text-muted-foreground">

        Live tracking will appear automatically once a dispatcher assigns
        an emergency to your ambulance.

      </p>

    </div>

  );

}

  if (!assignment) {

    return (

      <div className="flex h-[500px] items-center justify-center">

        No active mission.

      </div>

    );

  }

  return (

    <div className="space-y-6">

      <div>

        <h1 className="text-4xl font-bold">

          Live Tracking

        </h1>

        <p className="mt-2 text-muted-foreground">

          Monitor your live emergency response.

        </p>

      </div>

      <EmergencyMap />

      <TrackingPanel

        dispatchId={assignment.dispatchId}

      />

    </div>

  );

}