import { ClipboardList } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ActiveIncidentsWidget() {
  return (
    <Card className="group relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardHeader className="relative">
        <CardTitle className="flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-primary" />
          Active Incidents
        </CardTitle>
      </CardHeader>

      <CardContent className="relative">

        <div className="rounded-xl border border-dashed p-8 text-center">

          <ClipboardList className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />

          <h3 className="text-lg font-semibold">
            No Active Incidents
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            You don't have any active emergency requests at the moment.
          </p>

        </div>

      </CardContent>

    </Card>
  );
}