import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { registerSchema } from "../validation/registerSchema";
import { useRegister } from "../hooks/useRegister";

import FormInput from "@/shared/components/form/FormInput";
import PasswordInput from "@/shared/components/form/PasswordInput";
import LoadingButton from "@/shared/components/common/LoadingButton";
import RoleSelect from "./RoleSelect";

export default function RegisterForm() {
  const navigate = useNavigate();

  const registerMutation = useRegister();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      role: "CITIZEN",
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
      className="space-y-5"
    >
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
        placeholder="Create a password"
        error={errors.password?.message}
        {...register("password")}
      />

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Role
        </label>

        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <RoleSelect
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />

        {errors.role && (
          <p className="mt-2 text-sm text-red-400">
            {errors.role.message}
          </p>
        )}
      </div>

      <LoadingButton
        type="submit"
        className="h-11 w-full"
        loading={registerMutation.isPending}
        loadingText="Creating Account..."
      >
        Create Account
      </LoadingButton>

      <p className="text-center text-sm text-slate-400">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-cyan-400 hover:text-cyan-300"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
}