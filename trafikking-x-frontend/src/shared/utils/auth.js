import {
  getToken,
  getUser,
  clearAuth,
} from "@/features/auth/utils/authStorage";

export function getAccessToken() {
  return getToken();
}

export function getCurrentUser() {
  return getUser();
}

export function isAuthenticated() {
  return !!getToken();
}

export function logout() {
  clearAuth();
}