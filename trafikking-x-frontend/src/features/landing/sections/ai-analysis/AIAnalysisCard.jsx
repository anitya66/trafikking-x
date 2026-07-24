import GlassCard from "@/shared/components/landing/GlassCard";

import AIProgress from "./AIProgress";
import AIRecommendation from "./AIRecommendation";

export default function AIAnalysisCard() {

  return (

    <GlassCard className="mx-auto mt-14 max-w-4xl p-8">

      <h3 className="text-2xl font-bold text-white">

        AI Command Engine

      </h3>

      <p className="mt-2 text-slate-400">

        AI is analyzing the incident and preparing
        the optimal emergency response.

      </p>

      <div className="mt-10 space-y-6">

        <AIProgress
          label="Incident Classification"
          value={100}
        />

        <AIProgress
          label="Traffic Analysis"
          value={94}
          delay={0.2}
        />

        <AIProgress
          label="Hospital Matching"
          value={97}
          delay={0.4}
        />

        <AIProgress
          label="Dispatch Confidence"
          value={98}
          delay={0.6}
        />

      </div>

      <div className="mt-12 border-t border-white/10 pt-8">

        <AIRecommendation />

      </div>

    </GlassCard>

  );

}