import { useQuery } from "@tanstack/react-query";

import { getCitizens } from "../services/citizenApi";

export function useCitizens() {

  return useQuery({

    queryKey: ["dispatcher-citizens"],

    queryFn: getCitizens,

  });

}