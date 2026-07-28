import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Bed,
  HeartPulse,
  ShieldCheck,
  ExternalLink,
  Loader2,
  AlertTriangle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { useHospital } from "../hooks/useHospital";

export default function HospitalDetailsDialog({

  open,

  onOpenChange,

  hospital,

}) {

  const {
    data,
    isLoading,
    isError,
  } = useHospital(hospital?.id);

  if (!hospital) return null;

  if (isLoading) {

    return (

      <Dialog
        open={open}
        onOpenChange={onOpenChange}
      >

        <DialogContent className="sm:max-w-2xl">

          <div className="flex flex-col items-center py-14">

            <Loader2 className="h-10 w-10 animate-spin text-primary" />

            <h3 className="mt-5 text-xl font-bold">

              Loading Hospital

            </h3>

            <p className="mt-2 text-muted-foreground">

              Fetching hospital information...

            </p>

          </div>

        </DialogContent>

      </Dialog>

    );

  }

  if (isError) {

    return (

      <Dialog
        open={open}
        onOpenChange={onOpenChange}
      >

        <DialogContent className="sm:max-w-xl">

          <div className="flex flex-col items-center py-14 text-center">

            <AlertTriangle className="h-10 w-10 text-red-500" />

            <h3 className="mt-5 text-xl font-bold">

              Failed To Load Hospital

            </h3>

            <p className="mt-2 text-muted-foreground">

              Please try again in a few moments.

            </p>

          </div>

        </DialogContent>

      </Dialog>

    );

  }

  const bedPercentage =
    data.totalBeds > 0
      ? (data.availableBeds / data.totalBeds) * 100
      : 0;

  const icuPercentage =
    data.icuBeds > 0
      ? (data.availableIcuBeds / data.icuBeds) * 100
      : 0;

  return (

    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-4xl">

        <DialogHeader>

          <DialogTitle>

            Hospital Details

          </DialogTitle>

          <DialogDescription>

            Complete hospital profile and emergency capabilities.

          </DialogDescription>

        </DialogHeader>

        {/* Header */}

        <div className="rounded-3xl border bg-card p-6">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-center gap-5">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10">

                <Building2 className="h-10 w-10 text-primary" />

              </div>

              <div>

                <h2 className="text-3xl font-bold">

                  {data.hospitalName}

                </h2>

                <p className="mt-2 text-muted-foreground">

                  {data.hospitalType?.replaceAll("_", " ")}

                </p>

              </div>

            </div>

            <div className="flex flex-wrap gap-2">

              {data.emergencyAvailable && (

                <Badge className="bg-red-500 text-white">

                  Emergency

                </Badge>

              )}

              {data.traumaCenter && (

                <Badge
                  variant="outline"
                  className="border-emerald-500/20 bg-emerald-500/10 text-emerald-500"
                >

                  Trauma Center

                </Badge>

              )}

            </div>

          </div>

        </div>

        {/* Information */}

        <div className="grid gap-6 lg:grid-cols-2">

          <div className="rounded-2xl border p-5">

            <div className="flex items-center gap-3">

              <MapPin className="h-5 w-5 text-primary" />

              <div>

                <p className="text-xs uppercase text-muted-foreground">

                  Address

                </p>

                <p className="font-medium">

                  {data.address}

                </p>

                <p className="text-sm text-muted-foreground">

                  {data.city}, {data.state}

                </p>

                <p className="text-sm text-muted-foreground">

                  {data.country} • {data.postalCode}

                </p>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border p-5 space-y-5">

            <div className="flex items-center gap-3">

              <Phone className="h-5 w-5 text-primary" />

              <div>

                <p className="text-xs uppercase text-muted-foreground">

                  Contact

                </p>

                <p className="font-medium">

                  {data.contactNumber}

                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <Mail className="h-5 w-5 text-cyan-500" />

              <div>

                <p className="text-xs uppercase text-muted-foreground">

                  Email

                </p>

                <p className="break-all font-medium">

                  {data.email}

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Capacity */}

        <div className="grid gap-6 lg:grid-cols-2">

          <div className="rounded-2xl border p-5">

            <div className="mb-4 flex items-center gap-2">

              <Bed className="h-5 w-5 text-primary" />

              <span className="font-semibold">

                Bed Availability

              </span>

            </div>

            <div className="mb-3 flex justify-between">

              <span>

                {data.availableBeds} / {data.totalBeds}

              </span>

              <span className="font-bold">

                {Math.round(bedPercentage)}%

              </span>

            </div>

            <div className="h-3 rounded-full bg-muted">

              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400 transition-all duration-700"
                style={{
                  width: `${bedPercentage}%`,
                }}
              />

            </div>

          </div>

          <div className="rounded-2xl border p-5">

            <div className="mb-4 flex items-center gap-2">

              <HeartPulse className="h-5 w-5 text-red-500" />

              <span className="font-semibold">

                ICU Availability

              </span>

            </div>

            <div className="mb-3 flex justify-between">

              <span>

                {data.availableIcuBeds} / {data.icuBeds}

              </span>

              <span className="font-bold">

                {Math.round(icuPercentage)}%

              </span>

            </div>

            <div className="h-3 rounded-full bg-muted">

              <div
                className="h-full rounded-full bg-gradient-to-r from-red-500 to-rose-400 transition-all duration-700"
                style={{
                  width: `${icuPercentage}%`,
                }}
              />

            </div>

          </div>

        </div>

        {/* Services */}

        <div className="grid gap-6 lg:grid-cols-2">

          <div className="rounded-2xl border p-5">

            <div className="flex items-center gap-3">

              <HeartPulse className="h-5 w-5 text-red-500" />

              <div>

                <p className="text-xs uppercase text-muted-foreground">

                  Emergency Services

                </p>

                <p className="font-semibold">

                  {data.emergencyAvailable
                    ? "Available 24×7"
                    : "Unavailable"}

                </p>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border p-5">

            <div className="flex items-center gap-3">

              <ShieldCheck className="h-5 w-5 text-emerald-500" />

              <div>

                <p className="text-xs uppercase text-muted-foreground">

                  Trauma Center

                </p>

                <p className="font-semibold">

                  {data.traumaCenter
                    ? "Level Trauma Facility"
                    : "Not Available"}

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Actions */}

        <div className="flex flex-col gap-3 sm:flex-row">

          <Button
            className="flex-1"
            onClick={() =>
              window.open(
                `https://www.google.com/maps?q=${data.latitude},${data.longitude}`,
                "_blank"
              )
            }
          >

            <MapPin className="mr-2 h-4 w-4" />

            Open In Maps

            <ExternalLink className="ml-2 h-4 w-4" />

          </Button>

          <Button
            variant="outline"
            className="flex-1"
            onClick={() =>
              window.open(`tel:${data.contactNumber}`)
            }
          >

            <Phone className="mr-2 h-4 w-4" />

            Call Hospital

          </Button>

        </div>

        <DialogFooter>

          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >

            Close

          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>

  );

}