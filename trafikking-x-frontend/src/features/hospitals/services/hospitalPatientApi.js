import api from "@/config/axios";

export async function getIncomingPatients() {

  const { data } = await api.get(
    "/hospitals/patients/incoming"
  );

  return data.data;

}

export async function acceptPatient(
  dispatchId,
  payload,
) {

  const { data } = await api.put(
    `/hospitals/patients/${dispatchId}/accept`,
    payload
  );

  return data.data;

}