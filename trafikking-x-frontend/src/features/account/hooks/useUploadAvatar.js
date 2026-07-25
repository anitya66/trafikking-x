import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { uploadAvatar } from "../api/accountApi";

export function useUploadAvatar() {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: uploadAvatar,

    onSuccess: () => {

      toast.success("Avatar updated.");

      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });

    },

  });

}