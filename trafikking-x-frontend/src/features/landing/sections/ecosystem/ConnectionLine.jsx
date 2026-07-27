import { BrainCircuit } from "lucide-react";

export default function ConnectionLine() {
  return (
    <div className="my-14 hidden items-center justify-center xl:flex">

      {/* Left */}

      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-primary/50" />

      {/* Center */}

      <div className="relative mx-8">

        {/* Glow */}

        <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-2xl" />

        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 backdrop-blur-xl">

          <BrainCircuit className="h-8 w-8 text-primary" />

        </div>

      </div>

      {/* Right */}

      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/30 to-primary/50" />

    </div>
  );
}