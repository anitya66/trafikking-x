import SectionContainer from "@/shared/components/landing/SectionContainer";
import SectionHeading from "@/shared/components/landing/SectionHeading";

import TechNode from "./TechNode";
import TechConnection from "./TechConnection";

import { TECH_STACK } from "./techStack";

export default function TechnologySection() {

  return (

    <SectionContainer>

      <SectionHeading
        badge="Modern Architecture"
        title="Built Using"
        highlight="Production Technologies"
        description="TRAFIKKING X is engineered with a scalable, secure, and real-time technology stack suitable for modern emergency response systems."
      />

      <div className="mx-auto mt-20 max-w-md">

        {TECH_STACK.map((tech, index) => (

          <div key={tech.id}>

            <TechNode tech={tech} />

            {index !== TECH_STACK.length - 1 && (
              <TechConnection />
            )}

          </div>

        ))}

      </div>

    </SectionContainer>

  );

}