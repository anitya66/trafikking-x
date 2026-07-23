import {
  Bell,
  BrainCircuit,
  Circle,
  Search,
  UserCircle2,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Topbar() {
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

          {/* Status */}

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

          {/* Notifications */}

          <Button
            variant="outline"
            size="icon"
          >
            <Bell className="h-5 w-5" />
          </Button>

          {/* Profile */}

          <Button
            variant="ghost"
            className="gap-2"
          >
            <UserCircle2 className="h-6 w-6" />

            <span>Operator</span>
          </Button>

        </div>
      </div>
    </header>
  );
}