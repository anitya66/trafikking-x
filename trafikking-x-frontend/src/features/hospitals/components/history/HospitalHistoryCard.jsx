import {
  ArrowRight,
  CalendarDays,
  Clock3,
  FileHeart,
  UserRound,
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
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
    >

      <CardContent className="p-6">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}

          <div className="flex flex-1 gap-5">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">

              <FileHeart className="h-7 w-7 text-primary" />

            </div>

            <div className="flex-1">

              <div className="flex flex-wrap items-center gap-3">

                <h2 className="text-xl font-bold">

                  {history.patientName}

                </h2>

                <HospitalCaseStatusBadge
                  status={history.status}
                />

              </div>

              <p className="mt-2 text-sm text-muted-foreground">

                {history.incidentNumber}

              </p>

              <div className="mt-5 grid gap-3 md:grid-cols-2">

                <div className="flex items-center gap-3 rounded-xl border bg-card/40 p-3">

                  <UserRound className="h-4 w-4 text-primary" />

                  <div>

                    <p className="text-xs uppercase tracking-wide text-muted-foreground">

                      Patient

                    </p>

                    <p className="font-medium">

                      {history.patientName}

                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-3 rounded-xl border bg-card/40 p-3">

                  <CalendarDays className="h-4 w-4 text-cyan-500" />

                  <div>

                    <p className="text-xs uppercase tracking-wide text-muted-foreground">

                      Accepted

                    </p>

                    <p className="font-medium">

                      {history.acceptedAt
                        ? new Date(
                            history.acceptedAt
                          ).toLocaleString()
                        : "--"}

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex flex-col items-stretch gap-4 lg:w-52">

            <div className="rounded-2xl border bg-primary/5 p-4 text-center">

              <Clock3 className="mx-auto mb-2 h-5 w-5 text-primary" />

              <p className="text-xs uppercase tracking-wide text-muted-foreground">

                Status

              </p>

              <p className="mt-1 font-semibold">

                {history.status?.replaceAll("_", " ")}

              </p>

            </div>

            <div className="flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition group-hover:gap-3">

              View Details

              <ArrowRight className="h-4 w-4" />

            </div>

          </div>

        </div>

      </CardContent>

    </Card>

  );

}