import { Card, CardContent } from "@/components/ui/card";

export default function IncidentCardSkeleton() {

  return (

    <Card className="overflow-hidden rounded-3xl">

      <div className="h-1 bg-muted animate-pulse" />

      <CardContent className="animate-pulse space-y-6 p-6">

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-4">

            <div className="h-12 w-12 rounded-2xl bg-muted" />

            <div className="space-y-3">

              <div className="h-4 w-40 rounded bg-muted" />

              <div className="h-3 w-24 rounded bg-muted" />

            </div>

          </div>

          <div className="h-7 w-20 rounded-full bg-muted" />

        </div>

        <div className="space-y-2">

          <div className="h-3 rounded bg-muted" />

          <div className="h-3 w-5/6 rounded bg-muted" />

        </div>

        <div className="h-14 rounded-xl bg-muted" />

        <div className="flex items-center justify-between border-t pt-5">

          <div className="h-7 w-24 rounded-full bg-muted" />

          <div className="h-3 w-24 rounded bg-muted" />

        </div>

      </CardContent>

    </Card>

  );

}