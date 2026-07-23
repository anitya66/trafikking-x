import { z } from "zod";

export const registerSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name is required"),

  email: z
    .email("Please enter a valid email address"),

  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number cannot exceed 15 digits"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),

  role: z
    .string()
    .min(1, "Please select a role"),
});