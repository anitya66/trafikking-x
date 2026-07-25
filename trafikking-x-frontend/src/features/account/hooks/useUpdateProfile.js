import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { updateProfile } from "../api/accountApi";

export function useUpdateProfile() {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: updateProfile,

    onSuccess: () => {

      toast.success("Profile updated successfully.");

      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });

    },

  });

}