import { Route } from "lucide-react";

import TimelineItem from "./TimelineItem";

export default function DispatchTimeline({

  timeline = [],

}) {

  if (timeline.length === 0) {

    return (

      <div className="flex min-h-[220px] flex-col items-center justify-center rounded-3xl border border-dashed bg-card/40 p-8 text-center">

        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

          <Route className="h-8 w-8 text-primary" />

        </div>

        <h3 className="text-lg font-semibold">

          No Tracking Events

        </h3>

        <p className="mt-2 max-w-sm text-sm text-muted-foreground">

          Tracking events will appear here once the dispatch
          workflow begins.

        </p>

      </div>

    );

  }

  return (

    <div className="rounded-3xl border bg-card p-6">

      <div className="mb-6">

        <h2 className="text-xl font-semibold">

          Dispatch Timeline

        </h2>

        <p className="mt-1 text-sm text-muted-foreground">

          Live chronological events for this emergency dispatch.

        </p>

      </div>

      <div className="space-y-1">

        {timeline.map((event, index) => (

          <TimelineItem
            key={`${event.title}-${event.timestamp ?? index}`}
            title={event.title}
            description={event.description}
            timestamp={event.timestamp}
            isLast={index === timeline.length - 1}
          />

        ))}

      </div>

    </div>

  );

}