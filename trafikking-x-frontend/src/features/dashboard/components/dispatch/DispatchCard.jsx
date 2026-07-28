import {
  Ambulance,
  ArrowRight,
  Building2,
  ClipboardList,
  FileText,
  Shield,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import DispatchStatusBadge
  from "./DispatchStatusBadge";

export default function DispatchCard({

  dispatch,

}) {

  return (

    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">

      <div className="h-1 bg-gradient-to-r from-primary via-cyan-400 to-blue-500" />

      <CardContent className="p-6">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}

          <div className="flex-1">

            <div className="flex flex-wrap items-center gap-3">

              <h2 className="text-xl font-bold">

                Dispatch #{dispatch.id}

              </h2>

              <DispatchStatusBadge
                status={dispatch.status}
              />

            </div>

            <p className="mt-2 text-sm text-muted-foreground">

              Priority: <strong>{dispatch.priority}</strong>

            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              <div className="flex items-center gap-3 rounded-xl border p-3">

                <ClipboardList className="h-5 w-5 text-primary" />

                <div>

                  <p className="text-xs text-muted-foreground">

                    Incident

                  </p>

                  <p className="font-medium">

                    #{dispatch.incidentId}

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-xl border p-3">

                <Building2 className="h-5 w-5 text-cyan-500" />

                <div>

                  <p className="text-xs text-muted-foreground">

                    Hospital

                  </p>

                  <p className="font-medium">

                    {dispatch.hospitalId ?? "--"}

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-xl border p-3">

                <Ambulance className="h-5 w-5 text-red-500" />

                <div>

                  <p className="text-xs text-muted-foreground">

                    Ambulance

                  </p>

                  <p className="font-medium">

                    {dispatch.ambulanceId ?? "--"}

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-xl border p-3">

                <Shield className="h-5 w-5 text-emerald-500" />

                <div>

                  <p className="text-xs text-muted-foreground">

                    Police

                  </p>

                  <p className="font-medium">

                    {dispatch.policeStationId ?? "--"}

                  </p>

                </div>

              </div>

            </div>

            {dispatch.dispatcherNotes && (

              <div className="mt-6 rounded-2xl border border-primary/10 bg-primary/5 p-4">

                <div className="flex items-center gap-2">

                  <FileText className="h-4 w-4 text-primary" />

                  <span className="font-semibold">

                    Dispatcher Notes

                  </span>

                </div>

                <p className="mt-3 text-sm text-muted-foreground">

                  {dispatch.dispatcherNotes}

                </p>

              </div>

            )}

          </div>

          {/* Right */}

          <div className="flex flex-col items-stretch gap-4 lg:w-52">

            <div className="rounded-2xl border bg-primary/5 p-5 text-center">

              <p className="text-xs uppercase tracking-wide text-muted-foreground">

                Current Status

              </p>

              <h3 className="mt-2 font-bold">

                {dispatch.status?.replaceAll("_", " ")}

              </h3>

            </div>

            <div className="flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition group-hover:gap-3">

              View Dispatch

              <ArrowRight className="h-4 w-4" />

            </div>

          </div>

        </div>

      </CardContent>

    </Card>

  );

}