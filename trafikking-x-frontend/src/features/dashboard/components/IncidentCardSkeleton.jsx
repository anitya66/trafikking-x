import { Card, CardContent } from "@/components/ui/card";

export default function IncidentCardSkeleton() {
  return (
    <Card>
      <CardContent className="space-y-5 p-6 animate-pulse">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="h-11 w-11 rounded-xl bg-muted" />

            <div className="space-y-2">
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

        <div className="h-3 w-1/2 rounded bg-muted" />

        <div className="flex items-center justify-between">

          <div className="h-7 w-24 rounded-full bg-muted" />

          <div className="h-3 w-20 rounded bg-muted" />

        </div>

      </CardContent>
    </Card>
  );
}