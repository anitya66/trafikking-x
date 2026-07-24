import GlassCard from "@/shared/components/landing/GlassCard";

export default function MovingUnitCard({
  emoji,
  title,
  status,
  eta,
}) {
  return (
    <GlassCard className="p-5">

      <div className="flex items-center gap-4">

        <div className="text-3xl">
          {emoji}
        </div>

        <div className="flex-1">

          <h3 className="font-bold text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            {status}
          </p>

        </div>

        <div className="text-right">

          <p className="text-xs text-slate-500">
            ETA
          </p>

          <p className="font-bold text-green-400">
            {eta}
          </p>

        </div>

      </div>

    </GlassCard>
  );
}