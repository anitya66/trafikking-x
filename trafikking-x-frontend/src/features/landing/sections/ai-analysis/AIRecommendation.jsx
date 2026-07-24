import {
  Ambulance,
  Building2,
  Shield,
} from "lucide-react";

export default function AIRecommendation() {

  return (

    <div className="space-y-4">

      <div className="flex items-center gap-3">

        <Ambulance className="h-5 w-5 text-green-400" />

        <span className="text-slate-300">

          Dispatch Nearest Ambulance

        </span>

      </div>

      <div className="flex items-center gap-3">

        <Building2 className="h-5 w-5 text-blue-400" />

        <span className="text-slate-300">

          Reserve Trauma Center

        </span>

      </div>

      <div className="flex items-center gap-3">

        <Shield className="h-5 w-5 text-orange-400" />

        <span className="text-slate-300">

          Notify Local Police Unit

        </span>

      </div>

    </div>

  );

}