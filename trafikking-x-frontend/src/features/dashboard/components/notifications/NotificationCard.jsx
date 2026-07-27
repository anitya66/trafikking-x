import { formatDistanceToNow } from "date-fns";

import {
  Bell,
  Trash2,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import NotificationStatusBadge
  from "./NotificationStatusBadge";

export default function NotificationCard({

  notification,

  onRead,

  onDelete,

}) {

  return (

    <div className="rounded-xl border bg-card p-5 transition hover:border-primary">

      <div className="flex items-start justify-between gap-4">

        <div className="flex gap-4">

          <div className="rounded-full bg-primary/10 p-3">
            <Bell className="h-5 w-5 text-primary" />
          </div>

          <div>

            <h3 className="font-semibold">
              {notification.title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {notification.message}
            </p>

            <div className="mt-3 flex items-center gap-3">

              <NotificationStatusBadge
                isRead={notification.isRead}
              />

              <span className="text-xs text-muted-foreground">
                {formatDistanceToNow(
                  new Date(notification.createdAt),
                  {
                    addSuffix: true,
                  }
                )}
              </span>

            </div>

          </div>

        </div>

        <div className="flex gap-2">

          {!notification.isRead && (

            <Button
              size="icon"
              variant="outline"
              onClick={() => onRead(notification.id)}
            >
              <CheckCircle2 className="h-4 w-4" />
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

  );

}