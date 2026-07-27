import { BellOff } from "lucide-react";

export default function NotificationEmpty() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed p-16 text-center">
      <BellOff className="mb-4 h-12 w-12 text-muted-foreground" />

      <h3 className="text-lg font-semibold">
        No Notifications
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        You're all caught up.
      </p>
    </div>
  );
}