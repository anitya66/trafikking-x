import { useQuery } from "@tanstack/react-query";

import { getMapOverview } from "../services/mapApi";

export function useMapOverview() {
  return useQuery({
    queryKey: ["map-overview"],
    queryFn: getMapOverview,
  });
}