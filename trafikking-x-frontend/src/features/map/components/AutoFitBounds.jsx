import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

export default function AutoFitBounds({

  incidents = [],

}) {

  const map = useMap();

  useEffect(() => {

    if (!incidents.length) {

      return;

    }

    const validCoordinates = incidents.filter(

      (incident) =>

        incident.latitude != null &&
        incident.longitude != null

    );

    if (!validCoordinates.length) {

      return;

    }

    const bounds = L.latLngBounds(

      validCoordinates.map((incident) => [

        incident.latitude,

        incident.longitude,

      ])

    );

    map.fitBounds(bounds, {

      padding: [60, 60],

      maxZoom: 15,

    });

  }, [

    incidents,

    map,

  ]);

  return null;

}