import { Badge } from "@/components/ui/badge";

const colors = {
  LOW: "bg-green-500/15 text-green-400 border-green-500/20",
  MEDIUM: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  HIGH: "bg-orange-500/15 text-orange-400 border-orange-500/20",
  CRITICAL: "bg-red-500/15 text-red-400 border-red-500/20",
};

export default function IncidentSeverityBadge({
  severity,
}) {
  return (
    <Badge
      className={
        colors[severity] ??
        "bg-muted text-foreground"
      }
    >
      {severity}
    </Badge>
  );
}