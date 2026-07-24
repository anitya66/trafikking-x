import {
  MapPinned,
  Clock3,
  TriangleAlert,
} from "lucide-react";

import GlassCard from "@/shared/components/landing/GlassCard";

import PulseIndicator from "./PulseIndicator";

export default function EmergencyCard() {
  return (
    <GlassCard className="mx-auto mt-16 max-w-3xl p-8">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <PulseIndicator />

          <h3 className="text-xl font-bold text-white">

            Emergency Detected

          </h3>

        </div>

        <span className="rounded-full bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">

          CRITICAL

        </span>

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div className="space-y-5">

          <div>

            <p className="text-sm text-slate-400">

              Incident

            </p>

            <h4 className="mt-1 text-lg font-semibold text-white">

              Road Traffic Accident

            </h4>

          </div>

          <div className="flex items-center gap-3">

            <MapPinned className="h-5 w-5 text-blue-400" />

            <span className="text-slate-300">

              Patna Junction

            </span>

          </div>

        </div>

        <div className="space-y-5">

          <div className="flex items-center gap-3">

            <Clock3 className="h-5 w-5 text-green-400" />

            <span className="text-slate-300">

              10:42 PM

            </span>

          </div>

          <div className="flex items-center gap-3">

            <TriangleAlert className="h-5 w-5 text-red-400" />

            <span className="text-slate-300">

              Multiple Vehicles Involved

            </span>

          </div>

        </div>

      </div>

    </GlassCard>
  );
}