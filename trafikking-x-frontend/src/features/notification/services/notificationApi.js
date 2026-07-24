import api from "@/services/api";

export async function getNotifications() {

  const response = await api.get(
    "/notifications"
  );

  return response.data.data;

}

export async function getUnreadNotifications() {

  const response = await api.get(
    "/notifications/unread"
  );

  return response.data.data;

}

export async function getUnreadCount() {

  const response = await api.get(
    "/notifications/unread/count"
  );

  return response.data.data;

}

export async function markAsRead(id) {

  await api.patch(
    `/notifications/${id}/read`
  );

}

export async function markAllAsRead() {

  await api.patch(
    "/notifications/read-all"
  );

}