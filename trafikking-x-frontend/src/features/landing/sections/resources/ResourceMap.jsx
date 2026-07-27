import { motion } from "framer-motion";
import {
  Ambulance,
  Building2,
  Shield,
  TriangleAlert,
} from "lucide-react";

export default function ResourceMap() {
  return (
    <div className="relative h-[440px] overflow-hidden rounded-3xl border border-white/10 bg-slate-950">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,.12),transparent_70%)]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Hospital */}

      <div className="absolute right-12 top-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">

        <Building2 className="h-6 w-6 text-blue-400" />

      </div>

      {/* Incident */}

      <motion.div
        animate={{
          scale: [1, 1.45, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-500/15"
      >
        <TriangleAlert className="h-6 w-6 text-red-400" />
      </motion.div>

      {/* Ambulance */}

      <motion.div
        animate={{
          x: [0, 170],
          y: [0, 90],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 5,
        }}
        className="absolute left-16 top-16 flex h-12 w-12 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10"
      >
        <Ambulance className="h-6 w-6 text-green-400" />
      </motion.div>

      {/* Police */}

      <motion.div
        animate={{
          x: [-120, 40],
          y: [110, -35],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 6,
        }}
        className="absolute bottom-14 right-16 flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10"
      >
        <Shield className="h-6 w-6 text-orange-400" />
      </motion.div>

      {/* Live Status */}

      <div className="absolute left-5 top-5 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">

        <span className="text-xs font-semibold uppercase tracking-wider text-green-400">
          LIVE MAP
        </span>

      </div>

    </div>
  );
}