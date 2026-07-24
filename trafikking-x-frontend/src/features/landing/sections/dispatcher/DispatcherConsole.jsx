import GlassCard from "@/shared/components/landing/GlassCard";

import AssignmentCard from "./AssignmentCard";
import LiveDispatchTimeline from "./LiveDispatchTimeline";

export default function DispatcherConsole() {
  return (
    <GlassCard className="mt-16 p-8">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-2xl font-bold text-white">

            Dispatcher Command Center

          </h3>

          <p className="mt-2 text-slate-400">

            AI recommendations are reviewed before resources are dispatched.

          </p>

        </div>

        <div className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">

          LIVE

        </div>

      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">

        <AssignmentCard
          title="Ambulance"
          value="Unit A-12"
          status="Assigned"
        />

        <AssignmentCard
          title="Hospital"
          value="City Trauma Center"
          status="Reserved"
        />

        <AssignmentCard
          title="Police"
          value="Unit P-07"
          status="Dispatched"
        />

      </div>

      <div className="mt-12">

        <LiveDispatchTimeline />

      </div>

    </GlassCard>
  );
}