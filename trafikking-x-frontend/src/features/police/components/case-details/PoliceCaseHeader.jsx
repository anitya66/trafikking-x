import {
  ArrowLeft,
  ShieldAlert,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PoliceCaseHeader({

  policeCase,

  onBack,

}) {

  return (

    <div className="space-y-6">

      {/* Back Button */}

      <Button
        variant="ghost"
        className="w-fit gap-2"
        onClick={onBack}
      >

        <ArrowLeft className="h-4 w-4" />

        Back

      </Button>

      {/* Header */}

      <div className="flex flex-col gap-6 rounded-3xl border bg-card p-6 transition-all lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="flex items-center gap-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

            <ShieldAlert className="h-8 w-8 text-primary" />

          </div>

          <div>

            <p className="text-sm text-muted-foreground">

              Police Emergency Case

            </p>

            <h1 className="mt-1 break-all text-3xl font-bold lg:text-4xl">

              {policeCase.incidentNumber}

            </h1>

            <p className="mt-2 text-muted-foreground">

              {policeCase.incidentType}

            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-wrap items-center gap-3">

          <Badge
            variant={
              policeCase.severity === "HIGH" ||
              policeCase.severity === "CRITICAL"
                ? "destructive"
                : "secondary"
            }
            className="px-4 py-2 text-sm font-semibold"
          >

            {policeCase.severity}

          </Badge>

          <Badge
            variant="outline"
            className="px-4 py-2 text-sm"
          >

            {policeCase.status}

          </Badge>

        </div>

      </div>

    </div>

  );

}