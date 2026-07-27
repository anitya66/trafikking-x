import {
  Ambulance,
  MapPinned,
  Navigation,
  Clock3,
} from "lucide-react";

import GlassCard from "@/shared/components/landing/GlassCard";

export default function TrackingPhone() {
  return (
    <div className="mx-auto w-full max-w-[340px] rounded-[42px] border border-white/10 bg-slate-900 p-4 shadow-[0_25px_80px_rgba(0,0,0,.45)]">

      <div className="overflow-hidden rounded-[30px] bg-[#060816]">

        {/* Header */}

        <div className="border-b border-white/10 p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-xs uppercase tracking-wider text-slate-500">
                Live Tracking
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                Ambulance Arriving
              </h3>

            </div>

            <div className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1">

              <span className="text-xs font-semibold text-green-400">
                LIVE
              </span>

            </div>

          </div>

        </div>

        {/* Map */}

        <div className="relative flex h-72 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(59,130,246,.16),transparent_70%)]">

          {/* Grid */}

          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Destination */}

          <div className="absolute right-8 top-8 rounded-xl border border-red-500/20 bg-red-500/10 p-2">

            <MapPinned className="h-5 w-5 text-red-400" />

          </div>

          {/* Ambulance */}

          <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4">

            <Ambulance className="h-10 w-10 text-primary" />

          </div>

        </div>

        {/* Bottom */}

        <div className="space-y-4 p-5">

          <GlassCard className="p-5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-400">
                  Estimated Arrival
                </p>

                <h2 className="mt-2 text-4xl font-black text-green-400">
                  02:18
                </h2>

              </div>

              <Clock3 className="h-8 w-8 text-primary" />

            </div>

          </GlassCard>

          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">

            <div className="flex items-center gap-2">

              <Navigation className="h-4 w-4 text-primary" />

              <span className="text-sm text-slate-300">
                Fastest Route Selected
              </span>

            </div>

            <span className="text-xs font-semibold text-green-400">
              AI
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}