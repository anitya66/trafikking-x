import api from "@/config/axios";

export async function getHospitals(params = {}) {

  const { data } = await api.get(
    "/hospitals",
    {
      params,
    }
  );

  return data.data;

}

export async function getHospital(id) {

  const { data } = await api.get(
    `/hospitals/${id}`
  );

  return data.data;

}