import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import GlassCard from "@/shared/components/landing/GlassCard";

export default function AIFeatureCard({
  feature,
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group h-full"
    >
      <GlassCard className="relative flex h-full flex-col overflow-hidden p-7 transition-all duration-300 hover:border-primary/30">

        {/* Glow */}

        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative flex h-full flex-col">

          {/* Icon */}

          <div
            className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.05] ${feature.color}`}
          >
            <Icon className="h-8 w-8" />
          </div>

          {/* Title */}

          <h3 className="text-2xl font-bold text-white">
            {feature.title}
          </h3>

          {/* Description */}

          <p className="mt-4 flex-1 leading-7 text-slate-400">
            {feature.description}
          </p>

          {/* Footer */}

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              AI ACTIVE
            </span>

            <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />

          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
}