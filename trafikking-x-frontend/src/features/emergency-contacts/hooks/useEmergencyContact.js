import { useQuery } from "@tanstack/react-query";

import { getEmergencyContact } from "../api/emergencyContactApi";

export function useEmergencyContact(id) {

  return useQuery({

    queryKey: ["emergency-contact", id],

    queryFn: () => getEmergencyContact(id),

    enabled: !!id,

  });

}