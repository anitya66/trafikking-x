import api from "@/config/axios";

/**
 * Dashboard
 */
export async function getPoliceDashboard() {
  const { data } = await api.get("/police/dashboard");
  return data.data;
}

/**
 * Get All Assigned Police Cases
 */
export async function getPoliceCases() {
  const { data } = await api.get("/police/cases");
  return data.data;
}

/**
 * Get Police Case By Id
 */
export async function getPoliceCase(caseId) {
  const { data } = await api.get(`/police/cases/${caseId}`);
  return data.data;
}

/**
 * Accept Assigned Case
 */
export async function acceptPoliceCase({
  dispatchId,
  request,
}) {
  const { data } = await api.put(
    `/police/cases/${dispatchId}/accept`,
    request
  );

  return data.data;
}

/**
 * Update Case Status
 */
export async function updatePoliceCaseStatus(
  caseId,
  payload
) {
  const { data } = await api.put(
    `/police/cases/${caseId}/status`,
    payload
  );

  return data.data;
}

export async function getPoliceHistory() {
  const { data } = await api.get("/police/cases/history");
  return data.data;
}