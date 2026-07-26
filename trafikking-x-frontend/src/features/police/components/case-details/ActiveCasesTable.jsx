import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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

    <Card>

      <CardHeader>

        <CardTitle>

          Assigned Cases

        </CardTitle>

      </CardHeader>

      <CardContent>

        {isLoading ? (

          <div className="py-10 text-center text-muted-foreground">

            Loading cases...

          </div>

        ) : cases.length === 0 ? (

          <div className="py-10 text-center text-muted-foreground">

            No active police cases available.

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
                    Severity
                  </th>

                  <th className="py-3 text-left">
                    ETA
                  </th>

                  <th className="py-3 text-right">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {cases.map((item) => (

                  <tr
                    key={item.dispatchId}
                    className="border-b transition-colors hover:bg-muted/30"
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

                    </td>

                    <td>

                      {item.etaMinutes} mins

                    </td>

                    <td className="text-right">

                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                      >

                        <Link
                          to={`/police/cases/${item.dispatchId}`}
                        >

                          <ArrowRight className="h-4 w-4" />

                        </Link>

                      </Button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </CardContent>

    </Card>

  );

}