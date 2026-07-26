import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { updatePoliceCaseStatus } from "../services/policeDashboardApi";

export function useUpdatePoliceCase() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ caseId, payload }) =>
      updatePoliceCaseStatus(caseId, payload),

    onSuccess: () => {
      toast.success("Case updated successfully.");

      queryClient.invalidateQueries({
        queryKey: ["police-cases"],
      });

      queryClient.invalidateQueries({
        queryKey: ["police-dashboard"],
      });

      queryClient.invalidateQueries({
    queryKey: ["police-case"],
});

queryClient.invalidateQueries({
    queryKey: ["police-history"],
});
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          "Failed to update case."
      );
    },
  });
}