import api from "@/services/api";

/**
 * Fetch all incidents for the currently logged-in user.
 */
export async function getMyIncidents() {
  const response = await api.get("/incidents");

  return response.data.data;
}