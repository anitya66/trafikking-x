import {

  Ambulance,

  Building2,

  Shield,

} from "lucide-react";

import AIRecommendationCard from "./AIRecommendationCard";

import AIResourceCard from "./AIResourceCard";

import AIAnalysisSummary from "./AIAnalysisSummary";

import AIEmptyState from "./AIEmptyState";

import { useAIRecommendation }

from "../hooks/useAIRecommendation";

export default function AIRecommendationPanel({

  incident,

}) {

  const {

    data,

    isLoading,

    isError,

  } = useAIRecommendation(

    incident?.id

  );

  if (!incident) {

    return <AIEmptyState />;

  }

  if (isLoading) {

    return (

      <div className="rounded-xl border p-16 text-center">

        Generating AI recommendation...

      </div>

    );

  }

  if (isError) {

    return (

      <AIRecommendationCard

        incident={incident}

      />

    );

  }

  return (

    <div className="space-y-6">

      <AIAnalysisSummary

        incident={incident}

      />

      <div className="grid gap-6 lg:grid-cols-3">

        <AIResourceCard

          title="Hospital"

          icon={<Building2 className="h-5 w-5" />}

          name={data.hospitalName}

          eta={data.hospitalEtaMinutes}

          distance={data.hospitalDistance}

          confidence={data.hospitalConfidence}

          reason={data.hospitalReason}

        />

        <AIResourceCard

          title="Ambulance"

          icon={<Ambulance className="h-5 w-5" />}

          name={data.vehicleNumber}

          eta={data.ambulanceEtaMinutes}

          distance={data.ambulanceDistance}

          confidence={data.ambulanceConfidence}

          reason={data.ambulanceReason}

        />

        <AIResourceCard

          title="Police"

          icon={<Shield className="h-5 w-5" />}

          name={data.policeStationName}

          eta={data.policeEtaMinutes}

          distance={data.policeDistance}

          confidence={data.policeConfidence}

          reason={data.policeReason}

        />

      </div>

    </div>

  );

}