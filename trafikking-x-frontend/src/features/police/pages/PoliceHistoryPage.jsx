import { History } from "lucide-react";

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

      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-red-400">

        Failed to load police history.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-primary/10 p-3">

          <History className="h-6 w-6 text-primary" />

        </div>

        <div>

          <h1 className="text-4xl font-bold tracking-tight">

            Case History

          </h1>

          <p className="text-muted-foreground">

            View previously handled police cases.

          </p>

        </div>

      </div>

      <Card>

        <CardHeader>

          <CardTitle>

            Police Case History

          </CardTitle>

        </CardHeader>

        <CardContent>

          {isLoading ? (

            <div className="py-10 text-center text-muted-foreground">

              Loading history...

            </div>

          ) : history.length === 0 ? (

            <div className="py-10 text-center text-muted-foreground">

              No completed police cases found.

            </div>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="border-b">

                    <th className="py-3 text-left">

                      Incident

                    </th>

                    <th className="py-3 text-left">

                      Citizen

                    </th>

                    <th className="py-3 text-left">

                      Status

                    </th>

                    <th className="py-3 text-left">

                      Accepted

                    </th>

                  </tr>

                </thead>

                <tbody>

                  {history.map((item) => (

                    <tr
                      key={item.id}
                      className="border-b hover:bg-muted/30"
                    >

                      <td className="py-4">

                        <div>

                          <p className="font-medium">

                            {item.incidentNumber}

                          </p>

                          <p className="text-sm text-muted-foreground">

                            {item.incidentType}

                          </p>

                        </div>

                      </td>

                      <td>

                        {item.citizenName}

                      </td>

                      <td>

                        <Badge>

                          {item.status}

                        </Badge>

                      </td>

                      <td>

                        {item.acceptedAt
                          ? new Date(
                              item.acceptedAt
                            ).toLocaleString()
                          : "-"}

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </CardContent>

      </Card>

    </div>

  );

}