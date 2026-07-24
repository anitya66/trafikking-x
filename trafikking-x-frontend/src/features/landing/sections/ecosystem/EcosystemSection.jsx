import SectionContainer from "@/shared/components/landing/SectionContainer";
import SectionHeading from "@/shared/components/landing/SectionHeading";

import ModuleCard from "./ModuleCard";
import ConnectionLine from "./ConnectionLine";

import { MODULES } from "./modules";

export default function EcosystemSection() {
  return (
    <SectionContainer id="features">

      <SectionHeading
        badge="Complete Emergency Ecosystem"
        title="One Platform."
        highlight="Every Responder."
        description="TRAFIKKING X unifies every stakeholder involved in emergency response into a single intelligent platform."
      />

      <ConnectionLine />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {MODULES.map((module) => (

          <ModuleCard
            key={module.id}
            module={module}
          />

        ))}

      </div>

    </SectionContainer>
  );
}