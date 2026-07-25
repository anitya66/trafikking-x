import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingState({

  cards = 4,

}) {

  return (

    <div className="grid gap-6 lg:grid-cols-2">

      {Array.from({ length: cards }).map((_, index) => (

        <div
          key={index}
          className="rounded-2xl border bg-card p-6"
        >

          <Skeleton className="h-6 w-40" />

          <Skeleton className="mt-4 h-4 w-28" />

          <Skeleton className="mt-6 h-4 w-full" />

          <Skeleton className="mt-2 h-4 w-5/6" />

          <Skeleton className="mt-2 h-4 w-3/4" />

          <div className="mt-8 flex justify-end">

            <Skeleton className="h-10 w-28 rounded-lg" />

          </div>

        </div>

      ))}

    </div>

  );

}