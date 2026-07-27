import { useState } from "react";

import AICommandHeader

from "../components/AICommandHeader";

import IncidentSelector

from "../components/IncidentSelector";

import AIRecommendationPanel

from "../components/AIRecommendationPanel";

import { useIncidents }

from "@/features/dashboard/hooks/useIncidents";

export default function AICommandPage() {

  const {

    data: incidents = [],

    isLoading,

  } = useIncidents();

  const [

    selectedIncident,

    setSelectedIncident,

  ] = useState(null);

  if (isLoading) {

    return (

      <div className="rounded-xl border p-16 text-center">

        Loading incidents...

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <AICommandHeader />

      <div className="grid gap-6 xl:grid-cols-3">

        <IncidentSelector

          incidents={incidents}

          selectedIncident={selectedIncident}

          onSelect={setSelectedIncident}

        />

        <div className="xl:col-span-2">

          <AIRecommendationPanel

            incident={selectedIncident}

          />

        </div>

      </div>

    </div>

  );

}