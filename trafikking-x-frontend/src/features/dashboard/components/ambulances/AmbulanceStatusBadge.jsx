import { Badge } from "@/components/ui/badge";

const colors = {

  AVAILABLE:
    "bg-green-500/15 text-green-400 border-green-500/20",

  ASSIGNED:
    "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",

  DISPATCHED:
    "bg-blue-500/15 text-blue-400 border-blue-500/20",

  ON_DUTY:
    "bg-purple-500/15 text-purple-400 border-purple-500/20",

  MAINTENANCE:
    "bg-red-500/15 text-red-400 border-red-500/20",

};

export default function AmbulanceStatusBadge({
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