import api from "@/config/axios";

export async function getNotifications() {
  const { data } = await api.get("/notifications");
  return data.data;
}

export async function getUnreadNotifications() {
  const { data } = await api.get("/notifications/unread");
  return data.data;
}

export async function getUnreadCount() {
  const { data } = await api.get("/notifications/unread/count");
  return data.data;
}

export async function markAsRead(id) {
  await api.patch(`/notifications/${id}/read`);
}

export async function markAllAsRead() {
  await api.patch("/notifications/read-all");
}

export async function deleteNotification(id) {
  await api.delete(`/notifications/${id}`);
}