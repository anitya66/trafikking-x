import { motion } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
} from "lucide-react";

import GlassCard from "@/shared/components/landing/GlassCard";

import AIProgress from "./AIProgress";
import AIRecommendation from "./AIRecommendation";

export default function AIAnalysisCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.55,
      }}
    >
      <GlassCard className="relative mx-auto mt-14 max-w-5xl overflow-hidden p-8 lg:p-10">

        {/* Background */}

        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative">

          {/* Header */}

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">

                <BrainCircuit className="h-4 w-4 text-primary" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                  AI Core Active
                </span>

              </div>

              <h3 className="mt-5 text-3xl font-black text-white">
                AI Command Engine
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                Multiple machine learning models are evaluating the incident,
                predicting severity, optimizing resource allocation and generating
                the safest emergency response strategy.
              </p>

            </div>

            <div className="inline-flex items-center gap-2 self-start rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">

              <Sparkles className="h-4 w-4 text-cyan-400" />

              <span className="text-sm font-semibold text-cyan-300">
                AI Processing
              </span>

            </div>

          </div>

          {/* Progress */}

          <div className="mt-10 space-y-7">

            <AIProgress
              label="Incident Classification"
              value={100}
            />

            <AIProgress
              label="Traffic Analysis"
              value={94}
              delay={0.15}
            />

            <AIProgress
              label="Hospital Matching"
              value={97}
              delay={0.3}
            />

            <AIProgress
              label="Dispatch Confidence"
              value={98}
              delay={0.45}
            />

          </div>

          {/* Recommendation */}

          <div className="mt-12 border-t border-white/10 pt-8">

            <AIRecommendation />

          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
}