import {
  BarChart3,
  Users,
  Activity,
} from "lucide-react";

import BrowserFrame from "./BrowserFrame";

export default function AdminPreview() {
  return (
    <BrowserFrame title="Admin Dashboard">

      <div className="space-y-4">

        <div className="flex items-center justify-between rounded-2xl border border-purple-500/20 bg-purple-500/10 p-4">

          <div className="flex items-center gap-3">

            <BarChart3 className="h-5 w-5 text-purple-400" />

            <span className="font-medium text-white">
              Analytics
            </span>

          </div>

          <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-300">
            Live
          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4">

          <div className="flex items-center gap-3">

            <Users className="h-5 w-5 text-blue-400" />

            <span className="font-medium text-white">
              User Management
            </span>

          </div>

          <span className="text-sm font-semibold text-blue-300">
            4,382 Users
          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl border border-green-500/20 bg-green-500/10 p-4">

          <div className="flex items-center gap-3">

            <Activity className="h-5 w-5 text-green-400" />

            <span className="font-medium text-white">
              System Monitoring
            </span>

          </div>

          <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-300">
            Healthy
          </span>

        </div>

      </div>

    </BrowserFrame>
  );
}