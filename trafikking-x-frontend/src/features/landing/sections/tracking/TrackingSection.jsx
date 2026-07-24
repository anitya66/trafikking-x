import SectionContainer from "@/shared/components/landing/SectionContainer";
import SectionHeading from "@/shared/components/landing/SectionHeading";

import TrackingPhone from "./TrackingPhone";
import StatusTimeline from "./StatusTimeline";
import ResponderCard from "./ResponderCard";

export default function TrackingSection() {
  return (
    <SectionContainer>

      <SectionHeading
        badge="Citizen Experience"
        title="Track The Response"
        highlight="In Real Time"
        description="Citizens stay informed throughout the emergency with live tracking, responder updates, estimated arrival times, and AI-powered status notifications."
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">

        <TrackingPhone />

        <div className="space-y-6">

          <ResponderCard
            emoji="🚑"
            title="Ambulance A-12"
            subtitle="2 Minutes Away"
          />

          <ResponderCard
            emoji="🏥"
            title="City Trauma Center"
            subtitle="Emergency Team Ready"
          />

          <ResponderCard
            emoji="🚓"
            title="Police Unit P-07"
            subtitle="Managing Traffic"
          />

          <StatusTimeline />

        </div>

      </div>

    </SectionContainer>
  );
}