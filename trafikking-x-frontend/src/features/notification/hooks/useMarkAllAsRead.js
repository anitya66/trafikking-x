import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { markAllAsRead } from "../api/notificationApi";

export function useMarkAllAsRead() {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: markAllAsRead,

    onSuccess: () => {

      queryClient.invalidateQueries({
        queryKey: ["notifications"],
      });

      queryClient.invalidateQueries({
        queryKey: ["notifications-unread"],
      });

      queryClient.invalidateQueries({
        queryKey: ["notification-unread-count"],
      });

      toast.success("All notifications marked as read.");

    },

  });

}