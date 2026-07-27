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

const dispatcherSidebar = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Incidents",
    path: "/dispatcher/incidents",
    icon: Siren,
  },
  {
    title: "Dispatch",
    path: "/dispatcher/dispatch",
    icon: Radio,
  },
  {
    title: "Ambulances",
    path: "/dispatcher/ambulances",
    icon: Ambulance,
  },
  {
    title: "Hospitals",
    path: "/dispatcher/hospitals",
    icon: Building2,
  },
  {
    title: "Police",
    path: "/dispatcher/police",
    icon: Shield,
  },
  {
    title: "Citizens",
    path: "/dispatcher/citizens",
    icon: Users,
  },
  {
    title: "AI Command",
    path: "/dispatcher/ai-command",
    icon: BrainCircuit,
  },
  {
    title: "Notifications",
    path: "/dispatcher/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    path: "/dispatcher/settings",
    icon: Settings,
  },
];

export default dispatcherSidebar;