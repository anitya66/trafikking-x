import api from "@/config/axios";

export async function getMyProfile() {
  const { data } = await api.get("/account/me");
  return data.data;
}

export async function updateProfile(payload) {
  const { data } = await api.put("/account", payload);
  return data.data;
}

export async function uploadAvatar(file) {
  const formData = new FormData();

  formData.append("file", file);

  const { data } = await api.post(
    "/account/avatar",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data.data;
}

export async function deleteAvatar() {
  const { data } = await api.delete("/account/avatar");
  return data.data;
}

export async function changePassword(payload) {
  const { data } = await api.put(
    "/account/password",
    payload
  );

  return data.data;
}