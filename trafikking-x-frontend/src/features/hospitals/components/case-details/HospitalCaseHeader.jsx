import {
  ArrowLeft,
  ShieldCheck,
  UserRound,
  FileText,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import HospitalCaseStatusBadge
  from "../cases/HospitalCaseStatusBadge";

export default function HospitalCaseHeader({

  hospitalCase,

  onBack,

}) {

  return (

    <div className="space-y-6">

      {/* Back Button */}

      <Button
        variant="ghost"
        className="gap-2 px-0 hover:bg-transparent"
        onClick={onBack}
      >

        <ArrowLeft className="h-4 w-4" />

        Back to Incoming Cases

      </Button>

      {/* Header */}

      <div className="overflow-hidden rounded-3xl border border-border bg-card">

        <div className="h-2 bg-gradient-to-r from-primary via-cyan-400 to-blue-500" />

        <div className="flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}

          <div className="space-y-5">

            <div>

              <p className="text-sm uppercase tracking-widest text-muted-foreground">

                Hospital Emergency Case

              </p>

              <h1 className="mt-2 text-3xl font-black lg:text-4xl">

                {hospitalCase.incidentNumber}

              </h1>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3 rounded-2xl border bg-card/40 p-4">

                <UserRound className="h-5 w-5 text-primary" />

                <div>

                  <p className="text-xs uppercase tracking-wide text-muted-foreground">

                    Patient

                  </p>

                  <p className="font-semibold">

                    {hospitalCase.patientName}

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-2xl border bg-card/40 p-4">

                <FileText className="h-5 w-5 text-cyan-500" />

                <div>

                  <p className="text-xs uppercase tracking-wide text-muted-foreground">

                    Case Number

                  </p>

                  <p className="font-semibold">

                    {hospitalCase.incidentNumber}

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex flex-col items-start gap-5 lg:items-end">

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10">

              <ShieldCheck className="h-10 w-10 text-primary" />

            </div>

            <HospitalCaseStatusBadge
              status={hospitalCase.status}
            />

          </div>

        </div>

      </div>

    </div>

  );

}