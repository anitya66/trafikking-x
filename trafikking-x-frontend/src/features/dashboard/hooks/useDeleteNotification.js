import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

import { deleteNotification } from "../services/notificationApi";

export function useDeleteNotification() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteNotification,

    onSuccess: () => {
      toast.success("Notification deleted.");

      queryClient.invalidateQueries({
        queryKey: ["notifications"],
      });

      queryClient.invalidateQueries({
        queryKey: ["unread-notifications"],
      });
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          "Failed to delete notification."
      );
    },
  });
}