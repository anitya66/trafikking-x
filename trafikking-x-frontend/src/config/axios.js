import axios from "axios";

import { getAccessToken } from "@/shared/utils/auth";

import { API_URL } from "@/config/env";

const api = axios.create({

  baseURL: API_URL,

  headers: {

    "Content-Type": "application/json",

  },

});

api.interceptors.request.use((config) => {

  const token = getAccessToken();

  if (token) {

    config.headers.Authorization =
      `Bearer ${token}`;

  }

  return config;

});

export default api;