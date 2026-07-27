import { Badge } from "@/components/ui/badge";

export default function NotificationStatusBadge({
  isRead,
}) {
  return (
    <Badge
      variant={isRead ? "secondary" : "default"}
      className="capitalize"
    >
      {isRead ? "Read" : "Unread"}
    </Badge>
  );
}