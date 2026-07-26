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

export default function ActiveCasesCard({
  cases = [],
  isLoading,
}) {
  return (
    <Card>

      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle>
          Active Cases
        </CardTitle>

        <Button
          asChild
          size="sm"
          variant="ghost"
        >
          <Link to="/police/cases">
            View All
          </Link>
        </Button>

      </CardHeader>

      <CardContent>

        {isLoading ? (

          <p className="text-muted-foreground">
            Loading active cases...
          </p>

        ) : cases.length === 0 ? (

          <p className="py-10 text-center text-muted-foreground">
            No active police cases.
          </p>

        ) : (

          <div className="space-y-4">

            {cases.slice(0, 5).map((item) => (

              <div
                key={item.dispatchId}
                className="flex items-center justify-between rounded-xl border p-4 transition-all hover:bg-muted/40"
              >

                <div>

                  <h4 className="font-semibold">
                    {item.incidentNumber}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {item.citizenName}
                  </p>

                  <p className="mt-1 text-sm">
                    {item.incidentType}
                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <Badge variant="destructive">
                    {item.severity}
                  </Badge>

                  <Badge variant="secondary">
                    ETA {item.etaMinutes} min
                  </Badge>

                  <Button
                    asChild
                    size="icon"
                    variant="ghost"
                  >
                    <Link
                      to={`/police/cases/${item.dispatchId}`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>

                </div>

              </div>

            ))}

          </div>

        )}

      </CardContent>

    </Card>
  );
}