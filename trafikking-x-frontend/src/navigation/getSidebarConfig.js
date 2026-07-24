import dispatcherSidebar from "./dispatcherSidebar";
import citizenSidebar from "./citizenSidebar";
import ambulanceSidebar from "./ambulanceSidebar";
import hospitalSidebar from "./hospitalSidebar";
import policeSidebar from "./policeSidebar";
import adminSidebar from "./adminSidebar";
import { ROLES } from "@/shared/constants/roles";

export default function getSidebarConfig(role) {
  switch (role) {
    case ROLES.DISPATCHER:
      return dispatcherSidebar;

    case ROLES.CITIZEN:
      return citizenSidebar;

    case ROLES.AMBULANCE:
      return ambulanceSidebar;

    case ROLES.HOSPITAL:
      return hospitalSidebar;

    case ROLES.POLICE:
      return policeSidebar;

    case ROLES.ADMIN:
      return adminSidebar;

    default:
      return [];
  }
}