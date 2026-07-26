import axios from "axios";
import api from "@/services/api";

export async function getCurrentAssignment() {

  try {

    const response = await api.get(
      "/ambulance/assignments/current"
    );

    return response.data.data;

  } catch (error) {

    if (
      axios.isAxiosError(error) &&
      error.response?.status === 404
    ) {

      return null;

    }

    throw error;

  }

}

export async function acceptAssignment({
  assignmentId,
  remarks,
}) {
  const response = await api.post(
    `/ambulance/assignments/${assignmentId}/accept`,
    {
      remarks,
    }
  );

  return response.data.data;
}

export async function rejectAssignment({
  assignmentId,
  remarks,
}) {
  const response = await api.post(
    `/ambulance/assignments/${assignmentId}/reject`,
    {
      remarks,
    }
  );

  return response.data.data;
}

export async function completeAssignment({
  assignmentId,
  remarks,
}) {
  const response = await api.post(
    `/ambulance/assignments/${assignmentId}/complete`,
    {
      remarks,
    }
  );

  return response.data.data;
}

export async function startJourney({
  assignmentId,
  remarks,
}) {

  const response = await api.post(

    `/ambulance/assignments/${assignmentId}/start`,

    {
      remarks,
    }

  );

  return response.data.data;

}

export async function markArrived({
  assignmentId,
  remarks,
}) {

  const response = await api.post(

    `/ambulance/assignments/${assignmentId}/arrive`,

    {
      remarks,
    }

  );

  return response.data.data;

}