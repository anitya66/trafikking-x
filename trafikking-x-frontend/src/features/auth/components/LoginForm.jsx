import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { LogIn, ShieldCheck } from "lucide-react";

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

            Your credentials are securely encrypted using
            JWT authentication and role-based access control.

          </p>

        </div>

      </div>

      <div className="text-center">

        <p className="text-sm text-slate-400">

          Don't have an account?

          <Link
            to="/register"
            className="ml-2 font-semibold text-primary transition-colors hover:text-cyan-300"
          >

            Create Account

          </Link>

        </p>

      </div>

    </form>

  );

}