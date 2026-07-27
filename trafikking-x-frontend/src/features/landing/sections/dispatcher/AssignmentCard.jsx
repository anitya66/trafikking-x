import { motion } from "framer-motion";
import {
  Ambulance,
  Building2,
  Shield,
  CheckCircle2,
} from "lucide-react";

const ICONS = {
  Ambulance,
  Hospital: Building2,
  Police: Shield,
};

export default function AssignmentCard({
  title,
  value,
  status,
}) {
  const Icon = ICONS[title] ?? CheckCircle2;

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

        <div className="relative">

          {/* Top */}

          <div className="flex items-center justify-between">

            <div className="rounded-2xl bg-primary/10 p-3">

              <Icon className="h-5 w-5 text-primary" />

            </div>

            <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1">

              <span className="h-2 w-2 rounded-full bg-green-400" />

              <span className="text-xs font-semibold text-green-400">
                {status}
              </span>

            </div>

          </div>

          {/* Content */}

          <div className="mt-6">

            <p className="text-sm text-slate-400">
              {title}
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              {value}
            </h3>

          </div>

        </div>

      </div>
    </motion.div>
  );
}