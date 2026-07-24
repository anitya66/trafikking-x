import SectionContainer from "@/shared/components/landing/SectionContainer";
import SectionHeading from "@/shared/components/landing/SectionHeading";

import SuccessBadge from "./SuccessBadge";
import MissionCard from "./MissionCard";
import MissionStats from "./MissionStats";

export default function MissionSection() {
  return (
    <SectionContainer>

      <div className="text-center">

        <SuccessBadge />

      </div>

      <SectionHeading
        title="Every Second"
        highlight="Matters"
        description="TRAFIKKING X transforms emergency response into one intelligent, connected ecosystem where technology empowers responders to save more lives."
      />

      <MissionCard />

      <MissionStats />

    </SectionContainer>
  );
}