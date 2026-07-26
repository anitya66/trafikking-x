import { useMutation } from "@tanstack/react-query";

import { updateMyLocation } from "../services/locationApi";

export function useUpdateLocation() {

  return useMutation({

    mutationFn: updateMyLocation,

  });

}