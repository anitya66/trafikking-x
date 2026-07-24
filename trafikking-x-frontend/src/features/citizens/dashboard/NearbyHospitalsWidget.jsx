import { Building2, MapPin } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NearbyHospitalsWidget() {
  return (
    <Card className="group relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardHeader className="relative">
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-blue-500" />
          Nearby Hospitals
        </CardTitle>
      </CardHeader>

      <CardContent className="relative">

        <div className="rounded-xl border border-dashed p-8 text-center">

          <MapPin className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />

          <h3 className="text-lg font-semibold">
            Location Required
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Enable your location to discover nearby hospitals and estimated travel time.
          </p>

        </div>

      </CardContent>

    </Card>
  );
}