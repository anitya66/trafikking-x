import {
  Home,
  Activity,
  Bed,
  Stethoscope,
  ClipboardList,
  User,
  Settings,
} from "lucide-react";

const hospitalSidebar = [
  {
    title: "Dashboard",
    path: "/hospital",
    icon: Home,
  },
  {
    title: "Incoming Cases",
    path: "/hospital/cases",
    icon: Activity,
  },
  {
    title: "Bed Capacity",
    path: "/hospital/beds",
    icon: Bed,
  },
  {
    title: "Medical Staff",
    path: "/hospital/staff",
    icon: Stethoscope,
  },
  {
    title: "Case History",
    path: "/hospital/history",
    icon: ClipboardList,
  },
  {
    title: "Profile",
    path: "/hospital/profile",
    icon: User,
  },
  {
    title: "Settings",
    path: "/hospital/settings",
    icon: Settings,
  },
];

export default hospitalSidebar;