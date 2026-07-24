import { useState } from "react";

import { AlertTriangle, ArrowRight } from "lucide-react";

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
    <Card className="group relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardHeader className="relative">

        <CardTitle className="flex items-center gap-2">

          <AlertTriangle className="h-5 w-5 text-red-500" />

          Report Emergency

        </CardTitle>

      </CardHeader>

      <CardContent className="relative space-y-6">

        <p className="text-sm text-muted-foreground">
          Quickly report a medical, fire, accident or crime emergency.
          Our AI will help classify and dispatch the nearest responders.
        </p>

        <Button
  className="w-full"
  size="lg"
  onClick={() => setOpen(true)}
>
          Report Emergency

          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

      </CardContent>

      <ReportEmergencyDialog
  open={open}
  onOpenChange={setOpen}
/>

    </Card>
  );
}