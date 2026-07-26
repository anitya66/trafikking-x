import {
  Home,
  Shield,
  ClipboardList,
  FileText,
  User,
  Settings,
} from "lucide-react";

const policeSidebar = [
  {
    title: "Dashboard",
    path: "/police",
    icon: Home,
  },
  {
    title: "Active Cases",
    path: "/police/cases",
    icon: Shield,
  },
  {
    title: "Case History",
    path: "/police/case-history",
    icon: ClipboardList,
  },
  // {
  //   title: "Reports",
  //   path: "/police/reports",
  //   icon: FileText,
  // },
  {
    title: "Profile",
    path: "/police/profile",
    icon: User,
  },
  {
    title: "Settings",
    path: "/police/settings",
    icon: Settings,
  },
];

export default policeSidebar;