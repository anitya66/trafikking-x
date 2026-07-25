import { useEffect } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { profileSchema } from "../schemas/profileSchema";

import { useUpdateProfile } from "../hooks/useUpdateProfile";

import {

  Dialog,

  DialogContent,

  DialogHeader,

  DialogTitle,

} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";

export default function EditProfileDialog({

  open,

  onOpenChange,

  profile,

}) {

  const updateProfile = useUpdateProfile();

  const form = useForm({

    resolver: zodResolver(profileSchema),

    defaultValues: {

      fullName: "",

      phoneNumber: "",

      bio: "",

      address: "",

      organization: "",

    },

  });

  useEffect(() => {

    if (!profile) return;

    form.reset({

      fullName: profile.fullName || "",

      phoneNumber: profile.phoneNumber || "",

      bio: profile.bio || "",

      address: profile.address || "",

      organization: profile.organization || "",

    });

  }, [profile]);

  function onSubmit(values) {

    updateProfile.mutate(values, {

      onSuccess() {

        onOpenChange(false);

      },

    });

  }

  return (

    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >

      <DialogContent className="sm:max-w-2xl">

        <DialogHeader>

          <DialogTitle>

            Edit Profile

          </DialogTitle>

        </DialogHeader>

        <form
  onSubmit={form.handleSubmit(onSubmit)}
  className="space-y-5"
>

  <div>

    <Label htmlFor="fullName">
      Full Name
    </Label>

    <Input
      id="fullName"
      {...form.register("fullName")}
    />

    {form.formState.errors.fullName && (

      <p className="mt-1 text-sm text-red-500">

        {form.formState.errors.fullName.message}

      </p>

    )}

  </div>

  <div>

    <Label htmlFor="phoneNumber">
      Phone Number
    </Label>

    <Input
      id="phoneNumber"
      {...form.register("phoneNumber")}
    />

    {form.formState.errors.phoneNumber && (

      <p className="mt-1 text-sm text-red-500">

        {form.formState.errors.phoneNumber.message}

      </p>

    )}

  </div>

  <div>

    <Label htmlFor="organization">
      Organization
    </Label>

    <Input
      id="organization"
      {...form.register("organization")}
    />

    {form.formState.errors.organization && (

      <p className="mt-1 text-sm text-red-500">

        {form.formState.errors.organization.message}

      </p>

    )}

  </div>

  <div>

    <Label htmlFor="address">
      Address
    </Label>

    <Input
      id="address"
      {...form.register("address")}
    />

    {form.formState.errors.address && (

      <p className="mt-1 text-sm text-red-500">

        {form.formState.errors.address.message}

      </p>

    )}

  </div>

  <div>

    <Label htmlFor="bio">
      Bio
    </Label>

    <Textarea
      id="bio"
      rows={4}
      {...form.register("bio")}
    />

    {form.formState.errors.bio && (

      <p className="mt-1 text-sm text-red-500">

        {form.formState.errors.bio.message}

      </p>

    )}

  </div>

  <div className="flex justify-end gap-3">

    <Button
      type="button"
      variant="outline"
      onClick={() => onOpenChange(false)}
    >
      Cancel
    </Button>

    <Button
      type="submit"
      disabled={updateProfile.isPending}
    >
      {updateProfile.isPending
        ? "Saving..."
        : "Save Changes"}
    </Button>

  </div>

</form>

      </DialogContent>

    </Dialog>

  );

}