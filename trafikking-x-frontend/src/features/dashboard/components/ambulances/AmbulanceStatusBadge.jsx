import {
  Ambulance,
  CheckCircle2,
  Radio,
  Settings,
  Truck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

const variants = {

  AVAILABLE: {
    className:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-500",
    icon: CheckCircle2,
  },

  ASSIGNED: {
    className:
      "border-yellow-500/20 bg-yellow-500/10 text-yellow-500",
    icon: Ambulance,
  },

  DISPATCHED: {
    className:
      "border-blue-500/20 bg-blue-500/10 text-blue-500",
    icon: Radio,
  },

  ON_DUTY: {
    className:
      "border-purple-500/20 bg-purple-500/10 text-purple-500",
    icon: Truck,
  },

  MAINTENANCE: {
    className:
      "border-red-500/20 bg-red-500/10 text-red-500",
    icon: Settings,
  },

};

export default function AmbulanceStatusBadge({

  status,

}) {

  const variant =
    variants[status] ??
    {
      className:
        "border-border bg-muted text-muted-foreground",
      icon: Ambulance,
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