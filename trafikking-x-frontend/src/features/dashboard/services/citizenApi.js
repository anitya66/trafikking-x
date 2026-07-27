import api from "@/config/axios";

export async function getCitizens() {

  const { data } = await api.get(
    "/citizens"
  );

  return data.data;

}

export async function getCitizen(id) {

  const { data } = await api.get(
    `/citizens/${id}`
  );

  return data.data;

}