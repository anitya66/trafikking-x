import {
  Ambulance,
  Clock3,
  MapPin,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function IncomingAmbulancesCard({

  ambulances = [],

}) {

  return (

    <Card>

      <CardHeader className="pb-4">

        <CardTitle className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <Ambulance className="h-5 w-5 text-primary" />

            <span>Incoming Ambulances</span>

          </div>

          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">

            {ambulances.length}

          </span>

        </CardTitle>

      </CardHeader>

      <CardContent>

        {ambulances.length === 0 ? (

          <div className="flex h-40 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">

            No incoming ambulances.

          </div>

        ) : (

          <div className="space-y-4">

            {ambulances.map((ambulance, index) => (

              <div
                key={ambulance.ambulanceNumber ?? index}
                className="rounded-xl border p-4 transition-all hover:border-primary/40 hover:bg-primary/5"
              >

                <div className="flex items-start justify-between gap-4">

                  <div className="min-w-0 flex-1">

                    <h3 className="font-semibold">

                      {ambulance.ambulanceNumber}

                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">

                      {ambulance.driverName}

                    </p>

                  </div>

                  <span className="rounded-full bg-cyan-500/10 px-2 py-1 text-xs font-medium text-cyan-500">

                    {ambulance.status}

                  </span>

                </div>

                <div className="mt-4 flex items-center justify-between">

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">

                    <MapPin className="h-4 w-4" />

                    En Route

                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold">

                    <Clock3 className="h-4 w-4 text-primary" />

                    {ambulance.etaMinutes} min

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </CardContent>

    </Card>

  );

}