import {
  ClipboardCheck,
  History,
} from "lucide-react";

import HospitalHistoryCard
  from "./HospitalHistoryCard";

export default function HospitalHistoryList({

  history,

}) {

  if (!history.length) {

    return (

      <div className="rounded-3xl border border-dashed bg-card/40 p-16">

        <div className="flex flex-col items-center text-center">

          <div className="mb-6 rounded-2xl bg-primary/10 p-5">

            <ClipboardCheck className="h-10 w-10 text-primary" />

          </div>

          <h2 className="text-2xl font-bold">

            No Completed Cases

          </h2>

          <p className="mt-3 max-w-md text-muted-foreground">

            Completed emergency treatments and discharged
            patients will appear here for future reference.

          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="space-y-6">

      {/* Summary */}

      <div className="flex flex-col gap-4 rounded-3xl border border-primary/10 bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-primary/10 p-3">

            <History className="h-6 w-6 text-primary" />

          </div>

          <div>

            <h2 className="text-xl font-bold">

              Completed Hospital Cases

            </h2>

            <p className="text-sm text-muted-foreground">

              Historical emergency treatment records.

            </p>

          </div>

        </div>

        <div className="rounded-2xl bg-background px-6 py-4 text-center shadow-sm">

          <p className="text-xs uppercase tracking-wide text-muted-foreground">

            Total Cases

          </p>

          <h3 className="mt-1 text-3xl font-black text-primary">

            {history.length}

          </h3>

        </div>

      </div>

      {/* Cards */}

      <div className="space-y-5">

        {history.map((item) => (

          <HospitalHistoryCard

            key={item.id}

            history={item}

          />

        ))}

      </div>

    </div>

  );

}