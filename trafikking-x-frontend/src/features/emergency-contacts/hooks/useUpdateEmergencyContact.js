import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

import { updateEmergencyContact } from "../api/emergencyContactApi";

export function useUpdateEmergencyContact() {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: ({ id, payload }) =>

      updateEmergencyContact(id, payload),

    onSuccess: () => {

      toast.success("Emergency contact updated successfully.");

      queryClient.invalidateQueries({

        queryKey: ["emergency-contacts"],

      });

    },

    onError: (error) => {

      toast.error(

        error?.response?.data?.message ??

        "Failed to update emergency contact."

      );

    },

  });

}