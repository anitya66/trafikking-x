const TOKEN_KEY = "accessToken";
const USER_KEY = "user";

export function saveAuth(data) {
  localStorage.setItem(TOKEN_KEY, data.accessToken);

  localStorage.setItem(
    USER_KEY,
    JSON.stringify({
      id: data.id,
      fullName: data.fullName,
      email: data.email,
      role: data.role,
      active: data.active,
      emailVerified: data.emailVerified,
      profileCompleted: data.profileCompleted,
    })
  );
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser() {
  const user = localStorage.getItem(USER_KEY);

  return user ? JSON.parse(user) : null;
}

export function isAuthenticated() {
  return !!getToken();
}

export function getCurrentUser() {
  return getUser();
}

export function clearAuth() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}