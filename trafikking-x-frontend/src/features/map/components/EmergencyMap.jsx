import "leaflet/dist/leaflet.css";

import { Card, CardContent } from "@/components/ui/card";
import { useMapOverview } from "../hooks/useMapOverview";
import { markerIcons } from "../utils/markerIcons";
import MapPopup from "./MapPopup";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";

import L from "leaflet";
import AutoFitBounds from "./AutoFitBounds";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Default map center (Delhi)
const DEFAULT_CENTER = [28.6139, 77.2090];

export default function EmergencyMap() {
  const { data, isLoading, isError } = useMapOverview();

  console.log(data);

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

          {data?.incidents?.map((incident) => (
            <Marker
    key={incident.id}
    icon={
      markerIcons[
        incident.severity
      ] ?? markerIcons.DEFAULT
    }
    position={[
      incident.latitude,
      incident.longitude,
    ]}
>
              <Popup maxWidth={300}>
  <MapPopup incident={incident} />
</Popup>
            </Marker>
          ))}
        </MapContainer>
      </CardContent>
    </Card>
  );
}