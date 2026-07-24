import BrowserFrame from "./BrowserFrame";

export default function DispatcherPreview() {
  return (
    <BrowserFrame title="Dispatcher Dashboard">

      <div className="space-y-4">

        <div className="rounded-xl bg-red-500/10 p-4">

          🚨 Live Incident Feed

        </div>

        <div className="rounded-xl bg-blue-500/10 p-4">

          🤖 AI Recommendation

        </div>

        <div className="rounded-xl bg-green-500/10 p-4">

          🚑 Dispatch Queue

        </div>

      </div>

    </BrowserFrame>
  );
}