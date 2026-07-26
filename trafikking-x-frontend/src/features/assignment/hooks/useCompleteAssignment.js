import { useMutation, useQueryClient } from "@tanstack/react-query";

import { completeAssignment } from "../services/assignmentApi";

export function useCompleteAssignment() {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: completeAssignment,

    onSuccess: () => {

      queryClient.invalidateQueries({
        queryKey: ["current-assignment"],
      });

    },

  });

}