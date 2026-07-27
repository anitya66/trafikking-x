import { Badge } from "@/components/ui/badge";

export default function HospitalStatusBadge({

  active,

}) {

  return (

    <Badge
      className={
        active
          ? "bg-green-500/15 text-green-400 border-green-500/20"
          : "bg-red-500/15 text-red-400 border-red-500/20"
      }
    >

      {active ? "ACTIVE" : "INACTIVE"}

    </Badge>

  );

}