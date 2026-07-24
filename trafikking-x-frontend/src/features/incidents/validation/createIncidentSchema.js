import { z } from "zod";

export const createIncidentSchema = z.object({
  incidentType: z
    .string()
    .min(1, "Please select an incident type."),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters.")
    .max(1000, "Description is too long."),

  latitude: z.number(),

  longitude: z.number(),

  address: z
    .string()
    .min(3, "Address is required."),
});