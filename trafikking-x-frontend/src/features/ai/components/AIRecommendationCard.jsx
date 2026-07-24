import {
  BrainCircuit,
  Ambulance,
  Building2,
  Shield,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { useAIRecommendation } from "../hooks/useAIRecommendation";

import ResourceRecommendation from "./ResourceRecommendation";

export default function AIRecommendationCard({
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

    return (

      <Card>

        <CardContent className="flex h-[250px] items-center justify-center">

          <div className="space-y-2 text-center">

            <BrainCircuit className="mx-auto h-12 w-12 text-primary" />

            <h3 className="text-lg font-semibold">

              AI Recommendation

            </h3>

            <p className="text-sm text-muted-foreground">

              Select an incident to generate
              intelligent resource recommendations.

            </p>

          </div>

        </CardContent>

      </Card>

    );

  }

  if (isLoading) {

    return (

      <Card>

        <CardContent className="flex h-[250px] items-center justify-center">

          Loading AI Recommendation...

        </CardContent>

      </Card>

    );

  }

  if (isError) {

    return (

      <Card>

        <CardContent className="flex h-[250px] items-center justify-center text-red-500">

          Failed to load AI Recommendation.

        </CardContent>

      </Card>

    );

  }

  return (

    <Card>

      <CardContent className="space-y-6 p-6">

        <div>

          <h2 className="flex items-center gap-2 text-xl font-bold">

            <BrainCircuit className="h-6 w-6 text-primary" />

            AI Recommendation

          </h2>

          <p className="mt-1 text-sm text-muted-foreground">

            Intelligent resource allocation for the selected incident.

          </p>

        </div>

        <ResourceRecommendation

          icon={
            <Building2 className="h-5 w-5" />
          }

          title="Hospital"

          name={data.hospitalName}

          distance={data.hospitalDistance}

          eta={data.hospitalEtaMinutes}

          confidence={data.hospitalConfidence}

          reason={data.hospitalReason}

        />

        <ResourceRecommendation

          icon={
            <Ambulance className="h-5 w-5" />
          }

          title="Ambulance"

          name={data.vehicleNumber}

          distance={data.ambulanceDistance}

          eta={data.ambulanceEtaMinutes}

          confidence={data.ambulanceConfidence}

          reason={data.ambulanceReason}

        />

        <ResourceRecommendation

          icon={
            <Shield className="h-5 w-5" />
          }

          title="Police Station"

          name={data.policeStationName}

          distance={data.policeDistance}

          eta={data.policeEtaMinutes}

          confidence={data.policeConfidence}

          reason={data.policeReason}

        />

      </CardContent>

    </Card>

  );

}