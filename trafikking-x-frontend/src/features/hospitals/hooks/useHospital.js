import { useQuery } from "@tanstack/react-query";

import { getHospital } from "../api/hospitalApi";

export function useHospital(id) {

  return useQuery({

    queryKey: ["hospital", id],

    queryFn: () => getHospital(id),

    enabled: !!id,

  });

}