import {
  Activity,
  Ambulance,
  Building2,
  Clock3,
  FileText,
  MapPin,
  UserRound,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function InfoItem({
  icon: Icon,
  title,
  value,
  iconColor,
}) {
  return (

    <div className="rounded-2xl border bg-card/40 p-5 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5">

      <div className="flex items-start gap-4">

        <div className={`rounded-xl p-3 ${iconColor}`}>

          <Icon className="h-5 w-5" />

        </div>

        <div className="min-w-0 flex-1">

          <p className="text-xs uppercase tracking-wider text-muted-foreground">

            {title}

          </p>

          <p className="mt-2 break-words font-semibold">

            {value || "--"}

          </p>

        </div>

      </div>

    </div>

  );

}

export default function HospitalCaseInfoCard({

  hospitalCase,

}) {

  return (

    <Card className="overflow-hidden">

      <CardHeader className="border-b bg-muted/30">

        <CardTitle className="text-xl">

          Patient Information

        </CardTitle>

      </CardHeader>

      <CardContent className="p-6">

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          <InfoItem
            icon={UserRound}
            title="Patient"
            value={hospitalCase.patientName}
            iconColor="bg-primary/10 text-primary"
          />

          <InfoItem
            icon={Activity}
            title="Incident Type"
            value={hospitalCase.incidentType?.replaceAll("_", " ")}
            iconColor="bg-red-500/10 text-red-500"
          />

          <InfoItem
            icon={Building2}
            title="Hospital"
            value={hospitalCase.hospitalName}
            iconColor="bg-cyan-500/10 text-cyan-500"
          />

          <InfoItem
            icon={Ambulance}
            title="Ambulance"
            value={
              hospitalCase.ambulanceNumber ??
              "Assigned"
            }
            iconColor="bg-blue-500/10 text-blue-500"
          />

          <InfoItem
            icon={Clock3}
            title="ETA"
            value={
              hospitalCase.etaMinutes != null
                ? `${hospitalCase.etaMinutes} min`
                : "--"
            }
            iconColor="bg-orange-500/10 text-orange-500"
          />

          <InfoItem
            icon={MapPin}
            title="Location"
            value={hospitalCase.address}
            iconColor="bg-emerald-500/10 text-emerald-500"
          />

        </div>

        <div className="mt-6 rounded-2xl border p-5">

          <div className="mb-4 flex items-center gap-3">

            <div className="rounded-xl bg-amber-500/10 p-3">

              <FileText className="h-5 w-5 text-amber-500" />

            </div>

            <div>

              <h3 className="font-semibold">

                Medical Notes

              </h3>

              <p className="text-sm text-muted-foreground">

                Information shared by dispatcher

              </p>

            </div>

          </div>

          <p className="leading-7 text-muted-foreground">

            {hospitalCase.notes || "No notes available."}

          </p>

        </div>

      </CardContent>

    </Card>

  );

}