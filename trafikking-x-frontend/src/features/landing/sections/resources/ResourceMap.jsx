import { motion } from "framer-motion";

export default function ResourceMap() {
  return (
    <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-slate-900">

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Incident */}

      <motion.div
        animate={{
          scale: [1, 1.4, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 shadow-lg shadow-red-500/50"
      />

      {/* Ambulance */}

      <motion.div
        animate={{
          x: [0, 170],
          y: [0, 100],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 5,
        }}
        className="absolute left-20 top-16 text-4xl"
      >
        🚑
      </motion.div>

      {/* Police */}

      <motion.div
        animate={{
          x: [-120, 40],
          y: [120, -40],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 6,
        }}
        className="absolute right-20 bottom-12 text-4xl"
      >
        🚓
      </motion.div>

      {/* Hospital */}

      <div className="absolute right-16 top-14 text-5xl">

        🏥

      </div>

    </div>
  );
}