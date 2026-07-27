import { useQuery } from "@tanstack/react-query";

import { getMissionHistory }
from "../services/missionHistoryApi";

export function useMissionHistory() {

  return useQuery({

    queryKey: ["ambulance-mission-history"],

    queryFn: getMissionHistory,

    staleTime: 1000 * 60,

    refetchOnWindowFocus: false,

  });

}