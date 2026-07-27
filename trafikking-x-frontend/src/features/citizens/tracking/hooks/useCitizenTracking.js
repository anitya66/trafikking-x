import { useQuery } from "@tanstack/react-query";

import api from "@/config/axios";

async function getCitizenTracking() {

  const response = await api.get(
    "/citizen/tracking"
  );

  return response.data.data;

}

export function useCitizenTracking() {

  return useQuery({

    queryKey: [
      "citizen-tracking",
    ],

    queryFn:
      getCitizenTracking,

    refetchOnWindowFocus:
      false,

  });

}