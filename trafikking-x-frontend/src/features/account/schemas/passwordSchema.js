import { z } from "zod";

export const passwordSchema = z.object({

  currentPassword: z
    .string()
    .min(8, "Current password is required."),

  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password must contain uppercase, lowercase and number."
    ),

  confirmPassword: z.string(),

}).refine(
  (data) => data.newPassword === data.confirmPassword,
  {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  }
);