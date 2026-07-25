import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

import { createEmergencyContact } from "../api/emergencyContactApi";

export function useCreateEmergencyContact() {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: createEmergencyContact,

    onSuccess: () => {

      toast.success("Emergency contact added successfully.");

      queryClient.invalidateQueries({

        queryKey: ["emergency-contacts"],

      });

    },

    onError: (error) => {

      toast.error(

        error?.response?.data?.message ??

        "Failed to add emergency contact."

      );

    },

  });

}