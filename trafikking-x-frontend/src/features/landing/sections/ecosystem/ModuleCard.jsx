import { motion } from "framer-motion";

import GlassCard from "@/shared/components/landing/GlassCard";

export default function ModuleCard({
  module,
}) {
  const Icon = module.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <GlassCard className="h-full p-7 transition-all hover:border-primary/40">

        <div
          className={`mb-6 inline-flex rounded-2xl bg-white/5 p-4 ${module.color}`}
        >
          <Icon className="h-8 w-8" />
        </div>

        <h3 className="text-2xl font-bold text-white">
          {module.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {module.description}
        </p>

      </GlassCard>
    </motion.div>
  );
}