import {
  Bed,
  Building2,
  HeartPulse,
  MapPin,
  Phone,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HospitalCard({

  hospital,

  onView,

}) {

  const bedPercentage =
    hospital.totalBeds > 0
      ? Math.round(
          (hospital.availableBeds /
            hospital.totalBeds) *
            100
        )
      : 0;

  const icuPercentage =
    hospital.icuBeds > 0
      ? Math.round(
          (hospital.availableIcuBeds /
            hospital.icuBeds) *
            100
        )
      : 0;

  return (

    <div className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">

      {/* Top Gradient */}

      <div className="h-1 bg-gradient-to-r from-primary via-cyan-400 to-blue-500" />

      <div className="p-6">

        {/* Header */}

        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

              <Building2 className="h-8 w-8 text-primary" />

            </div>

            <div>

              <h2 className="text-xl font-bold">

                {hospital.hospitalName}

              </h2>

              <p className="mt-1 text-sm text-muted-foreground">

                {hospital.hospitalType?.replaceAll("_", " ")}

              </p>

            </div>

          </div>

          <div className="flex flex-wrap gap-2">

            {hospital.emergencyAvailable && (

              <Badge className="bg-red-500 text-white">

                Emergency

              </Badge>

            )}

            {hospital.traumaCenter && (

              <Badge
                variant="outline"
                className="border-emerald-500/20 bg-emerald-500/10 text-emerald-500"
              >

                Trauma Center

              </Badge>

            )}

          </div>

        </div>

        {/* Details */}

        <div className="mt-8 grid gap-4 lg:grid-cols-2">

          <div className="rounded-2xl border bg-card/40 p-4">

            <div className="flex items-center gap-3">

              <MapPin className="h-5 w-5 text-primary" />

              <div>

                <p className="text-xs uppercase tracking-wide text-muted-foreground">

                  Location

                </p>

                <p className="font-medium">

                  {hospital.city}, {hospital.state}

                </p>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border bg-card/40 p-4">

            <div className="flex items-center gap-3">

              <Phone className="h-5 w-5 text-cyan-500" />

              <div>

                <p className="text-xs uppercase tracking-wide text-muted-foreground">

                  Contact

                </p>

                <p className="font-medium">

                  {hospital.contactNumber}

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Capacity */}

        <div className="mt-8 space-y-6">

          {/* Beds */}

          <div>

            <div className="mb-2 flex items-center justify-between">

              <div className="flex items-center gap-2">

                <Bed className="h-4 w-4 text-primary" />

                <span className="font-medium">

                  Bed Availability

                </span>

              </div>

              <span className="text-sm font-bold">

                {hospital.availableBeds} / {hospital.totalBeds}

              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-muted">

              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400 transition-all duration-700"
                style={{
                  width: `${bedPercentage}%`,
                }}
              />

            </div>

          </div>

          {/* ICU */}

          <div>

            <div className="mb-2 flex items-center justify-between">

              <div className="flex items-center gap-2">

                <HeartPulse className="h-4 w-4 text-red-500" />

                <span className="font-medium">

                  ICU Availability

                </span>

              </div>

              <span className="text-sm font-bold">

                {hospital.availableIcuBeds} / {hospital.icuBeds}

              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-muted">

              <div
                className="h-full rounded-full bg-gradient-to-r from-red-500 to-rose-400 transition-all duration-700"
                style={{
                  width: `${icuPercentage}%`,
                }}
              />

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-2 text-sm text-muted-foreground">

            <ShieldCheck className="h-4 w-4 text-emerald-500" />

            {hospital.traumaCenter
              ? "Advanced Trauma Facility"
              : "General Emergency Hospital"}

          </div>

          <Button
            size="lg"
            onClick={() => onView(hospital)}
          >

            View Details

            <ArrowRight className="ml-2 h-4 w-4" />

          </Button>

        </div>

      </div>

    </div>

  );

}