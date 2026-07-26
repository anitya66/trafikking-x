import { useQuery } from "@tanstack/react-query";

import { getIncomingPatients } from "../services/hospitalPatientApi";

export function useIncomingPatients() {

  return useQuery({

    queryKey: ["hospital-incoming-patients"],

    queryFn: getIncomingPatients,

  });

}