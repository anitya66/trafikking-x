import {
  Bell,
  BellOff,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import NotificationCard from "./NotificationCard";

export default function NotificationDropdown({

  notifications,

  onRead,

  onDelete,

  onViewAll,

  onMarkAllRead,

}) {

  return (

    <div className="w-full overflow-hidden rounded-3xl border border-border bg-background shadow-2xl">

      {/* Header */}

      <div className="border-b border-border bg-card/50 p-5">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">

              <Bell className="h-5 w-5 text-primary" />

            </div>

            <div>

              <h2 className="text-lg font-semibold">

                Notifications

              </h2>

              <p className="text-sm text-muted-foreground">

                Latest emergency updates

              </p>

            </div>

          </div>

          <div className="flex flex-wrap gap-2">

            <Button
              variant="outline"
              size="sm"
              onClick={onMarkAllRead}
            >

              Mark All

            </Button>

            <Button
              size="sm"
              onClick={onViewAll}
            >

              View All

            </Button>

          </div>

        </div>

      </div>

      {/* Notification List */}

      <div className="max-h-[500px] overflow-y-auto p-5">

        {notifications.length === 0 ? (

          <div className="flex flex-col items-center justify-center py-14 text-center">

            <div className="mb-5 rounded-3xl bg-primary/10 p-5">

              <BellOff className="h-10 w-10 text-primary" />

            </div>

            <h3 className="text-lg font-semibold">

              No Notifications

            </h3>

            <p className="mt-2 max-w-xs text-sm text-muted-foreground">

              You're all caught up. New emergency
              notifications will appear here.

            </p>

          </div>

        ) : (

          <div className="space-y-4">

            {notifications
              .slice(0, 5)
              .map((notification) => (

                <NotificationCard

                  key={notification.id}

                  notification={notification}

                  onRead={onRead}

                  onDelete={onDelete}

                />

              ))}

          </div>

        )}

      </div>

    </div>

  );

}