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

      // Errors are handled inside mutation hooks

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

      <DialogContent className="sm:max-w-2xl">

        <DialogHeader>

          <DialogTitle>

            {mode === "create"

              ? "Add Emergency Contact"

              : "Edit Emergency Contact"}

          </DialogTitle>

          <DialogDescription>

            {mode === "create"

              ? "Add someone responders can contact during an emergency."

              : "Update emergency contact information."}

          </DialogDescription>

        </DialogHeader>

        <form

          onSubmit={handleSubmit(onSubmit)}

          className="space-y-6"
        >
                      {/* Contact Name */}

          <div className="space-y-2">

            <label className="text-sm font-medium">
              Contact Name
            </label>

            <Input
              placeholder="Enter contact name"
              {...register("contactName")}
            />

            {errors.contactName && (

              <p className="text-sm text-red-500">

                {errors.contactName.message}

              </p>

            )}

          </div>

          {/* Phone Number */}

          <div className="space-y-2">

            <label className="text-sm font-medium">
              Phone Number
            </label>

            <Input
              placeholder="9876543210"
              {...register("contactPhone")}
            />

            {errors.contactPhone && (

              <p className="text-sm text-red-500">

                {errors.contactPhone.message}

              </p>

            )}

          </div>

          {/* Relationship */}

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

              <SelectTrigger className="w-full">

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

          {/* Priority */}

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

              <SelectTrigger className="w-full">

                <SelectValue placeholder="Select priority" />

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

          {/* Primary Contact */}

          <div className="flex items-center justify-between rounded-2xl border border-border bg-card p-4">

            <div>

              <h3 className="font-medium">

                Primary Contact

              </h3>

              <p className="text-sm text-muted-foreground">

                Make this your primary emergency contact.

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
                    <DialogFooter>

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
                    ? "Adding Contact..."
                    : "Add Contact"
                )
                : (
                  updateContact.isPending
                    ? "Saving Changes..."
                    : "Save Changes"
                )}

            </Button>

          </DialogFooter>

        </form>

      </DialogContent>

    </Dialog>

  );

}