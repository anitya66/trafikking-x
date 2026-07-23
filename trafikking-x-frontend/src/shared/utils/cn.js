import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely.
 *
 * Example:
 * cn("px-4", condition && "bg-blue-500", className)
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}