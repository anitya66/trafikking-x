import { AlertTriangle } from "lucide-react";

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
    <Card>

      <CardHeader>

        <CardTitle className="flex items-center gap-2">

          <AlertTriangle className="h-5 w-5 text-red-500" />

          High Priority Alerts

        </CardTitle>

      </CardHeader>

      <CardContent>

        {isLoading ? (

          <p className="text-muted-foreground">
            Loading...
          </p>

        ) : (

          <div className="space-y-4">

            <Badge
              variant={
                count > 0
                  ? "destructive"
                  : "secondary"
              }
            >
              {count} Critical Cases
            </Badge>

            <p className="text-sm text-muted-foreground">

              {count > 0
                ? "Immediate police response required."
                : "No critical alerts at this time."}

            </p>

          </div>

        )}

      </CardContent>

    </Card>
  );
}