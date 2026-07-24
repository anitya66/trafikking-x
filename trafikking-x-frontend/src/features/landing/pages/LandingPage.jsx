import Navbar from "../components/Navbar";

import HeroSection from "../components/hero/HeroSection";

import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import WorkflowSection from "../components/WorkflowSection";
import DashboardPreviewSection from "../components/DashboardPreviewSection";
import ModulesSection from "../components/ModulesSection";
import TestimonialsSection from "../components/TestimonialsSection";

import Footer from "../components/Footer";
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

      {/* Navigation */}
      <Navbar />

      <main>

        {/* Hero */}
        <HeroSection />

        <EmergencySection />

        <AIAnalysisSection />

        <DispatcherSection />

        <ResourcesSection />

        <TrackingSection />

        <MissionSection />

        <EcosystemSection />

        <ShowcaseSection />

        <AISection />

        <TechnologySection />

        <CTASection />

        <FooterSection />

       
       

      </main>

   

    </div>
  );
}