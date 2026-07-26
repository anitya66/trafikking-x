import { useQuery } from "@tanstack/react-query";

import { getHospitalCaseHistory }
  from "../services/hospitalCaseHistoryApi";

export function useHospitalCaseHistory() {

  return useQuery({

    queryKey: ["hospital-case-history"],

    queryFn: getHospitalCaseHistory,

  });

}