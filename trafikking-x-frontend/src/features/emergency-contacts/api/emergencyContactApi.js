import api from "@/config/axios";

export async function getEmergencyContacts() {

  const { data } = await api.get(
    "/emergency-contacts"
  );

  return data.data;

}

export async function getEmergencyContact(id) {

  const { data } = await api.get(
    `/emergency-contacts/${id}`
  );

  return data.data;

}

export async function createEmergencyContact(payload) {

  const { data } = await api.post(
    "/emergency-contacts",
    payload
  );

  return data.data;

}

export async function updateEmergencyContact(id, payload) {

  const { data } = await api.put(
    `/emergency-contacts/${id}`,
    payload
  );

  return data.data;

}

export async function deleteEmergencyContact(id) {

  await api.delete(
    `/emergency-contacts/${id}`
  );

}