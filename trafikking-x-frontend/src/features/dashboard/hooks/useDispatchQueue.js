import { useQuery } from "@tanstack/react-query";

import { getDispatchQueue } from "../services/dispatchApi";

export function useDispatchQueue() {

  return useQuery({

    queryKey: ["dispatch-queue"],

    queryFn: getDispatchQueue,

  });

}