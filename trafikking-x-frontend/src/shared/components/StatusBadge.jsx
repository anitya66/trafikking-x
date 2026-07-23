import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";
import { formatIncidentStatus } from "@/features/dashboard/utils/incidentFormatter";

const statusStyles = {
  REPORTED:
    "border-blue-500/20 bg-blue-500/10 text-blue-400",

  ASSIGNED:
    "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",

  IN_PROGRESS:
    "border-amber-500/20 bg-amber-500/10 text-amber-400",

  RESOLVED:
    "border-green-500/20 bg-green-500/10 text-green-400",

  CANCELLED:
    "border-gray-500/20 bg-gray-500/10 text-gray-400",
};

export default function StatusBadge({
  status,
  className,
}) {
  if (!status) return null;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
        statusStyles[status],
        className
      )}
    >
      <Circle className="h-2.5 w-2.5 fill-current" />

      <span>{formatIncidentStatus(status)}</span>
    </div>
  );
}