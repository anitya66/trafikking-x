export default function HospitalPopup({ hospital }) {
  return (
    <div className="min-w-[240px] space-y-3">
      <h3 className="text-lg font-bold">
        🏥 {hospital.title}
      </h3>

      <div className="flex justify-between text-sm">
        <span>Status</span>
        <span>{hospital.status}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span>Type</span>
        <span>{hospital.type}</span>
      </div>
    </div>
  );
}