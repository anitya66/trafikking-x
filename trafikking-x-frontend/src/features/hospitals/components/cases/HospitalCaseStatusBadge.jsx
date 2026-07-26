import { Badge } from "@/components/ui/badge";

const variants = {
  ACCEPTED:
    "bg-blue-500/10 text-blue-500 border-blue-500/20",

  PREPARING_TEAM:
    "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",

  PATIENT_ARRIVED:
    "bg-amber-500/10 text-amber-500 border-amber-500/20",

  TREATMENT_STARTED:
    "bg-orange-500/10 text-orange-500 border-orange-500/20",

  TREATMENT_COMPLETED:
    "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",

  DISCHARGED:
    "bg-slate-500/10 text-slate-400 border-slate-500/20",
};

export default function HospitalCaseStatusBadge({
  status,
}) {

  return (

    <Badge
      variant="outline"
      className={
        variants[status] ??
        "bg-muted text-muted-foreground"
      }
    >
      {status?.replaceAll("_", " ")}
    </Badge>

  );

}