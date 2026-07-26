import api from "@/services/api";

export async function getAmbulances() {

  const response = await api.get("/ambulances");

  return response.data.data;

}