import {
  Bed,
  Building2,
  HeartPulse,
  MapPin,
  Phone,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import HospitalStatusBadge
  from "./HospitalStatusBadge";

export default function HospitalCard({

  hospital,

}) {

  return (

    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">

      {/* Top Accent */}

      <div className="h-1 bg-gradient-to-r from-cyan-500 via-primary to-emerald-500" />

      <CardContent className="space-y-6 p-6">

        {/* Header */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">

              <Building2 className="h-7 w-7 text-primary" />

            </div>

            <div>

              <h3 className="text-lg font-semibold">

                {hospital.hospitalName}

              </h3>

              <p className="mt-1 text-sm text-muted-foreground">

                {hospital.hospitalType?.replaceAll("_", " ")}

              </p>

            </div>

          </div>

          <HospitalStatusBadge

            active={hospital.active}

          />

        </div>

        {/* Information */}

        <div className="grid gap-4 rounded-2xl bg-muted/40 p-4 sm:grid-cols-2">

          <div className="flex items-center gap-3">

            <MapPin className="h-4 w-4 text-primary" />

            <div>

              <p className="text-xs text-muted-foreground">

                City

              </p>

              <p className="font-medium">

                {hospital.city}

              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <Phone className="h-4 w-4 text-primary" />

            <div>

              <p className="text-xs text-muted-foreground">

                Contact

              </p>

              <p className="font-medium">

                {hospital.contactNumber}

              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <Bed className="h-4 w-4 text-primary" />

            <div>

              <p className="text-xs text-muted-foreground">

                Available Beds

              </p>

              <p className="font-semibold">

                {hospital.availableBeds}

                <span className="text-muted-foreground">

                  {" / "}

                  {hospital.totalBeds}

                </span>

              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <HeartPulse className="h-4 w-4 text-red-500" />

            <div>

              <p className="text-xs text-muted-foreground">

                ICU Beds

              </p>

              <p className="font-semibold">

                {hospital.availableIcuBeds}

                <span className="text-muted-foreground">

                  {" / "}

                  {hospital.icuBeds}

                </span>

              </p>

            </div>

          </div>

        </div>

      </CardContent>

    </Card>

  );

}