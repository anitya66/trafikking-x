import { useQuery } from "@tanstack/react-query";

import { getHospitals } from "../api/hospitalApi";

export function useHospitals(params) {

  return useQuery({

    queryKey: ["hospitals", params],

    queryFn: () => getHospitals(params),

  });

}