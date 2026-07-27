import { BrainCircuit } from "lucide-react";

export default function TechConnection() {
  return (
    <div className="hidden lg:flex justify-center py-5">

      <div className="relative flex flex-col items-center">

        {/* Upper Line */}

        <div className="h-8 w-px bg-gradient-to-b from-primary/40 to-primary/70" />

        {/* AI Node */}

        <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10">

          <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-xl" />

          <BrainCircuit className="relative h-5 w-5 text-primary" />

        </div>

        {/* Lower Line */}

        <div className="h-8 w-px bg-gradient-to-b from-primary/70 to-primary/40" />

      </div>

    </div>
  );
}