import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AIProgress({
  label,
  value,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 16,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.4,
        delay,
      }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
    >
      {/* Header */}

      <div className="mb-3 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/15">

            <CheckCircle2 className="h-4 w-4 text-green-400" />

          </div>

          <span className="font-medium text-slate-200">
            {label}
          </span>

        </div>

        <span className="text-sm font-bold text-cyan-300">
          {value}%
        </span>

      </div>

      {/* Progress */}

      <div className="relative h-2 overflow-hidden rounded-full bg-white/10">

        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: `${value}%`,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            delay,
          }}
          className="relative h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-300"
        >
          <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.9)]" />
        </motion.div>

      </div>

    </motion.div>
  );
}