import {
  BellOff,
  CheckCircle2,
} from "lucide-react";

export default function NotificationEmpty() {

  return (

    <div className="rounded-3xl border border-dashed border-border bg-card/40 p-16">

      <div className="flex flex-col items-center text-center">

        <div className="mb-6 rounded-3xl bg-primary/10 p-6">

          <BellOff className="h-12 w-12 text-primary" />

        </div>

        <h3 className="text-2xl font-bold">

          No Notifications

        </h3>

        <p className="mt-3 max-w-md text-muted-foreground">

          You're all caught up.
          There are no new notifications requiring your attention.

        </p>

        <div className="mt-8 flex items-center gap-2 rounded-full bg-emerald-500/10 px-5 py-2">

          <CheckCircle2 className="h-4 w-4 text-emerald-500" />

          <span className="text-sm font-medium text-emerald-500">

            Inbox Clean

          </span>

        </div>

      </div>

    </div>

  );

}