import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import GlassCard from "@/shared/components/landing/GlassCard";

export default function TechNode({
  tech,
}) {
  const Icon = tech.icon;

  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group"
    >
      <GlassCard className="relative overflow-hidden p-6 transition-all duration-300 hover:border-primary/30">

        {/* Glow */}

        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative flex items-center justify-between gap-5">

          {/* Left */}

          <div className="flex items-center gap-4">

            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.05] ${tech.color}`}
            >
              <Icon className="h-8 w-8" />
            </div>

            <div>

              <h3 className="text-lg font-bold text-white">
                {tech.title}
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Production Ready
              </p>

            </div>

          </div>

          {/* Right */}

          <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />

        </div>

      </GlassCard>
    </motion.div>
  );
}