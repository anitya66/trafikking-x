import { useMutation } from "@tanstack/react-query";
import { createIncident } from "../services/incidentService";

export function useCreateIncident() {
  return useMutation({
    mutationFn: createIncident,
  });
}