import api from "@/services/api";

export async function getMyIncidents() {
  const response = await api.get("/incidents");

  return response.data.data;
}