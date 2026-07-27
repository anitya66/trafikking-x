import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, BrainCircuit } from "lucide-react";

import GlassCard from "@/shared/components/landing/GlassCard";

export default function MissionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <GlassCard className="relative mt-12 overflow-hidden p-8 sm:p-10 lg:p-12">

        {/* Background Glow */}

        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-green-500/10 blur-3xl" />

        <div className="relative">

          {/* Status */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">

            <CheckCircle2 className="h-4 w-4 text-green-400" />

            <span className="text-xs font-semibold uppercase tracking-wider text-green-300">
              Mission Status • Completed
            </span>

          </div>

          {/* Title */}

          <h3 className="max-w-3xl text-3xl font-black leading-tight text-white lg:text-4xl">
            Every Emergency Becomes a
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Coordinated AI Mission
            </span>
          </h3>

          {/* Description */}

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            TRAFIKKING X seamlessly coordinates every stage of an emergency—
            from the citizen's first alert through AI analysis, intelligent
            dispatch, live resource tracking, hospital coordination, and final
            incident resolution.
          </p>

          {/* Highlights */}

          <div className="mt-10 grid gap-4 md:grid-cols-2">

            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

              <div className="rounded-xl bg-blue-500/15 p-3">
                <BrainCircuit className="h-5 w-5 text-blue-400" />
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  AI Decision Support
                </h4>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Intelligent recommendations reduce response time and improve
                  dispatch accuracy.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

              <div className="rounded-xl bg-green-500/15 p-3">
                <ShieldCheck className="h-5 w-5 text-green-400" />
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  End-to-End Coordination
                </h4>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Citizens, dispatchers, ambulances, hospitals and police stay
                  connected through one unified platform.
                </p>
              </div>

            </div>

          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
}