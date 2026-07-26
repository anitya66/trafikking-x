import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

export default function PoliceCaseInfoCard({
  policeCase,
}) {
  return (
    <Card>

      <CardHeader>

        <CardTitle>
          Case Information
        </CardTitle>

      </CardHeader>

      <CardContent>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="space-y-4">

            <InfoItem
              label="Incident Number"
              value={policeCase.incidentNumber}
            />

            <InfoItem
              label="Incident Type"
              value={policeCase.incidentType}
            />

            <InfoItem
              label="Citizen"
              value={policeCase.citizenName}
            />

            <InfoItem
              label="Phone"
              value={policeCase.citizenPhoneNumber}
            />

          </div>

          <div className="space-y-4">

            <InfoItem
              label="Police Station"
              value={policeCase.policeStationName}
            />

            <InfoItem
              label="Address"
              value={policeCase.incidentLocation}
            />

            <InfoItem
              label="Reported At"
              value={policeCase.incidentReportedAt}
            />

            <div>

              <p className="mb-2 text-sm text-muted-foreground">
                Status
              </p>

              <Badge>

                {policeCase.status}

              </Badge>

            </div>

          </div>

        </div>

        <div className="mt-8">

          <p className="mb-2 text-sm text-muted-foreground">

            Description

          </p>

          <div className="rounded-xl border p-4">

            {policeCase.incidentDescription}

          </div>

        </div>

        <div className="mt-6">

          <p className="mb-2 text-sm text-muted-foreground">

            Notes

          </p>

          <div className="rounded-xl border p-4">

            {policeCase.notes || "No notes available."}

          </div>

        </div>

      </CardContent>

    </Card>
  );
}

function InfoItem({
  label,
  value,
}) {
  return (
    <div>

      <p className="text-sm text-muted-foreground">

        {label}

      </p>

      <p className="font-medium">

        {value || "-"}

      </p>

    </div>
  );
}