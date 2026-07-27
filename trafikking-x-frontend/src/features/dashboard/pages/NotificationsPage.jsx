import { Bell } from "lucide-react";

import { Button } from "@/components/ui/button";

import NotificationList
  from "../components/notifications/NotificationList";

import { useNotifications }
  from "../hooks/useNotifications";

import { useMarkNotificationRead }
  from "../hooks/useMarkNotificationRead";

import { useMarkAllNotificationsRead }
  from "../hooks/useMarkAllNotificationsRead";

import { useDeleteNotification }
  from "../hooks/useDeleteNotification";

export default function NotificationsPage() {

  const {

    data: notifications = [],

    isLoading,

    isError,

  } = useNotifications();

  const readMutation =
    useMarkNotificationRead();

  const readAllMutation =
    useMarkAllNotificationsRead();

  const deleteMutation =
    useDeleteNotification();

  if (isLoading) {

    return (

      <div className="rounded-xl border p-12 text-center">

        Loading notifications...

      </div>

    );

  }

  if (isError) {

    return (

      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-red-400">

        Failed to load notifications.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-primary/10 p-3">

            <Bell className="h-6 w-6 text-primary" />

          </div>

          <div>

            <h1 className="text-4xl font-bold">

              Notifications

            </h1>

            <p className="text-muted-foreground">

              View and manage system notifications.

            </p>

          </div>

        </div>

        <Button
          onClick={() =>
            readAllMutation.mutate()
          }
        >
          Mark All Read
        </Button>

      </div>

      <NotificationList

        notifications={notifications}

        onRead={(id) =>
          readMutation.mutate(id)
        }

        onDelete={(id) =>
          deleteMutation.mutate(id)
        }

      />

    </div>

  );

}