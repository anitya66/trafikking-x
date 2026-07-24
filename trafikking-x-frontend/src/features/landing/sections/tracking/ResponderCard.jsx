import GlassCard from "@/shared/components/landing/GlassCard";

export default function ResponderCard({
  emoji,
  title,
  subtitle,
}) {
  return (
    <GlassCard className="p-4">

      <div className="flex items-center gap-4">

        <div className="text-3xl">
          {emoji}
        </div>

        <div>

          <h3 className="font-semibold text-white">
            {title}
          </h3>

          <p className="text-sm text-slate-400">
            {subtitle}
          </p>

        </div>

      </div>

    </GlassCard>
  );
}