import api from "@/services/api";

export async function getTracking(dispatchId) {

  const response = await api.get(
    `/tracking/${dispatchId}`
  );

  return response.data.data;

}