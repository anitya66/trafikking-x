import {
  BrainCircuit,
  Ambulance,
  Siren,
} from "lucide-react";

import BrowserFrame from "./BrowserFrame";

export default function DispatcherPreview() {
  return (
    <BrowserFrame title="Dispatcher Dashboard">

      <div className="space-y-4">

        <div className="flex items-center justify-between rounded-2xl border border-red-500/20 bg-red-500/10 p-4">

          <div className="flex items-center gap-3">

            <Siren className="h-5 w-5 text-red-400" />

            <span className="font-medium text-white">
              Live Incident Feed
            </span>

          </div>

          <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-300">
            12 Active
          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">

          <div className="flex items-center gap-3">

            <BrainCircuit className="h-5 w-5 text-cyan-400" />

            <span className="font-medium text-white">
              AI Recommendation
            </span>

          </div>

          <span className="text-sm font-semibold text-cyan-300">
            98%
          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl border border-green-500/20 bg-green-500/10 p-4">

          <div className="flex items-center gap-3">

            <Ambulance className="h-5 w-5 text-green-400" />

            <span className="font-medium text-white">
              Dispatch Queue
            </span>

          </div>

          <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-300">
            Ready
          </span>

        </div>

      </div>

    </BrowserFrame>
  );
}