import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Info, LogIn, ShieldCheck } from "lucide-react";

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
      className="space-y-7"
    >
      <div className="space-y-6">
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
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />

        <div className="text-sm leading-6 text-cyan-100">
          <p className="font-semibold">
            Emergency Personnel
          </p>

          <p className="mt-1 text-cyan-200">
            Ambulance, Hospital, Police, Dispatcher and
            Administrator accounts are created by the system
            administrator. Citizens can create their own account
            using the registration page.
          </p>
        </div>
      </div>

      <LoadingButton
        type="submit"
        loading={loginMutation.isPending}
        loadingText="Signing In..."
        className="h-12 w-full gap-2 rounded-xl text-base font-semibold"
      >
        <LogIn className="h-5 w-5" />
        Sign In
      </LoadingButton>

      <div className="rounded-2xl border border-primary/10 bg-primary/5 p-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-5 w-5 text-primary" />

          <p className="text-xs leading-6 text-slate-400">
            Your credentials are protected using JWT authentication,
            encrypted communication, and role-based access control.
          </p>
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm text-slate-400">
          Need a Citizen account?

          <Link
            to="/register"
            className="ml-2 font-semibold text-primary transition-colors hover:text-cyan-300"
          >
            Register
          </Link>
        </p>
      </div>
    </form>
  );
}