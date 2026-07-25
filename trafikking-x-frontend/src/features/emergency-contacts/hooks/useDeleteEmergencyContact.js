import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

import { deleteEmergencyContact } from "../api/emergencyContactApi";

export function useDeleteEmergencyContact() {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: deleteEmergencyContact,

    onSuccess: () => {

      toast.success("Emergency contact deleted successfully.");

      queryClient.invalidateQueries({

        queryKey: ["emergency-contacts"],

      });

    },

    onError: (error) => {

      toast.error(

        error?.response?.data?.message ??

        "Failed to delete emergency contact."

      );

    },

  });

}