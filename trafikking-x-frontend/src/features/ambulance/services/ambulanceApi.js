import api from "@/config/axios";

export async function getAmbulances() {

  const response = await api.get("/ambulances");

  return response.data.data;

}