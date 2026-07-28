import {
  Building2,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import PoliceStatusBadge
  from "./PoliceStatusBadge";

export default function PoliceCard({

  station,

}) {

  return (

    <Card className="group overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">

      {/* Top Accent */}

      <div className="h-1 bg-gradient-to-r from-blue-500 via-primary to-cyan-500" />

      <CardContent className="p-6">

        {/* Header */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

          <div className="flex items-start gap-4">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">

              <Shield className="h-7 w-7 text-primary" />

            </div>

            <div>

              <h3 className="text-lg font-semibold">

                {station.stationName}

              </h3>

              <p className="mt-1 text-sm text-muted-foreground">

                {station.stationType}

              </p>

            </div>

          </div>

          <PoliceStatusBadge

            active={station.active}

          />

        </div>

        {/* Details */}

        <div className="mt-6 grid gap-4 md:grid-cols-2">

          <div className="flex items-center gap-3 rounded-xl bg-muted/40 p-3">

            <Building2 className="h-5 w-5 text-primary" />

            <div>

              <p className="text-xs uppercase tracking-wide text-muted-foreground">

                Station Code

              </p>

              <p className="font-semibold">

                {station.stationCode}

              </p>

            </div>

          </div>

          <div className="flex items-center gap-3 rounded-xl bg-muted/40 p-3">

            <MapPin className="h-5 w-5 text-red-500" />

            <div>

              <p className="text-xs uppercase tracking-wide text-muted-foreground">

                City

              </p>

              <p className="font-semibold">

                {station.city}

              </p>

            </div>

          </div>

          <div className="flex items-center gap-3 rounded-xl bg-muted/40 p-3">

            <Phone className="h-5 w-5 text-emerald-500" />

            <div>

              <p className="text-xs uppercase tracking-wide text-muted-foreground">

                Contact

              </p>

              <p className="font-semibold">

                {station.contactNumber}

              </p>

            </div>

          </div>

          <div className="flex items-center gap-3 rounded-xl bg-muted/40 p-3">

            <Mail className="h-5 w-5 text-cyan-500" />

            <div className="min-w-0">

              <p className="text-xs uppercase tracking-wide text-muted-foreground">

                Email

              </p>

              <p className="truncate font-semibold">

                {station.email}

              </p>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-6 border-t pt-4">

          <div className="flex items-center justify-between">

            <span className="text-sm text-muted-foreground">

              Emergency Response Status

            </span>

            <span className="font-semibold text-primary">

              {station.active
                ? "Operational"
                : "Offline"}

            </span>

          </div>

        </div>

      </CardContent>

    </Card>

  );

}