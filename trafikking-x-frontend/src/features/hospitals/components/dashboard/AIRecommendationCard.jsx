import {
  Brain,
  Lightbulb,
  TriangleAlert,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AIRecommendationCard({
  recommendation,
}) {
  return (
    <Card className="group relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <CardHeader className="relative pb-5">

        <CardTitle className="flex items-center gap-3">

          <div className="rounded-xl bg-violet-500/10 p-2">

            <Brain className="h-5 w-5 text-violet-500" />

          </div>

          <div>

            <h2 className="text-lg font-bold">

              AI Recommendation

            </h2>

            <p className="text-sm font-normal text-muted-foreground">

              Real-time hospital intelligence

            </p>

          </div>

        </CardTitle>

      </CardHeader>

      <CardContent className="relative space-y-5">

        {/* Recommendation */}

        <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-5">

          <div className="flex items-center gap-2">

            <Sparkles className="h-5 w-5 text-violet-500" />

            <span className="font-semibold">

              AI Analysis

            </span>

          </div>

          <h3 className="mt-4 text-lg font-bold">

            {recommendation?.title ??
              "Awaiting AI Analysis"}

          </h3>

          <p className="mt-3 leading-7 text-muted-foreground">

            {recommendation?.recommendation ??
              "No recommendation available. AI will automatically analyze incoming emergency cases and suggest optimal actions."}

          </p>

        </div>

        {/* Priority */}

        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

              <TriangleAlert className="h-5 w-5 text-amber-500" />

              <span className="font-semibold">

                Priority Level

              </span>

            </div>

            <ArrowUpRight className="h-4 w-4 text-amber-500" />

          </div>

          <div className="mt-4">

            <span className="inline-flex rounded-full bg-amber-500/10 px-4 py-2 text-sm font-bold text-amber-500">

              {recommendation?.priority ??
                "NORMAL"}

            </span>

          </div>

        </div>

        {/* AI Status */}

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">

          <div className="flex items-center gap-3">

            <Lightbulb className="h-5 w-5 text-emerald-500" />

            <div>

              <p className="font-semibold">

                AI Engine Status

              </p>

              <p className="text-sm text-muted-foreground">

                Continuously analyzing hospital load,
                patient severity and resource utilization.

              </p>

            </div>

          </div>

        </div>

      </CardContent>

    </Card>
  );
}