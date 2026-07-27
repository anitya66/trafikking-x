import { Card, CardContent } from "@/components/ui/card";
import SeverityBadge from "@/shared/components/SeverityBadge";

export default function AIAnalysisSummary({

  incident,

}) {

  if (!incident) return null;

  return (

<Card>

  <CardContent className="space-y-6 p-6">

    <div>

      <h2 className="text-2xl font-bold">

        Incident Analysis

      </h2>

      <p className="text-sm text-muted-foreground">

        AI extracted information from the selected emergency.

      </p>

    </div>

    <div className="grid gap-6 md:grid-cols-2">

      <div>

        <p className="text-xs uppercase text-muted-foreground">

          Incident Number

        </p>

        <p className="font-semibold">

          {incident.incidentNumber}

        </p>

      </div>

      <div>

        <p className="text-xs uppercase text-muted-foreground">

          Severity

        </p>

        <SeverityBadge

          severity={incident.severity}

        />

      </div>

      <div>

        <p className="text-xs uppercase text-muted-foreground">

          Type

        </p>

        <p className="font-semibold">

          {incident.incidentType}

        </p>

      </div>

      <div>

        <p className="text-xs uppercase text-muted-foreground">

          Location

        </p>

        <p className="font-semibold">

         {incident.address}

        </p>

      </div>

      <div className="md:col-span-2">

        <p className="text-xs uppercase text-muted-foreground">

          Description

        </p>

        <p>

          {incident.description}

        </p>

      </div>

    </div>

  </CardContent>

</Card>

  );

}