import { useQuery } from "@tanstack/react-query";

import { getAmbulances } from "../services/ambulanceApi";

export function useAmbulance() {

  return useQuery({

    queryKey: ["ambulances"],

    queryFn: getAmbulances,

    staleTime: 1000 * 60,

    refetchOnWindowFocus: false,

  });

}