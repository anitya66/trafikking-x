import {
  User,
  Radio,
  Ambulance,
  Building2,
  Shield,
  Settings,
  BrainCircuit,
} from "lucide-react";

export const MODULES = [
  {
    id: 1,
    title: "Citizen",
    icon: User,
    color: "text-blue-400",
    description: "Report emergencies and track responders in real time.",
  },
  {
    id: 2,
    title: "Dispatcher",
    icon: Radio,
    color: "text-cyan-400",
    description: "AI assisted dispatch and command center.",
  },
  {
    id: 3,
    title: "Ambulance",
    icon: Ambulance,
    color: "text-green-400",
    description: "Receive assignments and navigate instantly.",
  },
  {
    id: 4,
    title: "Hospital",
    icon: Building2,
    color: "text-pink-400",
    description: "Emergency beds and patient intake management.",
  },
  {
    id: 5,
    title: "Police",
    icon: Shield,
    color: "text-orange-400",
    description: "Traffic control and incident support.",
  },
  {
    id: 6,
    title: "Admin",
    icon: Settings,
    color: "text-purple-400",
    description: "Analytics, monitoring and user management.",
  },
  {
    id: 7,
    title: "AI Engine",
    icon: BrainCircuit,
    color: "text-emerald-400",
    description: "Severity prediction, routing and optimization.",
  },
];