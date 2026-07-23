import { useQuery } from "@tanstack/react-query";

import { getRecentIncidents } from "@/services/dashboardApi";

export function useRecentIncidents() {
  return useQuery({
    queryKey: ["dashboard-recent-incidents"],
    queryFn: getRecentIncidents,
  });
}