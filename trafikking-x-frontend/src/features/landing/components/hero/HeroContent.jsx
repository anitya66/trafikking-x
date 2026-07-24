import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  PlayCircle,
} from "lucide-react";

import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2"
      >
        <Sparkles className="h-4 w-4 text-blue-400" />

        <span className="text-sm font-medium text-blue-300">
          Next Generation Emergency Response Platform
        </span>

      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .2 }}
        className="text-5xl font-black leading-tight text-white md:text-6xl xl:text-7xl"
      >
        Saving Lives Through

        <br />

        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">

          AI-Powered Emergency Intelligence

        </span>

      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .4 }}
        className="mt-8 max-w-xl text-lg leading-8 text-slate-300"
      >
        TRAFIKKING X connects citizens, dispatchers,
        ambulances, hospitals and police into one
        intelligent real-time emergency ecosystem,
        helping communities respond faster when
        every second matters.
      </motion.p>

      <HeroButtons />

      <HeroStats />

    </div>
  );
}