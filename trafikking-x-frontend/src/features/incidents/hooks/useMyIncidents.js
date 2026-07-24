import { useQuery } from "@tanstack/react-query";

import { getMyIncidents } from "../services/incidentApi";

export function useMyIncidents() {
  return useQuery({
    queryKey: ["my-incidents"],
    queryFn: getMyIncidents,
  });
}