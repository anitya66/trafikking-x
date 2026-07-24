import { CheckCircle2 } from "lucide-react";

export default function SuccessBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2">

      <CheckCircle2 className="h-5 w-5 text-green-400" />

      <span className="font-medium text-green-300">
        Emergency Successfully Resolved
      </span>

    </div>
  );
}