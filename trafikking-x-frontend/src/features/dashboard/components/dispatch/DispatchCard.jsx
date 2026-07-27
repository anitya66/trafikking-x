import { Card, CardContent } from "@/components/ui/card";

import DispatchStatusBadge
  from "./DispatchStatusBadge";

export default function DispatchCard({
  dispatch,
}) {

  return (

    <Card>

      <CardContent className="space-y-4 p-6">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-semibold">

              Dispatch #{dispatch.id}

            </h3>

            <p className="text-sm text-muted-foreground">

              Priority

              {" "}

              {dispatch.priority}

            </p>

          </div>

          <DispatchStatusBadge

            status={dispatch.status}

          />

        </div>

        <div className="grid gap-2 text-sm">

          <p>

            Incident ID:

            {" "}

            {dispatch.incidentId}

          </p>

          <p>

            Hospital:

            {" "}

            {dispatch.hospitalId}

          </p>

          <p>

            Ambulance:

            {" "}

            {dispatch.ambulanceId}

          </p>

          <p>

            Police:

            {" "}

            {dispatch.policeStationId}

          </p>

        </div>

        <p className="text-muted-foreground">

          {dispatch.dispatcherNotes}

        </p>

      </CardContent>

    </Card>

  );

}