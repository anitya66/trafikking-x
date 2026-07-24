import { cn } from "@/lib/utils";

export default function GlassCard({
  className,
  children,
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-blue-500/5",
        className
      )}
    >
      {children}
    </div>
  );
}