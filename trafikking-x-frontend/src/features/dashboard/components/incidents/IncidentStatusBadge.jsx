import {
  CheckCircle2,
  CircleDashed,
  LoaderCircle,
  Radio,
  Truck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

const variants = {

  REPORTED: {
    className:
      "border-blue-500/20 bg-blue-500/10 text-blue-500",
    icon: CircleDashed,
  },

  UNDER_REVIEW: {
    className:
      "border-yellow-500/20 bg-yellow-500/10 text-yellow-500",
    icon: LoaderCircle,
  },

  DISPATCHED: {
    className:
      "border-purple-500/20 bg-purple-500/10 text-purple-500",
    icon: Radio,
  },

  RESPONDING: {
    className:
      "border-orange-500/20 bg-orange-500/10 text-orange-500",
    icon: Truck,
  },

  RESOLVED: {
    className:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-500",
    icon: CheckCircle2,
  },

};

export default function IncidentStatusBadge({

  status,

}) {

  const variant =
    variants[status] ??
    {
      className:
        "border-border bg-muted text-muted-foreground",
      icon: CircleDashed,
    };

  const Icon = variant.icon;

  return (

    <Badge
      variant="outline"
      className={`gap-1 px-3 py-1 ${variant.className}`}
    >

      <Icon className="h-3.5 w-3.5" />

      {status?.replaceAll("_", " ")}

    </Badge>

  );

}