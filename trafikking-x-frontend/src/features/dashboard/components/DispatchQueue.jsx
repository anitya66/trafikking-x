import { Radio } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import DispatchCard from "./DispatchCard";

import { useDispatchQueue } from "../hooks/useDispatchQueue";

export default function DispatchQueue() {

  const {

    data: dispatches = [],

    isLoading,

    isError,

  } = useDispatchQueue();

  let content;

  if (isLoading) {

    content = (

      <Card className="rounded-3xl">

        <CardContent className="flex h-56 items-center justify-center">

          <div className="text-center">

            <Radio className="mx-auto mb-4 h-10 w-10 animate-pulse text-primary" />

            <p className="text-muted-foreground">

              Loading dispatch queue...

            </p>

          </div>

        </CardContent>

      </Card>

    );

  } else if (isError) {

    content = (

      <Card className="rounded-3xl border-red-500/20 bg-red-500/5">

        <CardContent className="flex h-56 items-center justify-center">

          <div className="text-center">

            <Radio className="mx-auto mb-4 h-10 w-10 text-red-500" />

            <h3 className="text-lg font-semibold text-red-500">

              Failed To Load

            </h3>

            <p className="mt-2 text-muted-foreground">

              Unable to fetch dispatch queue.

            </p>

          </div>

        </CardContent>

      </Card>

    );

  } else if (dispatches.length === 0) {

    content = (

      <Card className="rounded-3xl border-dashed">

        <CardContent className="flex min-h-[320px] flex-col items-center justify-center text-center">

          <div className="mb-6 rounded-2xl bg-primary/10 p-5">

            <Radio className="h-10 w-10 text-primary" />

          </div>

          <h3 className="text-2xl font-bold">

            Dispatch Queue Empty

          </h3>

          <p className="mt-3 max-w-md text-muted-foreground">

            There are currently no emergency dispatches waiting
            for assignment.

          </p>

        </CardContent>

      </Card>

    );

  } else {

    content = (

      <div className="space-y-6">

        {dispatches.map((dispatch) => (

          <DispatchCard
            key={dispatch.id}
            dispatch={dispatch}
          />

        ))}

      </div>

    );

  }

  return (

    <section className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-5 rounded-3xl border border-primary/10 bg-card/60 p-6 backdrop-blur lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-primary/10 p-4">

            <Radio className="h-7 w-7 text-primary" />

          </div>

          <div>

            <h2 className="text-3xl font-bold tracking-tight">

              Dispatch Queue

            </h2>

            <p className="mt-1 text-muted-foreground">

              Monitor and manage live emergency dispatch assignments.

            </p>

          </div>

        </div>

        <div className="rounded-2xl bg-primary/5 px-6 py-4 text-center">

          <p className="text-xs uppercase tracking-wider text-muted-foreground">

            Active Dispatches

          </p>

          <p className="mt-1 text-3xl font-black text-primary">

            {dispatches.length}

          </p>

        </div>

      </div>

      {content}

    </section>

  );

}