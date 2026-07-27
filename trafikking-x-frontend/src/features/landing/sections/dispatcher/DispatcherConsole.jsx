import { motion } from "framer-motion";
import { Activity, BrainCircuit } from "lucide-react";

import GlassCard from "@/shared/components/landing/GlassCard";

import AssignmentCard from "./AssignmentCard";
import LiveDispatchTimeline from "./LiveDispatchTimeline";

export default function DispatcherConsole() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
    >
      <GlassCard className="relative mt-16 overflow-hidden p-8 lg:p-10">

        {/* Background Glow */}

        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative">

          {/* Header */}

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">

                <BrainCircuit className="h-4 w-4 text-primary" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Dispatcher AI Console
                </span>

              </div>

              <h3 className="mt-5 text-3xl font-black text-white">
                Dispatcher Command Center
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                AI recommendations are verified by dispatch operators before
                emergency resources are deployed in real time.
              </p>

            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">

              <Activity className="h-4 w-4 text-green-400" />

              <span className="text-sm font-semibold text-green-400">
                LIVE
              </span>

            </div>

          </div>

          {/* Assignment Grid */}

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            <AssignmentCard
              title="Ambulance"
              value="Unit A-12"
              status="Assigned"
            />

            <AssignmentCard
              title="Hospital"
              value="City Trauma Center"
              status="Reserved"
            />

            <AssignmentCard
              title="Police"
              value="Unit P-07"
              status="Dispatched"
            />

          </div>

          {/* Timeline */}

          <div className="mt-12 border-t border-white/10 pt-8">

            <LiveDispatchTimeline />

          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
}