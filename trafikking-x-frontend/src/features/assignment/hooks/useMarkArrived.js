import { useMutation, useQueryClient } from "@tanstack/react-query";

import { markArrived } from "../services/assignmentApi";

export function useMarkArrived() {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: markArrived,

    onSuccess: () => {

      queryClient.invalidateQueries({
        queryKey: ["current-assignment"],
      });

    },

  });

}