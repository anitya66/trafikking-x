import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { deleteAvatar } from "../api/accountApi";

export function useDeleteAvatar() {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: deleteAvatar,

    onSuccess: () => {

      toast.success("Avatar deleted.");

      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });

    },

  });

}