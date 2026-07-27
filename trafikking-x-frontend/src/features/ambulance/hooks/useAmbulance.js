import { useQuery } from "@tanstack/react-query";

import {
  getMyAmbulance,
} from "../services/ambulanceApi";

export function useAmbulance() {

  return useQuery({

    queryKey: ["my-ambulance"],

    queryFn: getMyAmbulance,

    staleTime: 1000 * 60,

    refetchOnWindowFocus: false,

  });

}