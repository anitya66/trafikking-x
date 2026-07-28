import { Link } from "react-router-dom";

import {
  Activity,
  ArrowRight,
  Clock3,
  UserRound,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ActiveCasesTable({

  cases = [],

  isLoading,

}) {

  return (

    <Card className="rounded-3xl">

      <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-primary/10 p-2">

            <Activity className="h-5 w-5 text-primary" />

          </div>

          <div>

            <CardTitle>

              Assigned Cases

            </CardTitle>

            <p className="text-sm text-muted-foreground">

              Police emergency assignments.

            </p>

          </div>

        </div>

      </CardHeader>

      <CardContent>

        {isLoading ? (

          <div className="flex h-52 items-center justify-center text-muted-foreground">

            Loading assigned cases...

          </div>

        ) : cases.length === 0 ? (

          <div className="flex h-52 flex-col items-center justify-center text-center">

            <Activity className="mb-4 h-10 w-10 text-muted-foreground" />

            <h3 className="font-semibold">

              No Assigned Cases

            </h3>

            <p className="mt-2 text-sm text-muted-foreground">

              There are currently no active police assignments.

            </p>

          </div>

        ) : (

          <div className="space-y-4">

            {cases.map((item) => (

              <div
                key={item.dispatchId}
                className="group rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5"
              >

                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                  {/* Left */}

                  <div className="space-y-3">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-primary/10 p-2">

                        <Activity className="h-5 w-5 text-primary" />

                      </div>

                      <div>

                        <h3 className="font-semibold">

                          {item.incidentNumber}

                        </h3>

                        <p className="text-sm text-muted-foreground">

                          {item.incidentType}

                        </p>

                      </div>

                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">

                      <UserRound className="h-4 w-4" />

                      {item.citizenName}

                    </div>

                  </div>

                  {/* Right */}

                  <div className="flex flex-wrap items-center gap-3">

                    <Badge
                      variant={
                        item.severity === "HIGH" ||
                        item.severity === "CRITICAL"
                          ? "destructive"
                          : "secondary"
                      }
                    >

                      {item.severity}

                    </Badge>

                    <Badge
                      variant="outline"
                      className="gap-1"
                    >

                      <Clock3 className="h-3 w-3" />

                      {item.etaMinutes} min

                    </Badge>

                    <Button
                      asChild
                      size="icon"
                      variant="outline"
                    >

                      <Link
                        to={`/police/cases/${item.dispatchId}`}
                      >

                        <ArrowRight className="h-4 w-4" />

                      </Link>

                    </Button>

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