import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

import { markAllNotificationsRead } from "../services/notificationApi";

export function useMarkAllNotificationsRead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: markAllNotificationsRead,

    onSuccess: () => {
      toast.success("All notifications marked as read.");

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
          "Failed to update notifications."
      );
    },
  });
}