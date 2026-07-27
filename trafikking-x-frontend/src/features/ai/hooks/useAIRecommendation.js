import { useQuery } from "@tanstack/react-query";
import { getAIRecommendation } from "../services/aiApi";

function normalizeRecommendation(data) {

  if (!data) {
    return null;
  }

  const recommendations =
    data.recommendations ?? [];

  const hospital =
    recommendations.find(
      (r) => r.resourceType === "HOSPITAL"
    );

  const ambulance =
    recommendations.find(
      (r) => r.resourceType === "AMBULANCE"
    );

  const police =
    recommendations.find(
      (r) => r.resourceType === "POLICE"
    );

  return {

    incidentId: data.incidentId,

    generatedAt: data.generatedAt,

    hospitalName:
      hospital?.resourceName,

    hospitalEtaMinutes:
      hospital?.etaMinutes,

    hospitalDistance:
      hospital?.distanceKm,

    hospitalConfidence:
      hospital?.score,

    hospitalReason:
      hospital?.reason,

    vehicleNumber:
      ambulance?.resourceName,

    ambulanceEtaMinutes:
      ambulance?.etaMinutes,

    ambulanceDistance:
      ambulance?.distanceKm,

    ambulanceConfidence:
      ambulance?.score,

    ambulanceReason:
      ambulance?.reason,

    policeStationName:
      police?.resourceName,

    policeEtaMinutes:
      police?.etaMinutes,

    policeDistance:
      police?.distanceKm,

    policeConfidence:
      police?.score,

    policeReason:
      police?.reason,

  };

}

export function useAIRecommendation(incidentId) {

  return useQuery({

    queryKey: [
      "ai-recommendation",
      incidentId,
    ],

    queryFn: async () => {

      const response =
        await getAIRecommendation(
          incidentId
        );

      return normalizeRecommendation(
        response
      );

    },

    enabled: !!incidentId,

    retry: false,

    staleTime: 1000 * 60,

  });

}