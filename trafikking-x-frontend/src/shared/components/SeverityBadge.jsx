import { AlertTriangle } from "lucide-react";

import { cn } from "@/lib/utils";
import { formatSeverity } from "@/features/dashboard/utils/incidentFormatter";

const severityStyles = {
  LOW: "border-green-500/20 bg-green-500/10 text-green-400",

  MEDIUM: "border-amber-500/20 bg-amber-500/10 text-amber-400",

  HIGH: "border-orange-500/20 bg-orange-500/10 text-orange-400",

  CRITICAL: "border-red-500/20 bg-red-500/10 text-red-400",
};

export default function SeverityBadge({
  severity,
  className,
}) {
  if (!severity) return null;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide",
        severityStyles[severity],
        className
      )}
    >
      <AlertTriangle className="h-3.5 w-3.5" />

      <span>{formatSeverity(severity)}</span>
    </div>
  );
}