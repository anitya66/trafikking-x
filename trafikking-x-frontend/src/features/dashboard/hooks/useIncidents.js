import { useQuery } from "@tanstack/react-query";

import { getActiveIncidents } from "../services/dashboardApi";

export function useIncidents() {

  return useQuery({

    queryKey: ["dispatcher-active-incidents"],

    queryFn: getActiveIncidents,

    staleTime: 60000,

    retry: 1,

    refetchOnWindowFocus: false,

  });

}