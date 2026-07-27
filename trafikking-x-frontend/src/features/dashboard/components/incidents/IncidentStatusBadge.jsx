import { Badge } from "@/components/ui/badge";

const colors = {
  REPORTED: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  UNDER_REVIEW: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  DISPATCHED: "bg-purple-500/15 text-purple-400 border-purple-500/20",
  RESPONDING: "bg-orange-500/15 text-orange-400 border-orange-500/20",
  RESOLVED: "bg-green-500/15 text-green-400 border-green-500/20",
};

export default function IncidentStatusBadge({
  status,
}) {
  return (
    <Badge
      className={
        colors[status] ??
        "bg-muted text-foreground"
      }
    >
      {status}
    </Badge>
  );
}