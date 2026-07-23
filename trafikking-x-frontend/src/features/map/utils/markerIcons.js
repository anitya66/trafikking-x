import L from "leaflet";

import markerShadow from "leaflet/dist/images/marker-shadow.png";

function createColorIcon(color) {
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
    shadowUrl: markerShadow,

    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
}

export const markerIcons = {
  LOW: createColorIcon("green"),
  MEDIUM: createColorIcon("gold"),
  HIGH: createColorIcon("orange"),
  CRITICAL: createColorIcon("red"),

  HOSPITAL: createColorIcon("violet"),

  AMBULANCE_AVAILABLE: createColorIcon("blue"),
  AMBULANCE_ON_DUTY: createColorIcon("yellow"),
  AMBULANCE_OUT_OF_SERVICE: createColorIcon("grey"),
  AMBULANCE_MAINTENANCE: createColorIcon("black"),

  POLICE: createColorIcon("black"),

  DEFAULT: createColorIcon("blue"),
};