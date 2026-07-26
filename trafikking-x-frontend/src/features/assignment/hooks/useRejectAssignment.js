import { useMutation, useQueryClient } from "@tanstack/react-query";

import { rejectAssignment } from "../services/assignmentApi";

export function useRejectAssignment() {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: rejectAssignment,

    onSuccess: () => {

      queryClient.invalidateQueries({
        queryKey: ["current-assignment"],
      });

    },

  });

}