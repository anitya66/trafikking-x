import { ArrowLeft, ShieldAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PoliceCaseHeader({
  policeCase,
  onBack,
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <div className="space-y-2">

        <Button
          variant="ghost"
          onClick={onBack}
          className="w-fit"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="flex items-center gap-3">

          <ShieldAlert className="h-8 w-8 text-primary" />

          <div>

            <h1 className="text-3xl font-bold">
              {policeCase.incidentNumber}
            </h1>

            <p className="text-muted-foreground">
              {policeCase.incidentType}
            </p>

          </div>

        </div>

      </div>

      <Badge
        variant={
          policeCase.severity === "HIGH" ||
          policeCase.severity === "CRITICAL"
            ? "destructive"
            : "secondary"
        }
        className="w-fit text-sm"
      >
        {policeCase.severity}
      </Badge>

    </div>
  );
}