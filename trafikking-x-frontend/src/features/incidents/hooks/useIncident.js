import { useQuery } from "@tanstack/react-query";

import { getIncidentById } from "../services/incidentApi";

export function useIncident(id) {
  return useQuery({
    queryKey: ["incident", id],
    queryFn: () => getIncidentById(id),
    enabled: !!id,
  });
}