import L from "leaflet";

import markerShadow from "leaflet/dist/images/marker-shadow.png";

function createIcon(color) {
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
  LOW: createIcon("green"),

  MEDIUM: createIcon("gold"),

  HIGH: createIcon("orange"),

  CRITICAL: createIcon("red"),

  DEFAULT: createIcon("blue"),
};