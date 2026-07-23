import { useMutation } from "@tanstack/react-query";

import { login } from "../services/authApi";
import { saveAuth } from "../utils/authStorage";

export function useLogin() {
  return useMutation({
    mutationFn: login,

    onSuccess: (data) => {
      saveAuth(data);
    },
  });
}