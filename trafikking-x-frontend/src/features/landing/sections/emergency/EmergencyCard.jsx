import {
  MapPinned,
  Clock3,
  TriangleAlert,
  RadioTower,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

import GlassCard from "@/shared/components/landing/GlassCard";
import PulseIndicator from "./PulseIndicator";

export default function EmergencyCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
    >
      <GlassCard className="relative mx-auto mt-16 max-w-4xl overflow-hidden p-8 lg:p-10">

        {/* Background Glow */}

        <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-red-500/10 blur-3xl" />

        <div className="absolute -left-20 bottom-0 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative">

          {/* Header */}

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-4">

              <PulseIndicator />

              <div>

                <h3 className="text-2xl font-bold text-white">
                  Emergency Detected
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  AI has started analysing the incident...
                </p>

              </div>

            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">

              <RadioTower className="h-4 w-4" />

              CRITICAL

            </span>

          </div>

          {/* Information */}

          <div className="mt-10 grid gap-8 lg:grid-cols-2">

            <div className="space-y-6">

              <div>

                <p className="text-sm text-slate-400">
                  Incident
                </p>

                <h4 className="mt-2 text-xl font-semibold text-white">
                  Road Traffic Accident
                </h4>

              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">

                <MapPinned className="h-5 w-5 text-blue-400" />

                <span className="text-slate-300">
                  Patna Junction
                </span>

              </div>

            </div>

            <div className="space-y-4">

              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">

                <div className="flex items-center gap-3">

                  <Clock3 className="h-5 w-5 text-green-400" />

                  <span className="text-slate-300">
                    Report Time
                  </span>

                </div>

                <span className="font-semibold text-white">
                  10:42 PM
                </span>

              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">

                <div className="flex items-center gap-3">

                  <TriangleAlert className="h-5 w-5 text-red-400" />

                  <span className="text-slate-300">
                    Severity
                  </span>

                </div>

                <span className="font-semibold text-red-400">
                  Multiple Vehicles
                </span>

              </div>

            </div>

          </div>

          {/* Footer */}

          <div className="mt-10 flex items-center justify-between rounded-2xl border border-primary/10 bg-primary/5 px-5 py-4">

            <div>

              <p className="text-sm text-slate-400">
                Next Step
              </p>

              <h4 className="mt-1 font-semibold text-white">
                AI Recommendation Engine
              </h4>

            </div>

            <ChevronRight className="h-6 w-6 text-primary" />

          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
}