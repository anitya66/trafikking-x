import { TriangleAlert } from "lucide-react";

export default function IncidentFeedError() {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/5">

      <TriangleAlert className="mb-4 h-12 w-12 text-red-500" />

      <h3 className="text-lg font-semibold">
        Unable to Load Incidents
      </h3>

      <p className="mt-2 text-center text-sm text-muted-foreground">
        Please check your connection or try again later.
      </p>

    </div>
  );
}