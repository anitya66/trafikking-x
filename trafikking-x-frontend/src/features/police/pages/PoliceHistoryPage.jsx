import {
  CalendarDays,
  History,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import { usePoliceHistory } from "../hooks/usePoliceHistory";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

export default function PoliceHistoryPage() {

  const {

    data: history = [],

    isLoading,

    isError,

  } = usePoliceHistory();

  if (isError) {

    return (

      <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-12 text-center">

        <History className="mx-auto mb-5 h-12 w-12 text-red-500" />

        <h3 className="text-2xl font-bold">

          Unable To Load Police History

        </h3>

        <p className="mt-3 text-muted-foreground">

          Please try again later.

        </p>

      </div>

    );

  }

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-6 rounded-3xl border border-primary/10 bg-card/60 p-6 backdrop-blur lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-primary/10 p-4">

            <History className="h-8 w-8 text-primary" />

          </div>

          <div>

            <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">

              Police Case History

            </h1>

            <p className="mt-2 text-muted-foreground">

              Review completed police emergency operations.

            </p>

          </div>

        </div>

        <div className="rounded-2xl bg-primary/5 px-6 py-4 text-center">

          <p className="text-xs uppercase tracking-wider text-muted-foreground">

            Total Cases

          </p>

          <p className="mt-1 text-3xl font-black text-primary">

            {isLoading ? "--" : history.length}

          </p>

        </div>

      </div>

      <Card className="rounded-3xl">

        <CardHeader>

          <CardTitle>

            Completed Cases

          </CardTitle>

        </CardHeader>

        <CardContent>

          {isLoading ? (

            <div className="flex h-56 items-center justify-center text-muted-foreground">

              Loading police history...

            </div>

          ) : history.length === 0 ? (

            <div className="flex h-56 flex-col items-center justify-center text-center">

              <History className="mb-4 h-12 w-12 text-muted-foreground" />

              <h3 className="text-lg font-semibold">

                No History Found

              </h3>

              <p className="mt-2 text-sm text-muted-foreground">

                Completed police cases will appear here.

              </p>

            </div>

          ) : (

            <div className="space-y-5">

              {history.map((item) => (

                <div
                  key={item.id}
                  className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5"
                >

                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                    {/* Left */}

                    <div className="space-y-4">

                      <div className="flex items-center gap-3">

                        <div className="rounded-xl bg-primary/10 p-2">

                          <ShieldCheck className="h-5 w-5 text-primary" />

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

                    <div className="flex flex-wrap items-center gap-4">

                      <Badge>

                        {item.status}

                      </Badge>

                      <div className="flex items-center gap-2 rounded-xl bg-muted/50 px-3 py-2 text-sm">

                        <CalendarDays className="h-4 w-4 text-primary" />

                        <span>

                          {item.acceptedAt

                            ? new Date(
                                item.acceptedAt
                              ).toLocaleString()

                            : "-"}

                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </CardContent>

      </Card>

    </div>

  );

}