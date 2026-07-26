import axios from "axios";
import { clearAuth } from "@/features/auth/utils/authStorage";
import { getAccessToken } from "@/shared/utils/auth";

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",

  headers: {
    "Content-Type": "application/json",
  },

  timeout: 15000,
});

api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(

  (response) => response,

  (error) => {

    const status = error.response?.status;

    if (status === 401 || status === 403) {

      console.warn("Session expired.");

      clearAuth();

if (window.location.pathname !== "/login") {
  window.location.replace("/login");
}

    }

    return Promise.reject(error);

  }

);
export default api;