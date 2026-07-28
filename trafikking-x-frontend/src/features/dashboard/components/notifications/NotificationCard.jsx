import { formatDistanceToNow } from "date-fns";

import {
  Bell,
  CheckCircle2,
  Clock3,
  Trash2,
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

    <div className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">

      {/* Top Accent */}

      <div className="h-1 bg-gradient-to-r from-primary via-cyan-400 to-blue-500" />

      <div className="p-6">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

          {/* Left */}

          <div className="flex flex-1 gap-4">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">

              <Bell className="h-7 w-7 text-primary" />

            </div>

            <div className="min-w-0 flex-1">

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <h3 className="text-lg font-semibold">

                  {notification.title}

                </h3>

                <NotificationStatusBadge

                  isRead={notification.isRead}

                />

              </div>

              <p className="mt-4 leading-7 text-muted-foreground">

                {notification.message}

              </p>

              <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">

                <Clock3 className="h-4 w-4" />

                {formatDistanceToNow(

                  new Date(notification.createdAt),

                  {

                    addSuffix: true,

                  }

                )}

              </div>

            </div>

          </div>

          {/* Actions */}

          <div className="flex shrink-0 gap-3 self-end lg:self-start">

            {!notification.isRead && (

              <Button

                variant="outline"

                size="icon"

                onClick={() =>

                  onRead(notification.id)

                }

              >

                <CheckCircle2 className="h-4 w-4 text-emerald-500" />

              </Button>

            )}

            <Button

              variant="destructive"

              size="icon"

              onClick={() =>

                onDelete(notification.id)

              }

            >

              <Trash2 className="h-4 w-4" />

            </Button>

          </div>

        </div>

      </div>

    </div>

  );

}