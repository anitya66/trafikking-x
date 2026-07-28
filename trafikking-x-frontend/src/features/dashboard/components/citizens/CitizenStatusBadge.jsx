import {
  BadgeCheck,
  CircleAlert,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function CitizenStatusBadge({

  completed,

}) {

  return (

    <Badge
      variant="outline"
      className={
        completed
          ? "gap-1 border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-emerald-500"
          : "gap-1 border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-yellow-500"
      }
    >

      {completed ? (

        <BadgeCheck className="h-3.5 w-3.5" />

      ) : (

        <CircleAlert className="h-3.5 w-3.5" />

      )}

      {completed
        ? "Profile Complete"
        : "Incomplete"}

    </Badge>

  );

}