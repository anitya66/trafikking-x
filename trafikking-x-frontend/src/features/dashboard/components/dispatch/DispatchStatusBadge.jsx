import { Badge } from "@/components/ui/badge";

const colors = {

  RESOURCES_ASSIGNED:
    "border-blue-500/20 bg-blue-500/10 text-blue-500",

  DISPATCHED:
    "border-cyan-500/20 bg-cyan-500/10 text-cyan-500",

  RESPONDING:
    "border-orange-500/20 bg-orange-500/10 text-orange-500",

  ON_SCENE:
    "border-purple-500/20 bg-purple-500/10 text-purple-500",

  COMPLETED:
    "border-emerald-500/20 bg-emerald-500/10 text-emerald-500",

};

export default function DispatchStatusBadge({

  status,

}) {

  return (

    <Badge
      variant="outline"
      className={
        colors[status] ??
        "border-muted bg-muted text-muted-foreground"
      }
    >

      {status?.replaceAll("_", " ")}

    </Badge>

  );

}