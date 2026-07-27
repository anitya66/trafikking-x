import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

import { markNotificationRead } from "../services/notificationApi";

export function useMarkNotificationRead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: markNotificationRead,

    onSuccess: () => {
      toast.success("Notification marked as read.");

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
          "Failed to mark notification."
      );
    },
  });
}