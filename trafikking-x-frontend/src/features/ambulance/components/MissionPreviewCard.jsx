import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ClipboardList,
  User,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MissionPreviewCard({
  assignment,
}) {

  const navigate = useNavigate();

  if (!assignment) {

    return (

      <Card>

        <CardContent className="flex h-44 items-center justify-center">

          <div className="text-center">

            <ClipboardList className="mx-auto mb-4 h-10 w-10 text-primary" />

            <h3 className="font-semibold">

              No Active Mission

            </h3>

            <p className="mt-2 text-sm text-muted-foreground">

              Waiting for the next emergency assignment.

            </p>

          </div>

        </CardContent>

      </Card>

    );

  }

  return (

    <Card>

      <CardContent className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-xs uppercase tracking-widest text-primary">

            Current Mission

          </p>

          <h2 className="mt-2 text-2xl font-bold">

            {assignment.incidentNumber}

          </h2>

          <div className="mt-4 flex flex-wrap gap-4 text-sm">

            <span>

              <strong>Status:</strong>{" "}
              {assignment.status}

            </span>

            <span>

              <strong>Emergency:</strong>{" "}
              {assignment.emergencyType?.replaceAll("_", " ")}

            </span>

          </div>

          <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">

            <User className="h-4 w-4" />

            {assignment.citizenName}

          </div>

        </div>

        <Button
          size="lg"
          onClick={() =>
            navigate(
              "/ambulance/current-mission"
            )
          }
        >

          Open Mission

          <ArrowRight className="ml-2 h-4 w-4" />

        </Button>

      </CardContent>

    </Card>

  );

}