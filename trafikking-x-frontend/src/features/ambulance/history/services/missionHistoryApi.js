import api from "@/config/axios";

export async function getMissionHistory() {

  const response = await api.get(
    "/ambulance/assignments"
  );

  return response.data.data;

}