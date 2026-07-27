import { motion } from "framer-motion";
import {
  Clock3,
  BrainCircuit,
  Ambulance,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    value: "02:18",
    label: "Average Response Time",
    icon: Clock3,
    color: "bg-blue-500/15 text-blue-400",
  },
  {
    value: "98%",
    label: "AI Decision Accuracy",
    icon: BrainCircuit,
    color: "bg-cyan-500/15 text-cyan-400",
  },
  {
    value: "6",
    label: "Resources Coordinated",
    icon: Ambulance,
    color: "bg-green-500/15 text-green-400",
  },
  {
    value: "100%",
    label: "Citizen Safety",
    icon: ShieldCheck,
    color: "bg-emerald-500/15 text-emerald-400",
  },
];

export default function MissionStats() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -6,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.06]"
          >
            {/* Glow */}

            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative">

              {/* Icon */}

              <div
                className={`mb-5 inline-flex rounded-2xl p-3 ${item.color}`}
              >
                <Icon className="h-5 w-5" />
              </div>

              {/* Value */}

              <h3 className="text-4xl font-black tracking-tight text-white">
                {item.value}
              </h3>

              {/* Label */}

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {item.label}
              </p>

            </div>
          </motion.div>
        );
      })}

    </div>
  );
}