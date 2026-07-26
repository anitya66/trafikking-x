import api from "@/config/axios";

export async function getHospitalCaseHistory() {

  const { data } = await api.get(
    "/hospital-cases/history"
  );

  return data.data;

}