import api from "@/config/axios";

export async function getAmbulances() {

  const { data } = await api.get(
    "/ambulances"
  );

  return data.data;

}

export async function getAmbulance(id) {

  const { data } = await api.get(
    `/ambulances/${id}`
  );

  return data.data;

}