import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-20 px-6 pt-32 pb-20 lg:grid-cols-2 lg:items-center">

        <HeroContent />

        <HeroDashboard />

      </div>
    </section>
  );
}