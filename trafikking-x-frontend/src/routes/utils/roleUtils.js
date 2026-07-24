import { ROLES } from "../constants/roles";

export const isDispatcher = (role) =>
    role === ROLES.DISPATCHER;

export const isCitizen = (role) =>
    role === ROLES.CITIZEN;

export const isAmbulance = (role) =>
    role === ROLES.AMBULANCE;

export const isHospital = (role) =>
    role === ROLES.HOSPITAL;

export const isPolice = (role) =>
    role === ROLES.POLICE;

export const isAdmin = (role) =>
    role === ROLES.ADMIN;