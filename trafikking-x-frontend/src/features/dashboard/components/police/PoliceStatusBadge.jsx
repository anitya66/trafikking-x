import {
  CheckCircle2,
  XCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function PoliceStatusBadge({

  active,

}) {

  return (

    <Badge
      variant="outline"
      className={
        active
          ? "gap-1 border-green-500/20 bg-green-500/10 px-3 py-1 text-green-500"
          : "gap-1 border-red-500/20 bg-red-500/10 px-3 py-1 text-red-500"
      }
    >

      {active ? (

        <CheckCircle2 className="h-3.5 w-3.5" />

      ) : (

        <XCircle className="h-3.5 w-3.5" />

      )}

      {active ? "Active" : "Inactive"}

    </Badge>

  );

}