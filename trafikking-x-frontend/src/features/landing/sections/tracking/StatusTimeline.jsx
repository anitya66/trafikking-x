const updates = [
  "Emergency Report Received",
  "AI Analysis Completed",
  "Dispatcher Assigned Units",
  "Ambulance En Route",
  "Hospital Prepared",
  "Police Monitoring Traffic",
];

export default function StatusTimeline() {
  return (
    <div className="space-y-5">

      {updates.map((item, index) => (

        <div
          key={item}
          className="flex items-start gap-4"
        >

          <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">

            ✓

          </div>

          <div>

            <p className="text-slate-300">

              {item}

            </p>

            <p className="text-xs text-slate-500">

              Step {index + 1}

            </p>

          </div>

        </div>

      ))}

    </div>
  );
}