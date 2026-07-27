import EmergencyMap from "./EmergencyMap";
import { useMapOverview } from "../hooks/useMapOverview";

export default function DispatcherEmergencyMap() {

  const {
    data,
    isLoading,
    isError,
    error,
  } = useMapOverview();

  console.log("MAP DATA", data);
  console.log("MAP ERROR", error);

  return (
    <EmergencyMap
      overview={data}
      loading={isLoading}
      error={isError}
    />
  );
}