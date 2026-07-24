import { useQuery } from "@tanstack/react-query";

import {
  getNotifications,
  getUnreadNotifications,
  getUnreadCount,
} from "../services/notificationApi";

export function useNotifications() {

  return useQuery({

    queryKey: ["notifications"],

    queryFn: getNotifications,

  });

}

export function useUnreadNotifications() {

  return useQuery({

    queryKey: ["notifications-unread"],

    queryFn: getUnreadNotifications,

  });

}

export function useUnreadCount() {

  return useQuery({

    queryKey: ["notification-unread-count"],

    queryFn: getUnreadCount,

  });

}