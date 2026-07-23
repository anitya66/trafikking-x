export const mockIncidents = [
  {
    id: 1,
    incidentNumber: "INC-2026-0001",
    incidentType: "ROAD_ACCIDENT",
    status: "REPORTED",
    severity: "HIGH",
    description:
      "Multi-vehicle collision reported near Patna Junction.",
    latitude: 25.6123,
    longitude: 85.1412,
    address: "Patna Junction, Bihar",
    reportedAt: new Date().toISOString(),
  },
  {
    id: 2,
    incidentNumber: "INC-2026-0002",
    incidentType: "FIRE",
    status: "IN_PROGRESS",
    severity: "CRITICAL",
    description:
      "Commercial building fire reported in Boring Road.",
    latitude: 25.6102,
    longitude: 85.1254,
    address: "Boring Road, Patna",
    reportedAt: new Date().toISOString(),
  },
  {
    id: 3,
    incidentNumber: "INC-2026-0003",
    incidentType: "MEDICAL_EMERGENCY",
    status: "ASSIGNED",
    severity: "MEDIUM",
    description:
      "Citizen reported cardiac emergency at Kankarbagh.",
    latitude: 25.6021,
    longitude: 85.1628,
    address: "Kankarbagh, Patna",
    reportedAt: new Date().toISOString(),
  },
];