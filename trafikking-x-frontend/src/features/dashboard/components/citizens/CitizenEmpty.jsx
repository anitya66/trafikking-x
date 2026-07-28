import {
  CheckCircle2,
  Users,
} from "lucide-react";

export default function CitizenEmpty() {

  return (

    <div className="rounded-3xl border border-dashed border-border bg-card/40 p-16">

      <div className="flex flex-col items-center text-center">

        <div className="mb-6 rounded-3xl bg-primary/10 p-6">

          <Users className="h-12 w-12 text-primary" />

        </div>

        <h3 className="text-2xl font-bold">

          No Citizens Found

        </h3>

        <p className="mt-3 max-w-md text-muted-foreground">

          There are currently no registered citizens
          in the emergency response network.

        </p>

        <div className="mt-8 flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2">

          <CheckCircle2 className="h-4 w-4 text-primary" />

          <span className="text-sm font-medium text-primary">

            Database Ready

          </span>

        </div>

      </div>

    </div>

  );

}