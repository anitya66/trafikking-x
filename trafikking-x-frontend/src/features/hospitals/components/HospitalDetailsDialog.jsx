import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  MapPin,
  Phone,
  Mail,
  Bed,
  HeartPulse,
  ShieldCheck,
  Building2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

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

        <DialogContent>

          <div className="py-10 text-center">

            Loading hospital...

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

        <DialogContent>

          <div className="py-10 text-center text-red-500">

            Failed to load hospital.

          </div>

        </DialogContent>

      </Dialog>

    );

  }

  return (

    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >

      <DialogContent className="sm:max-w-3xl">

        <DialogHeader>

          <DialogTitle>

            Hospital Details

          </DialogTitle>

          <DialogDescription>

            View complete hospital information.

          </DialogDescription>

        </DialogHeader>

                <div className="space-y-6">

          {/* Hospital Header */}

          <div className="rounded-2xl border border-border bg-card p-6">

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

                <Building2 className="h-8 w-8 text-primary" />

              </div>

              <div>

                <h2 className="text-2xl font-bold">

                  {data.hospitalName}

                </h2>

                <p className="text-muted-foreground">

                  {data.hospitalType.replaceAll("_", " ")}

                </p>

              </div>

            </div>

          </div>

          {/* Address */}

          <div className="rounded-2xl border p-5">

            <div className="mb-4 flex items-center gap-2">

              <MapPin className="h-5 w-5 text-primary" />

              <h3 className="font-semibold">

                Address

              </h3>

            </div>

            <p>

              {data.address}

            </p>

            <p className="text-muted-foreground">

              {data.city}, {data.state}, {data.country}

            </p>

            <p className="text-muted-foreground">

              {data.postalCode}

            </p>

          </div>

          {/* Contact */}

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border p-5">

              <div className="mb-3 flex items-center gap-2">

                <Phone className="h-5 w-5 text-primary" />

                <h3 className="font-semibold">

                  Contact Number

                </h3>

              </div>

              <p>

                {data.contactNumber}

              </p>

            </div>

            <div className="rounded-2xl border p-5">

              <div className="mb-3 flex items-center gap-2">

                <Mail className="h-5 w-5 text-primary" />

                <h3 className="font-semibold">

                  Email

                </h3>

              </div>

              <p className="break-all">

                {data.email}

              </p>

            </div>

          </div>

          {/* Beds */}

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border p-5">

              <div className="mb-3 flex items-center gap-2">

                <Bed className="h-5 w-5 text-primary" />

                <h3 className="font-semibold">

                  Bed Availability

                </h3>

              </div>

              <p className="text-2xl font-bold">

                {data.availableBeds}

                <span className="text-base font-normal text-muted-foreground">

                  {" "}
                  / {data.totalBeds}

                </span>

              </p>

            </div>

            <div className="rounded-2xl border p-5">

              <div className="mb-3 flex items-center gap-2">

                <HeartPulse className="h-5 w-5 text-red-500" />

                <h3 className="font-semibold">

                  ICU Availability

                </h3>

              </div>

              <p className="text-2xl font-bold">

                {data.availableIcuBeds}

                <span className="text-base font-normal text-muted-foreground">

                  {" "}
                  / {data.icuBeds}

                </span>

              </p>

            </div>

          </div>

                    {/* Hospital Features */}

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border p-5">

              <div className="mb-3 flex items-center gap-2">

                <HeartPulse className="h-5 w-5 text-red-500" />

                <h3 className="font-semibold">

                  Emergency Services

                </h3>

              </div>

              <p
                className={
                  data.emergencyAvailable
                    ? "font-medium text-emerald-600"
                    : "font-medium text-red-500"
                }
              >

                {data.emergencyAvailable
                  ? "Available"
                  : "Not Available"}

              </p>

            </div>

            <div className="rounded-2xl border p-5">

              <div className="mb-3 flex items-center gap-2">

                <ShieldCheck className="h-5 w-5 text-primary" />

                <h3 className="font-semibold">

                  Trauma Center

                </h3>

              </div>

              <p
                className={
                  data.traumaCenter
                    ? "font-medium text-emerald-600"
                    : "font-medium text-muted-foreground"
                }
              >

                {data.traumaCenter
                  ? "Available"
                  : "Not Available"}

              </p>

            </div>

          </div>

          {/* Actions */}

          <div className="flex flex-wrap gap-3">

            <Button
              onClick={() =>
                window.open(
                  `https://www.google.com/maps?q=${data.latitude},${data.longitude}`,
                  "_blank"
                )
              }
            >

              <MapPin className="mr-2 h-4 w-4" />

              Open in Maps

            </Button>

            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  `tel:${data.contactNumber}`
                )
              }
            >

              <Phone className="mr-2 h-4 w-4" />

              Call Hospital

            </Button>

          </div>

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