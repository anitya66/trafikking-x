import api from "@/config/axios";

export async function getHospitals() {

  const { data } = await api.get("/hospitals");

  return data.data.content;

}

export async function getHospital(id) {

  const { data } = await api.get(
    `/hospitals/${id}`
  );

  return data.data;

}