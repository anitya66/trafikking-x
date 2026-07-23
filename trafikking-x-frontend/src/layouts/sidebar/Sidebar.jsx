import { NavLink } from "react-router-dom";

import { SIDEBAR_NAVIGATION } from "@/shared/constants/navigation";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  return (
    <aside className="hidden h-screen w-72 shrink-0 border-r border-border bg-card/70 backdrop-blur-xl lg:flex lg:flex-col">
      {/* Logo */}
      <div className="border-b border-border px-6 py-6">
        <h1 className="text-2xl font-bold tracking-tight">
          TRAFIKKING<span className="text-primary"> X</span>
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Emergency Command Center
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6">
        <ul className="space-y-2">
          {SIDEBAR_NAVIGATION.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )
                  }
                >
                  <Icon className="h-5 w-5" />

                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-border p-4">
        <div className="rounded-xl border border-border bg-background/40 p-4">
          <p className="text-xs font-medium text-muted-foreground">
            SYSTEM STATUS
          </p>

          <div className="mt-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />

            <span className="text-sm font-medium">
              All Services Operational
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}