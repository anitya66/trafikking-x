import "leaflet/dist/leaflet.css";

import {
  Map,
  TriangleAlert,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import {
  MapContainer,
  TileLayer,
} from "react-leaflet";

import L from "leaflet";

import AutoFitBounds from "./AutoFitBounds";

import RouteLayer from "../layers/RouteLayer";
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

const DEFAULT_CENTER = [

  28.6139,

  77.2090,

];

export default function EmergencyMap({

  overview,

  loading,

  error,

}) {

  if (loading) {

    return (

      <Card className="overflow-hidden rounded-3xl">

        <CardContent className="flex h-[650px] flex-col items-center justify-center gap-4">

          <Map className="h-10 w-10 animate-pulse text-primary" />

          <h3 className="text-xl font-semibold">

            Loading Emergency Map

          </h3>

          <p className="text-center text-muted-foreground">

            Fetching live incidents, ambulances,
            hospitals and police stations.

          </p>

        </CardContent>

      </Card>

    );

  }

  if (error) {

    return (

      <Card className="overflow-hidden rounded-3xl border-red-500/20">

        <CardContent className="flex h-[650px] flex-col items-center justify-center gap-4">

          <TriangleAlert className="h-10 w-10 text-red-500" />

          <h3 className="text-xl font-semibold">

            Unable To Load Emergency Map

          </h3>

          <p className="text-center text-muted-foreground">

            Please refresh the page and try again.

          </p>

        </CardContent>

      </Card>

    );

  }

  return (

    <Card className="overflow-hidden rounded-3xl border shadow-sm">

      <CardContent className="relative p-0">

        {/* Live Badge */}

        <div className="absolute left-4 top-4 z-[1000] rounded-full border bg-background/90 px-4 py-2 backdrop-blur">

          <div className="flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />

            <span className="text-xs font-semibold">

              LIVE MAP

            </span>

          </div>

        </div>

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

            incidents={overview?.incidents ?? []}

          />

          <IncidentLayer

            incidents={overview?.incidents ?? []}

          />

          {(overview?.assignments ?? []).map((assignment) => {

            const ambulance =
              overview?.ambulances?.find(

                (item) =>

                  item.id === assignment.ambulanceId

              );

            const incident =
              overview?.incidents?.find(

                (item) =>

                  item.id === assignment.incidentId

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

            hospitals={overview?.hospitals ?? []}

          />

          <AmbulanceLayer

            ambulances={overview?.ambulances ?? []}

          />

          <PoliceLayer

            policeStations={overview?.policeStations ?? []}

          />

        </MapContainer>

      </CardContent>

    </Card>

  );

}