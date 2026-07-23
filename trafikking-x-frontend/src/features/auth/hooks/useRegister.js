import { useMutation } from "@tanstack/react-query";

import { register } from "../services/authApi";

export function useRegister() {
  return useMutation({
    mutationFn: register,
  });
}