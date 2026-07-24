import api from "@/config/axios";

export async function createIncident(payload) {
  const { data } = await api.post("/incidents", payload);
  return data.data;
}

export async function getMyIncidents() {
  const { data } = await api.get("/incidents");
  return data.data;
}

export async function getIncidentById(id) {
  const { data } = await api.get(`/incidents/${id}`);
  return data.data;
}

export async function updateIncident(id, payload) {
  const { data } = await api.put(`/incidents/${id}`, payload);
  return data.data;
}

export async function deleteIncident(id) {
  const { data } = await api.delete(`/incidents/${id}`);
  return data;
}