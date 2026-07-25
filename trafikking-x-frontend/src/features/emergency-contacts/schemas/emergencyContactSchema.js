import { z } from "zod";

export const emergencyContactSchema = z.object({

  contactName: z
    .string()
    .min(2, "Name is required."),

  contactPhone: z
    .string()
    .regex(
      /^[6-9]\d{9}$/,
      "Enter a valid 10-digit mobile number."
    ),

  relationship: z
    .string()
    .min(1, "Relationship is required."),

  priority: z
    .number({
      required_error: "Priority is required.",
    })
    .min(1)
    .max(5),

  primaryContact: z.boolean(),

});