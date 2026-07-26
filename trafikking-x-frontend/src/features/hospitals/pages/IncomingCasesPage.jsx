import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

import HospitalCaseList
  from "../components/cases/HospitalCaseList";

import { useIncomingPatients }
  from "../hooks/useIncomingPatients";

export default function IncomingCasesPage() {

  const {

    data,

    isLoading,

    isError,

  } = useIncomingPatients();

  if (isLoading) {

    return (

      <div className="flex h-60 items-center justify-center">

        Loading...

      </div>

    );

  }

  if (isError) {

    return (

      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-red-400">

        Failed to load incoming patients.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold">

          Incoming Cases

        </h1>

        <p className="mt-2 text-muted-foreground">

          Manage all incoming emergency patients.

        </p>

      </div>

      {/* Search */}

      <div className="relative max-w-md">

        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

        <Input
          placeholder="Search patient..."
          className="pl-10"
        />

      </div>

      {/* Cases */}

      <HospitalCaseList

        patients={data ?? []}

      />

    </div>

  );

}