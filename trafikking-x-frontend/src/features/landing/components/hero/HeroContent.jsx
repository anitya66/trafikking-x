import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="mx-auto w-full max-w-2xl lg:mx-0">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2.5 backdrop-blur-xl"
      >
        <Sparkles className="h-4 w-4 text-primary" />

        <span className="text-sm font-semibold tracking-wide text-blue-200">
          AI Powered Emergency Response Platform
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-8 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
      >
        Saving Lives Through

        <span className="mt-3 block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
          AI-Powered
        </span>

        <span className="block">
          Emergency Intelligence
        </span>
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
      >
        TRAFIKKING X unifies citizens, dispatchers,
        ambulances, hospitals and police into one
        intelligent real-time emergency ecosystem,
        helping communities respond faster when every
        second matters.
      </motion.p>

      {/* CTA */}

      <HeroButtons />

      {/* Metrics */}

      <HeroStats />

    </div>
  );
}