import { useQuery } from "@tanstack/react-query";

import { getPoliceStations } from "../services/policeApi";

export function usePoliceStations() {

  return useQuery({

    queryKey: ["dispatcher-police-stations"],

    queryFn: getPoliceStations,

  });

}