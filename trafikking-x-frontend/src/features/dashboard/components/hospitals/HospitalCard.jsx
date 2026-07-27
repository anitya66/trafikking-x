import { Card, CardContent } from "@/components/ui/card";

import HospitalStatusBadge
  from "./HospitalStatusBadge";

export default function HospitalCard({

  hospital,

}) {

  return (

    <Card>

      <CardContent className="space-y-4 p-6">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-semibold">

              {hospital.hospitalName}

            </h3>

            <p className="text-sm text-muted-foreground">

              {hospital.hospitalType}

            </p>

          </div>

          <HospitalStatusBadge

            active={hospital.active}

          />

        </div>

        <div className="grid gap-2 text-sm">

          <p>

            City:

            {" "}

            {hospital.city}

          </p>

          <p>

            Contact:

            {" "}

            {hospital.contactNumber}

          </p>

          <p>

            Beds:

            {" "}

            {hospital.availableBeds}

            {" / "}

            {hospital.totalBeds}

          </p>

          <p>

            ICU:

            {" "}

            {hospital.availableIcuBeds}

            {" / "}

            {hospital.icuBeds}

          </p>

        </div>

      </CardContent>

    </Card>

  );

}