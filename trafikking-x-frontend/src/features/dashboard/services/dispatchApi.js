import api from "@/config/axios";

export async function getDispatchQueue() {

  const { data } = await api.get(
    "/dispatches"
  );

  return data.data;

}

export async function getDispatch(id) {

  const { data } = await api.get(
    `/dispatches/${id}`
  );

  return data.data;

}

export async function updateDispatchStatus(
  dispatchId,
  payload
) {

  const { data } = await api.patch(
    `/dispatches/${dispatchId}/status`,
    payload
  );

  return data.data;

}

export async function assignResources(
  dispatchId,
  payload
) {

  const { data } = await api.post(
    `/dispatches/${dispatchId}/assign-resources`,
    payload
  );

  return data.data;

}

export async function completeDispatch(
  dispatchId
) {

  const { data } = await api.post(
    `/dispatches/${dispatchId}/complete`
  );

  return data.data;

}