import { Inbox } from "lucide-react";

export default function EmptyIncidentFeed() {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-border">

      <Inbox className="mb-4 h-12 w-12 text-muted-foreground" />

      <h3 className="text-lg font-semibold">
        No Active Incidents
      </h3>

      <p className="mt-2 text-center text-sm text-muted-foreground">
        All emergency incidents have been resolved.
      </p>

    </div>
  );
}