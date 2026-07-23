import { Marker, Popup } from "react-leaflet";

import { markerIcons } from "../utils/markerIcons";
import IncidentPopup from "../popups/IncidentPopup";

export default function IncidentLayer({ incidents }) {
  return (
    <>
      {incidents?.map((incident) => (
        <Marker
          key={incident.id}
          icon={
            markerIcons[incident.severity] ??
            markerIcons.DEFAULT
          }
          position={[
            incident.latitude,
            incident.longitude,
          ]}
        >
          <Popup maxWidth={300}>
            <IncidentPopup incident={incident} />
          </Popup>
        </Marker>
      ))}
    </>
  );
}