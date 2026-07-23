export default function AmbulancePopup({ ambulance }) {
  return (
    <div className="min-w-[240px] space-y-3">
      <h3 className="text-lg font-bold">
        🚑 {ambulance.title}
      </h3>

      <div className="flex justify-between text-sm">
        <span>Status</span>
        <span>{ambulance.status}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span>Type</span>
        <span>{ambulance.type}</span>
      </div>
    </div>
  );
}