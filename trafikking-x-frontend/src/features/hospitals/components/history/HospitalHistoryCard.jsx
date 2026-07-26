import {
  CalendarDays,
  FileHeart,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import HospitalCaseStatusBadge
  from "../cases/HospitalCaseStatusBadge";

  import { useNavigate } from "react-router-dom";

export default function HospitalHistoryCard({

  history,

}) {

    const navigate = useNavigate();

  return (

    <Card
  onClick={() =>
    navigate(`/hospital/cases/${history.id}`)
  }
  className="cursor-pointer transition-all duration-300 hover:border-primary/40"
>

      <CardContent className="p-6">

        <div className="flex items-start justify-between">

          <div className="space-y-3">

            <div className="flex items-center gap-2">

              <FileHeart className="h-5 w-5 text-primary" />

              <h3 className="font-semibold">

                {history.patientName}

              </h3>

            </div>

            <p className="text-sm text-muted-foreground">

              {history.incidentNumber}

            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">

              <CalendarDays className="h-4 w-4" />

              {new Date(
                history.acceptedAt
              ).toLocaleString()}

            </div>

          </div>

          <HospitalCaseStatusBadge

            status={history.status}

          />

        </div>

      </CardContent>

    </Card>

  );

}