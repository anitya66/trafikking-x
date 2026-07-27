import api from "@/config/axios";

export async function getAIRecommendation(incidentId) {

  const response = await api.get(
    `/ai/recommendation/${incidentId}`
  );

  return response.data.data;

}