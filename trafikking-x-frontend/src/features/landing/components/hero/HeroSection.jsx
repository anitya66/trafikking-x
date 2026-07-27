import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <HeroBackground />

      <div className="page-container relative z-10">

        <div className="grid items-center gap-16 lg:gap-20 xl:grid-cols-[1.05fr_0.95fr]">

          {/* Left */}

          <HeroContent />

          {/* Right */}

          <HeroDashboard />

        </div>

      </div>
    </section>
  );
}