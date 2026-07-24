import GlassCard from "@/shared/components/landing/GlassCard";

export default function TrackingPhone() {
  return (
    <div className="mx-auto w-[320px] rounded-[40px] border border-white/10 bg-slate-900 p-4 shadow-2xl">

      <div className="overflow-hidden rounded-[28px] bg-[#060816]">

        <div className="border-b border-white/10 p-5">

          <p className="text-xs text-slate-500">

            Live Tracking

          </p>

          <h3 className="mt-2 text-xl font-bold text-white">

            Ambulance Arriving

          </h3>

        </div>

        <div className="flex h-64 items-center justify-center bg-[radial-gradient(circle_at_center,rgba(59,130,246,.18),transparent_70%)]">

          <span className="text-7xl">

            🚑

          </span>

        </div>

        <div className="space-y-4 p-5">

          <GlassCard className="p-4">

            <p className="text-sm text-slate-400">

              Estimated Arrival

            </p>

            <h2 className="mt-2 text-4xl font-black text-green-400">

              02:18

            </h2>

          </GlassCard>

        </div>

      </div>

    </div>
  );
}