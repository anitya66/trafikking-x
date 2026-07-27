import { motion } from "framer-motion";

const stats = [
  {
    value: "98%",
    label: "AI Accuracy",
  },
  {
    value: "24K+",
    label: "Emergencies Managed",
  },
  {
    value: "2.4 min",
    label: "Average Response",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">

      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.45 + index * 0.12,
            duration: 0.45,
          }}
          whileHover={{
            y: -6,
          }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/25 hover:bg-white/[0.06]"
        >
          {/* Glow */}

          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/15 blur-3xl" />
          </div>

          <div className="relative">
            <h3 className="text-3xl font-black tracking-tight text-white">
              {stat.value}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              {stat.label}
            </p>
          </div>
        </motion.div>
      ))}

    </div>
  );
}