import {
  Bed,
  Building2,
  HeartPulse,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HospitalCard({

  hospital,

  onView,

}) {

  return (

    <div className="group rounded-3xl border border-border bg-card/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">

            <Building2 className="h-7 w-7 text-primary" />

          </div>

          <div>

            <h3 className="text-lg font-semibold">

              {hospital.hospitalName}

            </h3>

            <p className="text-sm text-muted-foreground">

              {hospital.hospitalType?.replaceAll("_", " ")}

            </p>

          </div>

        </div>

        {hospital.emergencyAvailable && (

          <Badge>

            Emergency

          </Badge>

        )}

      </div>

      <div className="mt-6 space-y-4">

        <div className="flex items-center gap-2 text-sm text-muted-foreground">

          <MapPin className="h-4 w-4" />

          {hospital.city}, {hospital.state}

        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">

          <Phone className="h-4 w-4" />

          {hospital.contactNumber}

        </div>

        <div className="flex items-center gap-2 text-sm">

          <Bed className="h-4 w-4 text-primary" />

          <span>

            Beds

          </span>

          <span className="font-semibold">

            {hospital.availableBeds}

          </span>

          <span className="text-muted-foreground">

            /

          </span>

          <span>

            {hospital.totalBeds}

          </span>

        </div>

        <div className="flex items-center gap-2 text-sm">

          <HeartPulse className="h-4 w-4 text-red-500" />

          <span>

            ICU

          </span>

          <span className="font-semibold">

            {hospital.availableIcuBeds}

          </span>

          <span className="text-muted-foreground">

            /

          </span>

          <span>

            {hospital.icuBeds}

          </span>

        </div>

        {hospital.traumaCenter && (

          <div className="flex items-center gap-2 text-sm text-emerald-600">

            <ShieldCheck className="h-4 w-4" />

            Trauma Center

          </div>

        )}

      </div>

      <div className="mt-8 flex justify-end">

        <Button
          onClick={() => onView(hospital)}
        >

          View Details

        </Button>

      </div>

    </div>

  );

}