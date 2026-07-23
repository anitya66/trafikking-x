import {
  LayoutDashboard,
  Siren,
  Radio,
  Ambulance,
  Building2,
  Shield,
  Users,
  BrainCircuit,
  Bell,
  Settings,
} from "lucide-react";

export const SIDEBAR_NAVIGATION = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Incidents",
    path: "/incidents",
    icon: Siren,
  },
  {
    title: "Dispatch",
    path: "/dispatch",
    icon: Radio,
  },
  {
    title: "Ambulances",
    path: "/ambulances",
    icon: Ambulance,
  },
  {
    title: "Hospitals",
    path: "/hospitals",
    icon: Building2,
  },
  {
    title: "Police",
    path: "/police",
    icon: Shield,
  },
  {
    title: "Citizens",
    path: "/citizens",
    icon: Users,
  },
  {
    title: "AI Command",
    path: "/ai-command",
    icon: BrainCircuit,
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];