import { useQuery } from "@tanstack/react-query";

import { getHospitalDashboard } from "../api/hospitalApi";

export function useHospitalDashboard() {

  return useQuery({

    queryKey: ["hospital-dashboard"],

    queryFn: getHospitalDashboard,

    staleTime: 1000 * 30,

    refetchOnWindowFocus: false,

  });

}