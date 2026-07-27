export default function MissionStatusBadge({
  status,
}) {

  let classes =
    "bg-slate-500/10 text-slate-400";

  switch (status) {

    case "COMPLETED":
      classes =
        "bg-green-500/10 text-green-500";
      break;

    case "REJECTED":
      classes =
        "bg-red-500/10 text-red-500";
      break;

    case "ASSIGNED":
      classes =
        "bg-blue-500/10 text-blue-500";
      break;

    case "ACCEPTED":
      classes =
        "bg-yellow-500/10 text-yellow-500";
      break;

    case "STARTED":
      classes =
        "bg-purple-500/10 text-purple-500";
      break;

    case "ARRIVED":
      classes =
        "bg-cyan-500/10 text-cyan-500";
      break;

  }

  return (

    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${classes}`}
    >

      {status}

    </span>

  );

}