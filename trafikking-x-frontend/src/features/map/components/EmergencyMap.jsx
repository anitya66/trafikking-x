import "leaflet/dist/leaflet.css";

import { Card, CardContent } from "@/components/ui/card";

import RouteLayer from "../layers/RouteLayer";

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

export default function EmergencyMap({

  overview,

  loading,

  error,

}) {

  if (loading) {

    return (

      <Card>

        <CardContent className="flex h-[520px] items-center justify-center">

          Loading map...

        </CardContent>

      </Card>

    );

  }

  if (error) {

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
            incidents={overview?.incidents}
          />

          <IncidentLayer
            incidents={overview?.incidents}
          />

          {overview?.assignments?.map((assignment) => {

            const ambulance =
              overview?.ambulances?.find(

                (a) =>

                  a.id === assignment.ambulanceId

              );

            const incident =
              overview?.incidents?.find(

                (i) =>

                  i.id === assignment.incidentId

              );

            if (!ambulance || !incident) {

              return null;

            }

            return (

              <RouteLayer

                key={assignment.assignmentId}

                start={{

                  lat: ambulance.latitude,

                  lng: ambulance.longitude,

                }}

                end={{

                  lat: incident.latitude,

                  lng: incident.longitude,

                }}

              />

            );

          })}

          <HospitalLayer
            hospitals={overview?.hospitals}
          />

          <AmbulanceLayer
            ambulances={overview?.ambulances}
          />

          <PoliceLayer
            policeStations={overview?.policeStations}
          />

        </MapContainer>

      </CardContent>

    </Card>

  );

}