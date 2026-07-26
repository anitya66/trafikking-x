import { useQuery } from "@tanstack/react-query";
import { getPoliceCase } from "../services/policeDashboardApi";

export function usePoliceCase(caseId) {
  return useQuery({
    queryKey: ["police-case", caseId],
    queryFn: () => getPoliceCase(caseId),
    enabled: !!caseId,
  });
}