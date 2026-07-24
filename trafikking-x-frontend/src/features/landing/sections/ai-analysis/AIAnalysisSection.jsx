import SectionContainer from "@/shared/components/landing/SectionContainer";
import SectionHeading from "@/shared/components/landing/SectionHeading";

import AIAnalysisCard from "./AIAnalysisCard";

export default function AIAnalysisSection() {

  return (

    <SectionContainer>

      <SectionHeading
        badge="Artificial Intelligence"
        title="AI Starts"
        highlight="Thinking"
        description="Within seconds, TRAFIKKING X evaluates the emergency, analyzes nearby resources, predicts severity, and prepares an intelligent dispatch recommendation."
      />

      <AIAnalysisCard />

    </SectionContainer>

  );

}