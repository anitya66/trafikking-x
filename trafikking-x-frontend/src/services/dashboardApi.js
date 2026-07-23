import api from "./api";

export async function getDashboardSummary() {
  const response = await api.get("/dashboard/summary");
  return response.data.data;
}

export async function getRecentIncidents() {
  const response = await api.get("/dashboard/recent-incidents");
  return response.data.data;
}