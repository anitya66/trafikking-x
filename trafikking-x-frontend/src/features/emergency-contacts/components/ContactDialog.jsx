import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { RELATIONSHIPS } from "../constants/relationships";
import { emergencyContactSchema } from "../schemas/emergencyContactSchema";

import { useCreateEmergencyContact } from "../hooks/useCreateEmergencyContact";
import { useUpdateEmergencyContact } from "../hooks/useUpdateEmergencyContact";

export default function ContactDialog({
  open,
  onOpenChange,
  mode = "create",
  contact = null,
}) {
  const createContact = useCreateEmergencyContact();
  const updateContact = useUpdateEmergencyContact();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: {
      errors,
    },
  } = useForm({
    resolver: zodResolver(emergencyContactSchema),
    defaultValues: {
      contactName: "",
      contactPhone: "",
      relationship: "",
      priority: 1,
      primaryContact: false,
    },
  });

  useEffect(() => {
    if (mode === "edit" && contact) {
      reset({
        contactName: contact.contactName,
        contactPhone: contact.contactPhone,
        relationship: contact.relationship,
        priority: contact.priority,
        primaryContact: contact.primaryContact,
      });
    } else {
      reset({
        contactName: "",
        contactPhone: "",
        relationship: "",
        priority: 1,
        primaryContact: false,
      });
    }
  }, [
    mode,
    contact,
    reset,
  ]);

  async function onSubmit(values) {
    try {
      if (mode === "create") {
        await createContact.mutateAsync(values);
      } else {
        await updateContact.mutateAsync({
          id: contact.id,
          payload: values,
        });
      }

      reset();
      onOpenChange(false);
    } catch {
      // handled by mutation hooks
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!value) {
          reset();
        }

        onOpenChange(value);
      }}
    >
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-3xl">

        <DialogHeader className="space-y-6 border-b border-border pb-6">

          <div className="flex items-start justify-between">

            <div>

              <div className="mb-4 inline-flex rounded-full bg-primary/10 px-3 py-1">

                <span className="text-xs font-semibold uppercase tracking-wider text-primary">

                  Emergency Contacts

                </span>

              </div>

              <DialogTitle className="text-3xl font-bold">

                {mode === "create"
                  ? "Add Trusted Contact"
                  : "Edit Trusted Contact"}

              </DialogTitle>

              <DialogDescription className="mt-3 max-w-xl leading-7">

                {mode === "create"
                  ? "Add someone responders can immediately contact during an emergency."
                  : "Update emergency contact information."}

              </DialogDescription>

            </div>

            <div className="hidden rounded-2xl bg-primary/10 p-5 lg:block">

              ❤️

            </div>

          </div>

        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 pt-2"
        >

          <div className="grid gap-6 md:grid-cols-2">

            <div className="space-y-2">

              <label className="text-sm font-medium">

                Contact Name

              </label>

              <Input
                placeholder="John Doe"
                {...register("contactName")}
              />

              {errors.contactName && (

                <p className="text-sm text-red-500">

                  {errors.contactName.message}

                </p>

              )}

            </div>

            <div className="space-y-2">

              <label className="text-sm font-medium">

                Phone Number

              </label>

              <Input
                placeholder="+91 9876543210"
                {...register("contactPhone")}
              />

              {errors.contactPhone && (

                <p className="text-sm text-red-500">

                  {errors.contactPhone.message}

                </p>

              )}

            </div>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="space-y-2">

              <label className="text-sm font-medium">

                Relationship

              </label>

              <Select
                value={watch("relationship")}
                onValueChange={(value) =>
                  setValue("relationship", value, {
                    shouldValidate: true,
                  })
                }
              >

                <SelectTrigger>

                  <SelectValue placeholder="Select relationship" />

                </SelectTrigger>

                <SelectContent>

                  {RELATIONSHIPS.map((relationship) => (

                    <SelectItem
                      key={relationship.value}
                      value={relationship.value}
                    >

                      {relationship.label}

                    </SelectItem>

                  ))}

                </SelectContent>

              </Select>

              {errors.relationship && (

                <p className="text-sm text-red-500">

                  {errors.relationship.message}

                </p>

              )}

            </div>

            <div className="space-y-2">

              <label className="text-sm font-medium">

                Priority

              </label>

              <Select
                value={String(watch("priority"))}
                onValueChange={(value) =>
                  setValue(
                    "priority",
                    Number(value),
                    {
                      shouldValidate: true,
                    }
                  )
                }
              >

                <SelectTrigger>

                  <SelectValue />

                </SelectTrigger>

                <SelectContent>

                  {[1, 2, 3, 4, 5].map((priority) => (

                    <SelectItem
                      key={priority}
                      value={String(priority)}
                    >

                      Priority {priority}

                    </SelectItem>

                  ))}

                </SelectContent>

              </Select>

              {errors.priority && (

                <p className="text-sm text-red-500">

                  {errors.priority.message}

                </p>

              )}

            </div>

          </div>

          <div className="flex items-center justify-between rounded-3xl border border-primary/20 bg-primary/5 p-6">

            <div>

              <h3 className="font-semibold">

                Primary Contact

              </h3>

              <p className="mt-1 text-sm text-muted-foreground">

                This contact will be notified first during emergencies.

              </p>

            </div>

            <Switch
              checked={watch("primaryContact")}
              onCheckedChange={(checked) =>
                setValue(
                  "primaryContact",
                  checked,
                  {
                    shouldValidate: true,
                  }
                )
              }
            />

          </div>

          <DialogFooter className="border-t border-border pt-6">

            <div className="flex w-full items-center justify-between">

              <p className="text-sm text-muted-foreground">

                Trusted contacts help responders notify your family faster.

              </p>

              <div className="flex gap-3">

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    reset();
                    onOpenChange(false);
                  }}
                >

                  Cancel

                </Button>

                <Button
                  type="submit"
                  disabled={
                    createContact.isPending ||
                    updateContact.isPending
                  }
                >

                  {mode === "create"
                    ? (
                        createContact.isPending
                          ? "Adding..."
                          : "Add Contact"
                      )
                    : (
                        updateContact.isPending
                          ? "Saving..."
                          : "Save Changes"
                      )}

                </Button>

              </div>

            </div>

          </DialogFooter>

        </form>

      </DialogContent>
    </Dialog>
  );
}