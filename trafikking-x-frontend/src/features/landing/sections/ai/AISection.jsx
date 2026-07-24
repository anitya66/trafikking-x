import SectionContainer from "@/shared/components/landing/SectionContainer";
import SectionHeading from "@/shared/components/landing/SectionHeading";

import AIFeatureCard from "./AIFeatureCard";
import AIFlow from "./AIFlow";

import { AI_FEATURES } from "./aiFeatures";

export default function AISection() {
  return (
    <SectionContainer>

      <SectionHeading
        badge="Artificial Intelligence"
        title="Powered By"
        highlight="Real-Time AI"
        description="Artificial Intelligence drives every decision, from severity prediction to dispatch optimization, enabling faster and smarter emergency response."
      />

      <AIFlow />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {AI_FEATURES.map((feature) => (

          <AIFeatureCard
            key={feature.id}
            feature={feature}
          />

        ))}

      </div>

    </SectionContainer>
  );
}