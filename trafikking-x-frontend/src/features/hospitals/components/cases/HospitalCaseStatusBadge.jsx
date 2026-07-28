import {
  Activity,
  CheckCircle2,
  Clock3,
  Stethoscope,
  UserCheck,
  UserRoundCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

const CONFIG = {
  ACCEPTED: {
    icon: CheckCircle2,
    className:
      "border-blue-500/20 bg-blue-500/10 text-blue-500",
    label: "Accepted",
  },

  PREPARING_TEAM: {
    icon: Activity,
    className:
      "border-cyan-500/20 bg-cyan-500/10 text-cyan-500",
    label: "Preparing Team",
  },

  PATIENT_ARRIVED: {
    icon: Clock3,
    className:
      "border-amber-500/20 bg-amber-500/10 text-amber-500",
    label: "Patient Arrived",
  },

  TREATMENT_STARTED: {
    icon: Stethoscope,
    className:
      "border-orange-500/20 bg-orange-500/10 text-orange-500",
    label: "Treatment Started",
  },

  TREATMENT_COMPLETED: {
    icon: UserCheck,
    className:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-500",
    label: "Treatment Completed",
  },

  DISCHARGED: {
    icon: UserRoundCheck,
    className:
      "border-slate-500/20 bg-slate-500/10 text-slate-400",
    label: "Discharged",
  },
};

export default function HospitalCaseStatusBadge({
  status,
}) {

  const badge =
    CONFIG[status] ?? {
      icon: Activity,
      className:
        "border-muted bg-muted text-muted-foreground",
      label:
        status?.replaceAll("_", " ") ??
        "Unknown",
    };

  const Icon = badge.icon;

  return (

    <Badge
      variant="outline"
      className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${badge.className}`}
    >

      <Icon className="h-3.5 w-3.5" />

      {badge.label}

    </Badge>

  );

}