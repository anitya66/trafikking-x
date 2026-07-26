import { useQuery } from "@tanstack/react-query";

import { getCurrentAssignment } from "../services/assignmentApi";

export function useCurrentAssignment() {

  return useQuery({

    queryKey: ["current-assignment"],

    queryFn: getCurrentAssignment,

    staleTime: 0,

    retry: false,

    refetchOnWindowFocus: false,

  });

}