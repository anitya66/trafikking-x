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

toast.success(
  "Emergency reported successfully. Dispatch center has been notified."
);

onOpenChange(false);

  } catch (error) {

   toast.error(
  error?.response?.data?.message ??
    "Unable to report the emergency. Please try again."
);
  }

}
function detectLocation() {

  if (!navigator.geolocation) {
    toast.error(
  "Your browser does not support geolocation."
);
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

toast.warning(
  "Location detected, but the address could not be resolved. You can enter it manually."
);

  }

  setDetectingLocation(false);

},

    () => {

      setDetectingLocation(false);

      toast.error(
  "Unable to detect your current location."
);

    }

  );

}

  return (
    <Dialog
  open={open}
  onOpenChange={(value) => {

    if (!value) {

      onOpenChange(false);

      return;

    }

    onOpenChange(value);

  }}
>
     <DialogContent className="max-h-[92vh] overflow-y-auto border-border bg-background sm:max-w-3xl">

       <DialogHeader className="space-y-6 border-b border-border pb-6">

  <div className="flex items-start justify-between">

    <div>

      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1">

        <span className="text-xs font-semibold uppercase tracking-wider text-red-400">

          Emergency Reporting

        </span>

      </div>

      <DialogTitle className="text-3xl font-bold">

        Report Emergency

      </DialogTitle>

      <DialogDescription className="mt-3 max-w-xl leading-7">

        Provide emergency details below. TRAFIKKING X AI will
        immediately analyze the incident and recommend the
        nearest responders for dispatch.

      </DialogDescription>

    </div>

    <div className="hidden rounded-2xl bg-primary/10 p-4 lg:block">

      🚨

    </div>

  </div>

  {/* Progress */}

  <div className="space-y-3">

    <div className="flex justify-between text-xs uppercase tracking-wider text-muted-foreground">

      <span>Emergency Form</span>

      <span>Step 1 of 3</span>

    </div>

    <div className="h-2 overflow-hidden rounded-full bg-muted">

      <div className="h-full w-1/3 rounded-full bg-primary" />

    </div>

  </div>

</DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 pt-2"
        >

          {/* Incident Type */}

          <div className="space-y-3">

  <div>

    <label className="text-sm font-semibold">

      Incident Type

    </label>

    <p className="mt-1 text-sm text-muted-foreground">

      Select the type of emergency.

    </p>

  </div>

  <Select
    value={watch("incidentType")}
    onValueChange={(value) =>
      setValue("incidentType", value, {
        shouldValidate: true,
      })
    }
  >

    <SelectTrigger className="h-12">

      <SelectValue placeholder="Choose emergency type" />

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

          <div className="space-y-3">

  <div>

    <label className="text-sm font-semibold">

      Emergency Description

    </label>

    <p className="mt-1 text-sm text-muted-foreground">

      Describe what happened. Include injuries,
      vehicles involved, fire, or any immediate danger.

    </p>

  </div>

  <Textarea
    rows={6}
    placeholder="Example: Two motorcycles collided near the highway. One rider is unconscious and another has severe bleeding..."
    className="resize-none"
    {...register("description")}
  />

  {errors.description && (

    <p className="text-sm text-red-500">

      {errors.description.message}

    </p>

  )}

</div>

          {/* GPS */}
{/* Location Detection */}

<div className="rounded-2xl border border-border bg-card/40 p-6">

  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

    <div>

      <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">

        <MapPinned className="h-4 w-4 text-primary" />

        <span className="text-xs font-semibold text-primary">

          Live GPS

        </span>

      </div>

      <h3 className="text-lg font-semibold">

        Detect Current Location

      </h3>

      <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">

        Allow location access so TRAFIKKING X can dispatch
        the nearest ambulance, hospital and police unit.

      </p>

    </div>

    <Button
      type="button"
      variant="outline"
      size="lg"
      disabled={detectingLocation}
      onClick={detectLocation}
      className="min-w-[220px]"
    >

      {detectingLocation ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Detecting Location...
        </>
      ) : (
        <>
          <MapPinned className="mr-2 h-4 w-4" />
          Detect My Location
        </>
      )}

    </Button>

  </div>

  {locationDetected && (

    <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">

          📍

        </div>

        <div>

          <h4 className="font-semibold text-emerald-500">

            GPS Location Captured

          </h4>

          <p className="text-sm text-muted-foreground">

            Emergency responders can now navigate to your location.

          </p>

        </div>

      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">

        <div className="rounded-xl bg-background/70 p-4">

          <p className="text-xs uppercase tracking-wider text-muted-foreground">

            Latitude

          </p>

          <p className="mt-2 font-mono text-sm">

            {latitude.toFixed(6)}

          </p>

        </div>

        <div className="rounded-xl bg-background/70 p-4">

          <p className="text-xs uppercase tracking-wider text-muted-foreground">

            Longitude

          </p>

          <p className="mt-2 font-mono text-sm">

            {longitude.toFixed(6)}

          </p>

        </div>

      </div>

    </div>

  )}

</div>
          {/* Address */}

         <div className="space-y-3">

  <div>

    <label className="text-sm font-semibold">

      Emergency Address

    </label>

    <p className="mt-1 text-sm text-muted-foreground">

      Verify or edit the detected address before submitting.

    </p>

  </div>

  <Input
    placeholder="Street, landmark, city..."
    className="h-12"
    {...register("address")}
  />

  {errors.address && (

    <p className="text-sm text-red-500">

      {errors.address.message}

    </p>

  )}

</div>

         <DialogFooter className="border-t border-border pt-6">

  <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

    {/* AI Notice */}

    <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">

      <p className="text-xs font-semibold uppercase tracking-wider text-primary">

        AI Emergency Engine

      </p>

      <p className="mt-1 text-sm text-muted-foreground">

        Your emergency will be analyzed immediately after submission.

      </p>

    </div>

    {/* Buttons */}

    <div className="flex gap-3">

      <Button
        type="button"
        variant="outline"
        size="lg"
        onClick={() => onOpenChange(false)}
      >
        Cancel
      </Button>

      <Button
        type="submit"
        size="lg"
        disabled={createIncidentMutation.isPending}
        className="min-w-[180px]"
      >

        {createIncidentMutation.isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Reporting...
          </>
        ) : (
          <>
            🚨 Report Emergency
          </>
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