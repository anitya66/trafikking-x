import { useQuery } from "@tanstack/react-query";

import { getNotifications } from "../services/notificationApi";

export function useNotifications() {
  return useQuery({
    queryKey: ["notifications"],

    queryFn: getNotifications,
  });
}