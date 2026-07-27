import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
  MapPinned,
  History,
} from "lucide-react";

export default function MissionQuickActions() {

  const navigate = useNavigate();

  return (

    <Card>

      <CardHeader>

        <CardTitle>

          Quick Actions

        </CardTitle>

      </CardHeader>

      <CardContent className="flex flex-wrap gap-4">

        <Button
          onClick={() =>
            navigate("/ambulance/tracking")
          }
        >

          <MapPinned className="mr-2 h-4 w-4" />

          Live Tracking

        </Button>

        <Button
          variant="outline"
          onClick={() =>
            navigate("/ambulance/history")
          }
        >

          <History className="mr-2 h-4 w-4" />

          Mission History

        </Button>

      </CardContent>

    </Card>

  );

}