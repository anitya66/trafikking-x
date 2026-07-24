import { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";

import { markerIcons } from "../utils/markerIcons";
import AmbulancePopup from "../popups/AmbulancePopup";

import { useAmbulanceTracking } from "@/features/tracking/hooks/useAmbulanceTracking";

export default function AmbulanceLayer({ ambulances }) {

  const [liveAmbulances, setLiveAmbulances] = useState([]);

  useEffect(() => {

    setLiveAmbulances(
      ambulances ?? []
    );

  }, [ambulances]);

  useAmbulanceTracking((event) => {

    console.log(
      "🚑 Live Ambulance Update",
      event
    );

    setLiveAmbulances((previous) =>
      previous.map((ambulance) =>

        ambulance.id === event.ambulanceId

          ? {
              ...ambulance,

              latitude: event.latitude,

              longitude: event.longitude,
            }

          : ambulance

      )
    );

  });

  return (
    <>
      {liveAmbulances.map((ambulance) => (

        <Marker
          key={`ambulance-${ambulance.id}`}
          icon={
            markerIcons[
              `AMBULANCE_${ambulance.status}`
            ] ?? markerIcons.DEFAULT
          }
          position={[
            ambulance.latitude,
            ambulance.longitude,
          ]}
        >

          <Popup maxWidth={300}>
            <AmbulancePopup ambulance={ambulance} />
          </Popup>

        </Marker>

      ))}
    </>
  );
}