import { motion } from "framer-motion";
import {
  CheckCircle2,
  BrainCircuit,
  Ambulance,
  Building2,
  Shield,
  RadioTower,
} from "lucide-react";

const updates = [
  {
    title: "Emergency Report Received",
    description: "Citizen emergency request has been submitted.",
    icon: RadioTower,
    color: "text-red-400",
    active: false,
  },
  {
    title: "AI Analysis Completed",
    description: "Emergency classified with 98% confidence.",
    icon: BrainCircuit,
    color: "text-cyan-400",
    active: false,
  },
  {
    title: "Dispatcher Assigned Units",
    description: "Emergency responders have been dispatched.",
    icon: CheckCircle2,
    color: "text-primary",
    active: true,
  },
  {
    title: "Ambulance En Route",
    description: "Nearest ambulance is approaching your location.",
    icon: Ambulance,
    color: "text-green-400",
    active: false,
  },
  {
    title: "Hospital Prepared",
    description: "Emergency team is ready for patient arrival.",
    icon: Building2,
    color: "text-blue-400",
    active: false,
  },
  {
    title: "Police Monitoring Traffic",
    description: "Traffic management is currently active.",
    icon: Shield,
    color: "text-orange-400",
    active: false,
  },
];

export default function StatusTimeline() {
  return (
    <div>

      {/* Header */}

      <div className="mb-8">

        <h4 className="text-xl font-bold text-white">
          Live Status Timeline
        </h4>

        <p className="mt-2 text-slate-400">
          Follow every stage of the emergency response in real time.
        </p>

      </div>

      <div className="space-y-6">

        {updates.map((item, index) => {
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

                {index !== updates.length - 1 && (
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
                      Current Status
                    </span>
                  )}

                </div>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>

              </div>

            </motion.div>
          );
        })}

      </div>

    </div>
  );
}