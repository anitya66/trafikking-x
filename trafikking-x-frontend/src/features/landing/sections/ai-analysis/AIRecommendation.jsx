import {
  Ambulance,
  Building2,
  Shield,
  ArrowRight,
} from "lucide-react";

const recommendations = [
  {
    icon: Ambulance,
    title: "Dispatch Nearest Ambulance",
    subtitle: "ETA 2 min • Priority High",
    color: "bg-green-500/15 text-green-400",
  },
  {
    icon: Building2,
    title: "Reserve Trauma Center",
    subtitle: "2 Beds Available",
    color: "bg-blue-500/15 text-blue-400",
  },
  {
    icon: Shield,
    title: "Notify Local Police Unit",
    subtitle: "Traffic Control Required",
    color: "bg-orange-500/15 text-orange-400",
  },
];

export default function AIRecommendation() {
  return (
    <div>

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h4 className="text-xl font-bold text-white">
            AI Recommendations
          </h4>

          <p className="mt-1 text-sm text-slate-400">
            Generated based on real-time analysis
          </p>

        </div>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2">

          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
            Confidence 98%
          </span>

        </div>

      </div>

      {/* Recommendations */}

      <div className="space-y-4">

        {recommendations.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.05]"
            >

              <div className="flex items-center gap-4">

                <div className={`rounded-2xl p-3 ${item.color}`}>

                  <Icon className="h-5 w-5" />

                </div>

                <div>

                  <h5 className="font-semibold text-white">
                    {item.title}
                  </h5>

                  <p className="mt-1 text-sm text-slate-400">
                    {item.subtitle}
                  </p>

                </div>

              </div>

              <ArrowRight className="h-5 w-5 text-slate-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />

            </div>
          );
        })}

      </div>

    </div>
  );
}