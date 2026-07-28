import {
  Ambulance,
  BadgeCheck,
  Phone,
  UserRound,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import AmbulanceStatusBadge
  from "./AmbulanceStatusBadge";

export default function AmbulanceCard({

  ambulance,

}) {

  return (

    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">

      {/* Top Accent */}

      <div className="h-1 bg-gradient-to-r from-primary via-cyan-500 to-emerald-500" />

      <CardContent className="space-y-6 p-6">

        {/* Header */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">

              <Ambulance className="h-7 w-7 text-primary" />

            </div>

            <div>

              <h3 className="text-lg font-semibold">

                {ambulance.vehicleNumber}

              </h3>

              <p className="mt-1 text-sm text-muted-foreground">

                {ambulance.vehicleType?.replaceAll("_", " ")}

              </p>

            </div>

          </div>

          <AmbulanceStatusBadge

            status={ambulance.status}

          />

        </div>

        {/* Details */}

        <div className="grid gap-4 rounded-2xl bg-muted/40 p-4 sm:grid-cols-2">

          <div className="flex items-center gap-3">

            <UserRound className="h-4 w-4 text-primary" />

            <div>

              <p className="text-xs text-muted-foreground">

                Driver

              </p>

              <p className="font-medium">

                {ambulance.driverName}

              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <Phone className="h-4 w-4 text-primary" />

            <div>

              <p className="text-xs text-muted-foreground">

                Phone

              </p>

              <p className="font-medium">

                {ambulance.driverPhone}

              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <BadgeCheck className="h-4 w-4 text-emerald-500" />

            <div>

              <p className="text-xs text-muted-foreground">

                Active

              </p>

              <p className="font-medium">

                {ambulance.active ? "Yes" : "No"}

              </p>

            </div>

          </div>

        </div>

      </CardContent>

    </Card>

  );

}