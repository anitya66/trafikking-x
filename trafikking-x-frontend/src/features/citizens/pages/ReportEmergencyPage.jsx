import { useState } from "react";
import { Navigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

import ReportEmergencyDialog from "../components/ReportEmergencyDialog";

export default function ReportEmergencyPage() {
  const [open, setOpen] = useState(true);

  if (!open) {
    return <Navigate to="/citizen" replace />;
  }

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-6">

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      </div>

      <div className="relative flex flex-col items-center gap-5 text-center">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">

          <AlertTriangle className="h-10 w-10 text-red-500 animate-pulse" />

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Emergency Reporting
          </h2>

          <p className="mt-2 text-muted-foreground">
            Preparing the emergency reporting interface...
          </p>

        </div>

      </div>

      <ReportEmergencyDialog
        open={open}
        onOpenChange={setOpen}
      />

    </div>
  );
}