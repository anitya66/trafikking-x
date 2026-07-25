import { z } from "zod";

export const profileSchema = z.object({

  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters.")
    .max(100),

  phoneNumber: z
    .string()
    .regex(
      /^[6-9]\d{9}$/,
      "Enter a valid phone number."
    ),

  bio: z
    .string()
    .max(500)
    .optional(),

  address: z
    .string()
    .max(255)
    .optional(),

  organization: z
    .string()
    .max(255)
    .optional(),

});