import { motion } from "framer-motion";
import {
  Activity,
  Ambulance,
  BrainCircuit,
  Building2,
  MapPinned,
  Siren,
} from "lucide-react";

function DashboardCard({
  icon: Icon,
  title,
  value,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
      className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.06]"
    >
      <div className="flex items-center justify-between">

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            {title}
          </p>

          <h4 className="mt-2 text-lg font-bold text-white">
            {value}
          </h4>
        </div>

        <div
          className={`rounded-2xl p-3 transition-transform duration-300 group-hover:scale-105 ${color}`}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>

      </div>
    </motion.div>
  );
}

export default function HeroDashboard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 60,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
        delay: 0.35,
      }}
      className="relative mx-auto w-full max-w-xl"
    >
      {/* Background Glow */}

      <div className="absolute -inset-6 rounded-[42px] bg-primary/15 blur-3xl" />

      {/* Main Panel */}

      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-2xl">

        {/* Header */}

        <div className="mb-6 flex items-center justify-between">

          <div>
            <h3 className="text-xl font-bold text-white">
              AI Command Center
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Real-Time Emergency Dashboard
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>

            <span className="text-xs font-medium text-green-400">
              LIVE
            </span>
          </div>

        </div>

        {/* Dashboard Cards */}

        <div className="grid gap-4">

          <DashboardCard
            icon={Siren}
            title="Active Incident"
            value="Road Accident"
            color="bg-red-500/20"
          />

          <DashboardCard
            icon={BrainCircuit}
            title="AI Confidence"
            value="98%"
            color="bg-blue-500/20"
          />

          <DashboardCard
            icon={Ambulance}
            title="Ambulance ETA"
            value="02:31"
            color="bg-green-500/20"
          />

          <DashboardCard
            icon={Building2}
            title="Nearest Hospital"
            value="City Trauma Center"
            color="bg-cyan-500/20"
          />

        </div>

        {/* Map */}

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-950">

          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">

            <div className="flex items-center gap-2">
              <MapPinned className="h-4 w-4 text-primary" />

              <span className="text-sm font-medium text-white">
                Live Emergency Map
              </span>
            </div>

            <Activity className="h-4 w-4 text-green-500" />

          </div>

          <div className="relative flex h-52 items-center justify-center overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,.18),transparent_70%)]" />

            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <MapPinned className="relative h-16 w-16 text-blue-400/70" />

          </div>

        </div>

      </div>

    </motion.div>
  );
}