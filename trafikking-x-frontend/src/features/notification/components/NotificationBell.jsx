import { useState } from "react";

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

  const [open,setOpen]=useState(false);

  const {

    data: notifications=[],

  } = useNotifications();

  const {

    data: unread=0,

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

  return(

    <div className="relative">

      <Button
        variant="outline"
        size="icon"
        onClick={()=>setOpen(!open)}
      >

        <Bell className="h-5 w-5"/>

      </Button>

      {unread>0 &&(

        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">

          {unread>99?"99+":unread}

        </span>

      )}

      {open &&(

        <NotificationDropdown

  notifications={notifications}

  onRead={handleRead}

  onDelete={handleDelete}

  onMarkAllRead={() => markAll.mutate()}

  onViewAll={() => {}}

/>

      )}

    </div>

  );

}