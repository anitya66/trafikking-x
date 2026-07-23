export function formatEnum(value) {
  if (!value) return "";

  return value
    .toLowerCase()
    .split("_")
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}

export function formatSeverity(severity) {
  return formatEnum(severity);
}

export function formatIncidentStatus(status) {
  return formatEnum(status);
}

export function formatIncidentType(type) {
  return formatEnum(type);
}