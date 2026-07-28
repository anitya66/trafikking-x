import {
  Clock3,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function ETAChip({

  eta,

}) {

  let classes =
    "border-green-500/20 bg-green-500/10 text-green-400";

  if (eta > 10) {

    classes =
      "border-yellow-500/20 bg-yellow-500/10 text-yellow-400";

  }

  if (eta > 20) {

    classes =
      "border-red-500/20 bg-red-500/10 text-red-400";

  }

  return (

    <Badge
      variant="outline"
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${classes}`}
    >

      <Clock3 className="h-3.5 w-3.5" />

      ETA {eta ?? "-"} min

    </Badge>

  );

}