import { useEffect, useRef, useState } from "react";

import { Bell } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  useNotifications,
  useUnreadCount,
} from "../hooks/useNotifications";

import { useMarkAllAsRead } from "../hooks/useMarkAllAsRead";
import { useMarkAsRead } from "../hooks/useMarkAsRead";
import { useDeleteNotification } from "../hooks/useDeleteNotification";

import NotificationDropdown from "./NotificationDropdown";

export default function NotificationBell() {

  const [open, setOpen] = useState(false);

  const containerRef = useRef(null);

  const {

    data: notifications = [],

  } = useNotifications();

  const {

    data: unread = 0,

  } = useUnreadCount();

  const markRead = useMarkAsRead();

  const deleteNotification = useDeleteNotification();

  const markAll = useMarkAllAsRead();

  function handleRead(id) {

    markRead.mutate(id);

  }

  function handleDelete(id) {

    deleteNotification.mutate(id);

  }

  useEffect(() => {

    function handleOutsideClick(event) {

      if (

        containerRef.current &&

        !containerRef.current.contains(event.target)

      ) {

        setOpen(false);

      }

    }

    document.addEventListener(

      "mousedown",

      handleOutsideClick

    );

    return () =>

      document.removeEventListener(

        "mousedown",

        handleOutsideClick

      );

  }, []);

  return (

    <div
      ref={containerRef}
      className="relative"
    >

      <Button
        variant="outline"
        size="icon"
        className="relative transition-all duration-300 hover:border-primary hover:bg-primary/10"
        onClick={() =>
          setOpen((previous) => !previous)
        }
      >

        <Bell className="h-5 w-5" />

      </Button>

      {unread > 0 && (

        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 animate-pulse items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white shadow-lg">

          {unread > 99
            ? "99+"
            : unread}

        </span>

      )}

      {open && (

        <div className="absolute right-0 top-14 z-50 w-[360px] max-w-[calc(100vw-2rem)] animate-in fade-in zoom-in-95 duration-200">

          <NotificationDropdown

            notifications={notifications}

            onRead={handleRead}

            onDelete={handleDelete}

            onMarkAllRead={() =>
              markAll.mutate()
            }

            onViewAll={() => {

              setOpen(false);

            }}

          />

        </div>

      )}

    </div>

  );

}