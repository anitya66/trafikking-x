import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">

      {/* Primary CTA */}

      <Button
        size="lg"
        className="group h-12 rounded-xl px-7 text-sm font-semibold shadow-xl shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary/40 sm:h-13 sm:px-8"
      >
        Launch Platform

        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>

      {/* Secondary CTA */}

      <Button
        variant="outline"
        size="lg"
        className="group h-12 rounded-xl border-white/10 bg-white/5 px-7 backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:bg-white/8 hover:-translate-y-0.5 sm:h-13 sm:px-8"
      >
        <PlayCircle className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />

        Watch Demo
      </Button>

    </div>
  );
}