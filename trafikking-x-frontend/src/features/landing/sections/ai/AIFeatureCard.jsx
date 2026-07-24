import { motion } from "framer-motion";

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
    >
      <GlassCard className="h-full p-6">

        <div
          className={`mb-5 inline-flex rounded-2xl bg-white/5 p-4 ${feature.color}`}
        >
          <Icon className="h-8 w-8" />
        </div>

        <h3 className="text-xl font-bold text-white">
          {feature.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {feature.description}
        </p>

      </GlassCard>
    </motion.div>
  );
}