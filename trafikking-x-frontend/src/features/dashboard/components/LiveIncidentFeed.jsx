import { ArrowRight } from "lucide-react";

import IncidentCard from "./IncidentCard";
import IncidentCardSkeleton from "./IncidentCardSkeleton";
import EmptyIncidentFeed from "./EmptyIncidentFeed";
import IncidentFeedError from "./IncidentFeedError";

import { useRecentIncidents } from "../hooks/useRecentIncidents";

export default function LiveIncidentFeed() {
  
    const {
    data: incidents = [],
    isLoading,
    isError,
} = useRecentIncidents();

  let content;

  if (isLoading) {
    content = (
      <div className="space-y-5">
        <IncidentCardSkeleton />
        <IncidentCardSkeleton />
        <IncidentCardSkeleton />
      </div>
    );
  } else if (isError) {
    content = <IncidentFeedError />;
  } else if (incidents.length === 0) {
    content = <EmptyIncidentFeed />;
  } else {
    content = (
      <div className="space-y-5">
        {incidents.map((incident) => (
          <IncidentCard
            key={incident.id}
            incident={incident}
          />
        ))}
      </div>
    );
  }

  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            🚨 Live Incident Feed
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Real-time emergency incidents reported by citizens.
          </p>
        </div>

        <button className="flex items-center gap-2 text-sm font-medium text-primary transition hover:gap-3">
          View All

          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {content}
    </section>
  );
}