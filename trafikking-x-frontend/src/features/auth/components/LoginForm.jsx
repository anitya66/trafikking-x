import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

import { loginSchema } from "../validation/loginSchema";
import { useLogin } from "../hooks/useLogin";

import FormInput from "@/shared/components/form/FormInput";
import PasswordInput from "@/shared/components/form/PasswordInput";
import LoadingButton from "@/shared/components/common/LoadingButton";

export default function LoginForm() {
  const navigate = useNavigate();

  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values) {
    loginMutation.mutate(values, {
      onSuccess: () => {
        toast.success("Login successful");

        navigate("/dashboard", {
          replace: true,
        });
      },

      onError: (error) => {
        toast.error(
          error?.response?.data?.message ??
            "Invalid email or password."
        );
      },
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <FormInput
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        error={errors.email?.message}
        {...register("email")}
      />

      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        error={errors.password?.message}
        {...register("password")}
      />

      <LoadingButton
        type="submit"
        className="h-11 w-full"
        loading={loginMutation.isPending}
        loadingText="Signing In..."
      >
        Sign In
      </LoadingButton>

      <p className="text-center text-sm text-slate-400">
  Don't have an account?{" "}
  <Link
    to="/register"
    className="font-medium text-cyan-400 hover:text-cyan-300"
  >
    Create Account
  </Link>
</p>
    </form>
  );
}