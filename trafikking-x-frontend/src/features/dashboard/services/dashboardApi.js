import api from "@/services/api";

/**
 * Dispatcher Active Queue
 */
export async function getActiveIncidents() {

  const response = await api.get("/incidents/active");

  return response.data.data;

}