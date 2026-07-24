import Navbar from "../components/Navbar";

import HeroSection from "../components/hero/HeroSection";

import EmergencySection from "../sections/emergency/EmergencySection";
import AIAnalysisSection from "../sections/ai-analysis/AIAnalysisSection";
import DispatcherSection from "../sections/dispatcher/DispatcherSection";
import ResourcesSection from "../sections/resources/ResourcesSection";
import TrackingSection from "../sections/tracking/TrackingSection";
import MissionSection from "../sections/mission/MissionSection";

import EcosystemSection from "../sections/ecosystem/EcosystemSection";
import ShowcaseSection from "../sections/showcase/ShowcaseSection";

import AISection from "../sections/ai/AISection";
import TechnologySection from "../sections/technology/TechnologySection";

import CTASection from "../sections/cta/CTASection";
import FooterSection from "../sections/footer/FooterSection";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#060816] text-white">

      <Navbar />

      <main>

        {/* HOME */}
        <section id="home">
          <HeroSection />
        </section>

        {/* WORKFLOW */}
        <section id="workflow">

          <EmergencySection />

          <AIAnalysisSection />

          <DispatcherSection />

          <ResourcesSection />

          <TrackingSection />

          <MissionSection />

        </section>

        {/* FEATURES */}
        <section id="features">

          <EcosystemSection />

          <ShowcaseSection />

        </section>

        {/* ABOUT */}
        <section id="about">

          <AISection />

          <TechnologySection />

        </section>

        <CTASection />

        {/* CONTACT */}
        <section id="contact">

          

          <FooterSection />

        </section>

      </main>

    </div>
  );
}