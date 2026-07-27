import { Radio } from "lucide-react";

import { useDispatchQueue } from "../hooks/useDispatchQueue";

import DispatchList from "../components/dispatch/DispatchList";

export default function DispatchPage() {

  const {

    data: dispatches = [],

    isLoading,

    isError,

  } = useDispatchQueue();

  if (isError) {

    return (

      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-red-400">

        Failed to load dispatch queue.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-primary/10 p-3">

          <Radio className="h-6 w-6 text-primary" />

        </div>

        <div>

          <h1 className="text-4xl font-bold tracking-tight">

            Dispatch Queue

          </h1>

          <p className="text-muted-foreground">

            Manage emergency dispatch operations.

          </p>

        </div>

      </div>

      {isLoading ? (

        <div className="rounded-xl border p-12 text-center">

          Loading dispatch queue...

        </div>

      ) : (

        <DispatchList

          dispatches={dispatches}

        />

      )}

    </div>

  );

}