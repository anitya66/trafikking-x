import {
  Ambulance,
  Clock3,
  MapPin,
  Radio,
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
    <Card className="group relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardHeader className="relative pb-5">

        <CardTitle className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-cyan-500/10 p-2">

              <Ambulance className="h-5 w-5 text-cyan-500" />

            </div>

            <div>

              <h2 className="text-lg font-bold">

                Incoming Ambulances

              </h2>

              <p className="text-sm font-normal text-muted-foreground">

                Ambulances currently heading to your hospital

              </p>

            </div>

          </div>

          <div className="rounded-full bg-cyan-500/10 px-4 py-1 text-sm font-bold text-cyan-500">

            {ambulances.length}

          </div>

        </CardTitle>

      </CardHeader>

      <CardContent className="relative">

        {ambulances.length === 0 ? (

          <div className="flex h-56 flex-col items-center justify-center rounded-2xl border border-dashed">

            <Radio className="mb-4 h-12 w-12 text-muted-foreground" />

            <h3 className="text-lg font-semibold">

              No Incoming Ambulances

            </h3>

            <p className="mt-2 text-center text-sm text-muted-foreground">

              Ambulances assigned to your hospital
              will appear here in real time.

            </p>

          </div>

        ) : (

          <div className="space-y-5">

            {ambulances.map((ambulance, index) => (

              <div
                key={ambulance.ambulanceNumber ?? index}
                className="rounded-2xl border border-border bg-card/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10"
              >

                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

                  <div className="min-w-0 flex-1">

                    <div className="flex items-center gap-2">

                      <Ambulance className="h-4 w-4 text-cyan-500" />

                      <h3 className="truncate text-lg font-semibold">

                        {ambulance.ambulanceNumber}

                      </h3>

                    </div>

                    <p className="mt-2 text-sm text-muted-foreground">

                      Driver • {ambulance.driverName}

                    </p>

                  </div>

                  <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-500">

                    {ambulance.status}

                  </span>

                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div>

                    <p className="text-xs uppercase tracking-wide text-muted-foreground">

                      Current Route

                    </p>

                    <div className="mt-1 inline-flex items-center gap-2">

                      <MapPin className="h-4 w-4 text-primary" />

                      <span className="font-medium">

                        En Route

                      </span>

                    </div>

                  </div>

                  <div className="sm:text-right">

                    <p className="text-xs uppercase tracking-wide text-muted-foreground">

                      Estimated Arrival

                    </p>

                    <div className="mt-1 inline-flex items-center gap-2 font-semibold text-primary">

                      <Clock3 className="h-4 w-4" />

                      {ambulance.etaMinutes} min

                    </div>

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