import { useState } from "react";

import {
  ArrowRight,
  Radio,
} from "lucide-react";

import IncidentCard from "./IncidentCard";
import IncidentCardSkeleton from "./IncidentCardSkeleton";
import EmptyIncidentFeed from "./EmptyIncidentFeed";
import IncidentFeedError from "./IncidentFeedError";

import { useRecentIncidents } from "../hooks/useRecentIncidents";

export default function LiveIncidentFeed({

  onIncidentSelect,

}) {

  const {

    data: incidents = [],

    isLoading,

    isError,

  } = useRecentIncidents();

  const [

    selectedIncidentId,

    setSelectedIncidentId,

  ] = useState(null);

  function handleSelect(incident) {

    setSelectedIncidentId(
      incident.id
    );

    onIncidentSelect?.(incident);

  }

  let content;

  if (isLoading) {

    content = (

      <div className="space-y-6">

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

      <div className="space-y-6">

        {incidents.map((incident) => (

          <IncidentCard
            key={incident.id}
            incident={incident}
            selected={
              selectedIncidentId === incident.id
            }
            onClick={() =>
              handleSelect(incident)
            }
          />

        ))}

      </div>

    );

  }

  return (

    <section className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-5 rounded-3xl border border-primary/10 bg-card/60 p-6 backdrop-blur lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-primary/10 p-4">

            <Radio className="h-7 w-7 text-primary" />

          </div>

          <div>

            <h2 className="text-3xl font-bold tracking-tight">

              Live Incident Feed

            </h2>

            <p className="mt-1 text-muted-foreground">

              Monitor real-time emergency incidents reported by citizens.

            </p>

          </div>

        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-all hover:border-primary hover:text-primary hover:gap-3">

          View All

          <ArrowRight className="h-4 w-4" />

        </button>

      </div>

      {content}

    </section>

  );

}