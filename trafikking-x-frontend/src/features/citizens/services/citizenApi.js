import api from "@/config/axios";

export async function getCitizenDashboard() {
  const { data } = await api.get("/citizen/dashboard");
  return data;
}

export async function getEmergencyContacts() {
  const { data } = await api.get("/citizen/contacts");
  return data;
}