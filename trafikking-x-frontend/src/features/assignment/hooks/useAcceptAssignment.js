import { useMutation, useQueryClient } from "@tanstack/react-query";

import { acceptAssignment } from "../services/assignmentApi";

export function useAcceptAssignment() {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: acceptAssignment,

    onSuccess: () => {

      queryClient.invalidateQueries({
        queryKey: ["current-assignment"],
      });

    },

  });

}