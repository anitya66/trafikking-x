import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Loader2,
  MapPinned,
} from "lucide-react";

import { reverseGeocode } from "../services/locationApi";
import { Textarea } from "@/components/ui/textarea";

import { INCIDENT_TYPES } from "../constants/incidentTypes";

import { toast } from "sonner";
import { useCreateIncident } from "../hooks/useCreateIncident";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createIncidentSchema } from "../validation/createIncidentSchema";

export default function ReportEmergencyDialog({
  open,
  onOpenChange,
}) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createIncidentSchema),

    defaultValues: {
      incidentType: "",
      description: "",
      latitude: 0,
      longitude: 0,
      address: "",
    },
  });

  const latitude = watch("latitude");
const longitude = watch("longitude");

const locationDetected = useMemo(() => {
  return latitude !== 0 && longitude !== 0;
}, [latitude, longitude]);

  const [detectingLocation, setDetectingLocation] =
  useState(false);

  const createIncidentMutation = useCreateIncident();

  async function onSubmit(values) {

  try {

    await createIncidentMutation.mutateAsync(values);

    toast.success("Emergency reported successfully.");

    onOpenChange(false);

  } catch (error) {

    toast.error(
      error?.response?.data?.message ??
      "Failed to report emergency."
    );

  }

}
function detectLocation() {

  if (!navigator.geolocation) {
    alert("Geolocation is not supported.");
    return;
  }

  setDetectingLocation(true);

  navigator.geolocation.getCurrentPosition(

    async (position) => {

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  setValue("latitude", latitude, {
    shouldValidate: true,
  });

  setValue("longitude", longitude, {
    shouldValidate: true,
  });

  try {

    const address = await reverseGeocode(
      latitude,
      longitude
    );

    setValue("address", address, {
      shouldValidate: true,
    });

  } catch (error) {

    console.error(
      "Reverse geocoding failed",
      error
    );

  }

  setDetectingLocation(false);

},

    () => {

      setDetectingLocation(false);

      alert(
        "Unable to fetch location."
      );

    }

  );

}

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-2xl">

        <DialogHeader>
          <DialogTitle>
            Report Emergency
          </DialogTitle>

          <DialogDescription>
            Report an emergency to the command center.
            Our AI will analyze the situation and dispatch
            the nearest responders.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >

          {/* Incident Type */}

          <div className="space-y-2">

            <label className="text-sm font-medium">
              Incident Type
            </label>

            <Select
              value={watch("incidentType")}
              onValueChange={(value) =>
                setValue("incidentType", value, {
                  shouldValidate: true,
                })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select incident type" />
              </SelectTrigger>

              <SelectContent>

                {INCIDENT_TYPES.map((type) => (
                  <SelectItem
                    key={type.value}
                    value={type.value}
                  >
                    {type.label}
                  </SelectItem>
                ))}

              </SelectContent>

            </Select>

            {errors.incidentType && (
              <p className="text-sm text-red-500">
                {errors.incidentType.message}
              </p>
            )}

          </div>

          {/* Description */}

          <div className="space-y-2">

            <label className="text-sm font-medium">
              Description
            </label>

            <Textarea
              rows={5}
              placeholder="Describe the emergency..."
              {...register("description")}
            />

            {errors.description && (
              <p className="text-sm text-red-500">
                {errors.description.message}
              </p>
            )}

          </div>

          {/* GPS */}

          <div className="space-y-3 rounded-xl border border-border bg-card/40 p-4">

            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-medium">
                  Current Location
                </h3>

                <p className="text-sm text-muted-foreground">
                  Detect your current GPS coordinates.
                </p>

              </div>

             <Button
  type="button"
  variant="outline"
  disabled={detectingLocation}
  onClick={detectLocation}
>

  {detectingLocation ? (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Detecting...
    </>
  ) : (
    <>
      <MapPinned className="mr-2 h-4 w-4" />
      Detect Location
    </>
  )}

</Button>

            </div>

          </div>

          {/* Address */}

          <div className="space-y-2">

            <label className="text-sm font-medium">
              Address
            </label>

            <Input
              placeholder="Enter emergency location..."
              {...register("address")}
            />

            {errors.address && (
              <p className="text-sm text-red-500">
                {errors.address.message}
              </p>
            )}

          </div>

          <DialogFooter>

            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
  type="submit"
  disabled={createIncidentMutation.isPending}
>
  {createIncidentMutation.isPending
    ? "Reporting..."
    : "Report Emergency"}
</Button>
{locationDetected && (

  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4">

    <div className="flex items-center gap-2">

      <span className="text-lg">
        📍
      </span>

      <div>

        <h4 className="font-medium text-emerald-400">
          Location Detected
        </h4>

        <p className="text-sm text-muted-foreground">
          GPS coordinates captured successfully.
        </p>

      </div>

    </div>

    <div className="mt-4 grid gap-3 sm:grid-cols-2">

      <div>

        <p className="text-xs text-muted-foreground">
          Latitude
        </p>

        <p className="font-mono text-sm">
          {latitude.toFixed(6)}
        </p>

      </div>

      <div>

        <p className="text-xs text-muted-foreground">
          Longitude
        </p>

        <p className="font-mono text-sm">
          {longitude.toFixed(6)}
        </p>

      </div>

    </div>

  </div>

)}

          </DialogFooter>

        </form>

      </DialogContent>
    </Dialog>
  );
}