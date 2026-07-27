import { useQuery } from "@tanstack/react-query";

import { getUnreadNotifications } from "../services/notificationApi";

export function useUnreadNotifications() {
  return useQuery({
    queryKey: ["unread-notifications"],

    queryFn: getUnreadNotifications,
  });
}