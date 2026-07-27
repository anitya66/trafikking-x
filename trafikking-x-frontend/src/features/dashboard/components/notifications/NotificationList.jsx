import NotificationCard from "./NotificationCard";
import NotificationEmpty from "./NotificationEmpty";

export default function NotificationList({

  notifications,

  onRead,

  onDelete,

}) {

  if (!notifications.length) {

    return <NotificationEmpty />;

  }

  return (

    <div className="space-y-4">

      {notifications.map((notification) => (

        <NotificationCard

          key={notification.id}

          notification={notification}

          onRead={onRead}

          onDelete={onDelete}

        />

      ))}

    </div>

  );

}