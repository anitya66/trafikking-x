import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { UserPlus, Info } from "lucide-react";

import { registerSchema } from "../validation/registerSchema";
import { useRegister } from "../hooks/useRegister";

import FormInput from "@/shared/components/form/FormInput";
import PasswordInput from "@/shared/components/form/PasswordInput";
import LoadingButton from "@/shared/components/common/LoadingButton";

export default function RegisterForm() {
  const navigate = useNavigate();

  const registerMutation = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
  });

  function onSubmit(values) {
    registerMutation.mutate(values, {
      onSuccess: () => {
        toast.success("Registration successful");

        navigate("/login", {
          replace: true,
        });
      },

      onError: (error) => {
        toast.error(
          error?.response?.data?.message ??
            "Registration failed."
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
          label="Full Name"
          placeholder="Enter your full name"
          error={errors.fullName?.message}
          {...register("fullName")}
        />

        <FormInput
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          error={errors.email?.message}
          {...register("email")}
        />

        <FormInput
          label="Phone Number"
          placeholder="Enter your phone number"
          error={errors.phoneNumber?.message}
          {...register("phoneNumber")}
        />

        <PasswordInput
          label="Password"
          placeholder="Create a secure password"
          error={errors.password?.message}
          {...register("password")}
        />
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />

        <div className="text-sm leading-6 text-cyan-100">
          <p className="font-semibold">
            Citizen Registration Only
          </p>

          <p className="mt-1 text-cyan-200">
            Ambulance, Hospital, Police, Dispatcher and
            Administrator accounts are created and managed
            by the system administrator.
          </p>
        </div>
      </div>

      <LoadingButton
        type="submit"
        loading={registerMutation.isPending}
        loadingText="Creating Account..."
        className="h-12 w-full gap-2 rounded-xl text-base font-semibold"
      >
        <UserPlus className="h-5 w-5" />
        Create Account
      </LoadingButton>

      <div className="border-t border-white/10 pt-5 text-center">
        <p className="text-sm text-slate-400">
          Already have an account?

          <Link
            to="/login"
            className="ml-2 font-semibold text-primary transition-colors hover:text-cyan-300"
          >
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
}