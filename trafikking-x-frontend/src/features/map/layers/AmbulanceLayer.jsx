import { Marker, Popup } from "react-leaflet";

import { markerIcons } from "../utils/markerIcons";
import AmbulancePopup from "../popups/AmbulancePopup";

export default function AmbulanceLayer({ ambulances }) {
  return (
    <>
      {ambulances?.map((ambulance) => (
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