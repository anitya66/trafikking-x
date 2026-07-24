import BrowserFrame from "./BrowserFrame";

export default function AdminPreview() {
  return (
    <BrowserFrame title="Admin Dashboard">

      <div className="space-y-4">

        <div className="rounded-xl bg-purple-500/10 p-4">

          📊 Analytics

        </div>

        <div className="rounded-xl bg-blue-500/10 p-4">

          👥 User Management

        </div>

        <div className="rounded-xl bg-green-500/10 p-4">

          🏥 System Monitoring

        </div>

      </div>

    </BrowserFrame>
  );
}