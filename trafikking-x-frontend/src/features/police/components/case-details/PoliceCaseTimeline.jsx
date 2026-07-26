import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

export default function PoliceCaseTimeline({
  status,
}) {
  return (
    <Card>

      <CardHeader>

        <CardTitle>

          Case Timeline

        </CardTitle>

      </CardHeader>

      <CardContent>

        <div className="space-y-4">

          <TimelineItem
            title="Case Created"
            active
          />

          <TimelineItem
            title="Case Accepted"
            active={
              status === "ACCEPTED" ||
              status === "RESPONDING" ||
              status === "ON_SCENE" ||
              status === "COMPLETED"
            }
          />

          <TimelineItem
            title="Responding"
            active={
              status === "RESPONDING" ||
              status === "ON_SCENE" ||
              status === "COMPLETED"
            }
          />

          <TimelineItem
            title="On Scene"
            active={
              status === "ON_SCENE" ||
              status === "COMPLETED"
            }
          />

          <TimelineItem
            title="Completed"
            active={
              status === "COMPLETED"
            }
          />

        </div>

      </CardContent>

    </Card>
  );
}

function TimelineItem({
  title,
  active,
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-4">

      <span className="font-medium">
        {title}
      </span>

      <Badge
        variant={
          active
            ? "default"
            : "secondary"
        }
      >
        {active
          ? "Completed"
          : "Pending"}
      </Badge>

    </div>
  );
}