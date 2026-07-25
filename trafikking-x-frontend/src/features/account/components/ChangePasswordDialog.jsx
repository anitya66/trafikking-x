import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Eye,
  EyeOff,
  Lock,
} from "lucide-react";

import { passwordSchema } from "../schemas/passwordSchema";
import { useChangePassword } from "../hooks/useChangePassword";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ChangePasswordDialog({
  open,
  onOpenChange,
}) {

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const changePassword = useChangePassword();

  const form = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const password = form.watch("newPassword");

  const strength = !password
    ? 0
    : [
        password.length >= 8,
        /[A-Z]/.test(password),
        /[a-z]/.test(password),
        /\d/.test(password),
      ].filter(Boolean).length;

  function onSubmit(values) {

    changePassword.mutate(
      {
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      },
      {
        onSuccess() {
          form.reset();
          onOpenChange(false);
        },
      }
    );

  }

  return (

    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >

      <DialogContent className="sm:max-w-lg">

        <DialogHeader>

          <DialogTitle className="flex items-center gap-2">

            <Lock className="h-5 w-5" />

            Change Password

          </DialogTitle>

        </DialogHeader>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5"
        >

          {/* Current Password */}

          <div className="space-y-2">

            <Label htmlFor="currentPassword">
              Current Password
            </Label>

            <div className="relative">

              <Input
                id="currentPassword"
                type={showCurrent ? "text" : "password"}
                {...form.register("currentPassword")}
              />

              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showCurrent
                  ? <EyeOff className="h-4 w-4" />
                  : <Eye className="h-4 w-4" />}
              </button>

            </div>

            {form.formState.errors.currentPassword && (
              <p className="text-sm text-red-500">
                {form.formState.errors.currentPassword.message}
              </p>
            )}

          </div>

          {/* New Password */}

          <div className="space-y-2">

            <Label htmlFor="newPassword">
              New Password
            </Label>

            <div className="relative">

              <Input
                id="newPassword"
                type={showNew ? "text" : "password"}
                {...form.register("newPassword")}
              />

              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showNew
                  ? <EyeOff className="h-4 w-4" />
                  : <Eye className="h-4 w-4" />}
              </button>

            </div>

            {form.formState.errors.newPassword && (
              <p className="text-sm text-red-500">
                {form.formState.errors.newPassword.message}
              </p>
            )}

          </div>

          {/* Password Strength */}

          <div>

            <div className="mb-2 flex justify-between text-sm">

              <span>Password Strength</span>

              <span>

                {strength <= 1
                  ? "Weak"
                  : strength <= 3
                  ? "Medium"
                  : "Strong"}

              </span>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-muted">

              <div
                className={`h-full transition-all duration-300 ${
                  strength <= 1
                    ? "bg-red-500"
                    : strength <= 3
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
                style={{
                  width: `${strength * 25}%`,
                }}
              />

            </div>

          </div>

          {/* Confirm Password */}

          <div className="space-y-2">

            <Label htmlFor="confirmPassword">
              Confirm Password
            </Label>

            <div className="relative">

              <Input
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                {...form.register("confirmPassword")}
              />

              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showConfirm
                  ? <EyeOff className="h-4 w-4" />
                  : <Eye className="h-4 w-4" />}
              </button>

            </div>

            {form.formState.errors.confirmPassword && (
              <p className="text-sm text-red-500">
                {form.formState.errors.confirmPassword.message}
              </p>
            )}

          </div>

          {/* Buttons */}

          <div className="flex justify-end gap-3 pt-2">

            <Button
              type="button"
              variant="outline"
              onClick={() => {
                form.reset();
                onOpenChange(false);
              }}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={changePassword.isPending}
            >
              {changePassword.isPending
                ? "Updating..."
                : "Update Password"}
            </Button>

          </div>

        </form>

      </DialogContent>

    </Dialog>

  );

}