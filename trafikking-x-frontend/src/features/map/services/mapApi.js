import api from "@/services/api";

export async function getMapOverview() {
  const response = await api.get("/map/overview");

  return response.data.data;
}