import {
  Bell,
  BrainCircuit,
  Circle,
  Search,
  UserCircle2,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { getCurrentUser, logout } from "@/shared/utils/auth";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

import {
  useUnreadCount,
} from "@/features/notification/hooks/useNotifications";



import {
  useNotificationSocket,
} from "@/hooks/realtime/useNotificationSocket";



export default function Topbar() {

  const user = getCurrentUser();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const {
    data: unreadCount = 0,
  } = useUnreadCount();

  useNotificationSocket((notification) => {

    console.log("Notification", notification);

    toast.info(notification.title, {
      description: notification.message,
    });

    queryClient.invalidateQueries({
      queryKey: ["notifications"],
    });

    queryClient.invalidateQueries({
      queryKey: ["notification-unread-count"],
    });

  });

  function handleLogout() {

    logout();

    navigate("/login", {
      replace: true,
    });

  }

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-xl">

      <div className="flex h-20 items-center justify-between px-8">

        {/* Search */}

        <div className="relative w-full max-w-md">

          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            placeholder="Search incidents, citizens, hospitals..."
            className="pl-11"
          />

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          {/* System Status */}

          <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2">

            <Circle className="h-2.5 w-2.5 fill-green-500 text-green-500" />

            <span className="text-sm font-medium">
              System Online
            </span>

          </div>

          {/* AI */}

          <Button
            variant="outline"
            size="icon"
          >
            <BrainCircuit className="h-5 w-5" />
          </Button>

          {/* Notification Bell */}

          <div className="relative">

            <Button
              variant="outline"
              size="icon"
            >
              <Bell className="h-5 w-5" />
            </Button>

            {unreadCount > 0 && (

              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">

                {unreadCount > 99 ? "99+" : unreadCount}

              </span>

            )}

          </div>

          {/* Profile */}

          <Button
            variant="ghost"
            className="gap-2"
            onClick={handleLogout}
          >

            <UserCircle2 className="h-6 w-6" />

            <span>
              {user?.fullName ?? "Operator"}
            </span>

          </Button>

        </div>

      </div>

    </header>
  );
}