import SectionContainer from "@/shared/components/landing/SectionContainer";
import SectionHeading from "@/shared/components/landing/SectionHeading";

import EmergencyCard from "./EmergencyCard";

export default function EmergencySection() {
  return (
    <SectionContainer id="workflow">

      <SectionHeading
        badge="Emergency Response Journey"
        title="Every Emergency Begins With"
        highlight="One Critical Moment"
        description="The first few seconds determine everything. TRAFIKKING X immediately captures the incident and prepares the AI engine for intelligent emergency response."
      />

      <EmergencyCard />

    </SectionContainer>
  );
}