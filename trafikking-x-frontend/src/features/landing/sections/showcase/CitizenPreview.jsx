import BrowserFrame from "./BrowserFrame";

export default function CitizenPreview() {
  return (
    <BrowserFrame title="Citizen Dashboard">

      <div className="space-y-4">

        <div className="rounded-xl bg-blue-500/10 p-4">

          📱 Report Emergency

        </div>

        <div className="rounded-xl bg-green-500/10 p-4">

          📍 Live Tracking

        </div>

        <div className="rounded-xl bg-white/5 p-4">

          📜 Incident History

        </div>

      </div>

    </BrowserFrame>
  );
}