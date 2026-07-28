import { Shield } from "lucide-react";

import { usePoliceCases } from "../hooks/usePoliceCases";

import ActiveCasesTable from "../components/case-details/ActiveCasesTable";

export default function ActiveCasesPage() {

  const {
    data: cases = [],
    isLoading,
    isError,
  } = usePoliceCases();

  if (isError) {

    return (

      <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-8 text-red-400">

        Failed to load police cases.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

          <Shield className="h-8 w-8 text-primary" />

        </div>

        <div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">

            Active Cases

          </h1>

          <p className="mt-2 max-w-2xl text-muted-foreground">

            Monitor and manage active police incidents assigned
            to your station in real time.

          </p>

        </div>

      </div>

      {/* Content */}

      <ActiveCasesTable
        cases={cases}
        isLoading={isLoading}
      />

    </div>

  );

}