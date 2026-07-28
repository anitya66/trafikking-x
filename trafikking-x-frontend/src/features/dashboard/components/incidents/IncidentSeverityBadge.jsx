import {
  AlertCircle,
  AlertTriangle,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

const variants = {

  LOW: {
    className:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-500",
    icon: ShieldCheck,
  },

  MEDIUM: {
    className:
      "border-yellow-500/20 bg-yellow-500/10 text-yellow-500",
    icon: AlertCircle,
  },

  HIGH: {
    className:
      "border-orange-500/20 bg-orange-500/10 text-orange-500",
    icon: AlertTriangle,
  },

  CRITICAL: {
    className:
      "border-red-500/20 bg-red-500/10 text-red-500",
    icon: ShieldAlert,
  },

};

export default function IncidentSeverityBadge({

  severity,

}) {

  const variant =
    variants[severity] ??
    {
      className:
        "border-border bg-muted text-muted-foreground",
      icon: AlertCircle,
    };

  const Icon = variant.icon;

  return (

    <Badge
      variant="outline"
      className={`gap-1 px-3 py-1 ${variant.className}`}
    >

      <Icon className="h-3.5 w-3.5" />

      {severity}

    </Badge>

  );

}