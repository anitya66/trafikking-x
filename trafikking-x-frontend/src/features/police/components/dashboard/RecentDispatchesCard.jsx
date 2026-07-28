import { Link } from "react-router-dom";

import {
  Activity,
  ArrowRight,
  Clock3,
  History,
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

import { usePoliceHistory } from "../../hooks/usePoliceHistory";

export default function RecentDispatchesCard() {

  const {

    data: history = [],

    isLoading,

  } = usePoliceHistory();

  return (

    <Card className="rounded-3xl">

      <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-primary/10 p-2">

            <History className="h-5 w-5 text-primary" />

          </div>

          <div>

            <CardTitle>

              Recent Dispatches

            </CardTitle>

            <p className="text-sm text-muted-foreground">

              Recently completed police responses.

            </p>

          </div>

        </div>

        <Button
          asChild
          size="sm"
          variant="outline"
        >

          <Link to="/police/history">

            View History

          </Link>

        </Button>

      </CardHeader>

      <CardContent>

        {isLoading ? (

          <div className="flex h-44 items-center justify-center text-muted-foreground">

            Loading dispatch history...

          </div>

        ) : history.length === 0 ? (

          <div className="flex h-44 flex-col items-center justify-center text-center">

            <History className="mb-4 h-10 w-10 text-muted-foreground" />

            <h3 className="font-semibold">

              No Dispatch History

            </h3>

            <p className="mt-2 text-sm text-muted-foreground">

              Completed police dispatches will appear here.

            </p>

          </div>

        ) : (

          <div className="space-y-4">

            {history.slice(0, 5).map((item) => (

              <div
                key={item.id}
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

                        <h4 className="font-semibold">

                          {item.incidentNumber}

                        </h4>

                        <p className="text-sm text-muted-foreground">

                          Dispatch Completed

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

                    <Badge>

                      {item.status}

                    </Badge>

                    <Badge
                      variant="secondary"
                      className="gap-1"
                    >

                      <Clock3 className="h-3 w-3" />

                      Completed

                    </Badge>

                    <Button
                      asChild
                      size="icon"
                      variant="outline"
                    >

                      <Link
                        to={`/police/history/${item.id}`}
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