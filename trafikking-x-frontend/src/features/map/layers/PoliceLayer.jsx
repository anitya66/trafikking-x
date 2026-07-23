import { Marker, Popup } from "react-leaflet";

import { markerIcons } from "../utils/markerIcons";
import PolicePopup from "../popups/PolicePopup";

export default function PoliceLayer({ policeStations }) {
  return (
    <>
      {policeStations?.map((station) => (
        <Marker
          key={`police-${station.id}`}
          icon={markerIcons.POLICE}
          position={[
            station.latitude,
            station.longitude,
          ]}
        >
          <Popup maxWidth={300}>
            <PolicePopup station={station} />
          </Popup>
        </Marker>
      ))}
    </>
  );
}