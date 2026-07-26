export default function AmbulanceStatusBadge({
  status,
}) {

  let classes =
    "bg-green-500/10 text-green-400";

  switch (status) {

    case "ON_DUTY":
      classes =
        "bg-blue-500/10 text-blue-400";
      break;

    case "OUT_OF_SERVICE":
      classes =
        "bg-red-500/10 text-red-400";
      break;

    case "MAINTENANCE":
      classes =
        "bg-yellow-500/10 text-yellow-400";
      break;

    default:
      classes =
        "bg-green-500/10 text-green-400";

  }

  return (

    <span
      className={`rounded-full px-4 py-2 text-sm font-semibold ${classes}`}
    >

      {status?.replaceAll("_", " ")}

    </span>

  );

}