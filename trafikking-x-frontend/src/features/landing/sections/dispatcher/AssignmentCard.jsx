import GlassCard from "@/shared/components/landing/GlassCard";

export default function AssignmentCard({
  title,
  value,
  status,
}) {
  return (
    <GlassCard className="p-5">

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-lg font-bold text-white">
        {value}
      </h3>

      <div className="mt-4 inline-flex rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">

        {status}

      </div>

    </GlassCard>
  );
}