import {
  TriangleAlert,
  MapPinned,
  History,
} from "lucide-react";

import BrowserFrame from "./BrowserFrame";

export default function CitizenPreview() {
  return (
    <BrowserFrame title="Citizen Dashboard">

      <div className="space-y-4">

        <div className="flex items-center justify-between rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4">

          <div className="flex items-center gap-3">

            <TriangleAlert className="h-5 w-5 text-blue-400" />

            <span className="font-medium text-white">
              Report Emergency
            </span>

          </div>

          <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300">
            Ready
          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl border border-green-500/20 bg-green-500/10 p-4">

          <div className="flex items-center gap-3">

            <MapPinned className="h-5 w-5 text-green-400" />

            <span className="font-medium text-white">
              Live Tracking
            </span>

          </div>

          <span className="text-sm font-semibold text-green-300">
            Active
          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] p-4">

          <div className="flex items-center gap-3">

            <History className="h-5 w-5 text-slate-300" />

            <span className="font-medium text-white">
              Incident History
            </span>

          </div>

          <span className="text-xs text-slate-400">
            28 Records
          </span>

        </div>

      </div>

    </BrowserFrame>
  );
}