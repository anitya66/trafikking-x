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
      className={`rounded-2xl border p-4 transition-all hover:shadow-md ${
        notification.read
          ? "border-border bg-card"
          : "border-primary/20 bg-primary/5"
      }`}
    >

      <div className="flex items-start justify-between">

        <div className="flex gap-3">

          <div className="rounded-xl bg-primary/10 p-3">

            <Bell className="h-5 w-5 text-primary" />

          </div>

          <div>

            <h3 className="font-semibold">

              {notification.title}

            </h3>

            <p className="mt-1 text-sm text-muted-foreground">

              {notification.message}

            </p>

            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">

              <Clock className="h-4 w-4" />

              {notification.createdAt}

            </div>

          </div>

        </div>

        <div className="flex gap-2">

          {!notification.read && (

            <Button
              size="icon"
              variant="outline"
              onClick={() => onRead(notification.id)}
            >

              <Check className="h-4 w-4"/>

            </Button>

          )}

          <Button
            size="icon"
            variant="destructive"
            onClick={() => onDelete(notification.id)}
          >

            <Trash2 className="h-4 w-4"/>

          </Button>

        </div>

      </div>

    </div>

  );

}