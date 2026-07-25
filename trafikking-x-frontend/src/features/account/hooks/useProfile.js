import { useQuery } from "@tanstack/react-query";

import { getMyProfile } from "../api/accountApi";

export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getMyProfile,
  });
}