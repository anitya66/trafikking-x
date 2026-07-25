import { Outlet } from "react-router-dom";

import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">

        <Sidebar />

        <div className="flex min-h-screen flex-1 flex-col">

          <Topbar />

          <main className="flex-1 overflow-y-auto">

            <div className="page-container section-spacing">

              <Outlet />

            </div>

          </main>

        </div>

      </div>
    </div>
  );
}