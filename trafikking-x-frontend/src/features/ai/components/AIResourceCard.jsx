import { Card, CardContent } from "@/components/ui/card";

export default function AIResourceCard({

  title,

  name,

  eta,

  distance,

  confidence,

  reason,

  icon,

}) {

  return (

    <Card>

      <CardContent className="space-y-4 p-6">

        <div className="flex items-center gap-3">

          {icon}

          <h3 className="text-lg font-semibold">

            {title}

          </h3>

        </div>

        <div className="space-y-2 text-sm">

          <p>

            <strong>Name:</strong>

            {" "}

            {name}

          </p>

          <p>

            <strong>ETA:</strong>

            {" "}

            {eta} min

          </p>

          <p>

            <strong>Distance:</strong>

            {" "}

            {distance} km

          </p>

          <p>

            <strong>Confidence:</strong>

            {" "}

            {confidence}%

          </p>

          <p className="text-muted-foreground">

            {reason}

          </p>

        </div>

      </CardContent>

    </Card>

  );

}