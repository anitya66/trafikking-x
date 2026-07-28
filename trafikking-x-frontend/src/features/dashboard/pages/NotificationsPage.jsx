import { Bell, BellRing } from "lucide-react";

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

      <div className="rounded-3xl border bg-card/40 p-12">

        <div className="flex flex-col items-center text-center">

          <BellRing className="mb-5 h-10 w-10 animate-pulse text-primary" />

          <h3 className="text-xl font-semibold">

            Loading Notifications...

          </h3>

          <p className="mt-2 text-muted-foreground">

            Fetching your latest notifications.

          </p>

        </div>

      </div>

    );

  }

  if (isError) {

    return (

      <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-12">

        <div className="flex flex-col items-center text-center">

          <Bell className="mb-5 h-10 w-10 text-red-500" />

          <h3 className="text-2xl font-bold text-red-500">

            Unable To Load Notifications

          </h3>

          <p className="mt-3 max-w-md text-muted-foreground">

            Something went wrong while loading
            your notification center.

          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-6 rounded-3xl border border-primary/10 bg-card/60 p-6 backdrop-blur lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-primary/10 p-4">

            <Bell className="h-7 w-7 text-primary" />

          </div>

          <div>

            <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">

              Notifications

            </h1>

            <p className="mt-2 text-muted-foreground">

              Stay updated with emergency alerts,
              dispatch updates and system events.

            </p>

          </div>

        </div>

        <div className="flex flex-col gap-3 sm:flex-row">

          <div className="rounded-2xl bg-primary/5 px-6 py-4 text-center">

            <p className="text-xs uppercase tracking-wider text-muted-foreground">

              Total

            </p>

            <p className="mt-1 text-3xl font-black text-primary">

              {notifications.length}

            </p>

          </div>

          <Button
            size="lg"
            disabled={
              readAllMutation.isPending ||
              notifications.length === 0
            }
            onClick={() =>
              readAllMutation.mutate()
            }
          >

            {readAllMutation.isPending
              ? "Marking..."
              : "Mark All Read"}

          </Button>

        </div>

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