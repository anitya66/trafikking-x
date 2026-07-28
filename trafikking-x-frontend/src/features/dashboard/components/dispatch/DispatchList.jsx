import {
  ClipboardCheck,
  Radio,
} from "lucide-react";

import DispatchCard from "./DispatchCard";

export default function DispatchList({

  dispatches,

}) {

  if (!dispatches.length) {

    return (

      <div className="rounded-3xl border border-dashed bg-card/40 p-16">

        <div className="flex flex-col items-center text-center">

          <div className="mb-6 rounded-2xl bg-primary/10 p-5">

            <ClipboardCheck className="h-10 w-10 text-primary" />

          </div>

          <h2 className="text-2xl font-bold">

            Dispatch Queue Empty

          </h2>

          <p className="mt-3 max-w-md text-muted-foreground">

            There are currently no active dispatches waiting
            for action.

          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="space-y-6">

      {/* Summary */}

      <div className="flex flex-col gap-4 rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-primary/10 p-3">

            <Radio className="h-6 w-6 text-primary" />

          </div>

          <div>

            <h2 className="text-xl font-bold">

              Active Dispatch Operations

            </h2>

            <p className="text-sm text-muted-foreground">

              Live emergency dispatch assignments.

            </p>

          </div>

        </div>

        <div className="rounded-2xl bg-background px-6 py-4 text-center shadow-sm">

          <p className="text-xs uppercase tracking-wide text-muted-foreground">

            Total Dispatches

          </p>

          <h3 className="mt-1 text-3xl font-black text-primary">

            {dispatches.length}

          </h3>

        </div>

      </div>

      <div className="space-y-5">

        {dispatches.map((dispatch) => (

          <DispatchCard
            key={dispatch.id}
            dispatch={dispatch}
          />

        ))}

      </div>

    </div>

  );

}