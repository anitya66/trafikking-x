import {
  Home,
  TriangleAlert,
  ClipboardList,
  HeartHandshake,
  Building2,
  Bot,
  User,
  Settings,
} from "lucide-react";

const citizenSidebar = [
  {
    title: "Dashboard",
    path: "/citizen",
    icon: Home,
  },
  {
    title: "Report Emergency",
    path: "/citizen/report",
    icon: TriangleAlert,
  },
  {
    title: "My Incidents",
    path: "/citizen/incidents",
    icon: ClipboardList,
  },
  {
    title: "Emergency Contacts",
    path: "/citizen/contacts",
    icon: HeartHandshake,
  },
  {
    title: "Nearby Hospitals",
    path: "/citizen/hospitals",
    icon: Building2,
  },
  // {
  //   title: "AI Assistant",
  //   path: "/citizen/assistant",
  //   icon: Bot,
  // },
  {
    title: "Profile",
    path: "/citizen/profile",
    icon: User,
  },
  {
    title: "Settings",
    path: "/citizen/settings",
    icon: Settings,
  },
];

export default citizenSidebar;