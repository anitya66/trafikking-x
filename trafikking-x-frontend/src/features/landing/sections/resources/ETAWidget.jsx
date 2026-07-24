import GlassCard from "@/shared/components/landing/GlassCard";

export default function ETAWidget() {
  return (
    <GlassCard className="p-6">

      <p className="text-sm text-slate-400">

        Estimated Arrival

      </p>

      <h2 className="mt-3 text-5xl font-black text-white">

        02:18

      </h2>

      <p className="mt-3 text-green-400">

        AI optimized fastest route

      </p>

    </GlassCard>
  );
}