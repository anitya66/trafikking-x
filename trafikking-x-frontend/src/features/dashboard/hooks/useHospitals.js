import { useQuery } from "@tanstack/react-query";

import { getHospitals } from "../services/hospitalApi";

export function useHospitals() {

  return useQuery({

    queryKey: ["dispatcher-hospitals"],

    queryFn: getHospitals,

  });

}