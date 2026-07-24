export default function ConfidenceBadge({
  confidence,
}) {

  let color =
    "bg-red-500/10 text-red-400 border-red-500/20";

  if (confidence >= 90) {

    color =
      "bg-green-500/10 text-green-400 border-green-500/20";

  } else if (confidence >= 75) {

    color =
      "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";

  }

  return (

    <span
      className={`rounded-full border px-3 py-1 text-xs font-semibold ${color}`}
    >

      🎯 {confidence}%

    </span>

  );

}