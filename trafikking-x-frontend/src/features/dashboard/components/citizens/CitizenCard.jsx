import {
  Droplets,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import CitizenStatusBadge
  from "./CitizenStatusBadge";

export default function CitizenCard({

  citizen,

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

              <User className="h-7 w-7 text-primary" />

            </div>

            <div>

              <h3 className="text-lg font-semibold">

                {citizen.fullName}

              </h3>

              <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">

                <Mail className="h-4 w-4" />

                <span className="break-all">

                  {citizen.email}

                </span>

              </div>

            </div>

          </div>

          <CitizenStatusBadge

            completed={citizen.profileCompleted}

          />

        </div>

        {/* Details */}

        <div className="grid gap-4 rounded-2xl bg-muted/40 p-4 sm:grid-cols-2">

          <div className="flex items-center gap-3">

            <Phone className="h-4 w-4 text-primary" />

            <div>

              <p className="text-xs text-muted-foreground">

                Phone

              </p>

              <p className="font-medium">

                {citizen.phoneNumber}

              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <Droplets className="h-4 w-4 text-red-500" />

            <div>

              <p className="text-xs text-muted-foreground">

                Blood Group

              </p>

              <p className="font-medium">

                {citizen.bloodGroup ?? "N/A"}

              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <MapPin className="h-4 w-4 text-primary" />

            <div>

              <p className="text-xs text-muted-foreground">

                City

              </p>

              <p className="font-medium">

                {citizen.city ?? "N/A"}

              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <User className="h-4 w-4 text-primary" />

            <div>

              <p className="text-xs text-muted-foreground">

                Gender

              </p>

              <p className="font-medium">

                {citizen.gender ?? "N/A"}

              </p>

            </div>

          </div>

        </div>

      </CardContent>

    </Card>

  );

}