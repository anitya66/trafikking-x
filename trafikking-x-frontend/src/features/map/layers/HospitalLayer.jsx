import { Marker, Popup } from "react-leaflet";

import { markerIcons } from "../utils/markerIcons";
import HospitalPopup from "../popups/HospitalPopup";

export default function HospitalLayer({ hospitals }) {
  return (
    <>
      {hospitals?.map((hospital) => (
        <Marker
          key={`hospital-${hospital.id}`}
          icon={markerIcons.HOSPITAL}
          position={[
            hospital.latitude,
            hospital.longitude,
          ]}
        >
          <Popup maxWidth={300}>
            <HospitalPopup hospital={hospital} />
          </Popup>
        </Marker>
      ))}
    </>
  );
}