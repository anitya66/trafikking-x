import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { acceptPoliceCase } from "../services/policeDashboardApi";

export function useAcceptPoliceCase() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: acceptPoliceCase,

    onSuccess: () => {
      toast.success("Case accepted successfully.");

      queryClient.invalidateQueries({
        queryKey: ["police-cases"],
      });

      queryClient.invalidateQueries({
        queryKey: ["police-dashboard"],
      });

      queryClient.invalidateQueries({
        queryKey: ["police-history"],
      });
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to accept case."
      );
    },
  });
}