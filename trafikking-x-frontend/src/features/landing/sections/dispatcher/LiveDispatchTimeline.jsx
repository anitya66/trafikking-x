const timeline = [
  "Emergency Received",
  "AI Recommendation Generated",
  "Dispatcher Reviewing",
  "Ambulance Assigned",
  "Hospital Assigned",
  "Police Notified",
];

export default function LiveDispatchTimeline() {
  return (
    <div className="space-y-5">

      {timeline.map((item, index) => (

        <div
          key={item}
          className="flex items-center gap-4"
        >

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">

            {index + 1}

          </div>

          <p className="text-slate-300">
            {item}
          </p>

        </div>

      ))}

    </div>
  );
}