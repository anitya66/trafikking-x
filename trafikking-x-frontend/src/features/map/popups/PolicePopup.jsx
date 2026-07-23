export default function PolicePopup({ station }) {
  return (
    <div className="min-w-[240px] space-y-3">
      <h3 className="text-lg font-bold">
        👮 {station.title}
      </h3>

      <div className="flex justify-between text-sm">
        <span>Status</span>
        <span>{station.status}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span>Type</span>
        <span>{station.type}</span>
      </div>
    </div>
  );
}