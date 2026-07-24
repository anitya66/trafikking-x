import api from "@/config/axios";

export async function createIncident(data) {
  const response = await api.post("/incidents", data);
  return response.data.data;
}