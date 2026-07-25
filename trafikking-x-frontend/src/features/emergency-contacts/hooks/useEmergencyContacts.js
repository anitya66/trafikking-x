import { useQuery } from "@tanstack/react-query";

import { getEmergencyContacts } from "../api/emergencyContactApi";

export function useEmergencyContacts() {

  return useQuery({

    queryKey: ["emergency-contacts"],

    queryFn: getEmergencyContacts,

  });

}