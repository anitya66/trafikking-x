import api from "@/services/api";

export async function getDispatchQueue() {

  const response = await api.get("/dispatches");

  return response.data.data;

}