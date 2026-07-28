import {
  RefreshCcw,
  TriangleAlert,
} from "lucide-react";

export default function IncidentFeedError() {

  return (

    <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-12">

      <div className="flex flex-col items-center text-center">

        <div className="mb-6 rounded-3xl bg-red-500/10 p-6">

          <TriangleAlert className="h-12 w-12 text-red-500" />

        </div>

        <h3 className="text-2xl font-bold">

          Unable To Load Incidents

        </h3>

        <p className="mt-3 max-w-md text-muted-foreground">

          Something went wrong while fetching the
          latest emergency incidents.

        </p>

        <div className="mt-8 flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2">

          <RefreshCcw className="h-4 w-4 text-red-500" />

          <span className="text-sm font-medium text-red-500">

            Please Try Again

          </span>

        </div>

      </div>

    </div>

  );

}