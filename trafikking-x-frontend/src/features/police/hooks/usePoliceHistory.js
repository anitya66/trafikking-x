import { useQuery } from "@tanstack/react-query";
import { getPoliceHistory } from "../services/policeDashboardApi";

export function usePoliceHistory() {
  return useQuery({
    queryKey: ["police-history"],
    queryFn: getPoliceHistory,
  });
}