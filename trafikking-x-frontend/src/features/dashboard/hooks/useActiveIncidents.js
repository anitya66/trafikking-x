import { useQuery } from "@tanstack/react-query";

import { getActiveIncidents } from "../services/incidentApi";

export function useActiveIncidents() {
  return useQuery({
    queryKey: ["dispatcher-active-incidents"],
    queryFn: getActiveIncidents,
  });
}