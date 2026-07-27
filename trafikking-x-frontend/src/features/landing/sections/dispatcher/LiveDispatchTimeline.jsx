import { motion } from "framer-motion";
import {
  CheckCircle2,
  BrainCircuit,
  Ambulance,
  Building2,
  Shield,
  RadioTower,
} from "lucide-react";

const timeline = [
  {
    title: "Emergency Received",
    subtitle: "Citizen request captured successfully",
    icon: RadioTower,
    color: "text-red-400",
    active: false,
  },
  {
    title: "AI Recommendation Generated",
    subtitle: "Incident analyzed with 98% confidence",
    icon: BrainCircuit,
    color: "text-cyan-400",
    active: false,
  },
  {
    title: "Dispatcher Reviewing",
    subtitle: "AI recommendations under verification",
    icon: CheckCircle2,
    color: "text-primary",
    active: true,
  },
  {
    title: "Ambulance Assigned",
    subtitle: "Nearest ambulance selected",
    icon: Ambulance,
    color: "text-green-400",
    active: false,
  },
  {
    title: "Hospital Assigned",
    subtitle: "Trauma center reserved",
    icon: Building2,
    color: "text-blue-400",
    active: false,
  },
  {
    title: "Police Notified",
    subtitle: "Traffic control initiated",
    icon: Shield,
    color: "text-orange-400",
    active: false,
  },
];

export default function LiveDispatchTimeline() {
  return (
    <div>

      {/* Heading */}

      <div className="mb-8">

        <h4 className="text-xl font-bold text-white">
          Live Dispatch Timeline
        </h4>

        <p className="mt-2 text-slate-400">
          Real-time workflow of the emergency response process.
        </p>

      </div>

      <div className="space-y-6">

        {timeline.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              className="relative flex gap-5"
            >
              {/* Timeline */}

              <div className="relative flex flex-col items-center">

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] ${item.color}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {index !== timeline.length - 1 && (
                  <div className="mt-2 h-12 w-px bg-white/10" />
                )}
              </div>

              {/* Content */}

              <div
                className={`flex-1 rounded-2xl border p-5 transition-all duration-300 ${
                  item.active
                    ? "border-primary/30 bg-primary/5"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">

                  <h5 className="font-semibold text-white">
                    {item.title}
                  </h5>

                  {item.active && (
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      Current Step
                    </span>
                  )}

                </div>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.subtitle}
                </p>

              </div>

            </motion.div>
          );
        })}

      </div>

    </div>
  );
}