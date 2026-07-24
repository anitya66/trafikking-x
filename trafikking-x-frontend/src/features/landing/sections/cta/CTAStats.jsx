const stats = [
  {
    value: "24/7",
    label: "System Availability",
  },
  {
    value: "< 3 Min",
    label: "Target Response",
  },
  {
    value: "AI",
    label: "Decision Engine",
  },
];

export default function CTAStats() {
  return (
    <div className="mt-14 grid gap-8 md:grid-cols-3">

      {stats.map((item) => (

        <div
          key={item.label}
          className="text-center"
        >

          <h2 className="text-4xl font-black text-white">

            {item.value}

          </h2>

          <p className="mt-3 text-slate-400">

            {item.label}

          </p>

        </div>

      ))}

    </div>
  );
}