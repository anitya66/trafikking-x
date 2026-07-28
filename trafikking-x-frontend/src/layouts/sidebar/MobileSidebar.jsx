import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import getSidebarConfig from "@/navigation/getSidebarConfig";
import { getCurrentRole } from "@/shared/utils/role";
import { cn } from "@/lib/utils";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  const role = getCurrentRole();
  const navigationItems = getSidebarConfig(role);

  return (
    <>
      {/* Hamburger */}

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Overlay */}

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}

      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-72 border-r border-border bg-background shadow-2xl transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-border px-6 py-6">

          <div>

            <h2 className="text-2xl font-bold">

              TRAFIKKING
              <span className="text-primary"> X</span>

            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Emergency Command Center
            </p>

          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>

        </div>

        {/* Navigation */}

        <nav className="p-4">

          <ul className="space-y-2">

            {navigationItems.map((item) => {

              const Icon = item.icon;

              return (

                <li key={item.path}>

                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-3 rounded-xl px-4 py-3 transition-all",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
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

        <div className="absolute bottom-0 w-full border-t border-border p-4">

          <div className="rounded-xl border border-border bg-card p-4">

            <p className="text-xs text-muted-foreground">
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
    </>
  );
}