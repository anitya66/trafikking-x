import { Button } from "@/components/ui/button";

import NotificationCard from "./NotificationCard";

export default function NotificationDropdown({

  notifications,

  onRead,

  onDelete,

  onViewAll,

  onMarkAllRead,

}){

  return (

    <div className="absolute right-0 top-14 z-50 w-[420px] rounded-2xl border border-border bg-background p-5 shadow-2xl">

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-lg font-semibold">

          Notifications

        </h2>

        <div className="flex gap-2">

  <Button
    variant="ghost"
    onClick={onMarkAllRead}
  >
    Mark All
  </Button>

  <Button
    variant="ghost"
    onClick={onViewAll}
  >
    View All
  </Button>

</div>

      </div>

      <div className="space-y-3">

        {notifications.length === 0 ? (

          <div className="py-10 text-center text-muted-foreground">

            No notifications

          </div>

        ) : (

          notifications
            .slice(0,5)
            .map((notification) => (

              <NotificationCard
                key={notification.id}
                notification={notification}
                onRead={onRead}
                onDelete={onDelete}
              />

            ))

        )}

      </div>

    </div>

  );

}