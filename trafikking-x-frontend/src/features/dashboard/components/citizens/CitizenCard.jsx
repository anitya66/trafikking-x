import { Card, CardContent } from "@/components/ui/card";

import CitizenStatusBadge
  from "./CitizenStatusBadge";

export default function CitizenCard({

  citizen,

}) {

  return (

    <Card>

      <CardContent className="space-y-4 p-6">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-semibold">

              {citizen.fullName}

            </h3>

            <p className="text-sm text-muted-foreground">

              {citizen.email}

            </p>

          </div>

          <CitizenStatusBadge

            completed={citizen.profileCompleted}

          />

        </div>

        <div className="grid gap-2 text-sm">

          <p>

            Phone:

            {" "}

            {citizen.phoneNumber}

          </p>

          <p>

            Blood Group:

            {" "}

            {citizen.bloodGroup ?? "N/A"}

          </p>

          <p>

            City:

            {" "}

            {citizen.city ?? "N/A"}

          </p>

          <p>

            Gender:

            {" "}

            {citizen.gender ?? "N/A"}

          </p>

        </div>

      </CardContent>

    </Card>

  );

}