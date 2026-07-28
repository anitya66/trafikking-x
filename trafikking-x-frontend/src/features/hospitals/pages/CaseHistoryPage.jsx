import {
  AlertTriangle,
  ClipboardCheck,
  Loader2,
} from "lucide-react";

import HospitalHistoryList
  from "../components/history/HospitalHistoryList";

import {
  useHospitalCaseHistory,
} from "../hooks/useHospitalCaseHistory";

export default function CaseHistoryPage() {

  const {
    data,
    isLoading,
    isError,
  } = useHospitalCaseHistory();

  if (isLoading) {

    return (

      <div className="flex justify-center">

        <div className="w-full rounded-3xl border bg-card p-20">

          <div className="text-center">

            <Loader2 className="mx-auto h-10 w-10 animate-spin text-primary" />

            <h2 className="mt-6 text-2xl font-bold">

              Loading Case History

            </h2>

            <p className="mt-2 text-muted-foreground">

              Fetching completed emergency cases...

            </p>

          </div>

        </div>

      </div>

    );

  }

  if (isError) {

    return (

      <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-10">

        <div className="flex items-start gap-4">

          <div className="rounded-2xl bg-red-500/10 p-3">

            <AlertTriangle className="h-7 w-7 text-red-500" />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-red-500">

              Failed To Load Case History

            </h2>

            <p className="mt-2 text-muted-foreground">

              We couldn't retrieve completed hospital cases.
              Please refresh the page and try again.

            </p>

          </div>

        </div>

      </div>

    );

  }

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-primary/10 p-4">

            <ClipboardCheck className="h-7 w-7 text-primary" />

          </div>

          <div>

            <h1 className="text-3xl font-black tracking-tight lg:text-5xl">

              Case History

            </h1>

            <p className="mt-2 max-w-2xl text-muted-foreground">

              Review completed emergency treatments,
              discharged patients, and historical hospital cases.

            </p>

          </div>

        </div>

        <div className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-4 text-center">

          <p className="text-xs uppercase tracking-widest text-muted-foreground">

            Completed Cases

          </p>

          <h2 className="mt-1 text-3xl font-black text-primary">

            {data?.length ?? 0}

          </h2>

        </div>

      </div>

      {/* History List */}

      <HospitalHistoryList
        history={data ?? []}
      />

    </div>

  );

}