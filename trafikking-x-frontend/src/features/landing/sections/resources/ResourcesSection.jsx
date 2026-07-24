import SectionContainer from "@/shared/components/landing/SectionContainer";
import SectionHeading from "@/shared/components/landing/SectionHeading";

import ResourceMap from "./ResourceMap";
import MovingUnitCard from "./MovingUnitCard";
import ETAWidget from "./ETAWidget";

export default function ResourcesSection() {
  return (
    <SectionContainer>

      <SectionHeading
        badge="Live Resource Coordination"
        title="Resources Are"
        highlight="On The Move"
        description="Once approved, TRAFIKKING X coordinates emergency responders in real time using intelligent routing and continuous tracking."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-2">

        <ResourceMap />

        <div className="space-y-6">

          <MovingUnitCard
            emoji="🚑"
            title="Ambulance A-12"
            status="Responding to Incident"
            eta="02:18"
          />

          <MovingUnitCard
            emoji="🚓"
            title="Police Unit P-07"
            status="Traffic Control"
            eta="03:05"
          />

          <ETAWidget />

        </div>

      </div>

    </SectionContainer>
  );
}