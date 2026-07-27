import { useQuery } from "@tanstack/react-query";

import { getAmbulances } from "../services/ambulanceApi";

export function useAmbulances() {

  return useQuery({

    queryKey: ["dispatcher-ambulances"],

    queryFn: getAmbulances,

  });

}