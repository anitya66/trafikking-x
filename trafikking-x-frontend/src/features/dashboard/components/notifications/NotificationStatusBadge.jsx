import {
  BadgeCheck,
  BellDot,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function NotificationStatusBadge({

  isRead,

}) {

  return (

    <Badge
      variant="outline"
      className={
        isRead
          ? "gap-1 border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-emerald-500"
          : "gap-1 border-primary/20 bg-primary/10 px-3 py-1 text-primary"
      }
    >

      {isRead ? (

        <BadgeCheck className="h-3.5 w-3.5" />

      ) : (

        <BellDot className="h-3.5 w-3.5" />

      )}

      {isRead ? "Read" : "Unread"}

    </Badge>

  );

}