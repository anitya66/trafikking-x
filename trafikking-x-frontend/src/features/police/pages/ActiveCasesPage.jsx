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
      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-red-400">
        Failed to load police cases.
      </div>
    );

  }

  return (

    <div className="space-y-8">

      <div>

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-primary/10 p-3">

            <Shield className="h-6 w-6 text-primary" />

          </div>

          <div>

            <h1 className="text-4xl font-bold tracking-tight">
              Active Cases
            </h1>

            <p className="text-muted-foreground">
              View and manage incoming police incidents.
            </p>

          </div>

        </div>

      </div>

      <ActiveCasesTable
        cases={cases}
        isLoading={isLoading}
      />

    </div>

  );

}