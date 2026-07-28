import {
  Activity,
  Ambulance,
  ArrowRight,
  Building2,
  ClipboardList,
  Shield,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import StatusBadge from "@/shared/components/StatusBadge";

export default function DispatchCard({

  dispatch,

}) {

  return (

    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">

      {/* Top Accent */}

      <div className="h-1 bg-gradient-to-r from-primary via-cyan-400 to-blue-500" />

      <CardContent className="p-6">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

          {/* Left */}

          <div className="flex-1">

            <div className="flex flex-wrap items-center gap-3">

              <h2 className="text-xl font-bold">

                Dispatch #{dispatch.id}

              </h2>

              <StatusBadge status={dispatch.status} />

            </div>

            <p className="mt-2 text-sm text-muted-foreground">

              Incident #{dispatch.incidentId}

            </p>

            {/* Priority */}

            <div className="mt-5 inline-flex rounded-full bg-primary/10 px-4 py-2">

              <span className="text-sm font-semibold text-primary">

                Priority : {dispatch.priority}

              </span>

            </div>

            {/* Resources */}

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              <div className="rounded-2xl border p-4">

                <div className="flex items-center gap-3">

                  <Building2 className="h-5 w-5 text-primary" />

                  <div>

                    <p className="text-xs uppercase tracking-wide text-muted-foreground">

                      Hospital

                    </p>

                    <p className="font-semibold">

                      {dispatch.hospitalId ?? "--"}

                    </p>

                  </div>

                </div>

              </div>

              <div className="rounded-2xl border p-4">

                <div className="flex items-center gap-3">

                  <Ambulance className="h-5 w-5 text-red-500" />

                  <div>

                    <p className="text-xs uppercase tracking-wide text-muted-foreground">

                      Ambulance

                    </p>

                    <p className="font-semibold">

                      {dispatch.ambulanceId ?? "--"}

                    </p>

                  </div>

                </div>

              </div>

              <div className="rounded-2xl border p-4">

                <div className="flex items-center gap-3">

                  <Shield className="h-5 w-5 text-cyan-500" />

                  <div>

                    <p className="text-xs uppercase tracking-wide text-muted-foreground">

                      Police

                    </p>

                    <p className="font-semibold">

                      {dispatch.policeStationId ?? "--"}

                    </p>

                  </div>

                </div>

              </div>

              <div className="rounded-2xl border p-4">

                <div className="flex items-center gap-3">

                  <ClipboardList className="h-5 w-5 text-emerald-500" />

                  <div>

                    <p className="text-xs uppercase tracking-wide text-muted-foreground">

                      Incident

                    </p>

                    <p className="font-semibold">

                      #{dispatch.incidentId}

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Notes */}

            {dispatch.dispatcherNotes && (

              <div className="mt-6 rounded-2xl border border-primary/10 bg-primary/5 p-4">

                <h4 className="font-semibold">

                  Dispatcher Notes

                </h4>

                <p className="mt-2 text-sm text-muted-foreground">

                  {dispatch.dispatcherNotes}

                </p>

              </div>

            )}

          </div>

          {/* Right */}

          <div className="flex flex-col gap-4 lg:w-56">

            <div className="rounded-2xl border bg-primary/5 p-5 text-center">

              <Activity className="mx-auto mb-3 h-7 w-7 text-primary" />

              <p className="text-xs uppercase tracking-wider text-muted-foreground">

                Dispatch Status

              </p>

              <p className="mt-2 font-bold">

                {dispatch.status?.replaceAll("_", " ")}

              </p>

            </div>

            <div className="flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all group-hover:gap-3">

              Live Dispatch

              <ArrowRight className="h-4 w-4" />

            </div>

          </div>

        </div>

      </CardContent>

    </Card>

  );

}