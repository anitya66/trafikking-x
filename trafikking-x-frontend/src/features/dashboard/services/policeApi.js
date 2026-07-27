import api from "@/config/axios";

export async function getPoliceStations() {

  const { data } = await api.get(
    "/police-stations"
  );

  return data.data.content;

}

export async function getPoliceStation(id) {

  const { data } = await api.get(
    `/police-stations/${id}`
  );

  return data.data;

}