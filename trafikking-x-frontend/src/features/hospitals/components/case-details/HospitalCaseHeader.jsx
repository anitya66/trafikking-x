import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

import HospitalCaseStatusBadge
  from "../cases/HospitalCaseStatusBadge";

export default function HospitalCaseHeader({

  hospitalCase,

  onBack,

}) {

  return (

    <div className="space-y-6">

      <Button
        variant="ghost"
        className="gap-2"
        onClick={onBack}
      >
        <ArrowLeft className="h-4 w-4" />

        Back

      </Button>

      <div className="flex flex-col gap-6 rounded-2xl border bg-card p-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-sm text-muted-foreground">

            Hospital Case

          </p>

          <h1 className="mt-2 text-3xl font-bold">

            {hospitalCase.incidentNumber}

          </h1>

          <p className="mt-2 text-muted-foreground">

            {hospitalCase.patientName}

          </p>

        </div>

        <div className="flex items-center gap-4">

          <ShieldCheck className="h-10 w-10 text-primary" />

          <HospitalCaseStatusBadge

            status={hospitalCase.status}

          />

        </div>

      </div>

    </div>

  );

}