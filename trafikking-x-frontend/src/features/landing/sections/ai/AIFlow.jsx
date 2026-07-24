const flow = [
  "Emergency",
  "AI Analysis",
  "Prediction",
  "Dispatch",
  "Tracking",
  "Resolved",
];

export default function AIFlow() {
  return (
    <div className="my-16 flex flex-wrap items-center justify-center gap-4">

      {flow.map((item, index) => (

        <div
          key={item}
          className="flex items-center gap-4"
        >

          <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-300">
            {item}
          </div>

          {index !== flow.length - 1 && (
            <span className="text-slate-600">→</span>
          )}

        </div>

      ))}

    </div>
  );
}