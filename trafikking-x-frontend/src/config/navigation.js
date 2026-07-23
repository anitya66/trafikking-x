import {
  LayoutDashboard,
  Siren,
  Radio,
  Ambulance,
  Building2,
  Shield,
  BarChart3,
  Settings,
} from "lucide-react";

export const SIDEBAR_ITEMS = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Incidents",
    path: "/incidents",
    icon: Siren,
  },
  {
    label: "Dispatch",
    path: "/dispatch",
    icon: Radio,
  },
  {
    label: "Ambulances",
    path: "/ambulances",
    icon: Ambulance,
  },
  {
    label: "Hospitals",
    path: "/hospitals",
    icon: Building2,
  },
  {
    label: "Police",
    path: "/police",
    icon: Shield,
  },
  {
    label: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];