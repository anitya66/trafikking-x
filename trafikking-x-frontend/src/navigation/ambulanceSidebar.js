import {
  Home,
  ClipboardList,
  MapPinned,
  History,
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
    title: "Current Mission",
    path: "/ambulance/current-mission",
    icon: ClipboardList,
  },

  {
    title: "Live Tracking",
    path: "/ambulance/tracking",
    icon: MapPinned,
  },

  {
    title: "Mission History",
    path: "/ambulance/history",
    icon: History,
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