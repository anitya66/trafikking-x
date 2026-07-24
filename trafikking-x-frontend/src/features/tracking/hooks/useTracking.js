import { useQuery } from "@tanstack/react-query";

import { getTracking } from "../services/trackingApi";

export function useTracking(dispatchId) {

  return useQuery({

    queryKey: [
      "tracking",
      dispatchId,
    ],

    queryFn: () =>
      getTracking(dispatchId),

    enabled: !!dispatchId,

    refetchInterval: 3000,

    staleTime: 0,

  });

}