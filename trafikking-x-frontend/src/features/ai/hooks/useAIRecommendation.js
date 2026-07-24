import { useQuery } from "@tanstack/react-query";

import { getAIRecommendation } from "../services/aiApi";

export function useAIRecommendation(incidentId) {

  return useQuery({

    queryKey: [
      "ai-recommendation",
      incidentId,
    ],

    queryFn: () =>
      getAIRecommendation(incidentId),

    enabled: !!incidentId,

    staleTime: 1000 * 60,

  });

}