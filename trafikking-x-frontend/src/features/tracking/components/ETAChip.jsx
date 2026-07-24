export default function ETAChip({ eta }) {

  let classes =
    "bg-green-500/10 text-green-400";

  if (eta > 10) {

    classes =
      "bg-yellow-500/10 text-yellow-400";

  }

  if (eta > 20) {

    classes =
      "bg-red-500/10 text-red-400";

  }

  return (

    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${classes}`}
    >

      ETA {eta ?? "-"} min

    </span>

  );

}