import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

import { acceptPatient } from "../services/hospitalPatientApi";

export function useAcceptPatient() {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: ({ dispatchId, payload }) =>
      acceptPatient(dispatchId, payload),

    onSuccess: () => {

      toast.success(
        "Patient accepted successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["hospital-incoming-patients"],
      });

      queryClient.invalidateQueries({
        queryKey: ["hospital-dashboard"],
      });

    },

  });

}