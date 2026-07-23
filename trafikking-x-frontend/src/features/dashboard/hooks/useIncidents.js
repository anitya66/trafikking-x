import { useQuery } from "@tanstack/react-query";

import { getMyIncidents } from "../services/dashboardApi";

export function useIncidents() {
  return useQuery({
    queryKey: ["incidents"],
    queryFn: getMyIncidents,
    staleTime: 1000 * 60,
    retry: 1,
    refetchOnWindowFocus: false,
  });
}