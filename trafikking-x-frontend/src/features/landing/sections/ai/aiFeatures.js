import {
  BrainCircuit,
  Route,
  Hospital,
  Timer,
  ShieldAlert,
  Activity,
} from "lucide-react";

export const AI_FEATURES = [
  {
    id: 1,
    title: "Severity Prediction",
    description:
      "Predicts incident severity using emergency details.",
    icon: BrainCircuit,
    color: "text-blue-400",
  },
  {
    id: 2,
    title: "Smart Routing",
    description:
      "Calculates the fastest route using live traffic.",
    icon: Route,
    color: "text-cyan-400",
  },
  {
    id: 3,
    title: "Hospital Matching",
    description:
      "Finds the most suitable nearby hospital.",
    icon: Hospital,
    color: "text-pink-400",
  },
  {
    id: 4,
    title: "ETA Prediction",
    description:
      "Continuously updates arrival time estimates.",
    icon: Timer,
    color: "text-green-400",
  },
  {
    id: 5,
    title: "Risk Detection",
    description:
      "Identifies high-risk emergencies instantly.",
    icon: ShieldAlert,
    color: "text-orange-400",
  },
  {
    id: 6,
    title: "Live Monitoring",
    description:
      "Tracks the complete response lifecycle.",
    icon: Activity,
    color: "text-purple-400",
  },
];