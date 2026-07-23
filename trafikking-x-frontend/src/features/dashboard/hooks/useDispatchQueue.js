import { useQuery } from "@tanstack/react-query";

import { getDispatchQueue } from "@/services/dashboardApi";

export function useDispatchQueue() {
  return useQuery({
    queryKey: ["dashboard-dispatch-queue"],
    queryFn: getDispatchQueue,
  });
}