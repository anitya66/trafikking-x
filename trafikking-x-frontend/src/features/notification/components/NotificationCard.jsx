import {
  Bell,
  Check,
  Clock,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotificationCard({

  notification,

  onRead,

  onDelete,

}) {

  return (

    <div
      className={`group overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        notification.read
          ? "border-border bg-card"
          : "border-primary/20 bg-primary/5"
      }`}
    >

      {/* Top Accent */}

      <div
        className={`h-1 ${
          notification.read
            ? "bg-border"
            : "bg-gradient-to-r from-primary via-cyan-500 to-emerald-500"
        }`}
      />

      <div className="p-6">

        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

          {/* Left */}

          <div className="flex flex-1 gap-4">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">

              <Bell className="h-6 w-6 text-primary" />

            </div>

            <div className="min-w-0 flex-1">

              <div className="flex flex-wrap items-center gap-2">

                <h3 className="text-lg font-semibold">

                  {notification.title}

                </h3>

                {!notification.read && (

                  <span className="rounded-full bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">

                    New

                  </span>

                )}

              </div>

              <p className="mt-2 break-words text-sm leading-6 text-muted-foreground">

                {notification.message}

              </p>

              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">

                <Clock className="h-4 w-4" />

                <span>

                  {notification.createdAt}

                </span>

              </div>

            </div>

          </div>

          {/* Actions */}

          <div className="flex shrink-0 gap-2 self-end sm:self-start">

            {!notification.read && (

              <Button
                size="icon"
                variant="outline"
                className="transition hover:border-green-500 hover:bg-green-500/10"
                onClick={() => onRead(notification.id)}
              >

                <Check className="h-4 w-4 text-green-500" />

              </Button>

            )}

            <Button
              size="icon"
              variant="destructive"
              onClick={() => onDelete(notification.id)}
            >

              <Trash2 className="h-4 w-4" />

            </Button>

          </div>

        </div>

      </div>

    </div>

  );

}