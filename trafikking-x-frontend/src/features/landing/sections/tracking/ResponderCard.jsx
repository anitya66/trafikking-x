import { motion } from "framer-motion";
import {
  Ambulance,
  Building2,
  Shield,
  ArrowRight,
} from "lucide-react";

const ICONS = {
  "🚑": Ambulance,
  "🏥": Building2,
  "🚓": Shield,
};

export default function ResponderCard({
  emoji,
  title,
  subtitle,
}) {
  const Icon = ICONS[emoji] ?? Ambulance;

  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.2,
      }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.06]">

        {/* Hover Glow */}

        <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative flex items-center justify-between gap-5">

          {/* Left */}

          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-primary/10 p-3">

              <Icon className="h-6 w-6 text-primary" />

            </div>

            <div>

              <h3 className="font-semibold text-white">
                {title}
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                {subtitle}
              </p>

            </div>

          </div>

          {/* Status */}

          <div className="flex items-center gap-3">

            <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1">

              <span className="h-2 w-2 rounded-full bg-green-400" />

              <span className="text-xs font-semibold text-green-400">
                LIVE
              </span>

            </div>

            <ArrowRight className="h-4 w-4 text-slate-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />

          </div>

        </div>

      </div>
    </motion.div>
  );
}