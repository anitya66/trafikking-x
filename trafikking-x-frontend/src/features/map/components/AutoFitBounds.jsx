import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

export default function AutoFitBounds({ incidents }) {
  const map = useMap();

  useEffect(() => {
    if (!incidents?.length) return;

    const bounds = L.latLngBounds(
      incidents.map((incident) => [
        incident.latitude,
        incident.longitude,
      ])
    );

    map.fitBounds(bounds, {
      padding: [60, 60],
    });

  }, [incidents, map]);

  return null;
}