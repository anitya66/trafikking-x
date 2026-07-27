import api from "@/config/axios";

export async function getNotifications() {
  const { data } = await api.get("/notifications");
  return data.data;
}

export async function getUnreadNotifications() {
  const { data } = await api.get("/notifications/unread");
  return data.data;
}

export async function markNotificationRead(id) {
  const { data } = await api.patch(
    `/notifications/${id}/read`
  );

  return data.data;
}

export async function markAllNotificationsRead() {
  const { data } = await api.patch(
    "/notifications/read-all"
  );

  return data.data;
}

export async function deleteNotification(id) {
  await api.delete(`/notifications/${id}`);
}