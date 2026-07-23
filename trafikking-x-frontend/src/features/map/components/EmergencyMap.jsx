import "leaflet/dist/leaflet.css";

import { Card, CardContent } from "@/components/ui/card";
import { useMapOverview } from "../hooks/useMapOverview";

import {
  MapContainer,
  TileLayer,
} from "react-leaflet";

import L from "leaflet";

import AutoFitBounds from "./AutoFitBounds";

import IncidentLayer from "../layers/IncidentLayer";
import HospitalLayer from "../layers/HospitalLayer";
import AmbulanceLayer from "../layers/AmbulanceLayer";
import PoliceLayer from "../layers/PoliceLayer";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const DEFAULT_CENTER = [28.6139, 77.2090];

export default function EmergencyMap() {

  const { data, isLoading, isError } = useMapOverview();

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex h-[520px] items-center justify-center">
          Loading map...
        </CardContent>
      </Card>
    );
  }

  if (isError) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="flex h-[520px] items-center justify-center text-red-500">
          Failed to load map.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">

        <MapContainer
          center={DEFAULT_CENTER}
          zoom={12}
          scrollWheelZoom
          className="h-[650px] w-full"
        >

          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <AutoFitBounds
            incidents={data?.incidents}
          />

          <IncidentLayer
            incidents={data?.incidents}
          />

          <HospitalLayer
            hospitals={data?.hospitals}
          />

          <AmbulanceLayer
            ambulances={data?.ambulances}
          />

          <PoliceLayer
            policeStations={data?.policeStations}
          />

        </MapContainer>

      </CardContent>
    </Card>
  );
}