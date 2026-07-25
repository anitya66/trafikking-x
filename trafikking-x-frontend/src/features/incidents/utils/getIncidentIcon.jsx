import {
  Flame,
  Car,
  HeartPulse,
  ShieldAlert,
  AlertTriangle,
} from "lucide-react";

export function getIncidentIcon(type) {

  switch (type) {

    case "FIRE":
      return <Flame className="h-6 w-6 text-red-500" />;

    case "ROAD_ACCIDENT":
      return <Car className="h-6 w-6 text-orange-500" />;

    case "MEDICAL":
      return <HeartPulse className="h-6 w-6 text-pink-500" />;

    case "CRIME":
      return <ShieldAlert className="h-6 w-6 text-blue-500" />;

    default:
      return <AlertTriangle className="h-6 w-6 text-yellow-500" />;

  }

}