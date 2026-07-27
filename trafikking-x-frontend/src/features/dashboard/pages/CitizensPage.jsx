import { Users } from "lucide-react";

import CitizenList
  from "../components/citizens/CitizenList";

import { useCitizens }
  from "../hooks/useCitizens";

export default function CitizensPage() {

  const {

    data: citizens = [],

    isLoading,

    isError,

  } = useCitizens();

  if (isLoading) {

    return (

      <div className="rounded-xl border p-12 text-center">

        Loading citizens...

      </div>

    );

  }

  if (isError) {

    return (

      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-red-400">

        Failed to load citizens.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-primary/10 p-3">

          <Users className="h-6 w-6 text-primary" />

        </div>

        <div>

          <h1 className="text-4xl font-bold tracking-tight">

            Citizens

          </h1>

          <p className="text-muted-foreground">

            View registered citizen profiles.

          </p>

        </div>

      </div>

      <CitizenList
        citizens={citizens}
      />

    </div>

  );

}