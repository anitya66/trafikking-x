import { Link } from "react-router-dom";
import { ArrowRight, Clock3 } from "lucide-react";

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
    <Card>

      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle>

          Recent Dispatches

        </CardTitle>

        <Button
          asChild
          size="sm"
          variant="ghost"
        >
          <Link to="/police/history">
            View History
          </Link>
        </Button>

      </CardHeader>

      <CardContent>

        {isLoading ? (

          <p className="text-muted-foreground">

            Loading history...

          </p>

        ) : history.length === 0 ? (

          <p className="py-8 text-center text-muted-foreground">

            No dispatch history available.

          </p>

        ) : (

          <div className="space-y-4">

            {history.slice(0, 5).map((item) => (

              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border p-4 transition-all hover:bg-muted/40"
              >

                <div className="space-y-1">

                  <p className="font-semibold">

                    {item.incidentNumber}

                  </p>

                  <p className="text-sm text-muted-foreground">

                    {item.citizenName}

                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <Badge>

                    {item.status}

                  </Badge>

                  <Clock3 className="h-4 w-4 text-muted-foreground" />

                  <Button
                    asChild
                    size="icon"
                    variant="ghost"
                  >

                    <Link
                      to={`/police/history/${item.id}`}
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