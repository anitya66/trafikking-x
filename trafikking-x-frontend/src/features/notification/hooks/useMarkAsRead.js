
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { markAsRead } from "../api/notificationApi";

export function useMarkAsRead() {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: markAsRead,

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

      toast.success("Notification marked as read.");

    },

  });

}