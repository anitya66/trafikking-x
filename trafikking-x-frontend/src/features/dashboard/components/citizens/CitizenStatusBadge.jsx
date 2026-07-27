import { Badge } from "@/components/ui/badge";

export default function CitizenStatusBadge({

  completed,

}) {

  return (

    <Badge
      className={
        completed
          ? "bg-green-500/15 text-green-400 border-green-500/20"
          : "bg-yellow-500/15 text-yellow-400 border-yellow-500/20"
      }
    >

      {completed
        ? "PROFILE COMPLETE"
        : "INCOMPLETE"}

    </Badge>

  );

}