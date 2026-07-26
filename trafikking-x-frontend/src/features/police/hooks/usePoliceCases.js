import { useQuery } from "@tanstack/react-query";
import { getPoliceCases } from "../services/policeDashboardApi";

export function usePoliceCases() {
  return useQuery({
    queryKey: ["police-cases"],
    queryFn: getPoliceCases,
  });
}