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
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs text-slate-400">
            {title}
          </p>

          <h4 className="mt-2 text-lg font-bold text-white">
            {value}
          </h4>

        </div>

        <div
          className={`rounded-xl p-3 ${color}`}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>

      </div>

    </div>
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
        duration: .7,
        delay: .4,
      }}
      className="relative"
    >

      {/* Glow */}

      <div className="absolute -inset-4 rounded-[40px] bg-blue-500/20 blur-3xl" />

      <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">

        {/* Header */}

        <div className="mb-6 flex items-center justify-between">

          <div>

            <h3 className="text-xl font-bold text-white">

              AI Command Center

            </h3>

            <p className="text-sm text-slate-400">

              Live Emergency Overview

            </p>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-2">

            <div className="h-2 w-2 rounded-full bg-green-500" />

            <span className="text-xs text-green-400">

              Live

            </span>

          </div>

        </div>

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

        {/* Fake Map */}

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">

          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">

            <div className="flex items-center gap-2">

              <MapPinned className="h-4 w-4 text-primary" />

              <span className="text-sm text-white">

                Live Map

              </span>

            </div>

            <Activity className="h-4 w-4 text-green-500" />

          </div>

          <div className="flex h-44 items-center justify-center bg-[radial-gradient(circle_at_center,rgba(59,130,246,.15),transparent_70%)]">

            <MapPinned className="h-16 w-16 text-blue-400/60" />

          </div>

        </div>

      </div>

    </motion.div>
  );
}