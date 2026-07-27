import api from "@/config/axios";

export async function getActiveIncidents() {
  const { data } = await api.get("/incidents/active");
  return data.data;
}

export async function getAllIncidents() {
  const { data } = await api.get("/incidents/all");
  return data.data;
}

export async function getIncident(id) {
  const { data } = await api.get(`/incidents/${id}`);
  return data.data;
}