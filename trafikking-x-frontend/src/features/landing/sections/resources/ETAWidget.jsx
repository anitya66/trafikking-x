import { motion } from "framer-motion";
import {
  Clock3,
  Navigation,
  Sparkles,
} from "lucide-react";

import GlassCard from "@/shared/components/landing/GlassCard";

export default function ETAWidget() {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <GlassCard className="relative overflow-hidden p-6">

        {/* Background Glow */}

        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative">

          {/* Header */}

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="rounded-2xl bg-primary/10 p-3">

                <Clock3 className="h-6 w-6 text-primary" />

              </div>

              <div>

                <p className="text-sm text-slate-400">
                  Estimated Arrival
                </p>

                <h3 className="mt-1 text-lg font-bold text-white">
                  Fastest Route
                </h3>

              </div>

            </div>

            <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2">

              <div className="flex items-center gap-2">

                <Sparkles className="h-4 w-4 text-cyan-400" />

                <span className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
                  AI
                </span>

              </div>

            </div>

          </div>

          {/* ETA */}

          <div className="mt-8">

            <h2 className="text-5xl font-black tracking-tight text-white">
              02:18
            </h2>

            <p className="mt-3 flex items-center gap-2 text-green-400">

              <Navigation className="h-4 w-4" />

              AI optimized fastest available route

            </p>

          </div>

          {/* Footer */}

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">

            <span className="text-xs uppercase tracking-wider text-slate-500">
              Route Status
            </span>

            <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
              Optimized
            </span>

          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
}