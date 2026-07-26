import { useMutation, useQueryClient } from "@tanstack/react-query";

import { startJourney } from "../services/assignmentApi";

export function useStartJourney() {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: startJourney,

    onSuccess: () => {

      queryClient.invalidateQueries({
        queryKey: ["current-assignment"],
      });

    },

  });

}