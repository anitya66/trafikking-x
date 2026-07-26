import {
  Home,
  MapPinned,
  User,
  Settings,
} from "lucide-react";

const ambulanceSidebar = [
  {
    title: "Dashboard",
    path: "/ambulance",
    icon: Home,
  },
  {
    title: "Live Tracking",
    path: "/ambulance/tracking",
    icon: MapPinned,
  },
  {
    title: "Profile",
    path: "/ambulance/profile",
    icon: User,
  },
  {
    title: "Settings",
    path: "/ambulance/settings",
    icon: Settings,
  },
];

export default ambulanceSidebar;