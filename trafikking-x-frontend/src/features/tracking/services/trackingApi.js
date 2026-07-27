import api from "@/config/axios";

export async function getTracking(dispatchId) {

  const response = await api.get(
    `/tracking/${dispatchId}`
  );

  return response.data.data;

}