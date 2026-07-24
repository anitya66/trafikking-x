import { getCurrentUser } from "@/shared/utils/auth";

export function getCurrentRole() {
  const user = getCurrentUser();
  return user?.role ?? null;
}

export function hasRole(allowedRoles = []) {
  const role = getCurrentRole();
  return allowedRoles.includes(role);
}