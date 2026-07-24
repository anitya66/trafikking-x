const stats = [
  {
    value: "02:18",
    label: "Response Time",
  },
  {
    value: "98%",
    label: "AI Accuracy",
  },
  {
    value: "6",
    label: "Units Coordinated",
  },
  {
    value: "100%",
    label: "Citizen Safe",
  },
];

export default function MissionStats() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-4">

      {stats.map((item) => (

        <div
          key={item.label}
          className="rounded-3xl border border-green-500/10 bg-green-500/5 p-6 text-center"
        >

          <h3 className="text-4xl font-black text-white">

            {item.value}

          </h3>

          <p className="mt-3 text-sm text-slate-400">

            {item.label}

          </p>

        </div>

      ))}

    </div>
  );
}