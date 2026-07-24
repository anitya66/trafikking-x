import { motion } from "framer-motion";

export default function AIProgress({
  label,
  value,
  delay = 0,
}) {
  return (
    <div className="space-y-2">

      <div className="flex items-center justify-between">

        <span className="text-sm text-slate-400">
          {label}
        </span>

        <span className="text-sm font-semibold text-cyan-300">
          {value}%
        </span>

      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">

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
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
        />

      </div>

    </div>
  );
}