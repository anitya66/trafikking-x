import {
  Home,
  Radio,
  MapPinned,
  Clock3,
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
    title: "Assignments",
    path: "/ambulance/assignments",
    icon: Radio,
  },
  {
    title: "Navigation",
    path: "/ambulance/navigation",
    icon: MapPinned,
  },
  {
    title: "Live Tracking",
    path: "/ambulance/tracking",
    icon: Clock3,
  },
  {
    title: "History",
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