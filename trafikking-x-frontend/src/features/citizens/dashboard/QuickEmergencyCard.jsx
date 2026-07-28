import { useState } from "react";

import {
  AlertTriangle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ReportEmergencyDialog from "@/features/incidents/components/ReportEmergencyDialog";

export default function QuickEmergencyCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className="group relative overflow-hidden border-red-500/15 transition-all duration-300 hover:border-red-500/30">

        {/* Background Glow */}

        <div className="absolute inset-0 bg-gradient-to-br from-red-500/15 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />

        <CardHeader className="relative">

          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1">

            <Sparkles className="h-4 w-4 text-red-400" />

            <span className="text-xs font-semibold uppercase tracking-wider text-red-300">
              Emergency Action
            </span>

          </div>

          <CardTitle className="flex items-center gap-3 text-2xl">

            <AlertTriangle className="h-7 w-7 text-red-500" />

            Report Emergency

          </CardTitle>

        </CardHeader>

        <CardContent className="relative">

          <p className="max-w-2xl text-sm leading-7 text-muted-foreground">

            Instantly report medical, fire, accident or crime emergencies.
            Our AI analyzes the situation and dispatches the nearest available
            emergency responders in real time.

          </p>

          <Button
            size="lg"
            className="mt-8 h-12 w-full md:w-auto"
            onClick={() => setOpen(true)}
          >
            Report Emergency Now

            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>

        </CardContent>

      </Card>

      <ReportEmergencyDialog
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}