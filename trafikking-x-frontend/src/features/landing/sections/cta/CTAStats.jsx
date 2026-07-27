import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  BrainCircuit,
} from "lucide-react";

const stats = [
  {
    value: "24/7",
    label: "System Availability",
    icon: ShieldCheck,
    color: "text-green-400",
  },
  {
    value: "< 3 Min",
    label: "Target Response",
    icon: Clock3,
    color: "text-blue-400",
  },
  {
    value: "AI",
    label: "Decision Engine",
    icon: BrainCircuit,
    color: "text-purple-400",
  },
];

export default function CTAStats() {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-3">

      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.12,
            }}
            className="group"
          >

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.06]">

              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.05] ${item.color}`}
              >
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mt-5 text-4xl font-black text-white">
                {item.value}
              </h3>

              <p className="mt-3 text-sm text-slate-400">
                {item.label}
              </p>

            </div>

          </motion.div>
        );
      })}

    </div>
  );
}