import HospitalHistoryList
  from "../components/history/HospitalHistoryList";

import { useHospitalCaseHistory }
  from "../hooks/useHospitalCaseHistory";

export default function CaseHistoryPage() {

  const {

    data,

    isLoading,

    isError,

  } = useHospitalCaseHistory();

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

        Failed to load history.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">

          Case History

        </h1>

        <p className="mt-2 text-muted-foreground">

          Recently completed hospital emergency cases.

        </p>

      </div>

      <HospitalHistoryList

        history={data ?? []}

      />

    </div>

  );

}