import {
  Badge,
} from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  CalendarDays,
  FileText,
  MapPin,
  Phone,
  Shield,
  UserRound,
  AlertTriangle,
} from "lucide-react";

export default function PoliceCaseInfoCard({

  policeCase,

}) {

  return (

    <Card className="rounded-3xl">

      <CardHeader>

        <CardTitle className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">

            <Shield className="h-5 w-5 text-primary" />

          </div>

          <div>

            <h2 className="text-xl font-semibold">

              Case Information

            </h2>

            <p className="text-sm font-normal text-muted-foreground">

              Incident details and citizen information

            </p>

          </div>

        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-8">

        {/* Information Grid */}

        <div className="grid gap-6 lg:grid-cols-2">

          <InfoItem

            icon={AlertTriangle}

            label="Incident Number"

            value={policeCase.incidentNumber}

          />

          <InfoItem

            icon={Shield}

            label="Incident Type"

            value={policeCase.incidentType}

          />

          <InfoItem

            icon={UserRound}

            label="Citizen"

            value={policeCase.citizenName}

          />

          <InfoItem

            icon={Phone}

            label="Phone"

            value={policeCase.citizenPhoneNumber}

          />

          <InfoItem

            icon={Shield}

            label="Police Station"

            value={policeCase.policeStationName}

          />

          <InfoItem

            icon={MapPin}

            label="Incident Address"

            value={policeCase.incidentLocation}

          />

          <InfoItem

            icon={CalendarDays}

            label="Reported At"

            value={policeCase.incidentReportedAt}

          />

          <div className="rounded-2xl border p-5">

            <div className="mb-3 flex items-center gap-2">

              <Shield className="h-5 w-5 text-primary" />

              <span className="text-sm text-muted-foreground">

                Current Status

              </span>

            </div>

            <Badge
              className="px-4 py-2"
            >

              {policeCase.status}

            </Badge>

          </div>

        </div>

        {/* Description */}

        <div className="rounded-2xl border p-6">

          <div className="mb-4 flex items-center gap-2">

            <FileText className="h-5 w-5 text-primary" />

            <h3 className="font-semibold">

              Incident Description

            </h3>

          </div>

          <p className="leading-7 text-muted-foreground">

            {policeCase.incidentDescription ||

              "No description available."}

          </p>

        </div>

        {/* Notes */}

        <div className="rounded-2xl border p-6">

          <div className="mb-4 flex items-center gap-2">

            <FileText className="h-5 w-5 text-primary" />

            <h3 className="font-semibold">

              Officer Notes

            </h3>

          </div>

          <p className="leading-7 text-muted-foreground">

            {policeCase.notes ||

              "No notes available."}

          </p>

        </div>

      </CardContent>

    </Card>

  );

}

function InfoItem({

  icon: Icon,

  label,

  value,

}) {

  return (

    <div className="rounded-2xl border p-5 transition-all hover:border-primary/30">

      <div className="mb-3 flex items-center gap-2">

        <Icon className="h-5 w-5 text-primary" />

        <span className="text-sm text-muted-foreground">

          {label}

        </span>

      </div>

      <p className="break-words font-semibold">

        {value || "-"}

      </p>

    </div>

  );

}