import {
  AlertTriangle,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

export default function HighPriorityAlertsCard({

  count,

  isLoading,

}) {

  return (

    <Card className="overflow-hidden rounded-3xl">

      {/* Top Accent */}

      <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500" />

      <CardHeader>

        <CardTitle className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-500/10">

            <AlertTriangle className="h-6 w-6 text-red-500" />

          </div>

          <div>

            <h3 className="text-lg font-semibold">

              High Priority Alerts

            </h3>

            <p className="text-sm font-normal text-muted-foreground">

              Critical emergency monitoring

            </p>

          </div>

        </CardTitle>

      </CardHeader>

      <CardContent>

        {isLoading ? (

          <div className="flex h-40 flex-col items-center justify-center text-center">

            <AlertTriangle className="mb-4 h-8 w-8 animate-pulse text-red-500" />

            <p className="font-medium">

              Loading Alerts...

            </p>

            <p className="mt-2 text-sm text-muted-foreground">

              Checking active emergency incidents.

            </p>

          </div>

        ) : (

          <div className="space-y-5">

            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">

              <div className="mb-4 flex items-center justify-between">

                <span className="text-sm font-medium text-muted-foreground">

                  Active Critical Cases

                </span>

                <Badge
                  variant={
                    count > 0
                      ? "destructive"
                      : "secondary"
                  }
                  className="px-3 py-1"
                >

                  {count}

                </Badge>

              </div>

              <p className="text-4xl font-black text-red-500">

                {count}

              </p>

            </div>

            <div
              className={`flex items-center gap-3 rounded-2xl p-4 ${
                count > 0
                  ? "border border-red-500/20 bg-red-500/10"
                  : "border border-emerald-500/20 bg-emerald-500/10"
              }`}
            >

              {count > 0 ? (

                <ShieldAlert className="h-6 w-6 text-red-500" />

              ) : (

                <ShieldCheck className="h-6 w-6 text-emerald-500" />

              )}

              <div>

                <p className="font-semibold">

                  {count > 0

                    ? "Immediate Response Required"

                    : "All Clear"}

                </p>

                <p className="text-sm text-muted-foreground">

                  {count > 0

                    ? "Critical incidents require immediate police intervention."

                    : "There are no critical alerts at this time."}

                </p>

              </div>

            </div>

          </div>

        )}

      </CardContent>

    </Card>

  );

}