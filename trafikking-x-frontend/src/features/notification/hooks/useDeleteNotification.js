import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { deleteNotification } from "../api/notificationApi";

export function useDeleteNotification() {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: deleteNotification,

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

      toast.success("Notification deleted.");

    },

  });

}