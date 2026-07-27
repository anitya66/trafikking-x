import { motion } from "framer-motion";
import {
  Ambulance,
  Shield,
  Clock3,
  ArrowRight,
} from "lucide-react";

const ICONS = {
  "🚑": Ambulance,
  "🚓": Shield,
};

export default function MovingUnitCard({
  emoji,
  title,
  status,
  eta,
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

        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative flex items-center justify-between gap-5">

          {/* Left */}

          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-primary/10 p-3">
              <Icon className="h-6 w-6 text-primary" />
            </div>

            <div>

              <h3 className="font-bold text-white">
                {title}
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                {status}
              </p>

            </div>

          </div>

          {/* Right */}

          <div className="text-right">

            <div className="flex items-center justify-end gap-2">

              <Clock3 className="h-4 w-4 text-green-400" />

              <span className="text-xs uppercase tracking-wide text-slate-500">
                ETA
              </span>

            </div>

            <p className="mt-1 text-lg font-bold text-green-400">
              {eta}
            </p>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">

          <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Live Tracking
          </span>

          <ArrowRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />

        </div>

      </div>
    </motion.div>
  );
}