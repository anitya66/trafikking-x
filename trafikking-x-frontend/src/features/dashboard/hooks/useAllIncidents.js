import { useQuery } from "@tanstack/react-query";

import { getAllIncidents } from "../services/incidentApi";

export function useAllIncidents() {
  return useQuery({
    queryKey: ["dispatcher-all-incidents"],
    queryFn: getAllIncidents,
  });
}