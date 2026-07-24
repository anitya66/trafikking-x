import { ArrowRight, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <Button
        size="lg"
        className="h-12 px-8"
      >
        Get Started

        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="h-12 border-white/10 bg-white/5 px-8 backdrop-blur-md"
      >
        <PlayCircle className="mr-2 h-5 w-5" />

        Watch Demo

      </Button>

    </div>
  );
}