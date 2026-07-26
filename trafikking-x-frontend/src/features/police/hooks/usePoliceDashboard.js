import { useQuery } from "@tanstack/react-query";
import { getPoliceDashboard } from "../services/policeDashboardApi";

export function usePoliceDashboard() {
  return useQuery({
    queryKey: ["police-dashboard"],
    queryFn: getPoliceDashboard,
  });
}