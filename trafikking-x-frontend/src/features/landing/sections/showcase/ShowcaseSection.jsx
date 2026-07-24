import SectionContainer from "@/shared/components/landing/SectionContainer";
import SectionHeading from "@/shared/components/landing/SectionHeading";

import DispatcherPreview from "./DispatcherPreview";
import CitizenPreview from "./CitizenPreview";
import AdminPreview from "./AdminPreview";

export default function ShowcaseSection() {
  return (
    <SectionContainer>

      <SectionHeading
        badge="Product Showcase"
        title="Built For"
        highlight="Every Role"
        description="TRAFIKKING X delivers dedicated dashboards for every stakeholder while maintaining a unified real-time emergency ecosystem."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">

        <DispatcherPreview />

        <CitizenPreview />

        <AdminPreview />

      </div>

    </SectionContainer>
  );
}