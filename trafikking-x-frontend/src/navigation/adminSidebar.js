import {
  Home,
  Users,
  Building2,
  Ambulance,
  Shield,
  BarChart3,
  Settings,
} from "lucide-react";

const adminSidebar = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: Home,
  },
  {
    title: "Users",
    path: "/admin/users",
    icon: Users,
  },
  {
    title: "Hospitals",
    path: "/admin/hospitals",
    icon: Building2,
  },
  {
    title: "Ambulances",
    path: "/admin/ambulances",
    icon: Ambulance,
  },
  {
    title: "Police",
    path: "/admin/police",
    icon: Shield,
  },
  {
    title: "Analytics",
    path: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];

export default adminSidebar;