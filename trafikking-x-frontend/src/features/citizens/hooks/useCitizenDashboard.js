import { useQuery } from "@tanstack/react-query";

import { getCitizenDashboard } from "../services/citizenApi";

export function useCitizenDashboard() {
  return useQuery({
    queryKey: ["citizen-dashboard"],
    queryFn: getCitizenDashboard,
    staleTime: 60 * 1000,
  });
}